/**
 * Creates a monster instance from the monster database
 * Requires gobjMonsterDb to be loaded as a global variable first.
 * 
 * Object Monster
 * Public Properties
 *     nameSingular - Name of the monster
 *     namePlural - Name of the monster
 *     startingHits
 *     currentHits
 *     moveRate
 *     weaponSkill
 *     ballisticSkill
 *     strength
 *     toughness
 *     initiative
 *     attacks
 *     armour - add this to toughness for wound calculations
 *     goldValue
 *     damage - integer, number of d6 the monster deals
 *     specialRules - semicolon delimited list
 * Public Methods
 *      generateEvent(boolean) {return string} Takes boolean of whether this is a treasure room or not. Returns a string representing the event.
 * 
 * @param
 * @return {void} 
 * @throws Error If the monster database is not loaded.
 */
function Monster(intMonsterId) {
    'use strict';
    
    var _that = this;
    
    function init(objMonsterDbEntry) {
        _that.nameSingular = objMonsterDbEntry.nameSingular;
        _that.namePlural = objMonsterDbEntry.namePlural;
        _that.startingHits = objMonsterDbEntry.w;
        _that.currentHits = objMonsterDbEntry.w;
        _that.moveRate = objMonsterDbEntry.m;
        _that.weaponSkill = objMonsterDbEntry.ws;
        _that.ballisticSkill = objMonsterDbEntry.bs;
        _that.strength = objMonsterDbEntry.s;
        _that.toughness = objMonsterDbEntry.t;
        _that.initiative = objMonsterDbEntry.i;
        _that.attacks = objMonsterDbEntry.a;
        _that.armour = objMonsterDbEntry.ac;
        _that.goldValue = objMonsterDbEntry.g;
        _that.damage = objMonsterDbEntry.d;
        _that.specialRules = objMonsterDbEntry.specialRules;
    }
    
    this.takeDamage = function(intNumberOfHits) {
        _that.currentHits = _that.currentHits - intNumberOfHits;
        if (_that.currentHits < 0) {
            _that.currentHits = 0;
        }
    };
    
    if (typeof gobjMonsterDb === 'undefined') {
        throw new Error('Monster() needs the monster db global object to be defined.');
    }
    init(gobjMonsterDb[intMonsterId]);
}