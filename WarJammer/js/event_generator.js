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
    _mobMap = {
        '1':'2d6x1',
        '2':'1d1x2',
        '3':'1d6x3',
        '4':'1d3x3|1d6x4',
        '5':'1d6x5',
        '6':'1d6x6',
        '7':'2AGAIN',
        '8':'1AGAIN|1UP1|1UP2'
    },
    _objectiveMobMap = {
        '1':'1d2x7|2d6+5x3',
        '2':'1d1x8',
        '3':'1d6x9',
        '4':'1d6x3|2d6x9',
        '5':'27d1x5',
        '6':'1d6x6'
    },
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
     * Generates an event (simulating drawing from the event deck).
     * If this is an objective room, there is not an event, just monsters.
     * 
     * @param {boolean} blnObjectiveRoom - whether this is an objective room or not.
     * @return {string} the derived event text
     */
    this.generateEvent = function(blnObjectiveRoom) {
        
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
            strEventText = ''
            ;
        
        // roll for event
        // oh, you fuckers, GW - there are 7 Events, and 12 Monsters.
        // so can't just do 3+!
        intDieRoll = _dice.roll('1d19');
        if (intDieRoll <= 7) {
            blnIsEvent = true;
        }
        
        // roll again for what mob
        intDieRoll = _dice.roll();
        if (blnObjectiveRoom) {
            strEventText = deriveMonsters(_objectiveMobMap[intDieRoll])[0];
        } else if (blnIsEvent) {
            strEventText = _eventMap[intDieRoll];
        } else {
            strEventText = deriveMonsters(_mobMap[intDieRoll])[0];
        }
        
        return strEventText;
    };

}
