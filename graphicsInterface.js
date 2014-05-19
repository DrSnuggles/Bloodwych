function grabUISprites(spriteSheetIMG){
    
    var ImageArray = [];
    var i = 0;
    var extraColours = [];
    //Grab the ICONS
    for (y=0;y<6;y++){
        for (x=0;x<20;x++){
            if (i > 74 && i < 79){
                extraColours.push(recolourSprite(grabImageAt(spriteSheetIMG,x*16,y*16,16,16,false),SHIELD_PALETTE_DEFAULT,PALETTE_SERPENT));     
                extraColours.push(recolourSprite(grabImageAt(spriteSheetIMG,x*16,y*16,16,16,false),SHIELD_PALETTE_DEFAULT,PALETTE_CHAOS));     
                extraColours.push(recolourSprite(grabImageAt(spriteSheetIMG,x*16,y*16,16,16,false),SHIELD_PALETTE_DEFAULT,PALETTE_DRAGON));     
                extraColours.push(recolourSprite(grabImageAt(spriteSheetIMG,x*16,y*16,16,16,false),SHIELD_PALETTE_DEFAULT,PALETTE_MOON));
                ImageArray.push(extraColours);
                extraColours = [];
            }
            else{                
                ImageArray.push(grabImageAt(spriteSheetIMG,x*16,y*16,16,16,false));
            }         
         i++;
        }
    }
    
    //Remove the blank images
    for (x=0;x<7;x++){
        ImageArray.pop();
    }
    
    //Grab the SpellBook
    //var SpellBookAnim = [];
    for (x=0;x<5;x++){
        ImageArray.push(grabImageAt(spriteSheetIMG,x*94,97,94,62,false));        
    }
    
    //ImageArray.push(SpellBookAnim);
    
    //Grab the rest of the UI
    ImageArray.push(grabImageAt(spriteSheetIMG,0,161,30,41,false));  //Shield  
    ImageArray.push(grabImageAt(spriteSheetIMG,31,162,37,22,false)); //SpellBook Icon
    ImageArray.push(grabImageAt(spriteSheetIMG,69,161,22,22,false)); //Scroll
    ImageArray.push(grabImageAt(spriteSheetIMG,92,162,28,11,false)); //Attack
    ImageArray.push(grabImageAt(spriteSheetIMG,123,161,6,37,false)); //Chain
    ImageArray.push(grabImageAt(spriteSheetIMG,406,0,43,44,false)); //Stats
    ImageArray.push(grabImageAt(spriteSheetIMG,131,168,60,31,false));//Red Actions
    ImageArray.push(grabImageAt(spriteSheetIMG,193,168,60,31,false));//Blue Actions
    
    ImageArray.push(grabImageAt(spriteSheetIMG,254,161,30,41,false));//Filled Shield
    ImageArray.push(grabImageAt(spriteSheetIMG,287,194,92,6,false));//Long Chain
    ImageArray.push(grabImageAt(spriteSheetIMG,324,1,48,44,false));//Character Box
    ImageArray.push(grabImageAt(spriteSheetIMG,373,1,32,24,false));//Pocket Box
    ImageArray.push(grabImageAt(spriteSheetIMG,324,46,94,19,false));//Blue Name Box
    ImageArray.push(grabImageAt(spriteSheetIMG,324,66,94,19,false));//Red Name Box
    
    ImageArray.push(grabImageAt(spriteSheetIMG,381,160,30,41,false));//Red Shield
    ImageArray.push(grabImageAt(spriteSheetIMG,412,160,30,41,false));//Blue Shield
    
    //Grab the character Portraits
    var ImagePortraits = [];
    ImagePortraits.push(grabImageAt(spriteSheetIMG,0,210,32,29,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,0,240,32,30,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,0,271,32,31,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,0,303,32,30,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,0,334,32,30,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,0,365,32,29,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,33,210,32,29,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,33,240,32,30,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,33,271,32,31,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,33,303,32,30,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,33,334,32,30,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,33,365,32,29,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,66,210,32,29,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,66,240,32,30,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,66,271,32,31,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,66,303,32,30,false));
    
    ImageArray.push(ImagePortraits);
    ImagePortraits = [];
    
    //Grab the grey bar for the amour stat
    ImageArray.push(grabImageAt(spriteSheetIMG,285,201,95,8,false));
    
    //Grab the character Shields    
    ImagePortraits.push(grabImageAt(spriteSheetIMG,100,210,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,100,227,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,100,244,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,100,261,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,100,278,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,100,295,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,100,312,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,100,329,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,133,210,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,133,227,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,133,244,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,133,261,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,133,278,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,133,295,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,133,312,30,16,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,133,329,30,16,false));    
    ImageArray.push(ImagePortraits);
    ImagePortraits = [];
    
    //Grab the shield type (heart, spade etc..)
    ImagePortraits.push(grabImageAt(spriteSheetIMG,165,210,28,11,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,165,224,28,11,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,165,238,28,11,false));
    ImagePortraits.push(grabImageAt(spriteSheetIMG,165,252,28,11,false));
    ImageArray.push(ImagePortraits);
    ImagePortraits = [];
        
    //Grab the bottom and top of the shield
    ImageArray.push(grabImageAt(spriteSheetIMG,170,269,20,9,false));
    ImageArray.push(grabImageAt(spriteSheetIMG,164,279,30,5,false));        
    
    return ImageArray;
    
}

