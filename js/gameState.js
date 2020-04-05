function gameState(fileName) {
	this.gameData = [];
	this.fileName = fileName;
}

function getGameName(g) {
	var tmp = localStorage.getItem('savegame' + g);
	var json = TryUnZIP2JSON(tmp);
	if(json !== null) {
		return json.name;
	}
	return '';
}

function loadGame(g) {
	var save = new gameState('savegame' + g);
	save.gameData = TryUnZIP2JSON( localStorage.getItem(save.fileName) );
	loadGameData(save.gameData);
}
function loadGameData(dat) {
	if(dat !== null) {
		versionThis = dat.version;
		tower = dat.tower;
		player = dat.player;
		champion = dat.champion;
		monster = dat.monster;
		item = dat.item;
		projectile = dat.projectile;
		timerMaster = dat.variables.timerMaster;
		timerMonsterMove = dat.variables.timerMonsterMove;
		timerChampionStats = dat.variables.timerChampionStats;
		towerThis = dat.variables.towerThis;
		monsterTeamIdMax = dat.variables.monsterTeamIdMax;
		dungeonSpellTimer = dat.variables.dungeonSpellTimer;
		dungeonSpellList = dat.variables.dungeonSpellList;
		soundEnabled = dat.variables.soundEnabled;
	//	activeSpellTimer = dat.variables.activeSpellTimer;

		clearCanvas();
		for(var p in player) {
			player[p] = castObject(player[p], 'Player');
			redrawUI(player[p].id);
		}
		for(var c in champion) {
			champion[c] = castObject(champion[c], 'Champion');
			for(var pg = 0; pg < SPELL_COLOUR_MAX; pg++) {
				for(var rw = 0; rw < SPELL_LEVEL_MAX; rw++) {
					champion[c].spellBook[pg][rw]["ref"] = getSpellById(champion[c].spellBook[pg][rw].id);
				}
			}
		}
		for (var t = 0; t < 7; t++) {
			for (var m = 0; m < monster[t].length; m++) {
				monster[t][m] = castObject(monster[t][m], 'Monster');
//                                if (typeof monsterRef[monster[t][m].form][monster[t][m].colour] !== 'undefined'){
//                                    monster[t][m]["ref"] = monsterRef[monster[t][m].form][monster[t][m].colour];
//                                }else{
                                    monster[t][m]["ref"] = null;
//                                }

			}
		}
		for (var t = 0; t < 6; t++) {
			for (var i = 0; i < item[t].length; i++) {
				item[t][i] = castObject(item[t][i], 'Item');
			}
		}
		for (var t = 0; t < 6; t++) {
			//for (var p = 0; p < projectile[t].length; p++) {
			for(var p in projectile[t]) {
				projectile[t][p] = castObject(projectile[t][p], 'Projectile');
			}
		}
		for(var s in dungeonSpellList) {
			if(dungeonSpellList[s] !== null) {
				dungeonSpellList[s].projectile = getProjectileById(dungeonSpellList[s].tower, dungeonSpellList[s].projectileId);
			}
		}

		//version control
		if(typeof versionThis === 'undefined' || versionThis < 0.50) {
			for (var t = 0; t < 7; t++) {
				for (var m = 0; m < monster[t].length; m++) {
					monster[t][m].hp += monster[t][m].level * 5 + 5;
				}
			}
		}
                for(var p in player){
                    for(var c in player[p].champion){
                        var id = champion[player[p].champion[c]].id;
                            initMonsterGfxNew(champion[id].getMonster());
                        }
                }
		player[0].message(TEXT_GAME_LOADED, colourData['GREEN']);
	}
};

function saveGame(g, name) {
	var save = new gameState('savegame' + g);
	save.gameData = {
		name: name,
		version: VERSION,
		tower: Object.assign({}, tower),
		player: Object.assign({}, player),
		champion: Object.assign({}, champion),
		monster: Object.assign({}, monster),
		item: Object.assign({}, item),
		projectile: Object.assign({}, projectile),
		variables: {
			timerMaster: timerMaster,
			timerMonsterMove: timerMonsterMove,
			timerChampionStats: timerChampionStats,
			towerThis: towerThis,
			monsterTeamIdMax: monsterTeamIdMax,
			dungeonSpellTimer: dungeonSpellTimer,
			dungeonSpellList: dungeonSpellList,
			soundEnabled: soundEnabled
//			activeSpellTimer: activeSpellTimer
		}
	};
	// DrSnuggles: added fileSave because storage quota = 5MB but stores as UTF-16 internally
	var content = JSON.stringify(save.gameData);
	// download plain version
	if (debug || g < 99) {
		download(content, save.fileName+"_"+save.gameData.name, "application/json");
	}

	// ZIP it
	content = new TextEncoder().encode(content); // now content is uint8array
	content = UZIP.deflateRaw( content );
	/* no longer needed, coz zipped now
			// check quota exceeds, better reduce table size to just 4 rows
			// https://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage
			// each save >1MB max allowed = 4 incl. autosave
			var _lsTotal = 0, _xLen, _x, _count = 0;
			for(_x in localStorage) {
				if(!localStorage.hasOwnProperty(_x)){continue;}
				_xLen = ((localStorage[_x].length + _x.length)* 2);
				_lsTotal += _xLen;
				_count++;
				//console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")
			};
			//console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
			// check if it's new
			if (!(_count >= 4 && !localStorage[save.fileName])) {
				// else it would be entry #5 and out of quota
			}
	*/
	localStorage.setItem(save.fileName, content);

	if(g < 99) {
		player[0].message(TEXT_GAME_SAVED, colourData['GREEN']);
	}
};

/* not used yet
function deleteGame(g) {
	localStorage.removeItem('savegame' + g);
}
*/

function castObject(ob, to) {
	return Types[ob.__type].revive(ob);
}

//
// QuickLoad / QuickSave
// F1, F3, F5, F6, F11, F12 are already in use
//
addEventListener("keyup", function(e) {
	var handled = false;
	switch (e.key) {
		case "F4":
			// quicksave
			saveGame(98, "quicksave");
			handled = true;
			break;
		case "F9":
			// quickload
			loadGame(98);
			handled = true;
			break;
		default:

	}
	if (handled) e.preventDefault();
}, false);

/*  Drop handler by DrSnuggles
    load JSON files with this method
*/
var dropArea = window;

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults (e) {
  e.preventDefault();
  e.stopPropagation();
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;
  var file = files[0]; // just use first dropped file
  var reader = new FileReader();
  var filename = file.name;
  reader.onload = function(ev) {
    try {
      var loadedJSON = JSON.parse(ev.target.result);
      loadGameData(loadedJSON);
    } catch(e){}
  };
  reader.readAsText(file);
}

function TryUnZIP2JSON(t) {
	// tries to unZIP again, if not possible return JSON from plain input
	var ret;
	try {
		ret = JSON.parse(t);
	} catch(e) {
		t = t.split(","); // string -> array
		//tmp = new TextDecoder("UTF-8").decode(tmp); // uint8array -> buffer
		t = new Uint8Array(t); // array->arraybuffer
		t = UZIP.inflateRaw(t); // unzip
		t = new TextDecoder("UTF-8").decode(t); // arraybuffer->string
	}
	ret = JSON.parse(t);
	return ret;
}
