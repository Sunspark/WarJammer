var
gobjMonsterDb = {
    '1':{
        'nameSingular':'snotling',
        'namePlural':'snotlings',
        'm':4,
        'ws':1,
        'bs':'N',
        's':1,
        't':1,
        'w':1,
        'i':1,
        'a':1,
        'ac':0,
        'g':10,
        'd':'S',
        'specialRules':'Ambush, Magic A; Gang Up'
    },
    '2':{
        'nameSingular':'minotaur',
        'namePlural':'minotaurs',
        'm':6,
        'ws':4,
        'bs':4,
        's':4,
        't':4,
        'w':15,
        'i':3,
        'a':2,
        'ac':0,
        'g':440,
        'd':1,
        'specialRules':'Fear 5'
    },
    '3':{
        'nameSingular':'orc',
        'namePlural':'orcs',
        'm':4,
        'ws':3,
        'bs':4,
        's':3,
        't':4,
        'w':3,
        'i':2,
        'a':1,
        'ac':0,
        'g':55,
        'd':1,
        'specialRules':''
    },
    '4':{
        'nameSingular':'orc archer',
        'namePlural':'orc archers',
        'm':4,
        'ws':3,
        'bs':4,
        's':3,
        't':4,
        'w':3,
        'i':2,
        'a':1,
        'ac':0,
        'g':55,
        'd':1,
        'specialRules':'Ranged Attack Str3'
    },
    '5':{
        'nameSingular':'skaven',
        'namePlural':'skaven',
        'm':4,
        'ws':3,
        'bs':4,
        's':3,
        't':3,
        'w':3,
        'i':4,
        'a':1,
        'g':40,
        'ac':0,
        'd':1,
        'specialRules':''
    },
    '6':{
        'nameSingular':'goblin',
        'namePlural':'goblins',
        'm':4,
        'ws':2,
        'bs':5,
        's':3,
        't':3,
        'w':2,
        'i':2,
        'a':1,
        'g':20,
        'ac':0,
        'd':1,
        'specialRules':''
    },
    '7':{
        'nameSingular':'Slaaneshi Cum-bucket',
        'namePlural':'Slaaneshi Cum-buckets',
        'm':0,
        'ws':0,
        'bs':'N',
        's':1,
        't':4,
        'w':15,
        'i':1,
        'a':0,
        'g':100,
        'ac':0,
        'd':1,
        'specialRules':'Ignore Blows 3'
    },
    '8':{
        'nameSingular':'Liche',
        'namePlural':'Liches',
        'm':4,
        'ws':7,
        'bs':'A',
        's':5,
        't':4,
        'w':40,
        'i':6,
        'a':5,
        'g':3500,
        'ac':0,
        'd':4,
        'specialRules':'Fear 10; Necromantic Magic 3; Magic Item x2; Magic Weapon; Regenerate 2'
    },
    '9':{
        'nameSingular':'Vampire Lord',
        'namePlural':'Vampire Lords',
        'm':6,
        'ws':8,
        'bs':1,
        's':7,
        't':6,
        'w':42,
        'i':9,
        'a':5,
        'g':3750,
        'ac':4,
        'd':3,
        'specialRules':'Magic Ambush A; Fly; Necromantic Magic 2; Magic Resistance 5; Magic Item; Magic Weapon; Vampire'
    },
    '10':{
        'nameSingular':'Ogre',
        'namePlural':'Ogres',
        'm':6,
        'ws':3,
        'bs':5,
        's':4,
        't':5,
        'w':13,
        'i':3,
        'a':2,
        'g':400,
        'ac':0,
        'd':1,
        'specialRules':'Fear 5; Massive Damage 5+2'
    }
},
gobjMonsterTable = {
    '1':{
        '1':'2d6x1',
        '2':'1d1x2',
        '3':'1d6x3',
        '4':'1d3x3|1d6x4',
        '5':'1d6x5',
        '6':'UP1'
    },
    '2':{
        '1':'1d2x7|2d6+5x3',
        '2':'1d1x8',
        '3':'1d6x9',
        '4':'1d6x3|2d6x9',
        '5':'27d1x5',
        '6':'UP1'
    },
    '3':{
        '1':'2AGAIN',
        '2':'2AGAIN',
        '3':'3d1x10',
        '4':'4d1x10',
        '5':'5d1x10',
        '6':'6d1x10'
    }
}
;
