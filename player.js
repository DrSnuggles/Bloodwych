function Player(champID,posX,posY,level,rotation,PortX,PortY) {
    this.champion = new Array();
    this.champion[0] = champion[champID];
    for(i = 1; i < 4; i++) {
        this.champion[i] = new Champion();
    }
    this.X=posX;
    this.Y=posY;
    this.level=level;   
    this.Rotation= rotation;
    this.PortalX=PortX;
    this.PortalY=PortY;
    this.View = [];
    this.lastX = posX;
    this.lastY = posY;
    this.lastLevel = level;
    this.moving = 0; //0 = Forward,1 = Right, 2 = Backwards, 3 = Left
  
    try{
        this.setBinaryView(18, 8, '1');
        //tw.Levels[this.level].Map[this.Y][this.X] = tw.Levels[this.level].Map[this.Y][this.X].replaceAt(2,"8");
    }
    catch(c){};
}

Player.prototype.canMoveToPos = function(pos) {
    //Check other player
    var hex = this.View[pos];
    if(getHexToBinaryPosition(hex, 8) == '1') {
        return false;
    }

    var objThis = getHexToBinaryPosition(this.View[18], 12, 4);
    var objNext = getHexToBinaryPosition(hex, 12, 4);

    //Check wooden walls and doors
    if(objThis == '2' || objNext == '2') {
        if(!this.canMoveToPosByWood(pos)) {
            return false;
        }
    }

    //Check other objects
    switch (objNext) {
        case '1': return false; //Wall
        case '3': return false; //Misc
        case '5': //Doors
        if (getHexToBinaryPosition(hex, 7, 1) == '1') {
            return false;
        }
    }
    return true;
}


Player.prototype.canMoveToPosByWood = function(pos) {
    var hex = this.View[pos];
    //Check the space the player is standing on
    if(getHexToBinaryPosition(this.View[18], 12, 4) == '2' && getHexToBinaryPosition(this.View[18], ((7 - ((this.Rotation + this.moving) % 4)) % 4) * 2 + 1, 1) == '1') {
        return false;
    }
    //Check the space the player is moving to
    if(getHexToBinaryPosition(hex, 12, 4) == '2' && getHexToBinaryPosition(hex, ((5 - ((this.Rotation + this.moving) % 4)) % 4) * 2 + 1, 1) == '1') {
        return false;
    }
    return true;
}

Player.prototype.changeUpLevel = function() {
    
    //In bloodwych when the player moves levels they also moved 2 places forward
    //This function changes the players level and moves the player forward 2x spaces
    
    this.level++;
    if (this.level > tw.length){
        this.level = 0;
    }
    else {
        this.move(DIRECTION_NORTH);
        this.move(DIRECTION_NORTH);
    }
    
};

Player.prototype.changeDownLevel = function() {
    
    //In bloodwych when the player moves levels they also moved 2 places forward
    //This function changes the players level and moves the player forward 2x spaces
    
    this.level--;
    if (this.level < tw.length){
        this.level = tw.length;
    }
    else{
        this.move(DIRECTION_NORTH);
        this.move(DIRECTION_NORTH);
    }
};

//Take the map code which is in front of the player and see if the player can interact with it.
Player.prototype.action = function() {
    //Doors
    if (this.getBinaryView(15, 12, 4) == '5' && this.getBinaryView(15, 4) == '0') {
        this.setBinaryView(15, 7);
        //this.setBinaryView(15, 1, '000'); //Will set the door to 'normal'
    }
    //Wall switches
    if (this.getBinaryView(15, 0, 4) != '0' && this.getBinaryView(15, 8) == '1' && this.getBinaryView(15, 6, 2) == '2') {
        this.setBinaryView(15, 5);
        switchAction(0,parseInt(getHexToBinaryPosition(this.View[15], 0, 5), 16).toString(10),this);
    }
    //Wooden doors (in front of player)
    if (this.getBinaryView(15, 12, 4) == '2' && this.getBinaryView(15, ((5 - this.Rotation) % 4) * 2) == '1') {
      this.setBinaryView(15, ((5 - this.Rotation) % 4) * 2 + 1);
    }
    //Wooden doors (on player)
    if (this.getBinaryView(18, 12, 4) == '2' && this.getBinaryView(18, ((7 - this.Rotation) % 4) * 2) == '1'){
      this.setBinaryView(18, ((7 - this.Rotation) % 4) * 2 + 1);       
    }
};

