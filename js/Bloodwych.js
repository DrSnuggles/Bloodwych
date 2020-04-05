//Init the game

function createDebugWindow(){

    if (debug) {
        debugWindow = window.open("", "Bloodwych Debug", "status=no, width=800, height=600");
        if (typeof debugWindow !== "undefined" && debugWindow !== null) {
            debugWindow.document.body.innerHTML = '';
            debugWindow.document.body.style.background = '#000000';
            debugWindow.document.write('<head><link href="css/style.css" type="text/css" rel="stylesheet"></head><section class="debug player0"><p></p></section><section class="debug player1"><p></p></section>');
            if (mapEnabled){
                debugWindow.document.write('<div>');
                debugWindow.document.write('	<div class="canvas-wrapper" style="float: left;">');
                debugWindow.document.write('		<canvas id="mapCanvas" width="460" height="460" tabindex="1" style="margin: 20px; border: 2px solid white;"></canvas>');
                debugWindow.document.write('	</div>');
                debugWindow.document.write('	<div style="border: 1px solid white;width: 400px;margin-left: 20px;margin-bottom: 10px;display: inline-block;margin-top: 20px;">');
                debugWindow.document.write('		<canvas id="previewCanvas" width="150" height="100" tabindex="1" style="margin: 20px;padding-left: 90px;margin-bottom: 0px;"></canvas>');
                debugWindow.document.write('		<div id="BlockData" style="margin: 20px;font-family: monospace;">X:2 Y:13 Block: 0001 Binary: 0000000000000001</div>');
                debugWindow.document.write('	</div>');
                debugWindow.document.write('</div>');
                debugWindow.document.write('<script src="lib/jquery-2.1.1.min.js" type="text/javascript"></script>');
                debugWindow.document.write('<script src="js/3rdparty/easeljs-0.8.2.min.js" type="text/javascript"></script>');
                debugWindow.document.write('<script src="js/3rdparty/preloadjs-0.6.2.min.js" type="text/javascript"></script>');
                debugWindow.document.write('<script src="js/mapViewer.js" type="text/javascript"></script>');
                debugWindow.document.write('<script>init();</script>');
            }
        }
    }

}

// DrS: to get rid of jQuery .data() for savegames
var saveGames = {
  playerID: 0,
  slotID: 0,
};

(function() {
    initGame();

    canvas.style.cursor = "url('data/" + GAME_ID[GAME_BLOODWYCH] + "/images/misc/cursor0.png'),auto";

    document.addEventListener("deviceready", onDeviceReady, false);
    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("menubutton", onMenu, false);
    }

    // Handle the menu button
    //
    function onMenu() {
        var p = player[0];
        if (typeof p !== "undefined") {
            if (p.uiCenterPanel.mode === UI_CENTER_PANEL_GAMESTATE_MENU || p.uiCenterPanel.mode === UI_CENTER_PANEL_GAMESTATE_SAVE || p.uiCenterPanel.mode === UI_CENTER_PANEL_GAMESTATE_LOAD) {
                p.uiCenterPanel.mode = UI_CENTER_PANEL_VIEWPORT;
                p.message();
            } else {
                p.uiCenterPanel.mode = UI_CENTER_PANEL_GAMESTATE_MENU;
                showGameStateMenu(p);
            }
            redrawUI(0, UI_REDRAW_LEFT);
        }
    }
})();

function updatePlayerViewScreen() {

    if (debug) {
        if (typeof debugWindow !== "undefined" && debugWindow !== null) {
            //$('section.debug p', debugWindow.document).html('');
            var t = debugWindow.document.getElementsByTagName('section');
            for (let i = 0; i < t.length; i++){
              t[i].getElementsByTagName('p')[0].innerHTML = '';
            }
        }
    }
    //configCanvas();
    debugText(player[0], "FPS: " + fps.getFPS());
    debugText(player[0], "CURRENT TOWER: " + TOWER_NAME[towerThis]);
    //if (!paused) {
    var dr = false;
    for (var p in player) {
        debugText(player[p], "T:" + TOWER_NAME[towerThis] + "  F:" + player[p].floor + "  X:" + player[p].x + "  Y:" + player[p].y + "  D:" + player[p].d);
        drawPlayersView(player[p]);
        if (drawUI(player[p])) {
            dr = true;
        }
        //testing(player[p]);
    }
    if (dr && paused) {
        recolourCanvas([0, 0, 0], [64, 0, 0]);
    }
    redrawPlayerUiFlag = 0;
        if (showFPS){
            ctx.fillStyle = "black";
            ctx.fillRect(1, 0, 80, 10 * scale);
            ctx.fillStyle = "white";
            ctx.font = "bold 16px Arial";
            ctx.fillText("FPS: " + fps.getFPS(), 1, 20);
        }
    //}
}