function drawUI(p) {
    
    if (typeof gfxUI !== "undefined" && gfxUI !== null){
    
        leftUI(p);
        
        switch (p.uiRightPanel.view){
            
            case UI_RIGHT_PANEL_MAIN:{rightUI(p);};break
            case UI_RIGHT_PANEL_POCKETS:{drawPocketUI(p);};break
            case UI_RIGHT_PANEL_SPELLBOOK:{};break
            case UI_RIGHT_PANEL_STATS:{};break
                
        }
        
        myDIx(ctx, gfx["misc"]["separator"], [0, 0, 320, 7, 0, 100]);

            
    }
}

function leftUI(p){
    

            ctx.drawImage(gfxUI[UI_GFX_STATSBOX],(p.ScreenX + 51)*scale,p.ScreenY*scale,gfxUI[UI_GFX_STATSBOX].width*scale,gfxUI[UI_GFX_STATSBOX].height*scale);    
            //ctx.drawImage(gfxUI[UI_GFX_CHAIN_LONG],(p.ScreenX + 1)*scale,(p.ScreenY+80)*scale,gfxUI[UI_GFX_CHAIN_LONG].width*scale,gfxUI[UI_GFX_CHAIN_LONG].height*scale);    
            ctx.drawImage(gfxUI[UI_GFX_CHAIN_LONG],(p.ScreenX + 226)*scale,(p.ScreenY+80)*scale,gfxUI[UI_GFX_CHAIN_LONG].width*scale,gfxUI[UI_GFX_CHAIN_LONG].height*scale);    
                        
            for (x=0;x<4;x++){
                    if (x === 0){
                        if (p.uiLeftPanel.champs[x] === true){
                        ctx.drawImage(gfxUI[UI_GFX_CHAIN_VERT],(x +2 *scale) + (p.ScreenX*scale),(p.ScreenY+5)*scale,gfxUI[UI_GFX_CHAIN_VERT].width*scale,gfxUI[UI_GFX_CHAIN_VERT].height*scale);        
                        ctx.drawImage(drawCharacter(monster[6][p.champion[x]],0,0,p,{x: 0, y: 0},true,false),(x - 38*scale) + (p.ScreenX*scale)*scale,(p.ScreenY-32)*scale);                       
                        ctx.drawImage(gfxUI[UI_GFX_CHAIN_VERT],(x + 43*scale) + (p.ScreenX*scale),(p.ScreenY+5)*scale,gfxUI[UI_GFX_CHAIN_VERT].width*scale,gfxUI[UI_GFX_CHAIN_VERT].height*scale);        
                        }
                        else{
                            ctx.drawImage(gfxUI[UI_GFX_CHARACTER_BOX],p.ScreenX*scale,p.ScreenY*scale,gfxUI[UI_GFX_CHARACTER_BOX].width*scale,gfxUI[UI_GFX_CHARACTER_BOX].height*scale);    
                            ctx.drawImage(gfxUI[UI_GFX_PORTRAITS][p.champion[0]],(p.ScreenX+8)*scale,(p.ScreenY+8)*scale,gfxUI[UI_GFX_PORTRAITS][p.champion[0]].width*scale,gfxUI[UI_GFX_PORTRAITS][p.champion[0]].height*scale);                  
                        }                        
                    }else{
                        if (p.uiLeftPanel.champs[x] === true){
                            ctx.drawImage(gfxUI[UI_GFX_SHIELD],((x-1) * 32*scale) + (p.ScreenX*scale),(p.ScreenY+45)*scale,gfxUI[UI_GFX_SHIELD].width*scale,gfxUI[UI_GFX_SHIELD].height*scale);        
                            ctx.drawImage(drawCharacter(monster[6][p.champion[x]],0,1,p,{x: 0, y: 0},true,false),((x-1) * 32*scale) + (p.ScreenX*scale)-49*scale,(p.ScreenY+45)*scale-37*scale);                       
                        }
                        else{
                            var t = createShield(p.champion[x],champion[p.champion[x]].prof,champion[p.champion[x]].colour);
                            ctx.drawImage(t,(((x-1) * 32 + p.ScreenX)*scale),(p.ScreenY+45)*scale,t.width*scale,t.height*scale);
                        }                        
                    }                    
                }
}

