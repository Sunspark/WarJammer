/**
 * generates a random item of loot from look-up location.
 * Requires DiceRoller to be loaded first.
 * 
 * Object TreasureGenerator
 * Public Properties
 *      None
 * Public Methods
 *      generateLoot(boolean) {return string} Takes boolean of whether this is a treasure room or not. Returns a string representing the loot.
 * 
 * @param
 * @return {void}
 * @throws Error If DiceRoller is not loaded.
 */
function TreasureGenerator() {
    'use strict';

    if (typeof DiceRoller === 'undefined') {
        throw new Error('TreasureGenerator requires DiceRoller.');
    }
    
    var _dice = new DiceRoller(),
    _treasureMap = {
        '1':'your mum',
        '2':"you're mum",
        '3':'yore mum',
        '4':'+8 Vorpal Flangeblade',
        '5':'Goblin snot',
        '6':'the sixth item...',
        '66':'need another 6'
    },
    _treasureMapObjective = {
        '1':'Oyour mum',
        '2':"Oyou're mum",
        '3':'Oyore mum',
        '4':'O+8 Vorpal Flangeblade',
        '5':'OGoblin snot',
        '6':'Othe sixth item...',
        '66':'Oneed another 6'
    }
    ;

    /**
     * generates a random item of loot from look-up location.
     * 
     * @param {boolean} blnObjectiveRoom - whether this is a treasure room or not.
     * @return {string} The loot item
     */
    this.generateLoot = function(blnObjectiveRoom) {
        var intDieRoll = _dice.roll();
        if (blnObjectiveRoom) {
            return _treasureMapObjective[intDieRoll];
        } else {
            return _treasureMap[intDieRoll];
        }
    };

}