function setViewportScale(sp) {
        if (navigator.userAgent.match(/(iPad)/g) ? true : false){
            scaleReal = 1.06;
        }else if (navigator.userAgent.match(/(iPhone|iPod)/g) ? true : false){
            scaleReal = 0.7; //iPhone 6
            //scaleReal = 0.5;
        }else{
            var zoom = 1;
            //scaleReal = 3;
            if(isMobile) {
                    zoom = 2;
                    if (typeof sp !== "undefined" && sp) {
                            scaleReal = window.innerWidth / (320 / zoom);
                    } else {
                            scaleReal = window.innerHeight / (200 / zoom);
                    }
            }
            scale = Math.floor(scaleReal);
            scaleReal = scaleReal / scale / zoom;

        }
    document.body.style.zoom = scaleReal;
    //$('html').css('-moz-transform', 'scale(' + scaleReal + ')');
    if (typeof player !== "undefined") {
        for (var p in player) {
            player[p].PortalX = (player[p].ScreenX + 96) * scale;
            player[p].PortalY = (player[p].ScreenY + 2) * scale;
            player[p].PlayerCanvas.width = 128 * scale;
            player[p].PlayerCanvas.height = 76 * scale;
            player[p].PlayerCanvas.getContext("2d").imageSmoothingEnabled = false;
            player[p].PlayerCanvas.getContext("2d").webkitImageSmoothingEnabled = false;
            player[p].PlayerCanvas.getContext("2d").mozImageSmoothingEnabled = false;
            player[p].PlayerCanvas.getContext("2d").oImageSmoothingEnabled = false;
            player[p].PlayerCanvas.getContext("2d").msImageSmoothingEnabled = false;
            player[p].PlayerCanvas.getContext("2d").font = "bold 20px Calibri";

        }
        //redrawUI(2);
    }
}

//function myDIx(canvas, img, PosAry) {
//    if (typeof canvas.drawImage !== "undefined" && typeof img !== "undefined" && img !== null) {
//        canvas.drawImage(img, PosAry[0], PosAry[1], PosAry[2], PosAry[3], (PosAry[4] * scale), (PosAry[5] * scale), PosAry[2] * scale, PosAry[3] * scale);
//    }
//}

function myDIx(canvas, img, PosAry) {

    if (debug && frontBuffer){
        canvas = ctx; // DrS: ?? I do not know why
    }

    if (typeof canvas.drawImage !== "undefined" && typeof img !== "undefined" && img !== null) {
        if (debug && frontBuffer){
            canvas.drawImage(img, PosAry.x, PosAry.y, PosAry.w, PosAry.h, (PosAry.sx * scale) + 285, (PosAry.sy * scale) + 100, PosAry.w * scale, PosAry.h * scale);
        }else{
            canvas.drawImage(img, PosAry.x, PosAry.y, PosAry.w, PosAry.h, (PosAry.sx * scale), (PosAry.sy * scale), PosAry.w * scale, PosAry.h * scale);
        }

    }
}