function rightUI(p){
    
            if (p === player[0]){
                ctx.drawImage(gfxUI[UI_GFX_NAME_BLUE],p.ScreenX + 226 *scale,(p.ScreenY + 0) *scale,gfxUI[UI_GFX_NAME_BLUE].width*scale,gfxUI[UI_GFX_NAME_BLUE].height*scale);    
                ctx.drawImage(gfxUI[UI_GFX_ICON_ARROWS_BLUE],p.ScreenX + 226 *scale,(p.ScreenY +45) *scale,gfxUI[UI_GFX_ICON_ARROWS_BLUE].width*scale,gfxUI[UI_GFX_ICON_ARROWS_BLUE].height*scale);    
                
            }
            else{
                ctx.drawImage(gfxUI[UI_GFX_NAME_RED],p.ScreenX + 226 *scale,(p.ScreenY + 0) *scale,gfxUI[UI_GFX_NAME_RED].width*scale,gfxUI[UI_GFX_NAME_RED].height*scale);    
                ctx.drawImage(gfxUI[UI_GFX_ICON_ARROWS_RED],p.ScreenX + 226 *scale,(p.ScreenY +45) *scale,gfxUI[UI_GFX_ICON_ARROWS_RED].width*scale,gfxUI[UI_GFX_ICON_ARROWS_RED].height*scale);    
            }
            
            writeFontImage(champion[p.champion[p.uiRightPanel.activePocket]].firstName, p.ScreenX/scale +226 ,(p.ScreenY+7), COLOUR[COLOUR_YELLOW]);
            ctx.drawImage(gfxUI[UI_GFX_ICON_SPELLBOOK],p.ScreenX + 226 *scale,(p.ScreenY + 22) *scale,gfxUI[UI_GFX_ICON_SPELLBOOK].width*scale,gfxUI[UI_GFX_ICON_SPELLBOOK].height*scale);    
            ctx.drawImage(gfxUI[UI_GFX_ICON_SCROLL],p.ScreenX + 265 *scale,(p.ScreenY + 22) *scale,gfxUI[UI_GFX_ICON_SCROLL].width*scale,gfxUI[UI_GFX_ICON_SCROLL].height*scale);    
            ctx.drawImage(gfxUI[UI_GFX_POCKETBOX],p.ScreenX + 290 *scale,(p.ScreenY + 21) *scale,gfxUI[UI_GFX_POCKETBOX].width*scale,gfxUI[UI_GFX_POCKETBOX].height*scale);    
            
            if (p === player[0]){
                ctx.drawImage(gfxUI[UI_GFX_ICON_OPENDOOR],(p.ScreenX + 289) *scale,(p.ScreenY + 22) *scale,gfxUI[UI_GFX_ICON_OPENDOOR].width*scale,gfxUI[UI_GFX_ICON_OPENDOOR].height*scale);    
                ctx.drawImage(gfxUI[UI_GFX_ICON_POCKETS],(p.ScreenX + 305) *scale,(p.ScreenY + 22) *scale,gfxUI[UI_GFX_ICON_POCKETS].width*scale,gfxUI[UI_GFX_ICON_POCKETS].height*scale);    
            }
            else {
                ctx.drawImage(gfxUI[UI_GFX_ICON_OPENDOOR],(p.ScreenX + 289) *scale,(p.ScreenY + 22) *scale,gfxUI[UI_GFX_ICON_OPENDOOR].width*scale,gfxUI[UI_GFX_ICON_OPENDOOR].height*scale);    
                ctx.drawImage(gfxUI[UI_GFX_ICON_POCKETS],(p.ScreenX + 305) *scale,(p.ScreenY + 22) *scale,gfxUI[UI_GFX_ICON_POCKETS].width*scale,gfxUI[UI_GFX_ICON_POCKETS].height*scale);    
            }
    
}

