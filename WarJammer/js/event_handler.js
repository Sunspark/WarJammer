var gobjThisEvent = {};

/**
 * creates a table with tables for each monster from the global _event on the page
 *
 * @param {integer} intMonsterId - the array index that the monster is in in the global event
 */
function generateMonsterEntryTable(intMonsterId) {
    'use strict';
    // check for presence of _event
    var
        strMonsterTable = '',
        objThisMonster = gobjThisEvent.monsters[intMonsterId]
    ;

    strMonsterTable = strMonsterTable + '<div id="hurtBlock' + intMonsterId +'">';
    strMonsterTable = strMonsterTable + '<table>';
    
    // stat titles row
    strMonsterTable = strMonsterTable + '<tr>';
    strMonsterTable = strMonsterTable + '<th>' + objThisMonster.nameSingular + '</th>';
    strMonsterTable = strMonsterTable + '<td>Mov</td>';
    strMonsterTable = strMonsterTable + '<td>WS</td>';
    strMonsterTable = strMonsterTable + '<td>BS</td>';
    strMonsterTable = strMonsterTable + '<td>Str</td>';
    strMonsterTable = strMonsterTable + '<td>Tuf</td>';
    strMonsterTable = strMonsterTable + '<td>Int</td>';
    strMonsterTable = strMonsterTable + '<td>Att</td>';
    strMonsterTable = strMonsterTable + '<td>Armour</td>';
    strMonsterTable = strMonsterTable + '<td>Damage</td>';
    strMonsterTable = strMonsterTable + '<td>Gold</td>';
    strMonsterTable = strMonsterTable + '<td>Special</td>';
    strMonsterTable = strMonsterTable + '</tr>';

    // mob values row
    strMonsterTable = strMonsterTable + '<tr>';
    strMonsterTable = strMonsterTable + '<td><span id="monsterHits' + intMonsterId + '">' + objThisMonster.currentHits + '</span>/' + objThisMonster.startingHits + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.moveRate + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.weaponSkill + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.ballisticSkill + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.strength + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.toughness + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.initiative + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.attacks + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.armour + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.damage + 'd6</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.goldValue + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + objThisMonster.specialRules + '</td>';
    strMonsterTable = strMonsterTable + '</tr>';

    // Defender's ws row
    strMonsterTable = strMonsterTable + '<tr>';
    strMonsterTable = strMonsterTable + "<th>Defender's WS</th>";
    strMonsterTable = strMonsterTable + '<td>1</td>';
    strMonsterTable = strMonsterTable + '<td>2</td>';
    strMonsterTable = strMonsterTable + '<td>3</td>';
    strMonsterTable = strMonsterTable + '<td>4</td>';
    strMonsterTable = strMonsterTable + '<td>5</td>';
    strMonsterTable = strMonsterTable + '<td>6</td>';
    strMonsterTable = strMonsterTable + '<td>7</td>';
    strMonsterTable = strMonsterTable + '<td>8</td>';
    strMonsterTable = strMonsterTable + '<td>9</td>';
    strMonsterTable = strMonsterTable + '<td>10</td>';
    strMonsterTable = strMonsterTable + '<td>&nbsp;</td>';
    strMonsterTable = strMonsterTable + '</tr>';
    
    // to hit score row
    //intTargetNumber = gobjToHitTable[intAttackersWs][intDefendersWs];
    strMonsterTable = strMonsterTable + '<tr>';
    strMonsterTable = strMonsterTable + '<th>To Hit</th>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][1] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][2] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][3] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][4] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][5] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][6] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][7] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][8] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][9] + '</td>';
    strMonsterTable = strMonsterTable + '<td>' + gobjToHitTable[objThisMonster.weaponSkill][10] + '</td>';
    strMonsterTable = strMonsterTable + '<td>';
    strMonsterTable = strMonsterTable + '<input id="hurtBox' + intMonsterId +'" type="text" maxlength="2" size="2" />';
    strMonsterTable = strMonsterTable + '<select id="hurtBy' + intMonsterId + '"><option value="b" selected="selected">Barbarian</option><option value="d">Dwarf</option><option value="e">Elf</option><option value="w">Wizard</option></select>';
    strMonsterTable = strMonsterTable + '<button id="hurtButton-' + intMonsterId + '" onClick="hurtMonster(this.id);checkEventEnd();">Hurt Me</button>';
    strMonsterTable = strMonsterTable + '</td>';
    strMonsterTable = strMonsterTable + '</tr>';
    
    strMonsterTable = strMonsterTable + '</table>';
    strMonsterTable = strMonsterTable + '</div>';
    
    return strMonsterTable;
}

/**
 * creates a table with tables for each monster from the global _event on the page
 *
 */
function generateMonsterTable() {
    'use strict';
    // check for presence of _event
    var
        strMonsterTable = '',
        i = 0
    ;

    strMonsterTable = strMonsterTable + '<div id="monsters_div">';
    for (i = 0; i < gobjThisEvent.monsters.length; i = i + 1) {
        strMonsterTable = strMonsterTable + generateMonsterEntryTable(i);
    }
    strMonsterTable = strMonsterTable + '</div>';
    
    return strMonsterTable;
}

/**
 * populates the event page with values from the global _event on the page
 *
 */
