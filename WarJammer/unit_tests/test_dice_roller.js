var DiceRoller = new DiceRoller(),
    arrIntegerDieTypes = [1,2,3,6,10]
;
module("integer dice");
function testRollIntegerDieType(intDieType) {
    'use strict';
    var i = 0, intRoll = 0, blnFail = false;
    for (i = 0; i < 100; i = i + 1) {
        intRoll = DiceRoller.roll('1d' + intDieType)[0];
        if (intRoll < 1 || intRoll > intDieType) {
            blnFail = true;
            break;
        }
    }
    return blnFail;
}
function testRollMultipleIntegerDieType(intMultiple, intDieType) {
    'use strict';
    var i = 0, intRoll = 0, blnFail = false;
    for (i = 0; i < 100; i = i + 1) {
        intRoll = DiceRoller.roll(intMultiple + 'd' + intDieType)[0];
        if (intRoll < intMultiple || intRoll > (intMultiple * intDieType)) {
            blnFail = true;
            break;
        }
    }
    return blnFail;
}
function testRollIntegerDieTypePlusOne(intDieType) {
    'use strict';
    var i = 0, intRoll = 0, blnFail = false;
    for (i = 0; i < 100; i = i + 1) {
        intRoll = DiceRoller.roll('1d' + intDieType + '+1')[0];
        if (intRoll < 2 || intRoll > intDieType+1) {
            blnFail = true;
            break;
        }
    }
    return blnFail;
}
//without any arguments, roll() should roll 1d6
test(
    "no args",
    function() {
        'use strict';
        var i = 0, intRoll = 0, blnFail = false;
        for (i = 0; i < 100; i = i + 1) {
            intRoll = DiceRoller.roll()[0];
            if (intRoll < 1 || intRoll > 6) {
                blnFail = true;
                break;
            }
        }
        strictEqual(blnFail, false, "no args");
    }
);

//each of the integer dice should roll between 1 and their max.
//tests that roll() can recognise '1dx'
test(
    "1dx",
    function() {
        'use strict';
        var j = 0, intDieType = 0;
        for (j = 0; j < arrIntegerDieTypes.length; j = j + 1) {
            intDieType = arrIntegerDieTypes[j];
            strictEqual(testRollIntegerDieType(intDieType), false, "d" + intDieType);
        }
    }
);
//each of the integer dice should roll between die number and their max.
//tests that roll() can recognise 'ydx'
test(
    "2dx",
    function() {
        'use strict';
        var j = 0, intDieType = 0;
        for (j = 0; j < arrIntegerDieTypes.length; j = j + 1) {
            intDieType = arrIntegerDieTypes[j];
            strictEqual(testRollMultipleIntegerDieType(2, intDieType), false, "2d" + intDieType);
        }
    }
);
// tests that roll() can recognise 'ydx+z'
test(
    "die plus x",
    function() {
        'use strict';
        var j = 0, intDieType = 0;
        for (j = 0; j < arrIntegerDieTypes.length; j = j + 1) {
            intDieType = arrIntegerDieTypes[j];
            strictEqual(testRollIntegerDieTypePlusOne(intDieType), false, "d" + intDieType + '+1');
        }
    }
);

module("complex dice");
test(
    "1dSIXSIX",
    function() {
        'use strict';
        var i = 0, intRoll = 0, blnFail = false;
        for (i = 0; i < 100; i = i + 1) {
            intRoll = String(DiceRoller.roll('1dSIXSIX')[0]);
            if (!String(intRoll).match(/^[1-6][1-6]$/)) {
                alert('dSIXSIX FAIL: ' + intRoll);
                blnFail = true;
                break;
            }
        }
        strictEqual(blnFail, false, "1dSIXSIX");
    }
);
test(
    "1dWOD",
    function() {
        'use strict';
        var i = 0, intRoll = 0, blnFail = false;
        //alert(DiceRoller.roll('1dWOD'));
        for (i = 0; i < 100; i = i + 1) {
            intRoll = DiceRoller.roll('1dWOD')[0];
            if (intRoll !== 1 && intRoll !== 0) {
                //alert('dWOD FAIL: ');
                //alert(intRoll);
                blnFail = true;
                break;
            }
        }
        strictEqual(blnFail, false, "1dWOD");
    }
);
