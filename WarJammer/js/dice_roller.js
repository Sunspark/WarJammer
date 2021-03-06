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
        
        // if the users ask for roll a d1, unless it becomes a performance bottle-neck, I don't care.
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
        // http://snook.ca/archives/javascript/javascript_pass
        
        /*
        // If anyone can figure out how to do this, so that I can junk this massive switch statement,
        // please let me know!!
        alert(objComplexTypes[strComplexType]);
        var fish = objComplexTypes[strComplexType];
        
        
        return this['rollSixSix']();
        */
        switch (strComplexType) {
        case 'SIXSIX':
            return rollSixSix();
        case 'WOD':
            return rollWOD();
        default:
            throw new Error ('unknown complex type in switch statement.');
        }
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
     * @param {string} strDiceToRoll - optional, default '1d6'. In the format 'xdy+z' where 'x' is the number of dice to roll (integer), and 'y' is the number of 'sides' on the dice (integer, or string for specials), and 'z' is an optional number to add to the end of the roll eg '2d6+1'
     * @param {string} blnShowIndividualRolls - optional, default false. True to return the results of the individual dice in the return array elements above 0.
     * @return {array} arrDiceResults - element 0 contains the sum total of the dice. Additional elements contain the individual die rolls.
     * @throws Error If incoming string does not follow format
     * @throws Error If second half of string is not recognisable to roll
     */
    this.roll = function(strDiceToRoll, blnShowIndividualRolls) {
        var
            arrReturn = [],
            arrReturnTemp = [],
            arrStringParseResults,
            intNumberToRoll,
            strTypeToRoll,
            i = 0,
            j = 0,
            k = 0,
            intAddToTotal = 0
            ;
        
        // set defaults
        if (typeof strDiceToRoll === 'undefined') {
            strDiceToRoll = '1d6';
        }
        if (typeof blnShowIndividualRolls === 'undefined') {
            blnShowIndividualRolls = false;
        }
        
        if (strDiceToRoll.match(/^\d+d(?:[0-9]+(?:\+\d+)?)$/) !== null) {
            // matches an integer (+x)
            
            arrStringParseResults = strDiceToRoll.match(/^(\d+)d([0-9]+)\+?(\d+)?$/);
            intNumberToRoll = parseInt(arrStringParseResults[1], 10);
            strTypeToRoll = arrStringParseResults[2];
            if (typeof arrStringParseResults[3] !== 'undefined') {
                intAddToTotal = parseInt(arrStringParseResults[3], 10);
            }
            for (i = 0; i < intNumberToRoll; i = i + 1) {
                arrReturnTemp.push(rollIntegerDie(parseInt(strTypeToRoll, 10)));
            }
        } else if (strDiceToRoll.match(/^\d+d(?:[A-Z0-9]+)$/) !== null) {
            // matches a complex type
            arrStringParseResults = strDiceToRoll.match(/^(\d+)d([A-Z0-9]+)$/);
            intNumberToRoll = parseInt(arrStringParseResults[1], 10);
            strTypeToRoll = arrStringParseResults[2];
            if (isValidComplexType(strTypeToRoll)) {
                // it's a complex type
                for (j = 0; j < intNumberToRoll; j = j + 1) {
                    arrReturnTemp.push(rollComplexDie(strTypeToRoll));
                }
            } else {
                throw new Error ('Type of die requested to roll (' + strTypeToRoll + ') was not valid. Must be one of the complex types or an integer.');
            }
        } else {
            throw new Error ('String passed to roll (' + strDiceToRoll + ') did not follow format - (integer)d(something)[+(integer)].');
        }
        
        arrReturn[0] = 0;
        for (k = 0; k < arrReturnTemp.length; k = k + 1) {
            arrReturn[0] = parseInt(arrReturn[0], 10) + parseInt(arrReturnTemp[k], 10);
            if (blnShowIndividualRolls) {
                arrReturn[k+1] = arrReturnTemp[k];
            }
        }
        arrReturn[0] = parseInt(arrReturn[0], 10) + parseInt(intAddToTotal, 10);
        
        return arrReturn;
    };
}