function drawPocketUI(p) {
    
    if (p === player[0]){
                ctx.drawImage(gfxUI[UI_GFX_NAME_BLUE],p.ScreenX + 226 *scale,(p.ScreenY + 0) *scale,gfxUI[UI_GFX_NAME_BLUE].width*scale,gfxUI[UI_GFX_NAME_BLUE].height*scale);    
            }
    else{
                ctx.drawImage(gfxUI[UI_GFX_NAME_RED],p.ScreenX + 226 *scale,(p.ScreenY + 0) *scale,gfxUI[UI_GFX_NAME_RED].width*scale,gfxUI[UI_GFX_NAME_RED].height*scale);    
    }
            
    writeFontImage(champion[p.champion[p.uiRightPanel.activePocket]].firstName, p.ScreenX/scale +226 ,(p.ScreenY+7), COLOUR[COLOUR_YELLOW]);            
    
    var i = 0;
    for (y=0;y<2;y++){
        for (x=0;x<6;x++){
            var pocketImg = champion[p.champion[p.uiRightPanel.activePocket]].pocket[i];
            if (champion[p.champion[p.uiRightPanel.activePocket]].pocket[i] === 0){                
                pocketImg = UI_GFX_POCKET_EMPTY;
                if (y === 0){                    
                    switch (x) {                        
                        case 0:{pocketImg = UI_GFX_POCKET_EMPTY_LEFT_HAND;};break;
                        case 1:{pocketImg = UI_GFX_POCKET_EMPTY_RIGHT_HAND;};break;
                        case 2:{pocketImg = UI_GFX_POCKET_EMPTY_AMOUR;};break;
                        case 3:{pocketImg = UI_GFX_POCKET_EMPTY_LARGE_SHIELD;};break;                            
                    }                    
                }                
            }else{pocketImg = UI_GFX_ICON_BOOKOFSKULLS;}//WRITE SOMETHING HERE TO RETURN THE CORRECT OBJECT VALUE
            ctx.drawImage(gfxUI[pocketImg],((p.ScreenX + 225) + (x*16)) *scale,((p.ScreenY + 23)+ (y*16)) *scale,gfxUI[pocketImg].width*scale,gfxUI[pocketImg].height*scale);    
            i++;
        }            
    }
    
    ctx.drawImage(gfxUI[UI_GFX_GRAY_BAR],(p.ScreenX + 225) *scale,(p.ScreenY + 54) *scale,gfxUI[UI_GFX_GRAY_BAR].width*scale,gfxUI[UI_GFX_GRAY_BAR].height*scale);    
    writeFontImage("Armour:+0", p.ScreenX/scale +233 ,(p.ScreenY+55), COLOUR[COLOUR_YELLOW]);            
    
    for (x=0;x<6;x++){
        
        var g;
        
        if (x < 4){
         g = champion[p.champion[x]].prof;
                
            switch (g){            
                case 0:{g = UI_GFX_POCKET_CLUB};break;
                case 1:{g = UI_GFX_POCKET_HEART};break;
                case 2:{g = UI_GFX_POCKET_SPADE};break;
                case 3:{g = UI_GFX_POCKET_DIMOND};break;            
            }
        }
        
        switch (x) {
            
            case 0:{ctx.drawImage(gfxUI[g][champion[p.champion[x]].colour],((p.ScreenX + 225) + (x*16)) *scale,((p.ScreenY + 63)) *scale,gfxUI[UI_GFX_POCKET_EMPTY].width*scale,gfxUI[UI_GFX_POCKET_EMPTY].height*scale);};break
            case 1:{ctx.drawImage(gfxUI[g][champion[p.champion[x]].colour],((p.ScreenX + 225) + (x*16)) *scale,((p.ScreenY + 63)) *scale,gfxUI[UI_GFX_POCKET_EMPTY].width*scale,gfxUI[UI_GFX_POCKET_EMPTY].height*scale);};break
            case 2:{ctx.drawImage(gfxUI[g][champion[p.champion[x]].colour],((p.ScreenX + 225) + (x*16)) *scale,((p.ScreenY + 63)) *scale,gfxUI[UI_GFX_POCKET_EMPTY].width*scale,gfxUI[UI_GFX_POCKET_EMPTY].height*scale);};break
            case 3:{ctx.drawImage(gfxUI[g][champion[p.champion[x]].colour],((p.ScreenX + 225) + (x*16)) *scale,((p.ScreenY + 63)) *scale,gfxUI[UI_GFX_POCKET_EMPTY].width*scale,gfxUI[UI_GFX_POCKET_EMPTY].height*scale);};break
            case 4:{ctx.drawImage(gfxUI[UI_GFX_POCKET_EMPTY],((p.ScreenX + 225) + (x*16)) *scale,((p.ScreenY + 63)) *scale,gfxUI[UI_GFX_POCKET_EMPTY].width*scale,gfxUI[UI_GFX_POCKET_EMPTY].height*scale);};break
            case 5:{ctx.drawImage(gfxUI[UI_GFX_ICON_BACK],((p.ScreenX + 225) + (x*16)) *scale,((p.ScreenY + 63)) *scale,gfxUI[UI_GFX_POCKET_EMPTY].width*scale,gfxUI[UI_GFX_POCKET_EMPTY].height*scale);};break
                
        }
    }
    
    
}

