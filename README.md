# Bloodwych - Recreated using HTML and JavaScript

Original HTML version by MadMunky (madmunkey@gmail.com) and Wishbone
http://bloodwych.co.uk/bwhtml/bloodwych.html

This fork by DrSnuggles
https://DrSnuggles.github.io/bloodwych

## Sources
- Web: http://www.bloodwych.co.uk
- Forum: https://www.ultimateamiga.com/index.php?board=119.0
- Hungry Horace ReSource: https://github.com/HoraceAndTheSpider/Bloodwych-68k
- Mad Munkey: https://github.com/madmunky/Bloodwych
- Infos: http://www.alanchapman.org/bloodwych/
- Box cover by Chris Achielléos: http://chrisachilleos.co.uk/achilleos_crystal_guardian_web-688/
- Shop: https://chrisachilleos.ecwid.com/#!/Crystal-Guardian/p/9551739

## Description
The land of Trazere was once ruled by the powerful and benevolent organization of mages known as Bloodwych. Governed by the Grand Dragon, the Bloodwych supervised over the balance in the land, protecting it from evil and driving it to prosperity. However, the second-in-command of Bloodwych, named Zendick, turned against his group, banished his opponents to the astral plane, and began working on a mad plan - summon the ultimate evil, the Lord of Entropy. The player controls the champion of Trazere, whose ultimate goal is to stop Zendick and restore peace in the country.

Bloodwych is an RPG in the style of Dungeon Master and Eye of the Beholder, being a 3D first-person maze-like game. This game's distinguishing feature is the two-player split screen support, allowing simultaneous playing on one device.

Each player controls a party of four characters. The four basic classes are warrior, mage, adventurer, and thief; however, each class also has sub-classes, which are represented by four different colors. These colors come into play also when the characters learn and combine spells.

