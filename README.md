# Bloodwych - Recreated using HTML and JavaScript

By MadMunky and Wishbone

http://www.bloodwych.co.uk

Try out the last version at http://bloodwych.co.uk/bwhtml/bloodwych.html

Movement keys for player 1 are Q,W,E,A,S,D

Movement keys for player 2 are 7,8,9,4,5,6

## TODO
    - Floor switches
    - Proper random banners
    - Avoid switched wall and doors to close when player/monster is on it
    - BUG: Player should be able to move backwards on stairs
    - BUG: Setting the value of 'savegame3' exceeded the quota. True, localStorage quota is 5mb. each save > 1MB + autosave
           Reduce to just 3 saves + autosave? Alternative save to file and make load via drag'n'drop.

## History / Changelog
    - 30.03.2020 RMB closes opened menus
    - 22.03.2020 play() request was interrupted
    - 22.03.2020 food/water is now consumed
    - 20.03.2020 removed jQuery dependency
