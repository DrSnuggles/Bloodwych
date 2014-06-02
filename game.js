function Game() {};
Game.prototype = {

	init: function() {
		this.fps = 10;
		this.step = 1 / this.fps;
		this.reset();
		this.eventQueue = [];
	},

	// Reset the game
	reset: function() {
		this.example = 0;
	},

	// Update the game model
	update: function() {
		timerMaster++;
		timerAction();
	},

	subscribe: function(e, callback, target) {
		this.subs = this.subs || {};
		this.subs[e] = this.subs[e] || [];
		this.subs[e].push({
			callback: callback,
			target: target
		});
	},

	publish: function(e) {
		this.subs && this.subs[e].forEach(function(sub) {
			var args = [].slice.call(arguments, 1);
			sub.callback.apply(sub.target, args)
		});
	}
}

function timerAction() {
	if(timerMaster - timerChampionAttack >= 20) {
		timerChampionAttack = timerMaster;
		for(p = 0; p < player.length; p++) {
			if(player[p].attacking) {
				player[p].tryAttack();
			}
		}
	}
	if(timerMaster - timerMonsterMove >= 20) {
		timerMonsterMove = timerMaster;
		monsterAttackSequence = 0;
		mon = getMonstersInTower(towerThis);
		for(m in mon) {
			mon[m].move();
		}
	}
	if(timerMaster - timerMonsterAttack >= 3) {
		timerMonsterAttack = timerMaster;
		monsterAttackSequence++;
	}

	for(p = 0; p < player.length; p++) {
		var tm = 100;
		if(player[p].sleeping) {
			tm = 50;
		}
		if(timerMaster - player[p].timerChampionStats >= tm) {
			player[p].timerChampionStats = timerMaster;
			player[p].restoreChampionStats();
		}
	}
}