function itemID(id){
    
    switch (id) {
        
        case 1:{return UI_GFX_POCKET_COIN;} //Coinage
        case 2:{return UI_GFX_POCKET_COMMON_KEY;} //Common Keys
        case 3:{return UI_GFX_POCKET_ARROW;} //Arrows
        case 4:{return UI_GFX_POCKET_ELF_ARROW;} //Elf Arrows
        case 5:{return UI_GFX_POCKET_APPLE_1;} //1/3 Apple
        case 6:{return UI_GFX_POCKET_APPLE_2;} //2/3 Apple
        case 7:{return UI_GFX_POCKET_APPLE_3;} //Apple
        case 8:{return UI_GFX_POCKET_BISCUIT_1;} //1/3 Biscuit
        case 9:{return UI_GFX_POCKET_BISCUIT_2;} //2/3 Biscuit
        case 10:{return UI_GFX_POCKET_BISCUIT_3;} //Biscuit
        case 11:{return UI_GFX_POCKET_CHICKEN_1;} //1/3 Chicken
        case 12:{return UI_GFX_POCKET_CHICKEN_2;} //2/3 Chicken
        case 13:{return UI_GFX_POCKET_CHICKEN_3;} //Chicken
        case 14:{return UI_GFX_POCKET_WATER_1;} //1/3 Mead
        case 15:{return UI_GFX_POCKET_WATER_2;} //2/3 Mead
        case 16:{return UI_GFX_POCKET_WATER_3;} //Mead
        case 17:{return UI_GFX_POCKET_WATER_1;} //1/3 Water
        case 18:{return UI_GFX_POCKET_WATER_2;} //2/3 Water
        case 19:{return UI_GFX_POCKET_WATER_3;} //Water
        case 20:{return UI_GFX_POCKET_NEGG;} //N'egg (Green)
        case 21:{return UI_GFX_POCKET_NEGG;} //N'egg (Blue)
        case 22:{return UI_GFX_POCKET_NEGG;} //N'egg (Red)
        case 23:{return UI_GFX_POCKET_POTION;} //Serpent Slime
        case 24:{return UI_GFX_POCKET_POTION;} //Brimstone Broth
        case 25:{return UI_GFX_POCKET_POTION;} //Dragon Ale
        case 26:{return UI_GFX_POCKET_POTION;} //Moon Elixir
        case 27:{return UI_GFX_POCKET_AMOUR_LEATHER;} //Leather Armour
        case 28:{return UI_GFX_POCKET_AMOUR_CHAIN;} //Chain Mail
        case 29:{return UI_GFX_POCKET_AMOUR_PLATE;} //Plate Mail
        case 30:{return UI_GFX_POCKET_AMOUR_CHAIN;} //Mithril Chain
        case 31:{return UI_GFX_POCKET_AMOUR_PLATE;} //Mithril Plate
        case 32:{return UI_GFX_POCKET_AMOUR_CHAIN;} //Adamant Chain
        case 33:{return UI_GFX_POCKET_AMOUR_PLATE;} //Adamant Plate
        case 34:{return UI_GFX_POCKET_AMOUR_CHAIN;} //Crystal Chain
        case 35:{return UI_GFX_POCKET_AMOUR_PLATE;} //Crystal Plate
        case 36:{return UI_GFX_POCKET_SHIELD_1;} //Leather Shield
        case 37:{return UI_GFX_POCKET_SHIELD_2;} //Buckler
        case 38:{return UI_GFX_POCKET_SHIELD_3;} //Rune Shield (Classic)
        case 39:{return UI_GFX_POCKET_SHIELD_4;} //Large Shield
        case 40:{return UI_GFX_POCKET_SHIELD_5;} //Moon Shield
        case 41:{return UI_GFX_POCKET_SHIELD_6;} //Dragon Scale
        case 42:{return UI_GFX_POCKET_SHIELD_7;} //War Shield
        case 43:{return UI_GFX_POCKET_GLOVE;} //Chaos Gloves
        case 44:{return UI_GFX_POCKET_GLOVE;} //Battle Gloves
        case 45:{return UI_GFX_POCKET_GLOVE;} //Mithril Gloves
        case 46:{return UI_GFX_POCKET_GLOVE;} //Adamant Gloves
        case 47:{return UI_GFX_POCKET_GLOVE;} //Crystal Gloves
        case 48:{return UI_GFX_POCKET_DAGGER;} //Dagger
        case 49:{return UI_GFX_POCKET_SWORD_1;} //Stealth Blade
        case 50:{return UI_GFX_POCKET_SHORT_SWORD;} //Short Sword
        case 51:{return UI_GFX_POCKET_SWORD_3;} //Long Sword
        case 52:{return UI_GFX_POCKET_SWORD_4;} //Mithril Sword
        case 53:{return UI_GFX_POCKET_SWORD_5;} //Fleshbane
        case 54:{return UI_GFX_ICON_UNKNOWN;} //Demon Blade
        case 55:{return UI_GFX_ICON_UNKNOWN;} //Ace of Swords
        case 56:{return UI_GFX_POCKET_AXE_1;} //Battle Axe
        case 57:{return UI_GFX_POCKET_AXE_2;} //Mithril Axe
        case 58:{return UI_GFX_POCKET_AXE_3;} //Troll's Axe
        case 59:{return UI_GFX_POCKET_AXE_4;} //Brainbiter
        case 60:{return UI_GFX_POCKET_AXE_1;} //Deathbringer
        case 61:{return ;} //Staff
        case 62:{return ;} //Battle Staff
        case 63:{return ;} //Power Stadd
        case 64:{return ;} //Blodwyn (RIP)
        case 65:{return ;} //Murlock (RIP)
        case 66:{return ;} //Eleanor (RIP)
        case 67:{return ;} //Roseanne (RIP)
        case 68:{return ;} //Astroth (RIP)
        case 69:{return ;} //Zothen (RIP)
        case 70:{return ;} //Baldrick (RIP)
        case 71:{return ;} //Elfric (RIP)
        case 72:{return ;} //Sir Edward (RIP)
        case 73:{return ;} //Megrim (RIP)
        case 74:{return ;} //Sethra (RIP)
        case 75:{return ;} //Mr. Flay (RIP)
        case 76:{return ;} //Ulrich (RIP)
        case 77:{return ;} //Zastaph (RIP)
        case 78:{return ;} //Hengist (RIP)
        case 79:{return ;} //Thai-Chang (RIP)
        case 80:{return ;} //Bronze Key
        case 81:{return ;} //Iron Key
        case 82:{return ;} //Serpent Key
        case 83:{return ;} //Chaos Key
        case 84:{return ;} //Dragon Key
        case 85:{return ;} //Moon Key
        case 86:{return ;} //Chromatic Key
        case 87:{return ;} //Serpent Wand
        case 88:{return ;} //Chaos Wand
        case 89:{return ;} //Dragon Wand
        case 90:{return ;} //Moon Wand
        case 91:{return ;} //Heal Wand
        case 92:{return ;} //Long Bow
        case 93:{return ;} //Frost Bow
        case 94:{return ;} //Cross Bow
        case 95:{return ;} //permit
        case 96:{return ;} //Serpent Crystal
        case 97:{return ;} //Chaos Crystal
        case 98:{return ;} //Dragon Crystal
        case 99:{return ;} //Moon Crystal
        case 100:{return ;} //Grey Gem
        case 101:{return ;} //Bluish Gem
        case 102:{return ;} //Brown Gem
        case 103:{return ;} //Tan Gem
        case 104:{return ;} //Grey Ring
        case 105:{return ;} //Serpent Ring
        case 106:{return ;} //Chaos Ring
        case 107:{return ;} //Dragon Ring
        case 108:{return ;} //Moon Ring
        case 109:{return ;} //Book of Skulls
        
    }
    
    
}

