/**
 * generates a random event from look-up location.
 * 
 * Object EventGenerator
 * Public Properties
 *      None
 * Public Methods
 *      generateEvent(boolean) {return string} Takes boolean of whether this is a treasure room or not. Returns a string representing the event.
 * 
 * @param
 * @return {void}
 * @throws Error If DiceRoller is not loaded.
 * @throws Error If Monster is not loaded.
 * @throws Error If gobjMonsterTable is not loaded.
 * @throws Error If gobjEventDb is not loaded.
 */
function EventGenerator() {
    'use strict';

    if (typeof DiceRoller === 'undefined') {
        throw new Error('EventGenerator requires DiceRoller.');
    }
    if (typeof Monster === 'undefined') {
        throw new Error('EventGenerator requires Monster.');
    }
    if (typeof gobjMonsterTable === 'undefined') {
        throw new Error('EventGenerator requires gobjMonsterTable.');
    }
    if (typeof gobjEventDb === 'undefined') {
        throw new Error('EventGenerator requires gobjEventDb.');
    }
    
    var _dice = new DiceRoller()
    ;
    
    /**
     * Takes monster event codes, and derives numbers and names on the monsters.
     * 
     * @param {string} strMapText - text returned from the monster lookup. In the format 'adbxc', where a,b,c are integers. May be pipe separated.
     * @return {array} [0] a string of what's here, [1...] the monster objects
     */
    function deriveMonsters(strMapText) {
        var
            arrMonsterEntries = [],
            i = 0,
            arrSplitEntry = [],
            arrMonsters = [],
            strMonsterName = '',
            intMonsterId = 0,
            intNumberOfMonsters = 0,
            strDiceCombo = '',
            j = 0,
            thisMonster,
            strRoomDescription = ''
            ;
            
        arrMonsterEntries = String(strMapText).split(/\|/);
        
        for (i = 0; i < arrMonsterEntries.length; i = i + 1) {
            //TODO: error that bitch
            arrSplitEntry = arrMonsterEntries[i].match(/(\d+d\d+\+?(?:\d+)?)x(\d+)/);
            strDiceCombo = arrSplitEntry[1];
            intMonsterId = parseInt(arrSplitEntry[2], 10);
            
            intNumberOfMonsters = parseInt(_dice.roll(strDiceCombo)[0], 10);

            // add new monster objects to the return array
            for (j = 0; j < intNumberOfMonsters; j = j + 1) {
                thisMonster = new Monster(intMonsterId);
                arrMonsters.push(thisMonster);
            }
            
            // work out the correct naming for the mobs
            if (intNumberOfMonsters > 1) {
                strMonsterName = arrMonsters[arrMonsters.length - 1].namePlural;
            } else {
                strMonsterName = arrMonsters[arrMonsters.length - 1].nameSingular;
            }
            
            // add this monster to the string description of the room
            if (strRoomDescription !== '') {
                strRoomDescription = strRoomDescription + ', ';
            }
            strRoomDescription = strRoomDescription + String(intNumberOfMonsters) + ' ' + strMonsterName;
        }
        // unshift() adds to front of array
        arrMonsters.unshift(strRoomDescription);
       
        return arrMonsters;
    }
    /**
     * recursively calls itself to look up mob events from the mob event table
     * 
     * TODO: What about split entry mobs??
     *
     * @param {integer} intDungeonLevel - the level of the dungeon
     * @return {string} the mob event codes for the final rolled event, suitable for deriveMonsters()
     */
    function rollForMobs(intDungeonLevel) {
        var
            intDieRoll = 0,
            strMobMapText = ''
            ;

        intDieRoll = parseInt(_dice.roll()[0], 10);
        strMobMapText = gobjMonsterTable[intDungeonLevel][intDieRoll];
        if (strMobMapText === 'UP1') {
            console.log('Oh noes!! When rolling at level ' + intDungeonLevel + ' you increased the roll level!');
            strMobMapText = rollForMobs(parseInt(intDungeonLevel, 10) + 1);
        } else if (strMobMapText === '2AGAIN') {
            console.log('Oh noes!! When rolling at level ' + intDungeonLevel + ' you had to take 2 rolls!');
            strMobMapText = rollForMobs(intDungeonLevel);
            strMobMapText = strMobMapText + '|' + rollForMobs(intDungeonLevel);
        }
        return strMobMapText;
    }
    
    /**
     * Generates an event (simulating drawing from the event deck).
     * If this is an objective room, there is not an event, just monsters.
     * returned object has:
     * {
     *      'eventType': {string} - 'NMEVENT' or 'MONSTERS'
     *      'eventDescription': {string} - For NMEvents, the full text; for monsters, a summary of the monsters rolled
     *      'monsters': {array} - an array of monster objects
     * }
     * 
     * @param {integer} intDungeonLevel - the level of the dungeon being played
     * @param {boolean} blnObjectiveRoom - whether this is an objective room or not.
     * @return {object} an object representing the event
     */
    this.generateEvent = function(intDungeonLevel, blnObjectiveRoom) {
        
        // if event, does it have a chaser? - doesn't matter, a human can push the button again
        // does it have treasure? - no, NMevents don't give treasure
        // display mob bar
        // display mob count - cash and number ?HP delivered?
        // initialise counter
        // reset counter
        // ?loot pool?
        // use event deck/ use rp book
        // roll on use items?
        // roll for events? - humans can roll to resolve them
        
        
        
        //alert('looting ' + String(blnObjectiveRoom));
        var intDieRoll = 0,
            blnIsEvent = false,
            strEventText = '',
            strMobMapText = '',
            strEventType = '',
            arrMonsters = []
            ;
        
        if (blnObjectiveRoom) {
            strEventType = 'MONSTERS';
            // objective room is just roll twice on the mob table
            strMobMapText = rollForMobs(intDungeonLevel) + '|' + rollForMobs(intDungeonLevel);
            arrMonsters = deriveMonsters(strMobMapText);
            strEventText = arrMonsters.shift();
        } else {
            // roll for event
            // oh, you fuckers, GW - there are 7 Events, and 12 Monsters.
            // so can't just do 3+!
            intDieRoll = parseInt(_dice.roll('1d19')[0], 10);
            if (intDieRoll <= 7) {
                blnIsEvent = true;
            }
            
            if (blnIsEvent) {
                strEventType = 'NMEVENT';
                intDieRoll = parseInt(_dice.roll()[0], 10);
                strEventText = gobjEventDb[intDieRoll];
            } else {
                strEventType = 'MONSTERS';
                strMobMapText = rollForMobs(intDungeonLevel);
                arrMonsters = deriveMonsters(strMobMapText);
                strEventText = arrMonsters.shift();
            }
        }
        
        return {
            'eventType': strEventType,
            'eventDescription': strEventText,
            'monsters': arrMonsters
        };
    };

}
