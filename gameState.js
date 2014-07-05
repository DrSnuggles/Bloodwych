function gameState(saveName) {
	this.gameData = [];
	this.fileName = saveName;
}

gameState.prototype.load = function() {
	this.gameData = JSON.parse(localStorage.getItem(this.fileName));

        if (this.gameData.player.length >= 1 && player.length < 1){
            startGame(false, true);
            players = 2;
        }else{
            startGame(true, true);
            players = 1;
        }        

	tower = this.gameData.tower;
	player = this.gameData.player;
	champion = this.gameData.champion;
	monster = this.gameData.monster;

	for (c in champion) {
		champion[c] = castObject(champion[c], 'Champion');
		for (pg = 0; pg < COLOUR_MAX; pg++) {
			for (rw = 0; rw < SPELL_MAX; rw++) {
				champion[c].spellBook[pg][rw]["ref"] = getSpellById(champion[c].spellBook[pg][rw].id);
			}
		}
	}
	for (var t = 0; t < 7; t++) {
		for(var m = 0; m < monster[t].length; m++) {
			monster[t][m] = castObject(monster[t][m], 'Monster');
			monster[t][m]["ref"] = monsterRef[monster[t][m].form][monster[t][m].colour];
		}
	}
        
        clearCanvas();
        
	for (p in player) {
		player[p] = castObject(player[p], 'Player');
                redrawUI(player[p].id);                
	}
        
};

gameState.prototype.save = function() {
	this.gameData = {
		tower: $.extend(true, {}, tower),
		player: $.extend(true, {}, player),
		champion: $.extend(true, {}, champion),
		monster: $.extend(true, {}, monster)
	};
	for (p in player) {
		//this.gameData.tower[towerThis].floor[player[p].floor].Map[player[p].y][player[p].x] = setHexToBinaryPosition(this.gameData.tower[towerThis].floor[player[p].floor].Map[player[p].y][player[p].x], 8, 1, '0');
	}
	localStorage.setItem(this.fileName, JSON.stringify(this.gameData));
};

function castObject(ob, to) {
	return Types[ob.__type].revive(ob);
}