/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function doTouchStart(e) {
    
            canvas_x = event.targetTouches[0].pageX;
            canvas_y = event.targetTouches[0].pageY;
    
            if (canvas_y < 300 & (canvas_x > 120 & canvas_x < 270)){
                clearCanvas();
                configCanvas();
                myDIx(ctx, img, background[b], player[0], scale);
                player[0].move(DIRECTION_NORTH);
                player[0].pView(tw.Levels[player[0].level].Map);
                drawPlayersView(player[0]);
                event.preventDefault();
            }
            else if (canvas_y > 300 & (canvas_x > 120 & canvas_x < 270)){
                clearCanvas();
                configCanvas();
                myDIx(ctx, img, background[b], player[0], scale);
                player[0].move(DIRECTION_SOUTH);
                player[0].pView(tw.Levels[player[0].level].Map);
                drawPlayersView(player[0]);
            }
            else if (canvas_y < 300 & (canvas_x > 270)){
                clearCanvas();
                configCanvas();
                myDIx(ctx, img, background[b], player[0], scale);
                player[0].rotatePlayer(0);
                player[0].pView(tw.Levels[player[0].level].Map);
                drawPlayersView(player[0]);                
            }
            else if (canvas_y < 300 & (canvas_x < 120)){
                clearCanvas();
                configCanvas();
                myDIx(ctx, img, background[b], player[0], scale);
                player[0].rotatePlayer(1);
                player[0].pView(tw.Levels[player[0].level].Map);
                drawPlayersView(player[0]);                
            }
            
    

                       
        
}

function doKeyDown(e) {

    switch (e.keyCode)
    {
        
        case 104: {player[1].move(DIRECTION_NORTH);break} //Up Arrow
        case 101: {player[1].move(DIRECTION_SOUTH);break} //Down Arrow
        case 100: {player[1].move(DIRECTION_WEST);break} //Left Arrow
        case 102: {player[1].move(DIRECTION_EAST);break} //Right Arrow
        case 103: {player[1].rotatePlayer(1);break} //Delete
        case 105: {player[1].rotatePlayer(0);break} //Page Dn
        case  96: {player[1].action();break} //End Key
        case 107: {player[1].toggleObject();break} //+ Key
        
        case 76: {  // THE L KEY
            tw = new Tower();
            CurrentMap = CurrentMap + 1;
            if (CurrentMap > Maps.length -1){
                CurrentMap = 0;
            }
            player[0].X = 0;player[1].X = 0;
            player[0].Y = 0;player[1].Y = 0;
            GetDataView("maps/"+Maps[CurrentMap]+".MAP",mapdate);                        
            break; 
        }
        
        case 84: {player[0].changeUpLevel();break;}    // T KEY     
        case 32: {player[0].action();break;}           // SpaceBar        
        case 71: {player[0].changeDownLevel(); break;} // G KEY  
        case 87: {player[0].move(DIRECTION_NORTH);break;}      // W KEY
        case 83: {player[0].move(DIRECTION_SOUTH);break;}    // S KEY
        case 65: {player[0].move(DIRECTION_WEST);break;}         // A KEY
        case 68: {player[0].move(DIRECTION_EAST);break;}        // D KEY
        case 69: {player[0].rotatePlayer(0);break;}    // Q KEY
        case 81: {player[0].rotatePlayer(1);break;}    // E KEY
        case 82: {player[0].toggleObject();break} //R Key

        default:{};break;
    }


    if (b === 0) {
        b = 1;
    }
    else {
        b = 0;
    }
}