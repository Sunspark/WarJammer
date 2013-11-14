/**
 * interfaces with the random number generator to simulate rolling of dice.
 * 
 * Object DiceRoller
 * Public Properties
 *      None
 * Public Methods
 *      roll(string, boolean) {return array} takes a string in form 'xdy', rolls them and adds them up. Result is element 0 of array, optional additional elements are the individual rolls.
 * 
 * @param
 * @return {void}
 * @throws
 */
function DiceRoller() {
    'use strict';

    var objComplexTypes = {
            'SIXSIX' : 'rollSixSix',
            'WOD' : 'rollWOD'
        };

    /**
     * checks whether or not a string represents a valid complex die type
     *
     * @param {string} strComplexType - a string representation of something that might be a complex type
     * @return {boolean} true if strComplexType matches a complex type
     */
    function isValidComplexType(strComplexType) {
        var strType = '';
        for (strType in objComplexTypes) {
            if (objComplexTypes.hasOwnProperty(strType)) {
                if (strType === strComplexType) {
                    return true;
                }
            }
        }
        return false;
    }
    
    /**
     * rolls an integer sided die
     * NOTE: This uses the inbuilt random number generator. This is 'random enough' under most circumstances.
     *
     * @param {integer} intSides - the number of sides of the die. (Max result). Must be a positive integer.
     * @return {integer} the number rolled. Between 1 and intSides inclusive.
     * @throws Error if intSides is not an integer.
     */
    function rollIntegerDie(intSides) {

        if (!String(intSides).match(/^\d+$/)) {
            throw new Error ('Integer passed to rollIntegerDie (' + intSides + ') was not a positive integer.');
        }
        
        return Math.floor((Math.random()*intSides)+1);
    }
    
    /**
     * determines which complex die to roll, and returns the roll
     * NOTE : this shouldn't be used for dice which return non-integer results, such as pictoral or word dice.
     *
     * @param {string} strComplexType - the complex type required.
     * @return {integer} the 'number' rolled on the die. This may be negative.
     * @throws Error If the requested type is not valid.
     */
    function rollComplexDie(strComplexType) {
        if (!isValidComplexType(strComplexType)) {
            throw new Error ('String passed to rollComplexDie (' + strComplexType + ') was not a valid complex type.');
        }
        // http://stackoverflow.com/questions/7763549/passing-function-name-as-a-parameter-to-another-function
        // http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
        
        alert(objComplexTypes[strComplexType]);
        var fish = objComplexTypes[strComplexType];
        
        return this['rollSixSix']();
    }
    
    /**
     * rolls a dSIXSIX, defined as 2d6 concatenated.
     *
     * @return {integer} 
     */
    function rollSixSix() {
        return parseInt(String(rollIntegerDie(6)) + String(rollIntegerDie(6)),10);
    }
    
    /**
     * rolls a dWOD, defined as 1d10 dif7
     *
     * @return {integer} 1 or 0, representing success or not
     */
    function rollWOD() {
        var intTempRoll = rollIntegerDie(10);
        if (intTempRoll >= 7) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * takes a string in form 'xdy', rolls them and adds them up. 
     * Result is element 0 of array, optional additional elements are the individual rolls.
     * 
     * @param {string} strDiceToRoll - in the format 'xdy' where 'x' is the number of dice to roll (integer), and 'y' is the number of 'sides' on the dice (integer, or string for specials). eg '2d6'
     * @param {string} blnShowIndividualRolls - optional, default false. True to return the results of the individual dice in the return array elements above 0.
     * @return {array} arrDiceResults - element 0 contains the sum total of the dice. Additional elements contain the individual die rolls.
     * @throws Error If incoming string does not follow format
     * @throws Error If second half of string is not recognisable to roll
     */
    this.roll = function(strDiceToRoll, blnShowIndividualRolls) {
        var arrReturn = [], arrReturnTemp = [], arrStringParseResults, intNumberToRoll, strTypeToRoll, i = 0, j = 0, k = 0;
        // set defaults
        if (typeof blnShowIndividualRolls === 'undefined') {
            blnShowIndividualRolls = false;
        }

        if (!strDiceToRoll.match(/^\d+d.*$/)) {
            throw new Error ('String passed to roll (' + strDiceToRoll + ') did not follow format - (integer)d(something).');
        }
        arrStringParseResults = strDiceToRoll.match(/^(\d+)d(.*)$/);
        intNumberToRoll = arrStringParseResults[1];
        strTypeToRoll = arrStringParseResults[2];
        
        if (strTypeToRoll.match(/^\d+$/)) {
            // it's an integer
            for (i = 0; i < intNumberToRoll; i = i + 1) {
                arrReturnTemp.push(rollIntegerDie(strTypeToRoll));
            }
        } else if (isValidComplexType(strTypeToRoll)) {
            // it's a complex type
            for (j = 0; j < intNumberToRoll; j = j + 1) {
                arrReturnTemp.push(rollComplexDie(strTypeToRoll));
            }
        } else {
            throw new Error ('Type of die requested to roll (' + strTypeToRoll + ') was not valid. Must be one of the complex types or an integer.');
        }
        
        arrReturn[0] = 0;
        for (k = 0; k < arrReturnTemp.length; k = k + 1) {
            arrReturn[0] += arrReturnTemp[k];
            if (blnShowIndividualRolls) {
                arrReturn[k+1] = arrReturnTemp[k];
            }
        }
        
        return arrReturn;
    };
}