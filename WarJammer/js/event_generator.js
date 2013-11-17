/**
 * generates a random event from look-up location.
 * Requires DiceRoller to be loaded first.
 * Requires Monster to be loaded first.
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
 */
function EventGenerator() {
    'use strict';

    if (typeof DiceRoller === 'undefined') {
        throw new Error('EventGenerator requires DiceRoller.');
    }
    if (typeof Monster === 'undefined') {
        throw new Error('EventGenerator requires Monster.');
    }
    var _dice = new DiceRoller(),
    _eventMap = {
        '1':'your mum',
        '2':"you're mum",
        '3':'yore mum',
        '4':'Cave-In',
        '5':'Explosim',
        '6':'Tell me secrets!'
    }
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
     * 
     * @param {integer} intDungeonLevel - the level of the dungeon being played
     * @param {boolean} blnObjectiveRoom - whether this is an objective room or not.
     * @return {string} the derived event text
     */
    this.generateEvent = function(intDungeonLevel, blnObjectiveRoom) {
        
        // is it objective room?
        // is it an event or a mob?
        // roll for thing
        // if event, does it have a chaser?
        // does it have treasure?
        // display mob bar
        // display mob count - cash and number ?HP delivered?
        // initialise counter
        // reset counter
        // ?loot pool?
        // use event deck/ use rp book
        // roll on use items?
        // roll for events?
        // roll for draw agian?
        
        
        
        //alert('looting ' + String(blnObjectiveRoom));
        var intDieRoll = 0,
            blnIsEvent = false,
            strEventText = '',
            strMobMapText = ''
            ;
        
        if (blnObjectiveRoom) {
            // objective room is just roll twice on the mob table
            strMobMapText = rollForMobs(intDungeonLevel) + '|' + rollForMobs(intDungeonLevel);
            strEventText = deriveMonsters(strMobMapText)[0];
        } else {
            // roll for event
            // oh, you fuckers, GW - there are 7 Events, and 12 Monsters.
            // so can't just do 3+!
            intDieRoll = parseInt(_dice.roll('1d19')[0], 10);
            if (intDieRoll <= 7) {
                blnIsEvent = true;
            }
            
            if (blnIsEvent) {
                intDieRoll = parseInt(_dice.roll()[0], 10);
                strEventText = _eventMap[intDieRoll];
            } else {
                strMobMapText = rollForMobs(intDungeonLevel);
                strEventText = deriveMonsters(strMobMapText)[0];
            }
        }
        
        return strEventText;
    };

}
