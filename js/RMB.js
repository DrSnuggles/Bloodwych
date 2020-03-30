/* DrSnuggles event listener for RMB
  Idea: get rid of annoying browser context menu while adding a nice feature
  Function: close all opened menus
*/
addEventListener("contextmenu", function(e) {
  e.preventDefault();// do not show std. browser context menu

  // for all players
  for (let p in player) {
    player[p].uiLeftPanel.mode = 0;
    player[p].uiRightPanel.mode = 0;
    player[p].communication.mode = 0;
    player[p].redrawViewPort = true;
    player[p].redrawLeftRightUiFlag = UI_REDRAW_ALL;
    redrawPlayerUiFlag = 3;
    drawUI(player[p]);
  }
}, false);
