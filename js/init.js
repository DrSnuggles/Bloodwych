//var loadingIntervalTimer = 0;
function initGame() {
  // zeroth, called from bloodwych.js anonymous init
  loadGfxUIData();
  uiClickArea = uiClickAreas();
}

function loadGFXData(type) {
  // first, called by input.js
  DrS.get('data/' + type + '/json/graphics.json', 'str', function(txt){
    eval(txt);
  });
}

function loadDefaultGfx(event) {
  // second, called by graphics.json eval ... not beautiful
  defaultManifest = event;
  if(gameType !== GAME_BLOODWYCH) {
    loadingScreen({type: "fileprogress", item:{src: GAME_ID[gameType]+'.zip'} });
    DrS.loadZIP(GAME_ID[gameType], function(){
      loadGFXData(GAME_ID[gameType]);
    });
  } else {
    loadCustomGfx(event);
  }
}

function loadCustomGfx(event) {
  // third, called from above
  for(var i in event.manifest) {
    for(var x in defaultManifest.manifest) {
      if (defaultManifest.manifest[x].id === event.manifest[i].id) {
        defaultManifest.manifest[x] = event.manifest[i];
      }
    }
  }

  // load fourth all the JSONs
  loadDefaultJSONFiles(GAME_ID[GAME_BLOODWYCH]);
  if(gameType !== GAME_BLOODWYCH) {
    loadDefaultJSONFiles(GAME_ID[gameType]);
  }
  initJSONData();

  // load all images, not nice, not async, one by one
  var len = defaultManifest.manifest.length;
  var act = 0;
    function manLoad() {
      var src = defaultManifest.manifest[act].src;
      if (src.indexOf("data/") === -1) {
        // add missing path to non std version
        console.info("had to add path manually", src);
        src = "data/"+ GAME_ID[gameType] + "/"+ src;
      }
      loadingScreen({type: "fileprogress", item:{src: src} });
      DrS.get(src, 'img', function(res){
        //res = document.body.appendChild(res);
        //res.id = defaultManifest.manifest[key].id;
        gfxLoadImages(defaultManifest.manifest[act++], res);
        if (act < len) {
          manLoad();
        } else {
          // this here is later. ToDo: make this more clear visible
          handleComplete();
        }
      });
    }
  manLoad();

}

function loadTowerData(event) {
  jsonDataLoaded = 0;
  tower = event.towers;
  initTowers();

  // load all binaries, not nice, not async, one by one
  var len = event.manifest.length;
  var act = 0;
    function manLoad() {
      loadingScreen({type: "fileprogress", item:{src: event.manifest[act].src} });
      DrS.get(event.path + event.manifest[act].src, 'bin', function(res){
        //res = document.body.appendChild(res);
        //res.id = defaultManifest.manifest[key].id;
        // kind of hackish, non std. game types use this to load additional gfx
        if (event.manifest[act].src.indexOf('.png') !== -1) {
          gfxLoadImages(event.manifest[act++], res);
        } else {
          loadBinaryFiles(event.manifest[act++], res);
        }
        if (act < len) {
          manLoad();
        } else {

        }
      });
    }
  manLoad();

}

function handleComplete(event) {
  loadingScreen({
    src: "Creating Towers..."
  });
  setTimeout(function () {
    initMenuData();
  }, 1000);
}

function updateLoadingScreen(msg, percent) {
  clearCanvas();
  ctx.font = "normal 14px \"Bookman Old Style\", verdana, sans-serif";
  ctx.fillStyle = "#FFF";
  ctx.fillText(percent + "% - " + msg + "...", 0, 15);
}

function loadGfxUIData() {
  gfxLoadImage("misc", "font", "", null);
}

function initMenuData() {
  projectile[towerThis] = new Array();
  initData();
  if (typeof game === "undefined") {
    startScreen();
  }
}

function initData() {
  gfx['character']['heads'] = getCharacterSprite(NUMBER_OF_HEADS, 'character', 'heads', 13, 13, 16);
  gfx['character']['legs'] = getCharacterSprite(NUMBER_OF_LEGS, 'character', 'legs', 17, 27, 17);
  gfx['character']['arms'] = getCharacterSprite(NUMBER_OF_ARMS, 'character', 'arms', 13, 19, 13);
  gfx['character']['minis'] = getCharacterSprite(NUMBER_OF_MINIS, 'character', 'minis', 13, 22, 16);
  gfx['character']['torsos'] = getCharacterSprite(NUMBER_OF_TORSOS, 'character', 'torsos', 17, 14, 17);
  gfxUI = grabUISprites(gfx['misc']['uistuff']);
  itemGfxD = initItemGfxD();
  //audioFiles = loadSounds();
  initMonsterPalettes();
  initArmourGfx();
  initMonsters();
  initSpells();
  initItemRefs();
  for (var i = 0; i < tower.length; i++) {
    initItems(tower[i]);
  }
  initChampions();
}

function initJSONData() {
  // fifth, called by loadCustomGfx
  var i = 0;
  for(var c in colourData) {
    colourData[i] = colourData[c];
    i++;
  }
  parseJSONValues(paletteData, colourData);
  parseJSONValues(itemJson, paletteData, 'recolour');
  parseJSONValues(itemJson, colourData, 'recolour');
  parseJSONValues(spellJson, paletteData, 'recolour');
  parseJSONValues(spellJson, colourData, 'recolour');
  parseJSONValues(spellPartJson, paletteData, 'recolour');
  parseJSONValues(spellPartJson, colourData, 'recolour');

  // again strange eval
  DrS.get('data/' + GAME_ID[gameType] + '/json/tower.json', 'str', function(txt){
    eval(txt);
    // calls loadTowerData
  });

}

