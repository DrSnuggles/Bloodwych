/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var maleCharacterSpriteLocations = characterSpriteLocation();
var testMon1 = 0,
        testDistance = 0,
        testDirection = 0,
        testPalette = 0;

var gfxSummon;
var gfxBehemoth;
var gfxNastyFloater;
var gfxDragon;
var gfxCrab;


function testing(){
    
     if (gfxBehemoth === null || typeof(gfxBehemoth)==='undefined' && gfx['character']['behemoth'].width > 0 && gfx['character']['summon'].width > 0) { 
        gfxBehemoth = behemothArray(gfx['character']['behemoth']);     
        gfxSummon = summonArray(gfx['character']['summon']);     
        gfxNastyFloater = nastyFloaterArray(gfx['character']['nastyfloater']);  
        gfxDragon = dragonArray(gfx['character']['dragon']);
        gfxCrab = crabArray(gfx['character']['crab']);
               
     }    
    testSummon();
    
}

function testSummon(){
    
    var tmpPalettes = [];
    
    var testP0 = new Array(COLOUR[0],COLOUR[0],COLOUR[7],COLOUR[8]),
        testP1 = new Array(COLOUR[0],COLOUR[8],COLOUR[4],COLOUR[14]),
        testP2 = new Array(COLOUR[0],COLOUR[5],COLOUR[6],COLOUR[14]),
        testP3 = new Array(COLOUR[0],COLOUR[9],COLOUR[12],COLOUR[11]),
        testP4 = new Array(COLOUR[0],COLOUR[10],COLOUR[11],COLOUR[13]),
        testP5 = new Array(COLOUR[0],COLOUR[11],COLOUR[13],COLOUR[14]),
        testP6 = new Array(COLOUR[0],COLOUR[12],COLOUR[11],COLOUR[14]),
        testP7 = new Array(COLOUR[0],COLOUR[2],COLOUR[3],COLOUR[14]),
        testP8 = new Array(COLOUR[0],COLOUR[8],COLOUR[4],COLOUR[13]),
        testP9 = new Array(COLOUR[0],COLOUR[5],COLOUR[6],COLOUR[13]),
        testP10 = new Array(COLOUR[0],COLOUR[7],COLOUR[8],COLOUR[4]),
        testP11 = new Array(COLOUR[0],COLOUR[7],COLOUR[8],COLOUR[13]);

        tmpPalettes.push(testP0,testP1,testP2,testP3,testP4,testP5,testP6,testP7,testP8,testP9,testP10,testP11)
        var myTmp = 6;}
        
//    try{
//    if (gfxCrab !== null || typeof(gfxCrab)!=='undefined') {
//        
//        var testGfx = gfxSummon;
//        
//        ctx.drawImage(recolourSprite(testGfx[testMon1][testDistance][testDirection], MON_PALETTE_DEFAULT, tmpPalettes[myTmp]),145*scale,25*scale,testGfx[testMon1][testDistance][testDirection].width*scale,testGfx[testMon1][testDistance][testDirection].height*scale);
//        ctx.drawImage(recolourSprite(testGfx[1][0][4], MON_PALETTE_DEFAULT, tmpPalettes[myTmp]),133*scale,24*scale,testGfx[1][0][4].width*scale,testGfx[1][0][4].height*scale);
//        ctx.drawImage(recolourSprite(testGfx[1][0][5], MON_PALETTE_DEFAULT, tmpPalettes[myTmp]),170*scale,24*scale,testGfx[1][0][5].width*scale,testGfx[1][0][5].height*scale);
//        }
//    }catch(e){}

//    try{
//    if (gfxUI !== null || typeof(gfxUI)!=='undefined') {
//        
//        var testGfx = gfxUI,
//                testVar = UI_NAME_RED ;
//        
//        ctx.drawImage(testGfx[testVar],145*scale,25*scale,testGfx[testVar].width*scale,testGfx[testVar].height*scale);
//        
//        }
//    }catch(e){}
//    
//}

