var
gobjTreasureCards = {
    '1': {
        'name':'Time Freeze Ring',
        'fluff':'As you put it on, this ring freezes like ice, and burns into a cold blue flame, yet still feels comfortable to wear.',
        'longDescription':'The time freeze ring may be used at any time, giving the warriors an additional warrior phase straight away.',
        'goldValue':200,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '2': {
        'name':'Amulet of Power',
        'fluff':'This ornate amulet throbs dully, and a thick, black liquid appears to flow within its core.',
        'longDescription':"At the start of each warrior phase, you may roll 1D6. On 2+, your warrior's strength is increased by 2 for the rest of the turn. On a 1, the amulet explodes causing 1D6 wounds on your warrior with no modifiers for toughness or armour.",
        'goldValue':350,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '3': {
        'name':'Ensorcelled Blade',
        'fluff':"You find a blade of pure iron, tempered to the sound of arcane incantations in ages past. This weapon's magic guides your hand, making it easier to strike your foes.",
        'longDescription':"While using the ensorcelled blade, you may add +1 to your warrior's to hit rolls.",
        'goldValue':150,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '4': {
        'name':'Lucky Talisman',
        'fluff':'In the middle of a pile of rubbish in one corner of the room, you find a lucky talisman on a fine chain.',
        'longDescription':'Your warrior may use the lucky talisman at any time. Any attack made while using the lucky talisman will automatically hit.',
        'goldValue':150,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '5': {
        'name':'Invisibility Ring',
        'fluff':'As you slip this ring onto your finger, you fade and vanish from sight.',
        'longDescription':'While wearing the invisibility ring, your warrior cannot be attacked. He may fight as normal. The ring contains enough power to keep your warrior invisible for one turn.',
        'goldValue':175,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '6': {
        'name':'Incense of Healing',
        'fluff':'You find a small, decorative urn in the corner of the room, covered with magical symbols and runes.',
        'longDescription':'When opened, the urn discharges a fragrant cloud of vapour that acts as a healing potion. Every warrior on the same board section as the urn has 2D6 wounds restored.',
        'goldValue':200,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    }
},
gobjTreasureArms = {
    '11': {
        'name':'Heartseeker',
        'fluff':'This sword has the ability to warp time, guiding its own destiny to the benefit of whoever wields it in battle.',
        'longDescription':'Once per turn, while your Warrior is using this sword, you may re-roll any one of his Attacks that misses',
        'goldValue':500,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '12': {
        'name':'Berserker Sword',
        'fluff':'This brutal weapon appears to be crudely fashioned from a dull, iron-like metal, and has sinister-looking runes engraved upon its hilt',
        'longDescription':'When used by the Barbarian, this sword adds +1 to the dice roll to see if he becomes berserk.<br />When used by other Warriors, this sword has no magical effect.',
        'goldValue':250,
        'usableBy': {
            'B':true,
            'D':false,
            'E':false,
            'W':false
        }
    },
    '13': {
        'name':'Bronze Sigil Sword',
        'fluff':'The runes on this blade shimmer in the light. It is exceptionally light and wellbalanced in the hand.',
        'longDescription':'While your Warrior is using this sword he gains +2 Initiative',
        'goldValue':100,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '14': {
        'name':'Boots of Quargskin',
        'fluff':'These boots are made of a strange, soft leather covered with multicoloured swirls and stripes.',
        'longDescription':'For one turn per adventure, while your Warrior is wearing these boots. he gains +2 Movement.<br />If your Warrior tries to sell these boots, no trader will take him seriously, and they will refuse to buy them.',
        'goldValue':0,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '15': {
        'name':'Sword of Ensorcelled Iron',
        'fluff':'This dark iron blade is surrounded by a crackling, spitting aura of energy',
        'longDescription':'While your Warrior is using this sword he gets +1 on all to hit rolls',
        'goldValue':150,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '16': {
        'name':'Biting Blade',
        'fluff':'This sword has been magically sharpened to a razor-fine edge, and is capable of biting through sheet steel as if it were paper',
        'longDescription':'While your Warrior is using this sword each attack he makes ignores the first point of his opponent\'s armour.',
        'goldValue':150,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '21': {
        'name':'Sword of Stone',
        'fluff':'As soon as your Warrior picks up this sword, he feels his skin hardening into  a stone-like material, which remains as flexible as normal flesh.',
        'longDescription':'While your Warrior is using this sword he gets +2 Toughness',
        'goldValue':500,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '22': {
        'name':'Blade of Leaping Copper',
        'fluff':'This sword seems to have a life of its own, striking in a blurred arc of slicing metal',
        'longDescription':'While your Warrior is using this sword he gets +1 Attack',
        'goldValue':300,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '23': {
        'name':'Blade of Couronne',
        'fluff':'This is the blade that the master swordsmiths of Bretonnia forged to defeat an Undead Liche-king many centuries past',
        'longDescription':'While he uses this sword, each undead Monster in a square adjacent to your Warrior automatically suffers 1 Wound at the end of each turn, after any Regeneration (see the Bestiary), with no modifiers for Toughness or armour.',
        'goldValue':200,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '24': {
        'name':'Magic Sword',
        'fluff':'This blade glows with a yellow /light and is slightly warm to the touch',
        'longDescription':'While your Warrior is using this sword he may attack Monsters that are only affected by magical weapons',
        'goldValue':25,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '25': {
        'name':'Relic Blade',
        'fluff':'This holy blade is an artefact of great religious significance within the Empire, and was reputed to have been used by the realm\'s mightiest heroes in numerous battles.',
        'longDescription':'While your Warrior is using this sword he gets +1 on his to hit roll.',
        'goldValue':400,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '26': {
        'name':'Blade of Slicing',
        'fluff':'This sword moans softly as it is drawn from its scabbard, in eager anticipation of the blood it is about to spill.',
        'longDescription':'While your Warrior is using this sword he causes +2 Wounds on each successful attack.',
        'goldValue':300,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '31': {
        'name':'Darting Steel Blades',
        'fluff':'These daggers guide the hand of whoever wields them and have never been known to miss their target',
        'longDescription':'While your Warrior is using these daggers he gets +1 Attacks and you do not have to roll to see if he hits his opponent. Each attack hits automatically.<br />However, each hit from one of these daggers only does 1D6 Wounds, with no modifier for Strength',
        'goldValue':350,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '32': {
        'name':'Magical Quiver',
        'fluff':'This quiver is made from soft leather and has magical runes branded into its surface',
        'longDescription':'Any arrows or crossbow bolts placed in this quiver immediately become enchanted so they can affect Monsters that can only be hit with magical weapons.',
        'goldValue':25,
        'usableBy': {
            'B':true,
            'D':false,
            'E':true,
            'W':false
        }
    },
    '33': {
        'name':'Bone Blade',
        'fluff':'This magical blade is made of a bleached white substance that looks like bone, but is as sharp as steel.',
        'longDescription':'Once per adventure your Warrior may trade in all his normal attacks and use this sword to make a single attack that causes normal damage +(1D6 x his Battle-level) extra wounds',
        'goldValue':400,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '34': {
        'name':'Eltharion\'s Bow',
        'fluff':'This bow is enchanted with Elf magic that makes it much more accurate',
        'longDescription':'While your Warrior is using this bow he gets +1 to hit',
        'goldValue':200,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '35': {
        'name':'Sword of Might',
        'fluff':'This sword is imbued with the strength of a Minotaur, and any blow it strikes is delivered with the power of a raging beast.',
        'longDescription':'While your Warrior is using this sword he gets +1 Strength',
        'goldValue':150,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '36': {
        'name':'Cloak of Stealth',
        'fluff':'This cloak is made of an odd material that is slippery to the touch',
        'longDescription':'Once per adventure, while your Warrior is wearing this cloak, he may automatically break from pinning',
        'goldValue':100,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '41': {
        'name':'Obsidian Blade',
        'fluff':'It is believed that this sword is made from the solidified blackness of the void, explaining its ability to destroy any armour it touches',
        'longDescription':'After your Warrior has made a successful attack while using this sword, roll a D6. On a score of 1, 2 or 3 the sword makes a normal attack. On a score of 4, 5 or 6 the sword ignores and destroys the target\'s armour',
        'goldValue':450,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '42': {
        'name':'Giant Slayer',
        'fluff':'This massive sword may only be wielded with both hands and even then it takes a mighty Warrior to use it effectively',
        'longDescription':'While your Warrior is using this sword he gets +3 Strength. This sword may not be used while using a shield',
        'goldValue':250,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':false
        }
    },
    '43': {
        'name':'Sword of Resilience',
        'fluff':'This sword throws a mantle of power around its wielder, protecting him from his enemies',
        'longDescription':'While your Warrior is using this sword he gets +1 Toughness',
        'goldValue':200,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '44': {
        'name':'Sword of Resilience',
        'fluff':'This sword throws a mantle of power around its wielder, protecting him from his enemies',
        'longDescription':'While your Warrior is using this sword he gets +1 Toughness',
        'goldValue':200,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '45': {
        'name':'Helmet of Farseeing',
        'fluff':'This black helm has no apparent visor. Yet it imparts upon the wearer the ability to see clearly even in the dim light of the dungeon',
        'longDescription':'While wearing this helmet your Warrior gets the normal +1 Toughness for wearing a helm. In addition, this helmet allows him to move around and see in the dark just as if he had a lantern.',
        'goldValue':800,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':false
        }
    },
    '46': {
        'name':'Parrying Blade',
        'fluff':'This sword darts forward of its own volition to meet the weapon of an attacker, stopping the blow from hitting home',
        'longDescription':'While your Warrior is using this sword he may attempt to parry any single incoming attack. Roll a D6. On a score of 1, 2 or 3 the blade fails to work and the attack hits home. On a score of 4, 5 or 6 the attack is magically turned away and has no effect',
        'goldValue':400,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '51': {
        'name':'Deathsword',
        'fluff':'This sword\'s power is such that it cannot really be controlled and would soon overwhelm whoever carried it.',
        'longDescription':'Once per adventure your Warrior may use this sword to increase his Strength to 10 for one turn.',
        'goldValue':400,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '52': {
        'name':'Dragonhelm',
        'fluff':'This ancient Elven helm is inscribed with a glowing rune of fire',
        'longDescription':'While your Warrior is wearing this helmet he gets +2 Toughness against all fire-based attacks',
        'goldValue':300,
        'usableBy': {
            'B':true,
            'D':false,
            'E':true,
            'W':false
        }
    },
    '53': {
        'name':'Blade of Sea Gold',
        'fluff':'Forged from gold taken from the depths of the sea when the world was young, this blade is covered in runes so ancient and worn that they can no longer be read',
        'longDescription':'While your Warrior is using this sword each attack he makes ignores the first point of his opponent\'s armour',
        'goldValue':150,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '54': {
        'name':'Blade of Sea Gold',
        'fluff':'Forged from gold taken from the depths of the sea when the world was young, this blade is covered in runes so ancient and worn that they can no longer be read',
        'longDescription':'While your Warrior is using this sword each attack he makes ignores the first point of his opponent\'s armour',
        'goldValue':150,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '55': {
        'name':'Ogre Slayer',
        'fluff':'This brutal, broad-bladed axe is a powerful weapon, almost certainly of Dwarf origin',
        'longDescription':'While using this axe your Warrior gets +2 Strength (+3 if he is a Dwarf)',
        'goldValue':400,
        'usableBy': {
            'B':true,
            'D':true,
            'E':false,
            'W':false
        }
    },
    '56': {
        'name':'Ogre Slayer',
        'fluff':'This brutal, broad-bladed axe is a powerful weapon, almost certainly of Dwarf origin',
        'longDescription':'While using this axe your Warrior gets +2 Strength (+3 if he is a Dwarf)',
        'goldValue':400,
        'usableBy': {
            'B':true,
            'D':true,
            'E':false,
            'W':false
        }
    },
    '61': {
        'name':'Blessed Sword',
        'fluff':'Cooled in the waters of the temple of Ulric, this sword is a powerful weapon of purity',
        'longDescription':'While your Warrior is using this sword he only misses his opponent if his to hit roll is a 1 or a 2.',
        'goldValue':300,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '62': {
        'name':'Grey Armour of Eshkalon',
        'fluff':'This dull grey armour is made of a flaky, stone-like substance and is extremely resilient.',
        'longDescription':'While your Warrior is wearing this armour roll 1D6 for each incoming attack. On a score of 1 the armour shatters and is useless. On a score of 2 or more the armour absorbs that many Wounds',
        'goldValue':400,
        'usableBy': {
            'B':true,
            'D':true,
            'E':false,
            'W':false
        }
    },
    '63': {
        'name':'Armour of Fortune',
        'fluff':'This armour\'s gleaming metal plates magically reflect all the battles in which it has been worn in a rainbow array of never-ending carnage and war',
        'longDescription':'This armour absorbs and stores damage. When your Warrior finds it, it is completely discharged, with no Wounds stored. Once he has put it on he cannot remove it for the rest of the adventure. It can absorb 30 Wounds, after which it explodes, taking the Warrior down to zero wounds (and out of the game if there is no potion or spell handy!)',
        'goldValue':500,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':false
        }
    },
    '64': {
        'name':'Armour of Fortune',
        'fluff':'This armour\'s gleaming metal plates magically reflect all the battles in which it has been worn in a rainbow array of never-ending carnage and war',
        'longDescription':'This armour absorbs and stores damage. When your Warrior finds it, it is completely discharged, with no Wounds stored. Once he has put it on he cannot remove it for the rest of the adventure. It can absorb 30 Wounds, after which it explodes, taking the Warrior down to zero wounds (and out of the game if there is no potion or spell handy!)',
        'goldValue':500,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':false
        }
    },
    '65': {
        'name':'Undead Bane',
        'fluff':'This sword was forged in the time of Nagash, the Liche-king, and is a powerful weapon against his undead hordes',
        'longDescription':'While your Warrior is using this sword each Attack he makes against undead Monsters causes an extra 1D6 Wounds',
        'goldValue':200,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '66': {
        'name':'Undead Bane',
        'fluff':'This sword was forged in the time of Nagash, the Liche-king, and is a powerful weapon against his undead hordes',
        'longDescription':'While your Warrior is using this sword each Attack he makes against undead Monsters causes an extra 1D6 Wounds',
        'goldValue':200,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    }
}
/*,
gobjTreasureItems = {
    '11': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '12': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '13': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '14': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '15': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '16': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '21': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '22': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '23': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '24': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '25': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '26': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '31': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '32': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '33': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '34': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '35': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '36': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '41': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '42': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '43': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '44': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '45': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '46': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '51': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '52': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '53': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '54': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '55': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '56': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '61': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '62': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '63': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '64': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '65': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '66': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    }
},
gobjObjectiveTreasure = {
    '11': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '12': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '13': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '14': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '15': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '16': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '21': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '22': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '23': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '24': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '25': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '26': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '31': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '32': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '33': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '34': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '35': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '36': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '41': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '42': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '43': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '44': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '45': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '46': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '51': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '52': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '53': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '54': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '55': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '56': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '61': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '62': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '63': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '64': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '65': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    },
    '66': {
        'name':'',
        'fluff':'',
        'longDescription':'',
        'goldValue':,
        'usableBy': {
            'B':true,
            'D':true,
            'E':true,
            'W':true
        }
    }
}
*/
;