Player.prototype.toggleObject = function() {
    this.setBinaryView(15, 12);
}

//Sets a binary index on a hexadecimal string to a certain binary flag
//'to' will be a binary string, e.g. '1010'
Player.prototype.setBinaryView = function(pos18, index, to) {
  var xy = posToCoordinates(pos18, this.X, this.Y, this.Rotation);
  tw.Levels[this.level].Map[xy["y"]][xy["x"]] = setHexToBinaryPosition(tw.Levels[this.level].Map[xy["y"]][xy["x"]], index, to);
};

Player.prototype.getBinaryView = function(pos18, index, length) {
  var xy = posToCoordinates(pos18, this.X, this.Y, this.Rotation);
  try {
    return getHexToBinaryPosition(tw.Levels[this.level].Map[xy["y"]][xy["x"]], index, length);
  } catch(e) {
    return '0001';
  }
};

Player.prototype.updateMap = function() {
    tw.Levels[this.lastLevel].Map[this.lastY][this.lastX] = setHexToBinaryPosition(tw.Levels[this.lastLevel].Map[this.lastY][this.lastX], 8, '0');
    player[0].setBinaryView(18, 8, '1');
    player[1].setBinaryView(18, 8, '1');
    this.lastX = this.X;
    this.lastY = this.Y;
    this.lastLevel = this.level;
};

Player.prototype.rotatePlayer = function(d){
    
    if (d === 1) {
        this.Rotation = this.Rotation -1;
        if (this.Rotation < 0) {
            this.Rotation = 3;
        }
        if (debug) {PrintLog("Player Rotated Anti-Clockwise");}
    }
    else {
        this.Rotation = this.Rotation +1;
        if (this.Rotation > 3) {
            this.Rotation = 0;
        }
        if (debug) {PrintLog("Player Rotated Clockwise");}
    }   
    this.doEventSquare();
};

Player.prototype.move = function(d) {
    this.moving = d;
    this.updateMap();
    this.lastX = this.X;
    this.lastY = this.Y;
    var viewIndex = [15, 16, 19, 17];
    if (this.canMoveToPos(viewIndex[d])) { 
        xy = getOffsetByRotation((this.Rotation + d) % 4);
        this.X = this.X + xy['x'];
        this.Y = this.Y + xy['y'];
        if (debug) {PrintLog("Player Moved " + getDirection(this.Rotation));}
        this.doEvent();
    }
};

Player.prototype.updateView = function(m){
    //m = Map Data
    //This function takes the map file and stores the 20 positions required 
    //to either draw the players view or objects which the player are likely to interact with
    //like standing on a presure pad or stairs or if there is a door infront of the player etc..
    this.View = [];

    for (pos = 0; pos < 20; pos++) {
        try {
            var xy = posToCoordinates(pos, this.X, this.Y, this.Rotation);
            var newView = m[xy['y']][xy['x']];
            if(typeof newView === "undefined") {
                newView = '0001';
            }
        } catch(e) {
           newView = '0001';
        }
        this.View.push(newView);
    }
    
};

Player.prototype.doEvent = function() {
       this.updateMap();
       this.updateView(tw.Levels[this.level].Map);
       drawPlayersView(this);
       this.doEventSquare();
}