function configCanvas() {
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.oImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.font = "bold 20px Calibri";
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function pauseGame(ps, colourTo) {
    //colourTo = RGB HEX CODE i.e. #400000
    paused = ps;
    if (typeof colourTo === 'undefined') {
        if (ps) {
            var colourTo = '#400000';
        } else {
            var colourTo = '#000000';
        }
    }

    document.body.style.background = colourTo;
    canvas.style.background = colourTo;

    if (ps) {
        pauseSound('SOUND_PCMUSIC');
        saveGame(99, 'autosave');
    } else {
        resumeSound('SOUND_PCMUSIC');
        pausedByBrowser = false;
        for (var p in player) {
            player[p].uiCenterPanel.mode = UI_CENTER_PANEL_VIEWPORT;
            player[p].message();
            player[p].redrawViewPort = true;
        }
    }

    redrawUI(2);
}

function recolourCanvas(from, to) {
    var j = 0;
    var img = ctx.getImageData(0, 0, canvas.width, canvas.width);
    for (var i = 0; i < img.data.length; i += 4) {
        if (img.data[i] === from[0] && img.data[i + 1] === from[1] && img.data[i + 2] === from[2]) {
            img.data[i] = to[0];
            img.data[i + 1] = to[1];
            img.data[i + 2] = to[2];
            j = j + 3;
        }
    }
    ctx.putImageData(img, 0, 0);
}

//Renders the sub-coloured objects. E.g. for locked doors and banners

function gfxColourSubs(folder, type, item, sub) {
    if (item != "") {
        for (var i = 1; i <= sub; i++) {
            //if (typeof gfx[folder][type][item][i] != 'undefined'){
                gfx[folder][type][item][i] = recolorImage(gfx[folder][type][item][0], i, folder, type, item);
            //}
        }
        //if (typeof gfx[folder][type][item][0] != 'undefined'){
            gfx[folder][type][item][0] = recolorImage(gfx[folder][type][item][0], 0, folder, type, item);
        //}
    } else {
        for (var i = 1; i <= sub; i++) {
            gfx[folder][type][i] = recolorImage(gfx[folder][type][0], i, folder, type, item);
        }
        gfx[folder][type][0] = recolorImage(gfx[folder][type][0], 0, folder, type, item);
    }
}

//Loads image into the gfx array
//type: type of object, e.g. wall, door, wood
//item: the object itself, e.g. bed, switch, shelf
//sub: define this to the number of color variations you wish to add for this type of object. Currently maximum of 8

function gfxLoadImages(img, result) {
    //console.log("LoadImage: " + folder + " " + type + " " + item + " " + sub);

    var data = img.id.split('_');
    folder = data[0];
    type = data[1];
    var item = undefined;
    if (typeof data[2] !== 'undefined'){
        item = data[2];
    }
    var sub = undefined;
    if (typeof data[3] !== 'undefined'){
        sub = parseInt(data[3]);
    }
    if (folder === "character"){
        var match = true;
    }

    if (typeof type === 'string') {
        var id = '';
        if (typeof gfx[folder] === 'undefined') {
            gfx[folder] = {};
        }
        if (typeof gfx[folder][type] === 'undefined') {
            gfx[folder][type] = {};
        }
        if (typeof sub === 'number' && sub != null && (typeof gfx[folder][type][item] === 'undefined')) {
            gfx[folder][type][item] = {};
        }
        id = img.id;

        if (typeof sub === 'number' && sub != null) {
            if (item != '') {
                gfx[folder][type][item][0] = result;
                gfxColourSubs(folder, type, item, sub);
            } else {
                gfx[folder][type][0] = result;
                gfxColourSubs(folder, type, '', sub);
            }
        } else if (typeof item === 'string' && item != '') {
            gfx[folder][type][item] = result;
        } else {
            gfx[folder][type] = result;
        }
    }

}

function gfxLoadImage(folder, type, item, sub) {
    //console.log("LoadImage: ", folder, type, item, sub);
    if (typeof type === 'string') {
        gfxLoaded.count++;
        var id = '';
        if (typeof gfx[folder] === 'undefined') {
            gfx[folder] = {};
        }
        if (typeof gfx[folder][type] === 'undefined') {
            gfx[folder][type] = {};
        }
        if (typeof sub === 'number' && sub != null && (typeof gfx[folder][type][item] === 'undefined')) {
            gfx[folder][type][item] = {};
        }
        if (typeof item !== 'undefined' && item != '') {
            id = type + '-' + item;
        } else {
            id = type;
        }

        document.body.innerHTML += '<img id="' + id + '" src="data/' + GAME_ID[GAME_BLOODWYCH] + '/images/' + folder + '/' + id + '.png" class="gfx"/>';
        if (typeof sub === 'number' && sub != null) {
            if (item != '') {
                gfx[folder][type][item][0] = document.getElementById(id);
                gfx[folder][type][item][0].onload = function() {
                    gfxColourSubs(folder, type, item, sub);
                    checkAllGfxLoaded();
                };
            } else {
                gfx[folder][type][0] = document.getElementById(id);
                gfx[folder][type][0].onload = function() {
                    gfxColourSubs(folder, type, '', sub);
                    checkAllGfxLoaded();
                };
            }
        } else if (typeof item === 'string' && item != '') {
            gfx[folder][type][item] = document.getElementById(id);
            gfx[folder][type][item].onload = function() {
                checkAllGfxLoaded();
            };
        } else {
            gfx[folder][type] = document.getElementById(id);
            gfx[folder][type].onload = function() {
                checkAllGfxLoaded();
            };
        }
    }
}

function checkAllGfxLoaded() {
    gfxLoaded.max++;
    if (gfxLoaded.count === gfxLoaded.max) {
        gfxStage++;
        PrintLog("All Graphics processed");
        if (gfxStage > 1){
          gfxLoaded.done = true;
        }else{
            font = grabFont();
            preStartScreen();
        }
    }
}

//Print debug info for player

function debugTextPrint(p) {
    if (debug) {
        hex = p.getBinaryView(15, 0, 16);
        debugText(p, hex2bin(hex) + ' | ' + hex);
        var xy = getOffsetByRotation(p.d);
        var ob = getObject(p.floor, p.x + xy.x, p.y + xy.y, p.d, 2);
        if (ob === OBJECT_NONE) {
            ob = canMove(p.floor, p.x, p.y, p.d);
        }
        debugText(p, getObjectNameById(ob));
        var mon = getMonsterAt(p.floor, p.x + xy.x, p.y + xy.y);
        if (mon !== null) {
            debugText(p, 'M' + mon.id + ' - lvl: ' + mon.level + ' - typ: ' + mon.type + ' - frm: ' + mon.form + ' - hp: ' + mon.hp);
        }

        for (var c = 0; c < p.champion.length; c++) {
            var ch = p.getChampion(c);
            if (ch !== null) {
                debugText(p, 'C' + c + ' - xp: ' + ch.xp + ' - xp2: ' + ch.xp2 + ' / ' + getXpForSpell(ch.level, ch.prof) + ' / ' + getXpForLevel(ch.level) + ' - level up: ' + ch.levelUp + ' - spell up: ' + ch.spellUp);
            }
        }
        if (typeof debugWindow !== "undefined" && debugWindow !== null) {
          try {
            var t = debugWindow.document.body.getElementsByClassName('debug-input');
            if (t.length === 0) {
              console.log("adding debug inputs");
              t = debugWindow.document.body;
              var tt = [];
              tt.push('<div class="debug-input">');
              tt.push('<div><strong>Coordinates</strong></div>');
              tt.push('<label for="coord-t">T: </label><input type="text" id="coord-t" value="' + towerThis + '">');
              tt.push('<label for="coord-f">F: </label><input type="text" id="coord-f" value="' + player[0].floor + '">');
              tt.push('<label for="coord-x">X: </label><input type="text" id="coord-x" value="' + player[0].x + '">');
              tt.push('<label for="coord-y">Y: </label><input type="text" id="coord-y" value="' + player[0].y + '">');
              tt.push('<input type="button" id="coord-submit" value="update">');
              tt.push('</div>');
              // add before
              t.innerHTML = tt.join("") + t.innerHTML;
              // attach submit coords event
              setTimeout(function(){
                debugWindow.document.getElementById('coord-submit').onclick = function() {
                  var tower = parseInt(debugWindow.document.getElementById('coord-t').value);
                  var floor = parseInt(debugWindow.document.getElementById('coord-f').value);
                  var x = parseInt(debugWindow.document.getElementById('coord-x').value);
                  var y = parseInt(debugWindow.document.getElementById('coord-y').value);
                  if (towerThis !== tower) {
                    switchTower(tower);
                  }
                  player[0].setPlayerPosition(floor, x, y);
                }
              },1000);

            }
            var tower_E = debugWindow.document.getElementById('coord-t');
            var floor_E = debugWindow.document.getElementById('coord-f');
            var x_E = debugWindow.document.getElementById('coord-x');
            var y_E = debugWindow.document.getElementById('coord-y');
            var submit_E = debugWindow.document.getElementById('coord-submit');
            var tower = parseInt(tower_E.value);
            var floor = parseInt(floor_E.value);
            var x = parseInt(x_E.value);
            var y = parseInt(y_E.value);
            var act = debugWindow.document.activeElement;
            // test if none of the inputs is focused
            if (!(act == tower_E || act === floor_E || act === x_E || act === y_E || act === submit_E)) {
              console.log("update coords");
              // only update when none of these is focused
                if (tower !== towerThis) {
                    tower_E.value = towerThis;
                }
                if (floor !== player[0].floor) {
                    floor_E.value = player[0].floor;
                }
                if (x !== player[0].x) {
                    x_E.value = player[0].x;
                }
                if (y !== player[0].y) {
                    y_E.value = player[0].y;
                }
            }

          } catch(e){
            console.error(e);
          }
        }
    }
}

function debugGetInputCoords() {
    if (typeof debugWindow !== "undefined" && debugWindow !== null) {
        // does nothing if ($('body .debug-input', debugWindow.document).length > 0) {}
    }
}

function debugText(p, txt) {
    if (typeof debugWindow !== "undefined" && debugWindow !== null) {
        //$('section.debug.player' + p.id + ' p', debugWindow.document).append('P' + (p.id + 1) + ': ' + txt + '<br/>');
        try {
          debugWindow.document.getElementsByTagName('section')[p.id].getElementsByTagName('p')[0].innerHTML += 'P' + (p.id + 1) + ': ' + txt + '<br/>';
        } catch(e) {}
    }
}

function godMode() {
    for (var c in champion) {
        var ch = champion[c];
        ch.levelUp = 24;
        while (ch.levelUp > 0) {
            ch.gainLevel();
        }
        ch.stat.hp = ch.stat.hpMax;
        ch.stat.vit = ch.stat.vitMax;
        ch.stat.sp = ch.stat.spMax;
        for (var pg = 0; pg < SPELL_COLOUR_MAX; pg++) {
            for (var rw = 0; rw < SPELL_LEVEL_MAX; rw++) {
                ch.spellBook[pg][rw].learnt = true;
            }
        }
    }

}

(function() {
    document.body.onfocus = function(e) {
        if (gameStarted && paused && pausedByBrowser) {
            pauseGame(false);
        }
    };
    document.body.onblur = function(e) {
        if (gameStarted && !paused) {
            pauseGame(true);
            pausedByBrowser = true;
        }
    };
    window.onbeforeunload = function() {
        if(gameStarted) {
            pauseGame(false);
            saveGame(99, 'autosave');
        }
    };
    /*
    if (typeof debugWindow !== "undefined" && debugWindow !== null) {
        //$('body', debugWindow.document).on('click', '.debug-input #coord-submit', function() {
        console.log("attach coords submit event");
        debugWindow.document.body.getElementById('coord-submit').onclick = function() {
          console.log("submit coords");
            var tower = parseInt(debugWindow.document.getElementById('coord-t').value);
            var floor = parseInt(debugWindow.document.getElementById('coord-f').value);
            var x = parseInt(debugWindow.document.getElementById('coord-x').value);
            var y = parseInt(debugWindow.document.getElementById('coord-y').value);
            if (towerThis !== tower) {
                switchTower(tower);
            }
            player[0].setPlayerPosition(floor, x, y);
        };
    }
    */

    document.body.onkeyup = function(e) {
        var t = e.target;
        if (t.id === 'save-game') {
            var p = saveGames.playerID;
            if (typeof p !== 'undefined') {
                var slot = saveGames.slotID;
                var name = t.value.substring(0, 12).toUpperCase();
                var code = e.keyCode || e.which;
                if (code === 13) {
                    t.blur();
                    if (name !== '') {
                        pauseGame(false);
                        saveGame(slot, name);
                        redrawUI(p);
                    }
                } else if (code === 27) {
                    t.blur();
                } else {
                    var pp = player[p].Portal;
                    pp.fillStyle = 'rgb(' + colourData['GREY_DARKEST'][0] + ', ' + colourData['GREY_DARKEST'][1] + ', ' + colourData['GREY_DARKEST'][2] + ')';
                    pp.fillRect(4 * scale, (slot * 8 + 5) * scale, 120 * scale, 9 * scale);
                    writeFontImage((slot + 1) + '.' + name, 8, slot * 8 + 6, colourData['WHITE'], FONT_ALIGNMENT_LEFT, pp);
                    var crt = 1;// DrS: whats that? border size? t.caret();
                    var off = scale * 0.5;
                    pp.strokeStyle = 'rgb(' + colourData['GREY_LIGHT'][0] + ', ' + colourData['GREY_LIGHT'][1] + ', ' + colourData['GREY_LIGHT'][2] + ')';
                    pp.beginPath();
                    pp.moveTo((23 + crt * 8) * scale + off, (slot * 8 + 5) * scale);
                    pp.lineTo((23 + crt * 8) * scale + off, (slot * 8 + 14) * scale);
                    pp.lineWidth = 3;
                    pp.stroke();
                }
            }
        }
    };
    //$('body').on('tap', 'canvas', function(e) {
    canvas.onclick = function(e) {
    // DrS: Also needed for the touch event
        if (e.pageX) {
            var offX = canvas.offsetLeft;
            var offY = canvas.offsetTop;
            var x = Math.floor((e.pageX - offX) / (scale * scaleReal));
            var y = Math.floor((e.pageY - offY) / (scale * scaleReal));
            for (var p1 in player) {
                var p = player[parseInt(p1)];
                if (p.uiCenterPanel.mode === UI_CENTER_PANEL_GAMESTATE_SAVE) {
                    for (var slot = 0; slot < 8; slot++) {
                        if (uiClickInArea(x, y, slot, p, gameStateSelectGrid)) {
                            //console.log("Slot", slot);
                            p.message("SAVE GAME - CHANGE NAME OR ENTER TO SAVE", colourData['GREEN'], false, 0);
                            var inp = document.getElementById('save-game');
                            inp.blur();
                            inp.value = getGameName(slot);
                            saveGames.playerID = p.id;
                            saveGames.slotID =  slot;
                            inp.style.display = 'block';
                            //inp.keyup();
                            inp.focus();
                            inp.click();
                            //inp.tap();
                            return false;
                        }
                    }
                } else if (p.uiCenterPanel.mode === UI_CENTER_PANEL_GAMESTATE_LOAD) {
                    for (var slot = 0; slot < 8; slot++) {
                        if (uiClickInArea(x, y, slot, p, gameStateSelectGrid)) {
                            if (getGameName(slot) !== '') {
                                pauseGame(false);
                                loadGame(slot);
                                redrawUI(2);
                                return false;
                            }
                        }
                    }
                } else if (p.uiCenterPanel.mode === UI_CENTER_PANEL_GAMESTATE_MENU) {
                    if (uiClickInArea(x, y, 0, p, gameStateSelectGrid)) {
                        p.uiCenterPanel.mode = UI_CENTER_PANEL_GAMESTATE_LOAD;
                        showGameStateMenu(p);
                    } else if (uiClickInArea(x, y, 1, p, gameStateSelectGrid)) {
                        p.uiCenterPanel.mode = UI_CENTER_PANEL_GAMESTATE_SAVE;
                        showGameStateMenu(p);
                    } else if (uiClickInArea(x, y, 2, p, gameStateSelectGrid)) {
                        location.reload();
                    }
                    return false;
                }
            }
        }
    };

    //$('input.save-game').click(function() {
    //});
    //$('input.save-game').focusout(function() {
    document.getElementById('save-game').onblur = function(e) {
      //console.log("blur");
        e.target.style.display = 'none'; //$(this).hide();
        var p = saveGames.playerID;
        if (typeof p !== 'undefined' && player[p].uiCenterPanel.mode === UI_CENTER_PANEL_GAMESTATE_SAVE) {
            createStateGrid(player[p], "SAVE");
        }
        canvas.focus();
    };
})();