//finds absolute value defined in obj, from o2
function parseJSONValues(obj, o2, from) {
  if(typeof from === "undefined") {
    var from = '';
  }
  for(var c in obj) {
    if(typeof obj[c] === 'string') {
      if(from === '') {
        var val = o2[obj[c]];
        if(typeof val !== "undefined") {
          obj[c] = val;
        }
      }
    } else {
      if(from === c) {
        from = '';
      }
      parseJSONValues(obj[c], o2, from);
    }
  }
}

function startGame(singlePlayer, quickStart, p1_cid, p2_cid) {
  progressScreen("STARTING GAME");
  if (typeof god === "undefined") {
    god = false;
  }
  progressScreen("INIT PLAYERS");
  initPlayers(singlePlayer, quickStart, p1_cid, p2_cid);
  if (god && !resumeLoadGame) {
    godMode();
  }
  progressScreen("INIT TOWER SWITCHES");
  initTowerSwitches();
  switchTower(0);
  //        if (isMobile){
  //            var mon = getMonstersInTower(towerThis, true);
  //            for(var m in mon){
  //                initMonsterGfxNew(monster[towerThis][m]);
  //            }
  //        }
  gameStarted = true;
  progressScreen("PROCESSING CHAMPIONS");
  for(var pl in championSelect) {
    if (championSelect[pl].champID > -1) {
      champion[championSelect[pl].champID].selectedSpell = null;
      championSelect[pl].champID = -1;
    }
  }
  canvas.setAttribute('data-game-status', 'started');
  //for(var p in player) {
  //      player[p].message("WELCOME THEE TRAVELLER, TO THE REMAKE OF", colourData['YELLOW'], true);
  //      player[p].message("   BLOODWYCH - REWRITTEN BY MAD BONE    ", colourData['YELLOW'], true);
  //      player[p].message("          WWW.BLOODWYCH.CO.UK           ", colourData['YELLOW'], true);
  //  }
  //saveGame(99, 'autosave');
  if (resumeLoadGame) {
    loadGame(99);
  }
  progressScreen("RUN GAME");
  Run();
  switch (gameType) {
    case GAME_BLOODWYCH:
      ;
      break;
    case GAME_EXTENDED_LEVELS:
      startExtendedLevel();
      break;
    case GAME_BOOK_OF_SKULLS:
      startBOS();
      break;
    case GAME_CUSTOM:
      ;
      break;
  }
  if (debug && mapEnabled) {
    setTimeout(function () {
      window.setInterval(createDebugWindow(), 1000);
    }, 1500);
  }
  setTimeout(function () {
    playSoundLoop('SOUND_PCMUSIC');
  }, 500);
}

function loadDefaultJSONFiles(path) {
  // also includes processJSONfiles
  // ToDo: had problems here loading the data async, but maybe it was sth else. try again
  var tmp;
  tmp = DrS.get('data/'+path+'/json/colours.json', 'json');
  if (tmp) {
    colourData = tmp.colours;
  }
  tmp = DrS.get('data/'+path+'/json/palettes.json', 'json');
  if (tmp) {
    paletteData = tmp.palettes;
  }
  //DrS.get('data/'+path+'/json/characters.json', function(j){}, 'json');
  //DrS.get('data/'+path+'/json/communication.json', function(j){}, 'json');
  //DrS.get('data/'+path+'/json/input.json', function(j){}, 'json');
  tmp = DrS.get('data/'+path+'/json/items.json', 'json');
  if (tmp) {
    itemJson = checkMergeJSON(itemJson, tmp.items);
    itemDropsJson = checkMergeJSON(itemDropsJson, tmp.itemDrops);
  }
  tmp = DrS.get('data/'+path+'/json/sounds.json', 'json');
  if (tmp) {
    //initSounds(tmp.sounds, 'data/'+path+'/json');

    for (var s in tmp.sounds){
      var aud = DrS.get('data/'+path+'/sounds/'+tmp.sounds[s].filename, 'aud');
      if (aud) {
        audioFiles[tmp.sounds[s].id] = aud;
      }
    }

  }
  tmp = DrS.get('data/'+path+'/json/spells.json', 'json');
  if (tmp) {
    spellJson = checkMergeJSON(spellJson, tmp.spells);
    spellPartJson = checkMergeJSON(spellPartJson, tmp.spellParts);
  }
  //DrS.get('data/'+path+'/json/text.json', function(j){}, 'json');
  tmp = DrS.get('data/'+path+'/json/ui.json', 'json');
  if (tmp) {
    uiJson = checkMergeJSON(uiJson, tmp.itemUI);
  }
  tmp = DrS.get('data/'+path+'/json/sprites.json', 'json');
  if (tmp) {
    spriteData = checkMergeJSON(spriteData, tmp);
    gfxPos = spriteData.Sprites[0].locations;
  }
}

function checkMergeJSON(objStorage, objNewData){
  if (typeof objStorage !== 'undefined'){
    if (objStorage.length > 0){
      var newItems = new Array();
      for (var i in objNewData){
        var matched = false;
        for (var x in objStorage){
          if (objStorage[x].id === objNewData[i].id){
            objStorage[x] = objNewData[i];
            matched = true;
          }
        }
        if (!matched){
          newItems.push(objNewData[i]);
        }
      }
      objStorage = objStorage.concat(newItems);
    }else{
      objStorage = objNewData;
    }
  }else{
    objStorage = objNewData;
  }
  return objStorage;
}