function createShield(id,type,colour){
    
    //ID = Characters ID i.e. 0 = Blodwyn
    //Type = 0 to 3 = Spade,Heart
      
    switch (colour) {
        
        case 0:{colour = PALETTE_SERPENT;};break;
        case 1:{colour = PALETTE_CHAOS;};break;
        case 2:{colour = PALETTE_DRAGON;};break;
        case 3:{colour = PALETTE_MOON;};break;
            
    }
  
    var can = document.createElement('canvas');
	can.width = 30;
	can.height = 41;
	var context = can.getContext("2d");
	context.drawImage(gfxUI[UI_GFX_SHIELD_TOP], 0, 0);
        context.drawImage(gfxUI[UI_GFX_SHIELD_CHARACTERS][id], 0, 5);
        context.drawImage(recolourSprite(gfxUI[UI_GFX_SHIELD_TYPES][type], SHIELD_PALETTE_DEFAULT, colour), 1, 21);
        context.drawImage(gfxUI[UI_GFX_SHIELD_BOTTOM], 5, 32);
	context.save();
	return can;
    
}

function uiClickAreas(){
    
    //X , Y , WIDTH , HEIGHT
    
    var UCA = [];
    
    UCA.push({x: 2,  y: 1, width: 47, height: 44}); //CHAMP 1
    UCA.push({x: 52, y: 7, width: 41, height: 32}); //STATS GRAPH
    UCA.push({x: 0,  y: 46,width: 30, height: 41}); //CHAMP 2
    UCA.push({x: 32, y: 46,width: 30, height: 41}); //CHAMP 3
    UCA.push({x: 64, y: 46,width: 30, height: 41}); //CHAMP 4
    UCA.push({x: 96, y: 13,width: 128,height: 76}); //3D VIEWPORT
    UCA.push({x: 226,y: 1, width: 94, height: 19}); //NAME TAG AREA
    UCA.push({x: 226,y: 23,width: 37, height: 22}); //SPELLBOOK
    UCA.push({x: 265,y: 23,width: 22, height: 22}); //CHARACTER STATS
    UCA.push({x: 290,y: 24,width: 14, height: 14}); //INTERACT
    UCA.push({x: 306,y: 25,width: 14, height: 12}); //OPEN POCKETS
    UCA.push({x: 228,y: 49,width: 9,  height: 11}); //ROTATE LEFT
    UCA.push({x: 238,y: 49,width: 18, height: 11}); //MOVE FORWARD
    UCA.push({x: 257,y: 49,width: 9,  height: 11}); //ROTATE RIGHT
    UCA.push({x: 269,y: 48,width: 17, height: 13}); //ATTACK
    UCA.push({x: 226,y: 61,width: 11, height: 13}); //MOVE LEFT
    UCA.push({x: 238,y: 63,width: 18, height: 11}); //MOVE BACKWARDS
    UCA.push({x: 257,y: 61,width: 11, height: 13}); //MOVE RIGHT
    UCA.push({x: 269,y: 63,width: 17, height: 13}); //DEFEND
    //UCA.push({x: }); //
    UCA.push({x: 227,y: 24,width: 14, height: 14}); //POCKET SLOT 1
    UCA.push({x: 244,y: 24,width: 14, height: 14}); //POCKET SLOT 2
    UCA.push({x: 258,y: 24,width: 14, height: 14}); //POCKET SLOT 3
    UCA.push({x: 274,y: 24,width: 14, height: 14}); //POCKET SLOT 4
    UCA.push({x: 290,y: 24,width: 14, height: 14}); //POCKET SLOT 5
    UCA.push({x: 306,y: 24,width: 14, height: 14}); //POCKET SLOT 6
    
    UCA.push({x: 227,y: 41,width: 14, height: 14}); //POCKET SLOT 7
    UCA.push({x: 244,y: 41,width: 14, height: 14}); //POCKET SLOT 8
    UCA.push({x: 258,y: 41,width: 14, height: 14}); //POCKET SLOT 9
    UCA.push({x: 274,y: 41,width: 14, height: 14}); //POCKET SLOT 10
    UCA.push({x: 290,y: 41,width: 14, height: 14}); //POCKET SLOT 11
    UCA.push({x: 306,y: 41,width: 14, height: 14}); //POCKET SLOT 12
    
    UCA.push({x: 227,y: 66,width: 14, height: 14}); //POCKET CHARACTER 0
    UCA.push({x: 244,y: 66,width: 14, height: 14}); //POCKET CHARACTER 1
    UCA.push({x: 258,y: 66,width: 14, height: 14}); //POCKET CHARACTER 2
    UCA.push({x: 274,y: 66,width: 14, height: 14}); //POCKET CHARACTER 3
    UCA.push({x: 290,y: 66,width: 14, height: 14}); //POCKET HAND
    UCA.push({x: 306,y: 66,width: 14, height: 14}); //POCKET BACK
    
    return UCA;
    
    
    
}

function uiClickInArea(x,y,ui,p) {
    if(x >= (p.ScreenX + uiClickArea[ui].x) * scale && x <= (p.ScreenX + uiClickArea[ui].x + uiClickArea[ui].width - 1) * scale
        && y >= (p.ScreenY + uiClickArea[ui].y) * scale && y <= (p.ScreenY + uiClickArea[ui].y + uiClickArea[ui].height - 1) * scale)
    {return true;}
    return false;
}

function toggleChampUI(i,p){    
    if (p.uiLeftPanel.champs[i] === false){
        p.uiLeftPanel.champs[i] = true;}else{p.uiLeftPanel.champs[i] = false;}    
}