Player.prototype.doEventSquare = function() {    
  
   this.updateMap();
  
    switch (parseInt(this.View[18].substring(3,4),16)) {
        
        case 4: this.doStairs(); break;
        case 6: if(parseInt(this.View[18].substring(1,2),16) % 4 === 1) {
            this.doPit();
        }
        break;
        default: break;        
        
    }

}

Player.prototype.doPit = function() {
    this.setPlayerLevel(this.level - 1);
    this.X = this.X + (tw.Levels[this.level +1].xOffset - tw.Levels[this.level].xOffset);
    this.Y = this.Y + (tw.Levels[this.level +1].yOffset - tw.Levels[this.level].yOffset);
}

Player.prototype.doStairs = function() {
    
    var ud = parseInt(this.getBinaryView(18, 7), 10);
    var d = parseInt(this.getBinaryView(18, 5, 2), 10);

    this.setPlayerLevel(this.level + 1 - (ud % 2) * 2); //Stairs Up or Down

    switch (d) {
        case 0: //South
            this.Rotation = 2;                
            if (ud === 0){
                this.X = this.X - (tw.Levels[this.level].xOffset - tw.Levels[this.level -1].xOffset);
                this.Y = this.Y - (tw.Levels[this.level].yOffset - tw.Levels[this.level -1].yOffset); this.Y = this.Y +2;
            }
            else {
                this.X = this.X + (tw.Levels[this.level +1].xOffset - tw.Levels[this.level].xOffset);
                this.Y = this.Y + (tw.Levels[this.level +1].yOffset - tw.Levels[this.level].yOffset); this.Y = this.Y +2;
            }
            break;
        case 1: //West
            this.Rotation = 3;
            if (ud === 0){  
                this.X = this.X - (tw.Levels[this.level].xOffset - tw.Levels[this.level -1].xOffset); this.X = this.X -2;
                this.Y = (this.Y - (tw.Levels[this.level].yOffset - tw.Levels[this.level -1].yOffset)) ;
            }
            else {
                this.X = this.X + (tw.Levels[this.level +1].xOffset - tw.Levels[this.level].xOffset); this.X = this.X -2;
                this.Y = (this.Y + (tw.Levels[this.level +1].yOffset - tw.Levels[this.level].yOffset));
            }
            break;
        case 2: //North
            this.Rotation = 0;
            if (ud === 0){
                this.X = this.X - (tw.Levels[this.level].xOffset - tw.Levels[this.level -1].xOffset);
                this.Y = this.Y - (tw.Levels[this.level].yOffset - tw.Levels[this.level -1].yOffset); this.Y = this.Y -2;
            }
            else {
                this.X = this.X + (tw.Levels[this.level +1].xOffset - tw.Levels[this.level].xOffset);
                this.Y = this.Y + (tw.Levels[this.level +1].yOffset - tw.Levels[this.level].yOffset); this.Y = this.Y -2;
            }
            break;
        case 3: //East
            this.Rotation = 1;
            if (ud === 0){  
                this.X = this.X - (tw.Levels[this.level].xOffset - tw.Levels[this.level -1].xOffset); this.X = this.X +2;
                this.Y = (this.Y - (tw.Levels[this.level].yOffset - tw.Levels[this.level -1].yOffset));
            }
            else {                    
                this.X = this.X + (tw.Levels[this.level +1].xOffset - tw.Levels[this.level].xOffset); this.X = this.X +2;
                this.Y = (this.Y + (tw.Levels[this.level +1].yOffset - tw.Levels[this.level].yOffset));
            }
            break;
        default: break;
    }
}

//Change the Players Level
//l: 1 = up, -1 = down
Player.prototype.setPlayerLevel = function(level) {
    if(level >= 0 && level < tw.Levels.length) {
        this.lastLevel = this.level;
        this.level = level;
    }
}

function initPlayers() {
    player[0] = new Player(CHAMP_BLODWYN, 12, 22, 3, 0, 0,   0);       
    player[1] = new Player(CHAMP_ASTROTH, 14, 22, 3, 0, 410, 0);
}