## Strategies & Hints
- At the beginning of the game, before you recruit your party, first recruit every character that you don't want to use. Take their supplies, then dismiss them. I find it best to dismiss them into the same room so you don't mistakenly recruit them a second time.
- Don't buy anything from shops except potions. You'll always find better armour and weapons in the dungeon.
- Use Alchemy to convert useless armor and weapons into gold. You'll get more gold from casting Alchemy than from selling items at shops. If you develop Alchemy early in the game it will only be necessary for two or three characters to carry enough gold for your party by the time you reach the Serpent Tower.
- Discard common keys when you obtain Magelock to conserve pack space. Any door you can lock and unlock with common keys you can lock and unlock with Magelock (except on Moon Tower 4, Chaos Tower 6, and Zendik's Tower 4 so keep a key handy for those places).
- You'll need Magelock on Moon Tower 2 and Levitate Moon Tower 3. If you don't get these spells by the time you enter the Moon Tower you won't be able to progress through the game and you'll have to start over.
- All characters can wear all armour and gloves. Mages and Archers can use only round shields.
- The best party is two fighters in front and two mages in back. Equip your mages with bows, then crossbows, then Frost bows.
- Strength, Agility, and Vitality are most important for Fighters. Choose Ulrich Sternaxe and Blodwyn Stonemaiden.
- Intelligence is most important for Mages. Choose Murlock Darkenheart and Megrim of Moonwych.
- There's no advantage to having Adventurers or Archers in your party.
- It's possible to complete the game while taking very few hits from monsters if you use the "side-step and turn" method. Some monsters can cast Arc Bolt while you're waiting for them to step in the square in front of you.
- There are some Arc Bolt traps that are impossible to avoid. Use Antimage to protect yourself in these areas.
- It's a waste of time to talk to and trade with monsters in Bloodwych. However, trading with monsters in the Extended Levels can be useful. It's possible to get better weapons than the ones you have.
- Always have extra Dragon Ales and Moon Elixirs handy. When you're in heavy combat you'll need extra Vitality and Mana.
- The Vitalise spell doesn't replenish very much Vitality. Carry extra Dragon Ales.
- Blue spells are the least useful. Choose them last.
- If you discover any Mindrocks (illusionary walls) just Dispell them instead of using Trueview.
- It's possible to avoid combat by running around monsters in certain places. But, you'll miss out on experience points.
- A character cannot wear two spells simultaneously. For example, if you cast Antimage, and then cast Levitate, Antimage will cancel out and Levitate will replace it. If you need both spells active then have two characters each cast one of the spells.
- Arrows shot into stair cases cannot be retrieved.
- There are some areas which prevent spellcasting. Especially in the Chaos Tower. If you can't cast spells try luring the monsters into an adjacent room. Sometimes spells will work just a few squares away.
- The Chaos Tower is the most difficult tower to complete. It was by far the most difficult to map.
- Disrupt is the most powerful offensive spell. Sometimes it will kill with one cast.
- Sometimes monsters will walk onto the stairs. If you kill them while they're on the stairs you won't be able to retrieve the items they drop. Wait until they walk off the stairs.
- Rings allow spellcasting without consuming spell points.
- It's possible to Recharge rings with more than 3 charges.
- Recharge your rings before you sleep.
- The Serpent, Moon, Dragon, and Chaos wands allow your characters to cast spells using less spell points than normally required. This is very helpful when excessive spellcasting is required for a particular situation or when characters don't have quite enough spell points to cast a certain spell.
- Sleeping with Heal wands in your hands will regenerate health quicker.
- There are two Heal wands in the game. They're located in secret rooms on Main Tower 3. You can get them only after you acquire the Tan and Bluish gems from the Serpent Tower.
- Sometimes food is plentiful while other times it is scarce. It's helpful to leave excess food in a familiar location which is easily accessible over the course of the game. The hallway on level 4 of the Main Tower where the stairs go in three directions is an easy place to remember.
- Zendik drops the Ace of Swords when killed on Zendik's Tower 4. It's the most powerful weapon in the game.

## Issuing commands

### Wait
Forces a character in your party to wait in the square in front of you. You can't control waiting characters. They will stand still, facing the direction you were facing, until you call them back into your party. You can switch to the view of waiting characters. This is helpful for observing changes in other parts of the level from pushing buttons or stepping on pressure plates.

### View
Allows you to see through the eyes of a waiting character. This is helpful for observing changes in other parts of the level from pressing buttons or stepping on pressure plates.

### Call
Recalls waiting characters back into your party. Note that the pathfinding is bad. If you're too far from waiting characters they will run in circles. If you're near an Arc Bolt shooter they'll most likely die.

## Controls
Movement keys for player 1 are Q,W,E,A,S,D

Movement keys for player 2 are 7,8,9,4,5,6

## ToDo / Soon™
    - screen scaling
    - single player scaling
    - change ingame loading behaviour
      - fading behemoth loading screen
      - file loading info line
      - hold all info in single json file
      - guess most start std game, preload this
      - next is to just hold a single png file with all data within, just have to add sheet offsets in sprites.json
      - same with audio files
      - data ??? using the original files and store offsets in JSON? but then gfx changes are not easily testable
    - build deploy minimized version
    - toggle music + sound
    - Proper random banners
    - Avoid switched wall and doors to close when player/monster is on it
    - COD Beguile spell
    - COD Fix Big monster 'edge of screen'
    - BUG Arrows on Right UI sometimes show over pockets or scroll
    - BUG Firepath is now blinking too fast
    - GFX Beholder Fixes
    - UI  Finish communication (trading, charisma)
    - UI  PORTRAITS in png file
    - UI  Colours in uistuff.png
    - COD Switch target undefined
    + Floor switches (tested, working)
    + BUG Player should be able to move backwards on stairs (tested, working)

## TaDa / History / Changelog
    - 05.04.2020 make use of UZIP to store 10 saves in localStorage
    - 03.04.2020 Savefile as download / Load savestate via DnD
        Setting the value of 'savegame3' exceeded the localStorage quota of 5mb. Each save > 1MB + autosave.
        Added F4=QuickSave + F9=QuickLoad.
    - 30.03.2020 RMB closes opened menus
    - 22.03.2020 play() request was interrupted
    - 22.03.2020 food/water is now consumed
    - 20.03.2020 removed jQuery dependency

## License / Copyright
© All rights are still retained by the Tagliones and Peter James.

Bloodwych was designed by Anthony Taglione and Peter James.
The 68000 versions (ST & Amiga) were written by Anthony Taglione.
The Z80 Versions (ZX Spectrum, Amstrad CPC and Amstrad CPC Plus) were written by Philip Taglione.
The CBM64 version was written by Anthony Taglione and Philip Taglione.
The artist for all versions was Peter James.

We hope one of the original creators of Bloodwych will see this.
We always loved this game so much and it has inspired us to not only play this game.
