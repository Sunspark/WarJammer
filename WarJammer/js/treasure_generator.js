/**
 * generates a random item of loot from look-up location.
 * Requires DiceRoller to be loaded first.
 * 
 * TODO: the dungeon treasure is on a pre-d6
 * TODO: gold minigame, different tables for various items
 * 
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
    if (typeof gobjTreasureArms === 'undefined') {
        throw new Error('TreasureGenerator requires gobjTreasureArms.');
    }
    if (typeof gobjTreasureCards === 'undefined') {
        throw new Error('TreasureGenerator requires gobjTreasureCards.');
    }
    if (typeof gobjTreasureItems === 'undefined') {
        throw new Error('TreasureGenerator requires gobjTreasureItems.');
    }
    if (typeof gobjTreasureObjective === 'undefined') {
        throw new Error('TreasureGenerator requires gobjTreasureObjective.');
    }
    
    var _dice = new DiceRoller();

    /**
     * generates a random item of loot from look-up location.
     * 
     * @param {boolean} blnObjectiveRoom - whether this is a treasure room or not.
     * @return {object} The loot object
     */
    this.generateLoot = function(blnObjectiveRoom) {
        var
            intDieRoll = 0,
            objLoot = {
                'name':'Default loot item',
                'fluff':'This amorphous blob of grey stuff could be anything. But isn\'t.',
                'longDescription':'An error has occurred in the world, and you have no loot. Sorry.',
                'goldValue':0,
                'usableBy': {
                    'B':true,
                    'D':true,
                    'E':true,
                    'W':true
                }
            }
            ;

        if (blnObjectiveRoom) {
            intDieRoll = parseInt(_dice.roll('1dSIXSIX')[0], 10);
            objLoot = gobjTreasureObjective[intDieRoll];
        } else {
            intDieRoll = parseInt(_dice.roll()[0], 10);
            switch (intDieRoll) {
            case 1:
                objLoot.name = 'Gold mini-game';
                objLoot.fluff = 'A small amount of gold is here, but Sigmar does not favour the greedy.';
                objLoot.longDescription = 'Each player may roll as many D6 as he likes, adding up the score and multiplying it by 10 to determine how much gold his Warrior finds. However, if any of the dice score a 1 his Warrior finds nothing at all';
                break;
            case 2:
            case 3:
                intDieRoll = parseInt(_dice.roll('1dSIXSIX')[0], 10);
                objLoot = gobjTreasureCards[intDieRoll];
                break;
            case 4:
            case 5:
                intDieRoll = parseInt(_dice.roll('1dSIXSIX')[0], 10);
                objLoot = gobjTreasureArms[intDieRoll];
                break;
            case 6:
                intDieRoll = parseInt(_dice.roll('1dSIXSIX')[0], 10);
                objLoot = gobjTreasureItems[intDieRoll];
                break;
            default:
                throw new Error('unknown value in switch');
            }
        }

        return objLoot;
    };
/*
 * 
 */
}
