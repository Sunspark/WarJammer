/*
 * The WS vs WS to-hit table.
 * intTargetNumber = gobjToHitTable[intAttackersWs][intDefendersWs];
 */
var
gobjToHitTable = {
    '0':  {'1':'-','2':'-','3':'-','4':'-','5':'-','6':'-','7':'-','8':'-','9':'-','10':'-'},
    '1':  {'1':4,'2':4,'3':5,'4':6,'5':6,'6':6,'7':6,'8':6,'9':6,'10':6},
    '2':  {'1':3,'2':4,'3':4,'4':4,'5':5,'6':5,'7':6,'8':6,'9':6,'10':6},
    '3':  {'1':2,'2':3,'3':4,'4':4,'5':4,'6':4,'7':5,'8':5,'9':5,'10':6},
    '4':  {'1':2,'2':3,'3':3,'4':4,'5':4,'6':4,'7':4,'8':4,'9':5,'10':5},
    '5':  {'1':2,'2':3,'3':3,'4':3,'5':4,'6':4,'7':4,'8':4,'9':4,'10':4},
    '6':  {'1':2,'2':3,'3':3,'4':3,'5':3,'6':4,'7':4,'8':4,'9':4,'10':4},
    '7':  {'1':2,'2':3,'3':3,'4':3,'5':3,'6':3,'7':4,'8':4,'9':4,'10':4},
    '8':  {'1':2,'2':2,'3':3,'4':3,'5':3,'6':3,'7':3,'8':4,'9':4,'10':4},
    '9':  {'1':2,'2':2,'3':2,'4':3,'5':3,'6':3,'7':3,'8':3,'9':4,'10':4},
    '10': {'1':2,'2':2,'3':2,'4':2,'5':3,'6':3,'7':3,'8':3,'9':3,'10':4}
}
;