function populateEventTable() {
    'use strict';
    // check for presence of _event
    var strEventTable = '';
    
    strEventTable = strEventTable + '<div id="event_div">';
    strEventTable = strEventTable + '<h2>' + gobjThisEvent.eventType + '</h2>';
    strEventTable = strEventTable + '<p>' + gobjThisEvent.eventDescription + '</p>';
    if (gobjThisEvent.eventType === 'MONSTERS') {
        strEventTable = strEventTable + generateMonsterTable();
    }
    strEventTable = strEventTable + '</div>';
    results.innerHTML = strEventTable;
}

/**
 * generates a new event, and calls populate
 *
 */
function newEventDraw() {
    'use strict';
    // check for presence of _event
    var eventGenerator = new EventGenerator();
    gobjThisEvent = eventGenerator.generateEvent(dungeon_level.value, objective_checkbox.checked);
    console.log(gobjThisEvent);
    populateEventTable();
}

/**
 * hurts a monster in the global event, and updates the display
 *
 * @param {string} strButtonId - the ID of the calling element, which should be 'hurtButton-d'.
 */
function hurtMonster(strButtonId) {
    'use strict';
    // check for presence of _event
    //console.log(strButtonId);
    var
        strMonsterId = '',
        intMonsterId = 0,
        strHurtBoxId = '',
        strHurtBoxContents = '',
        strHurtById = '',
        strHurtByContents = '',
        intHurtPoints = 0,
        strMonsterHitDisplayId = '',
        strHurtBlockId = ''
        ;
    strMonsterId = String(strButtonId).split(/\-/)[1];
    strHurtBoxId = 'hurtBox' + strMonsterId;
    strHurtBoxContents = document.getElementById(strHurtBoxId).value;
    strHurtById = 'hurtBy' + strMonsterId;
    strHurtByContents = document.getElementById(strHurtById).value;
    
    if (strHurtBoxContents.match(/^\d{1,2}$/) !== null) {
        // hurting the monster.
        // alert('ow!');
        intMonsterId = parseInt(strMonsterId, 10);
        intHurtPoints = parseInt(strHurtBoxContents, 10);
        gobjThisEvent.monsters[intMonsterId].takeDamage(intHurtPoints);
        strMonsterHitDisplayId = 'monsterHits' + intMonsterId;
        document.getElementById(strMonsterHitDisplayId).innerHTML = gobjThisEvent.monsters[intMonsterId].currentHits;

        if (gobjThisEvent.monsters[intMonsterId].isDead() === true) {
            //alert('You killed a monster, the other monsters move up!');
            strHurtBlockId = 'hurtBlock' + intMonsterId;
            $('#' + strHurtBlockId).slideUp();
            //document.getElementById(strHurtBlockId).style.display = 'none';
            gobjThisEvent.monsters[intMonsterId].killedBy = strHurtByContents;
        }
    } else {
        // who's the real monster?
        alert('The amount of HP to deal to the monster must be one or two digits');
    }
}

/**
 * calculates loot from an event.
 * 
 *
 */
function generateLoot() {
    'use strict';
    // check for presence of _event
    var
        intBarbarianGold = 0,
        intDwarfGold = 0,
        intElfGold = 0,
        intWizardGold = 0,
        i = 0,
        strFinalLoot = '',
        strRoomLoot = '',
        j = 0,
        treasureGenerator = new TreasureGenerator()
        ;
    
    for (i = 0; i < gobjThisEvent.monsters.length; i = i + 1) {
        switch (gobjThisEvent.monsters[i].killedBy) {
        case 'b':
            intBarbarianGold = intBarbarianGold + gobjThisEvent.monsters[i].goldValue;
            break;
        case 'd':
            intDwarfGold = intDwarfGold + gobjThisEvent.monsters[i].goldValue;
            break;
        case 'e':
            intElfGold = intElfGold + gobjThisEvent.monsters[i].goldValue;
            break;
        case 'w':
            intWizardGold = intWizardGold + gobjThisEvent.monsters[i].goldValue;
            break;
        default:
            console.log('monster ' + i + ' wasnt killed by anyone');
            break;
        }
    }
    
    strFinalLoot = strFinalLoot + 'Barbarian gets ' + intBarbarianGold + 'gp<br />';
    strFinalLoot = strFinalLoot + 'Dwarf gets ' + intDwarfGold + 'gp<br />';
    strFinalLoot = strFinalLoot + 'Elf gets ' + intElfGold + 'gp<br />';
    strFinalLoot = strFinalLoot + 'Wizard gets ' + intWizardGold + 'gp<br />';
    
    if (objective_checkbox.checked === true) {
        // objective room - roll 4 times! (makes the hardcoded assumption of 4 survivors)
        for (j = 0; j < 4; j = j + 1) {
            strRoomLoot = strRoomLoot + treasureGenerator.generateLoot(objective_checkbox.checked) + '; ';
        }
    } else {
        strRoomLoot = treasureGenerator.generateLoot(objective_checkbox.checked);
    }
    strFinalLoot = strFinalLoot + 'The party gets ' + strRoomLoot;
    
    results.innerHTML = strFinalLoot;
}

/**
 * triggered after hurting a monster, rolls down the monsters and checks whether any are still alive.
 * If everything is dead, cascades to loot calculation.
 *
 */
function checkEventEnd() {
    'use strict';
    // check for presence of _event
    var
        i = 0,
        blnAllDead = true
        ;
    
    for (i = 0; i < gobjThisEvent.monsters.length; i = i + 1) {
        if (gobjThisEvent.monsters[i].isDead() === false) {
            blnAllDead = false;
            break;
        }
    }
    
    if (blnAllDead === true) {
        alert('W00t! All dead, generating your loots!');
        generateLoot();
    }
}
