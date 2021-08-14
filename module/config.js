import { ClassFeatures } from "./classFeatures.js"

// Namespace Configuration Values
export const PERGASHA = {};

// ASCII Artwork
PERGASHA.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
PERGASHA.abilities = {
  "str": "PERGASHA.AbilityStr",
  "dex": "PERGASHA.AbilityDex",
  "con": "PERGASHA.AbilityCon",
  "int": "PERGASHA.AbilityInt",
  "wis": "PERGASHA.AbilityWis",
  "cha": "PERGASHA.AbilityCha"
};

PERGASHA.abilityAbbreviations = {
  "str": "PERGASHA.AbilityStrAbbr",
  "dex": "PERGASHA.AbilityDexAbbr",
  "con": "PERGASHA.AbilityConAbbr",
  "int": "PERGASHA.AbilityIntAbbr",
  "wis": "PERGASHA.AbilityWisAbbr",
  "cha": "PERGASHA.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
PERGASHA.alignments = {
  'lg': "PERGASHA.AlignmentLG",
  'ng': "PERGASHA.AlignmentNG",
  'cg': "PERGASHA.AlignmentCG",
  'ln': "PERGASHA.AlignmentLN",
  'tn': "PERGASHA.AlignmentTN",
  'cn': "PERGASHA.AlignmentCN",
  'le': "PERGASHA.AlignmentLE",
  'ne': "PERGASHA.AlignmentNE",
  'ce': "PERGASHA.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types
 * @enum {number}
 */
PERGASHA.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2,
};

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
PERGASHA.attunements = {
  0: "PERGASHA.AttunementNone",
  1: "PERGASHA.AttunementRequired",
  2: "PERGASHA.AttunementAttuned"
};

/* -------------------------------------------- */


PERGASHA.weaponProficiencies = {
  "sim": "PERGASHA.WeaponSimpleProficiency",
  "mar": "PERGASHA.WeaponMartialProficiency"
};

/**
 * A map of weapon item proficiency to actor item proficiency
 * Used when a new player owned item is created
 * @type {Object}
 */
PERGASHA.weaponProficienciesMap = {
  "natural": true,
  "simpleM": "sim",
  "simpleR": "sim",
  "martialM": "mar",
  "martialR": "mar"
}

/**
 * The basic weapon types in 5e. This enables specific weapon proficiencies or
 * starting equipment provided by classes and backgrounds.
 *
 * @enum {string}
 */
PERGASHA.weaponIds = {
  "battleaxe": "I0WocDSuNpGJayPb",
  "blowgun": "wNWK6yJMHG9ANqQV",
  "club": "nfIRTECQIG81CvM4",
  "dagger": "0E565kQUBmndJ1a2",
  "dart": "3rCO8MTIdPGSW6IJ",
  "flail": "UrH3sMdnUDckIHJ6",
  "glaive": "rOG1OM2ihgPjOvFW",
  "greataxe": "1Lxk6kmoRhG8qQ0u",
  "greatclub": "QRCsxkCwWNwswL9o",
  "greatsword": "xMkP8BmFzElcsMaR",
  "halberd": "DMejWAc8r8YvDPP1",
  "handaxe": "eO7Fbv5WBk5zvGOc",
  "handcrossbow": "qaSro7kFhxD6INbZ",
  "heavycrossbow": "RmP0mYRn2J7K26rX",
  "javelin": "DWLMnODrnHn8IbAG",
  "lance": "RnuxdHUAIgxccVwj",
  "lightcrossbow": "ddWvQRLmnnIS0eLF",
  "lighthammer": "XVK6TOL4sGItssAE",
  "longbow": "3cymOVja8jXbzrdT",
  "longsword": "10ZP2Bu3vnCuYMIB",
  "mace": "Ajyq6nGwF7FtLhDQ",
  "maul": "DizirD7eqjh8n95A",
  "morningstar": "dX8AxCh9o0A9CkT3",
  "net": "aEiM49V8vWpWw7rU",
  "pike": "tC0kcqZT9HHAO0PD",
  "quarterstaff": "g2dWN7PQiMRYWzyk",
  "rapier": "Tobce1hexTnDk4sV",
  "scimitar": "fbC0Mg1a73wdFbqO",
  "shortsword": "osLzOwQdPtrK3rQH",
  "sickle": "i4NeNZ30ycwPDHMx",
  "spear": "OG4nBBydvmfWYXIk",
  "shortbow": "GJv6WkD7D2J6rP6M",
  "sling": "3gynWO9sN4OLGMWD",
  "trident": "F65ANO66ckP8FDMa",
  "warpick": "2YdfjN1PIIrSHZii",
  "warhammer": "F0Df164Xv1gWcYt0",
  "whip": "QKTyxoO0YDnAsbYe"
};

/* -------------------------------------------- */

// Artist's Supplies
// Brewer's Supplies
// Builder's Tools
// Cook's Utensils
// Harvester's Tools
// Herbalism Kit
// Jeweler's Tools
// Leatherworker's Tools
// Musical Instrument
// Poisoner's Kit
// Smith's Tools
// Thieves' Tools
// Tinker's Tools

PERGASHA.toolProficiencies = {
  "art": "PERGASHA.ToolArtist",
  "brew": "PERGASHA.ToolBrewer",
  "build": "PERGASHA.ToolBuilder",
  "cook": "PERGASHA.ToolCook",
  "harvest": "PERGASHA.ToolHarvester",
  "herb": "PERGASHA.ToolHerbalismKit",
  "jewel": "PERGASHA.ToolJeweler",
  "leather": "PERGASHA.ToolLeather",
  "music": "PERGASHA.ToolMusicalInstrument",
  "pois": "PERGASHA.ToolPoisonersKit",
  "smith": "PERGASHA.ToolSmith",
  "thief": "PERGASHA.ToolThieves",
  "tinker": "PERGASHA.ToolTinker"
};



// PERGASHA.toolProficiencies = {
//   "art": "PERGASHA.ToolArtisans",
//   "disg": "PERGASHA.ToolDisguiseKit",
//   "forg": "PERGASHA.ToolForgeryKit",
//   "game": "PERGASHA.ToolGamingSet",
//   "herb": "PERGASHA.ToolHerbalismKit",
//   "music": "PERGASHA.ToolMusicalInstrument",
//   "navg": "PERGASHA.ToolNavigators",
//   "pois": "PERGASHA.ToolPoisonersKit",
//   "thief": "PERGASHA.ToolThieves",
//   "vehicle": "PERGASHA.ToolVehicle"
// };

/**
 * The basic tool types in 5e. This enables specific tool proficiencies or
 * starting equipment provided by classes and backgrounds.
 *
 * @enum {string}
 */
PERGASHA.toolIds = {
  "alchemist": "SztwZhbhZeCqyAes",
  "bagpipes": "yxHi57T5mmVt0oDr",
  "brewer": "Y9S75go1hLMXUD48",
  "calligrapher": "jhjo20QoiD5exf09",
  "card": "YwlHI3BVJapz4a3E",
  "carpenter": "8NS6MSOdXtUqD7Ib",
  "cartographer": "fC0lFK8P4RuhpfaU",
  "cobbler": "hM84pZnpCqKfi8XH",
  "cook": "Gflnp29aEv5Lc1ZM",
  "dice": "iBuTM09KD9IoM5L8",
  "disg": "IBhDAr7WkhWPYLVn",
  "drum": "69Dpr25pf4BjkHKb",
  "dulcimer": "NtdDkjmpdIMiX7I2",
  "flute": "eJOrPcAz9EcquyRQ",
  "forg": "cG3m4YlHfbQlLEOx",
  "glassblower": "rTbVrNcwApnuTz5E",
  "herb": "i89okN7GFTWHsvPy",
  "horn": "aa9KuBy4dst7WIW9",
  "jeweler": "YfBwELTgPFHmQdHh",
  "leatherworker": "PUMfwyVUbtyxgYbD",
  "lute": "qBydtUUIkv520DT7",
  "lyre": "EwG1EtmbgR3bM68U",
  "mason": "skUih6tBvcBbORzA",
  "navg": "YHCmjsiXxZ9UdUhU",
  "painter": "ccm5xlWhx74d6lsK",
  "panflute": "G5m5gYIx9VAUWC3J",
  "pois": "il2GNi8C0DvGLL9P",
  "potter": "hJS8yEVkqgJjwfWa",
  "shawm": "G3cqbejJpfB91VhP",
  "smith": "KndVe2insuctjIaj",
  "thief": "woWZ1sO5IUVGzo58",
  "tinker": "0d08g1i5WXnNrCNA",
  "viol": "baoe3U5BfMMMxhCU",
  "weaver": "ap9prThUB2y9lDyj",
  "woodcarver": "xKErqkLo4ASYr5EP",
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
PERGASHA.timePeriods = {
  "inst": "PERGASHA.TimeInst",
  "turn": "PERGASHA.TimeTurn",
  "round": "PERGASHA.TimeRound",
  "minute": "PERGASHA.TimeMinute",
  "hour": "PERGASHA.TimeHour",
  "day": "PERGASHA.TimeDay",
  "month": "PERGASHA.TimeMonth",
  "year": "PERGASHA.TimeYear",
  "perm": "PERGASHA.TimePerm",
  "spec": "PERGASHA.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
PERGASHA.abilityActivationTypes = {
  "none": "PERGASHA.None",
  "action": "PERGASHA.Action",
  "bonus": "PERGASHA.BonusAction",
  "reaction": "PERGASHA.Reaction",
  "minute": PERGASHA.timePeriods.minute,
  "hour": PERGASHA.timePeriods.hour,
  "day": PERGASHA.timePeriods.day,
  "special": PERGASHA.timePeriods.spec,
  "legendary": "PERGASHA.LegendaryActionLabel",
  "lair": "PERGASHA.LairActionLabel",
  "crew": "PERGASHA.VehicleCrewAction"
};

/* -------------------------------------------- */


PERGASHA.abilityConsumptionTypes = {
  "ammo": "PERGASHA.ConsumeAmmunition",
  "attribute": "PERGASHA.ConsumeAttribute",
  "material": "PERGASHA.ConsumeMaterial",
  "charges": "PERGASHA.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
PERGASHA.actorSizes = {
  "tiny": "PERGASHA.SizeTiny",
  "sm": "PERGASHA.SizeSmall",
  "med": "PERGASHA.SizeMedium",
  "lg": "PERGASHA.SizeLarge",
  "huge": "PERGASHA.SizeHuge",
  "grg": "PERGASHA.SizeGargantuan"
};

PERGASHA.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars
 * @enum {number}
 */
PERGASHA.tokenHPColors = {
  temp: 0x66CCFF,
  tempmax: 0x440066,
  negmax: 0x550000
}

/* -------------------------------------------- */

/**
 * Creature types
 * @type {Object}
 */
PERGASHA.creatureTypes = {
  "aberration": "PERGASHA.CreatureAberration",
  "beast": "PERGASHA.CreatureBeast",
  "celestial": "PERGASHA.CreatureCelestial",
  "construct": "PERGASHA.CreatureConstruct",
  "dragon": "PERGASHA.CreatureDragon",
  "elemental": "PERGASHA.CreatureElemental",
  "fey": "PERGASHA.CreatureFey",
  "fiend": "PERGASHA.CreatureFiend",
  "giant": "PERGASHA.CreatureGiant",
  "humanoid": "PERGASHA.CreatureHumanoid",
  "monstrosity": "PERGASHA.CreatureMonstrosity",
  "ooze": "PERGASHA.CreatureOoze",
  "plant": "PERGASHA.CreaturePlant",
  "undead": "PERGASHA.CreatureUndead"
};


/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
PERGASHA.itemActionTypes = {
  "mwak": "PERGASHA.ActionMWAK",
  "rwak": "PERGASHA.ActionRWAK",
  // "msak": "PERGASHA.ActionMSAK",
  // "rsak": "PERGASHA.ActionRSAK",
  "mpak": "PERGASHA.ActionMPAK",
  "rpak": "PERGASHA.ActionRPAK",
  "save": "PERGASHA.ActionSave",
  "heal": "PERGASHA.ActionHeal",
  "abil": "PERGASHA.ActionAbil",
  "util": "PERGASHA.ActionUtil",
  "other": "PERGASHA.ActionOther"
};

/* -------------------------------------------- */

PERGASHA.itemCapacityTypes = {
  "items": "PERGASHA.ItemContainerCapacityItems",
  "weight": "PERGASHA.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
PERGASHA.limitedUsePeriods = {
  "sr": "PERGASHA.ShortRest",
  "lr": "PERGASHA.LongRest",
  "day": "PERGASHA.Day",
  "charges": "PERGASHA.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can be worn by the character
 * @type {Object}
 */

PERGASHA.armorLayers = {
  "under": "PERGASHA.ArmorLayerUnder",
  "meso": "PERGASHA.ArmorLayerMeso",
  "over": "PERGASHA.ArmorLayerOver",
  "comp": "PERGASHA.ArmorLayerComp"
}

PERGASHA.equipmentTypes = {
  "light": "PERGASHA.EquipmentLight",
  "medium": "PERGASHA.EquipmentMedium",
  "heavy": "PERGASHA.EquipmentHeavy",
  // "bonus": "PERGASHA.EquipmentBonus",
  "natural": "PERGASHA.EquipmentNatural",
  "shield": "PERGASHA.EquipmentShield",
  "clothing": "PERGASHA.EquipmentClothing",
  "trinket": "PERGASHA.EquipmentTrinket",
  "vehicle": "PERGASHA.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
PERGASHA.armorProficiencies = {
  "lgt": PERGASHA.equipmentTypes.light,
  "med": PERGASHA.equipmentTypes.medium,
  "hvy": PERGASHA.equipmentTypes.heavy,
  "shl": "PERGASHA.EquipmentShieldProficiency"
};

/**
 * A map of armor item proficiency to actor item proficiency
 * Used when a new player owned item is created
 * @type {Object}
 */
PERGASHA.armorProficienciesMap = {
  "natural": true,
  "clothing": true,
  "light": "lgt",
  "medium": "med",
  "heavy": "hvy",
  "shield": "shl"
}


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
PERGASHA.consumableTypes = {
  "ammo": "PERGASHA.ConsumableAmmunition",
  "potion": "PERGASHA.ConsumablePotion",
  "poison": "PERGASHA.ConsumablePoison",
  "food": "PERGASHA.ConsumableFood",
  // "scroll": "PERGASHA.ConsumableScroll",
  // "wand": "PERGASHA.ConsumableWand",
  // "rod": "PERGASHA.ConsumableRod",
  "mysterium": "PERGASHA.ConsumableMysterium",
  "trinket": "PERGASHA.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
PERGASHA.currencies = {
  "pb": "PERGASHA.CurrencyPB",
  "gb": "PERGASHA.CurrencyGB",
  "ub": "PERGASHA.CurrencyUB",
  "cb": "PERGASHA.CurrencyCB",
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 * Auto conversion mechanic not meant to be used in Pergasha - adjusted terms
 * just so things wouldn't break catastrophically
 */
PERGASHA.currencyConversion = {
  cb: { into: "up", each: 10 },
  ub: { into: "gp", each: 10 },
  gb: { into: "pp", each: 10 },
};

/* -------------------------------------------- */


// Damage Types
PERGASHA.damageTypes = {
  "acid": "PERGASHA.DamageAcid",
  "bludgeoning": "PERGASHA.DamageBludgeoning",
  "cold": "PERGASHA.DamageCold",
  "fire": "PERGASHA.DamageFire",
  "force": "PERGASHA.DamageForce",
  "lightning": "PERGASHA.DamageLightning",
  "necrotic": "PERGASHA.DamageNecrotic",
  "piercing": "PERGASHA.DamagePiercing",
  "poison": "PERGASHA.DamagePoison",
  "psychic": "PERGASHA.DamagePsychic",
  "radiant": "PERGASHA.DamageRadiant",
  "slashing": "PERGASHA.DamageSlashing",
  "thunder": "PERGASHA.DamageThunder"
};

// Damage Resistance Types
PERGASHA.damageResistanceTypes = mergeObject(foundry.utils.deepClone(PERGASHA.damageTypes), {
  "physical": "PERGASHA.DamagePhysical"
});


/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
PERGASHA.movementTypes = {
  "burrow": "PERGASHA.MovementBurrow",
  "climb": "PERGASHA.MovementClimb",
  "fly": "PERGASHA.MovementFly",
  "swim": "PERGASHA.MovementSwim",
  "walk": "PERGASHA.MovementWalk",
};

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
PERGASHA.movementUnits = {
  "ft": "PERGASHA.DistFt",
  "mi": "PERGASHA.DistMi"
};

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from PERGASHA.movementUnits
 * @type {Object<string,string>}
 */
PERGASHA.distanceUnits = {
  "none": "PERGASHA.None",
  "self": "PERGASHA.DistSelf",
  "touch": "PERGASHA.DistTouch",
  "spec": "PERGASHA.Special",
  "any": "PERGASHA.DistAny"
};
for (let [k, v] of Object.entries(PERGASHA.movementUnits)) {
  PERGASHA.distanceUnits[k] = v;
}

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
PERGASHA.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
PERGASHA.targetTypes = {
  "none": "PERGASHA.None",
  "self": "PERGASHA.TargetSelf",
  "creature": "PERGASHA.TargetCreature",
  "ally": "PERGASHA.TargetAlly",
  "enemy": "PERGASHA.TargetEnemy",
  "object": "PERGASHA.TargetObject",
  "space": "PERGASHA.TargetSpace",
  "radius": "PERGASHA.TargetRadius",
  "sphere": "PERGASHA.TargetSphere",
  "cylinder": "PERGASHA.TargetCylinder",
  "cone": "PERGASHA.TargetCone",
  "square": "PERGASHA.TargetSquare",
  "cube": "PERGASHA.TargetCube",
  "line": "PERGASHA.TargetLine",
  "wall": "PERGASHA.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are PERGASHA target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
PERGASHA.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
PERGASHA.healingTypes = {
  "healing": "PERGASHA.Healing",
  "temphp": "PERGASHA.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {string[]}
 */
PERGASHA.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have
 * @enum {string}
 */
PERGASHA.senses = {
  "blindsight": "PERGASHA.SenseBlindsight",
  "darkvision": "PERGASHA.SenseDarkvision",
  "tremorsense": "PERGASHA.SenseTremorsense",
  "truesight": "PERGASHA.SenseTruesight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
PERGASHA.skills = {
  "acr": "PERGASHA.SkillAcr",
  "ani": "PERGASHA.SkillAni",
  "ath": "PERGASHA.SkillAth",
  "dec": "PERGASHA.SkillDec",
  "his": "PERGASHA.SkillHis",
  "ins": "PERGASHA.SkillIns",
  "itm": "PERGASHA.SkillItm",
  "inv": "PERGASHA.SkillInv",
  "med": "PERGASHA.SkillMed",
  "mys": "PERGASHA.SkillMys",
  "nat": "PERGASHA.SkillNat",
  "prc": "PERGASHA.SkillPrc",
  "prf": "PERGASHA.SkillPrf",
  "per": "PERGASHA.SkillPer",
  "psi": "PERGASHA.SkillPsi",
  "slt": "PERGASHA.SkillSlt",
  "ste": "PERGASHA.SkillSte",
  "sur": "PERGASHA.SkillSur"
};


/* -------------------------------------------- */

PERGASHA.spellPreparationModes = {
  "prepared": "PERGASHA.SpellPrepPrepared",
  "pact": "PERGASHA.PactMagic",
  "always": "PERGASHA.SpellPrepAlways",
  "atwill": "PERGASHA.SpellPrepAtWill",
  "innate": "PERGASHA.SpellPrepInnate"
};

PERGASHA.spellUpcastModes = ["always", "pact", "prepared"];

PERGASHA.spellProgression = {
  "none": "PERGASHA.SpellNone",
  "full": "PERGASHA.SpellProgFull",
  "half": "PERGASHA.SpellProgHalf",
  "third": "PERGASHA.SpellProgThird",
  "pact": "PERGASHA.SpellProgPact",
  "artificer": "PERGASHA.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
PERGASHA.spellScalingModes = {
  "none": "PERGASHA.SpellNone",
  "cantrip": "PERGASHA.SpellCantrip",
  "level": "PERGASHA.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
PERGASHA.weaponTypes = {
  "unarmedG": "PERGASHA.WeaponUnarmedG",
  "simpleM": "PERGASHA.WeaponSimpleM",
  "simpleR": "PERGASHA.WeaponSimpleR",
  "martialM": "PERGASHA.WeaponMartialM",
  "martialR": "PERGASHA.WeaponMartialR",
  "natural": "PERGASHA.WeaponNatural",
  "improv": "PERGASHA.WeaponImprov",
  "siege": "PERGASHA.WeaponSiege"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
PERGASHA.weaponProperties = {
  // "ada": "PERGASHA.WeaponPropertiesAda",
  "amm": "PERGASHA.WeaponPropertiesAmm",
  "fin": "PERGASHA.WeaponPropertiesFin",
  // "fir": "PERGASHA.WeaponPropertiesFir",
  // "foc": "PERGASHA.WeaponPropertiesFoc",
  "hvy": "PERGASHA.WeaponPropertiesHvy",
  "lgt": "PERGASHA.WeaponPropertiesLgt",
  "lod": "PERGASHA.WeaponPropertiesLod",
  // "mgc": "PERGASHA.WeaponPropertiesMgc",
  "rch": "PERGASHA.WeaponPropertiesRch",
  // "rel": "PERGASHA.WeaponPropertiesRel",
  "ret": "PERGASHA.WeaponPropertiesRet",
  // "sil": "PERGASHA.WeaponPropertiesSil",
  "spc": "PERGASHA.WeaponPropertiesSpc",
  "thr": "PERGASHA.WeaponPropertiesThr",
  "two": "PERGASHA.WeaponPropertiesTwo",
  "ver": "PERGASHA.WeaponPropertiesVer",
  "beat": "PERGASHA.WeaponPropertiesBeatdown",
  "bleed": "PERGASHA.WeaponPropertiesBleed",
  "brut": "PERGASHA.WeaponPropertiesBrutal",
  "bypa": "PERGASHA.WeaponPropertiesBypass",
  "doub": "PERGASHA.WeaponPropertiesDouble",
  "effe": "PERGASHA.WeaponPropertiesEffective",
  "free": "PERGASHA.WeaponPropertiesFreeHanded",
  "frag": "PERGASHA.WeaponPropertiesFragile",
  "impa": "PERGASHA.WeaponPropertiesImpact",
  "limi": "PERGASHA.WeaponPropertiesLimit",
  // "mast": "PERGASHA.WeaponPropertiesMastery",
  "mass": "PERGASHA.WeaponPropertiesMassive",
  "moun": "PERGASHA.WeaponPropertiesMounted",
  "oppo": "PERGASHA.WeaponPropertiesOpportunistic",
  "parr": "PERGASHA.WeaponPropertiesParry",
  "shar": "PERGASHA.WeaponPropertiesSharp",
  "shie": "PERGASHA.WeaponPropertiesShield",
  "supe": "PERGASHA.WeaponPropertiesSuperheavy",
  "swee": "PERGASHA.WeaponPropertiesSweeping",
  "swit": "PERGASHA.WeaponPropertiesSwitch",
  "vici": "PERGASHA.WeaponPropertiesVicious",
  "forc": "PERGASHA.WeaponPropertiesForceful",
  "poin": "PERGASHA.WeaponPropertiesPointBlank",
  "quic": "PERGASHA.WeaponPropertiesQuickReload",
  "stoc": "PERGASHA.WeaponPropertiesStock",
  "stre": "PERGASHA.WeaponPropertiesStrength",
  "velo": "PERGASHA.WeaponPropertiesVelocity"
};

/* -------------------------------------------- */

/**
 * Define the set of armor property flags which can exist on an armor
 * @type {Object}
 */
PERGASHA.armorProperties = {
  "bash": "PERGASHA.ArmorPropertiesBashing",
  "beat": "PERGASHA.WeaponPropertiesBeatdown",
  "bulk": "PERGASHA.ArmorPropertiesBulky",
  "conc": "PERGASHA.ArmorPropertiesConceal",
  "dr": "PERGASHA.ArmorPropertiesDR",
  "defl": "PERGASHA.ArmorPropertiesDeflect",
  "free": "PERGASHA.WeaponPropertiesFreeHanded",
  "lgt": "PERGASHA.WeaponPropertiesLgt",
  "nois": "PERGASHA.ArmorPropertiesNoisy",
  "stea": "PERGASHA.ArmorPropertiesStealthy",
  "soak": "PERGASHA.ArmorPropertiesSoak",
  "wall": "PERGASHA.ArmorPropertiesSpecialWS"
}


// Spell Components
PERGASHA.spellComponents = {
  "V": "PERGASHA.ComponentVerbal",
  "S": "PERGASHA.ComponentSomatic",
  "M": "PERGASHA.ComponentMaterial"
};

// Spell Schools
PERGASHA.spellSchools = {
  "abj": "PERGASHA.SchoolAbj",
  "con": "PERGASHA.SchoolCon",
  "div": "PERGASHA.SchoolDiv",
  "enc": "PERGASHA.SchoolEnc",
  "evo": "PERGASHA.SchoolEvo",
  "ill": "PERGASHA.SchoolIll",
  "nec": "PERGASHA.SchoolNec",
  "trs": "PERGASHA.SchoolTrs"
};


/* -------------------------------------------- */

// Spell Levels
PERGASHA.spellLevels = {
  0: "PERGASHA.SpellLevel0",
  1: "PERGASHA.SpellLevel1",
  2: "PERGASHA.SpellLevel2",
  3: "PERGASHA.SpellLevel3",
  4: "PERGASHA.SpellLevel4",
  5: "PERGASHA.SpellLevel5",
  6: "PERGASHA.SpellLevel6",
  7: "PERGASHA.SpellLevel7",
  8: "PERGASHA.SpellLevel8",
  9: "PERGASHA.SpellLevel9"
};

// Spell Scroll Compendium UUIDs
PERGASHA.spellScrollIds = {
  0: "rQ6sO7HDWzqMhSI3",
  1: "9GSfMg0VOA2b4uFN",
  2: "XdDp6CKh9qEvPTuS",
  3: "hqVKZie7x9w3Kqds",
  4: "DM7hzgL836ZyUFB1",
  5: "wa1VF8TXHmkrrR35",
  6: "tI3rWx4bxefNCexS",
  7: "mtyw4NS1s7j2EJaD",
  8: "aOrinPg7yuDZEuWr",
  9: "O4YbkJkLlnsgUszZ"
};

/**
 * Compendium packs used for localized items.
 * @enum {string}
 */
PERGASHA.sourcePacks = {
  ITEMS: "pergashaFoundryvtt.items"
}

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
PERGASHA.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
PERGASHA.polymorphSettings = {
  keepPhysical: 'PERGASHA.PolymorphKeepPhysical',
  keepMental: 'PERGASHA.PolymorphKeepMental',
  keepSaves: 'PERGASHA.PolymorphKeepSaves',
  keepSkills: 'PERGASHA.PolymorphKeepSkills',
  mergeSaves: 'PERGASHA.PolymorphMergeSaves',
  mergeSkills: 'PERGASHA.PolymorphMergeSkills',
  keepClass: 'PERGASHA.PolymorphKeepClass',
  keepFeats: 'PERGASHA.PolymorphKeepFeats',
  keepSpells: 'PERGASHA.PolymorphKeepSpells',
  keepItems: 'PERGASHA.PolymorphKeepItems',
  keepBio: 'PERGASHA.PolymorphKeepBio',
  keepVision: 'PERGASHA.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
PERGASHA.proficiencyLevels = {
  0: "PERGASHA.NotProficient",
  1: "PERGASHA.Proficient",
  0.5: "PERGASHA.HalfProficient",
  2: "PERGASHA.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
PERGASHA.cover = {
  0: 'PERGASHA.None',
  .5: 'PERGASHA.CoverHalf',
  .75: 'PERGASHA.CoverThreeQuarters',
  1: 'PERGASHA.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
PERGASHA.conditionTypes = {
  "blinded": "PERGASHA.ConBlinded",
  "charmed": "PERGASHA.ConCharmed",
  "deafened": "PERGASHA.ConDeafened",
  "diseased": "PERGASHA.ConDiseased",
  "exhaustion": "PERGASHA.ConExhaustion",
  "fatigue": "PERGASHA.ConFatigue",
  "frightened": "PERGASHA.ConFrightened",
  "grappled": "PERGASHA.ConGrappled",
  "incapacitated": "PERGASHA.ConIncapacitated",
  "invisible": "PERGASHA.ConInvisible",
  "paralyzed": "PERGASHA.ConParalyzed",
  "petrified": "PERGASHA.ConPetrified",
  "poisoned": "PERGASHA.ConPoisoned",
  "prone": "PERGASHA.ConProne",
  "restrained": "PERGASHA.ConRestrained",
  "stunned": "PERGASHA.ConStunned",
  "unconscious": "PERGASHA.ConUnconscious"
};

// Languages
// PERGASHA.languages = {
//   "common": "PERGASHA.LanguagesCommon",
//   "aarakocra": "PERGASHA.LanguagesAarakocra",
//   "abyssal": "PERGASHA.LanguagesAbyssal",
//   "aquan": "PERGASHA.LanguagesAquan",
//   "auran": "PERGASHA.LanguagesAuran",
//   "celestial": "PERGASHA.LanguagesCelestial",
//   "deep": "PERGASHA.LanguagesDeepSpeech",
//   "draconic": "PERGASHA.LanguagesDraconic",
//   "druidic": "PERGASHA.LanguagesDruidic",
//   "dwarvish": "PERGASHA.LanguagesDwarvish",
//   "elvish": "PERGASHA.LanguagesElvish",
//   "giant": "PERGASHA.LanguagesGiant",
//   "gith": "PERGASHA.LanguagesGith",
//   "gnomish": "PERGASHA.LanguagesGnomish",
//   "goblin": "PERGASHA.LanguagesGoblin",
//   "gnoll": "PERGASHA.LanguagesGnoll",
//   "halfling": "PERGASHA.LanguagesHalfling",
//   "ignan": "PERGASHA.LanguagesIgnan",
//   "infernal": "PERGASHA.LanguagesInfernal",
//   "orc": "PERGASHA.LanguagesOrc",
//   "primordial": "PERGASHA.LanguagesPrimordial",
//   "sylvan": "PERGASHA.LanguagesSylvan",
//   "terran": "PERGASHA.LanguagesTerran",
//   "cant": "PERGASHA.LanguagesThievesCant",
//   "undercommon": "PERGASHA.LanguagesUndercommon"
// };

PERGASHA.languages = {
  "pergashan": "PERGASHA.LanguagesPergashan",
  "dwarvish": "PERGASHA.LanguagesDwarvish",
  "giant": "PERGASHA.LanguagesGiant",
  "draconic": "PERGASHA.LanguagesDraconic",
  "primordial": "PERGASHA.LanguagesPrimordial"
}

// Character Level XP Requirements
PERGASHA.CHARACTER_EXP_LEVELS = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
  ;

// Challenge Rating XP Levels
PERGASHA.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Character Features Per Class And Level
PERGASHA.classFeatures = ClassFeatures;

// Configure Optional Character Flags
PERGASHA.characterFlags = {
  "diamondSoul": {
    name: "PERGASHA.FlagsDiamondSoul",
    hint: "PERGASHA.FlagsDiamondSoulHint",
    section: "PERGASHA.Feats",
    type: Boolean
  },
  "initiativeAdv": {
    name: "PERGASHA.FlagsInitiativeAdv",
    hint: "PERGASHA.FlagsInitiativeAdvHint",
    section: "PERGASHA.Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "PERGASHA.FlagsAlert",
    hint: "PERGASHA.FlagsAlertHint",
    section: "PERGASHA.Feats",
    type: Boolean
  },
  "initiativeTemporalAwareness": {
    name: "PERGASHA.FlagsTemporalAwareness",
    hint: "PERGASHA.FlagsTemporalAwarenessHint",
    section: "PERGASHA.Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "PERGASHA.FlagsObservant",
    hint: "PERGASHA.FlagsObservantHint",
    skills: ['prc', 'inv'],
    section: "PERGASHA.Feats",
    type: Boolean
  },
  // "powerfulBuild": {
  //   name: "PERGASHA.FlagsPowerfulBuild",
  //   hint: "PERGASHA.FlagsPowerfulBuildHint",
  //   section: "PERGASHA.RacialTraits",
  //   type: Boolean
  // },
  "reliableTalent": {
    name: "PERGASHA.FlagsReliableTalent",
    hint: "PERGASHA.FlagsReliableTalentHint",
    section: "PERGASHA.Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "PERGASHA.FlagsWeaponCritThreshold",
    hint: "PERGASHA.FlagsWeaponCritThresholdHint",
    section: "PERGASHA.Feats",
    type: Number,
    placeholder: 20
  },
  "meleeCriticalDamageDice": {
    name: "PERGASHA.FlagsMeleeCriticalDice",
    hint: "PERGASHA.FlagsMeleeCriticalDiceHint",
    section: "PERGASHA.Feats",
    type: Number,
    placeholder: 0
  },
  "inventorySlotModifier": {
    name: "PERGASHA.InventorySlotMod",
    hint: "PERGASHA.InventorySlotModHint",
    section: "PERGASHA.Feats",
    type: Number,
    placeholder: 0
  },
};

// Configure allowed status flags
PERGASHA.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(PERGASHA.characterFlags));

/* -------------------------------------------- */

PERGASHA.psionicOrders = {
  "avatar": "PERGASHA.AvatarOrder",
  "awakened": "PERGASHA.AwakenedOrder",
  "farhand": "PERGASHA.FarHandOrder",
  "immortal": "PERGASHA.ImmortalOrder",
  "nomad": "PERGASHA.NomadOrder",
};

PERGASHA.avatarDisciplines = {
  "auraOfCommand": "PERGASHA.AuraOfCommand",
  "auraOfFury": "PERGASHA.AuraOfFury",
  "beaconOfCourage": "PERGASHA.BeaconOfCourage",
  "crownOfDespair": "PERGASHA.CrownOfDespair",
  "crownOfRage": "PERGASHA.CrownOfRage",
  "disgust": "PERGASHA.Disgust",
  "mantleOfAwe": "PERGASHA.MantleOfAwe",
  "mantleOfFear": "PERGASHA.MantleOfFear",
  "mantleOfJoy": "PERGASHA.MantleOfJoy"
}

PERGASHA.awakenedDisciplines = {
  "auraSight": "PERGASHA.AuraSight",
  "intellectFortress": "PERGASHA.IntellectFortress",
  "precognition": "PERGASHA.Precognition",
  "psychicAssault": "PERGASHA.PsychicAssault",
  "psychicDisruption": "PERGASHA.PsychicDisruption",
  "telepathicContact": "PERGASHA.TelepathicContact",
  "thirdEye": "PERGASHA.ThirdEye"
}
PERGASHA.farhandDisciplines = {
  "enhancedForce": "PERGASHA.EnhancedForce",
  "forceFields": "PERGASHA.ForceFields",
  "graviturgy": "PERGASHA.Graviturgy",
  "illumination": "PERGASHA.Illumination",
  "livingKnives": "PERGASHA.LivingKnives",
  "massManipulation": "PERGASHA.MassManipulation",
  "psychokinesis": "PERGASHA.Psychokinesis",
  "telemacheia": "PERGASHA.Telemacheia"
}
PERGASHA.immortalDisciplines = {
  "adaptiveBody": "PERGASHA.AdaptiveBody",
  "bestialForm": "PERGASHA.BestialForm",
  "bruteForce": "PERGASHA.BruteForce",
  "celerity": "PERGASHA.Celerity",
  "chakraManipulation": "PERGASHA.ChakraManipulation",
  "corrosiveMetabolism": "PERGASHA.CorrosiveMetabolism",
  "psionicWeapon": "PERGASHA.PsionicWeapon",
  "venomousMetabolism": "PERGASHA.VenomousMetabolism"
}
PERGASHA.nomadDisciplines = {
  "chameleon": "PERGASHA.Chameleon",
  "chronoweaver": "PERGASHA.Chronoweaver",
  "continuumManipulation": "PERGASHA.ContinuumManipulation",
  "intelligentArrow": "PERGASHA.IntelligentArrow",
  "nomadicMind": "PERGASHA.NomadicMind",
  "nomadicStep": "PERGASHA.NomadicStep",
  "sonokinesis": "PERGASHA.Sonokinesis"
}

// PERGASHA.psionicDisciplines = {
//   "avatar": {
//     "auraOfCommand": "PERGASHA.AuraOfCommand",
//     "auraOfFury": "PERGASHA.AuraOfFury",
//     "beaconOfCourage": "PERGASHA.BeaconOfCourage",
//     "crownOfDespair": "PERGASHA.CrownOfDespair",
//     "crownOfRage": "PERGASHA.CrownOfRage",
//     "disgust": "PERGASHA.Disgust",
//     "mantleOfAwe": "PERGASHA.MantleOfAwe",
//     "mantleOfFear": "PERGASHA.MantleOfFear",
//     "mantleOfJoy": "PERGASHA.MantleOfJoy"
//   },
//   "awakened": {
//     "auraSight": "PERGASHA.AuraSight",
//     "intellectFortress": "PERGASHA.IntellectFortress",
//     "precognition": "PERGASHA.Precognition",
//     "psychicAssault": "PERGASHA.PsychicAssault",
//     "psychicDisruption": "PERGASHA.PsychicDisruption",
//     "telepathicContact": "PERGASHA.TelepathicContact",
//     "thirdEye": "PERGASHA.ThirdEye"
//   },
//   "farhand": {
//     "enhancedForce": "PERGASHA.EnhancedForce",
//     "forceFields": "PERGASHA.ForceFields",
//     "graviturgy": "PERGASHA.Graviturgy",
//     "illumination": "PERGASHA.Illumination",
//     "livingKnives": "PERGASHA.LivingKnives",
//     "massManipulation": "PERGASHA.MassManipulation",
//     "psychokinesis": "PERGASHA.Psychokinesis",
//     "telemacheia": "PERGASHA.Telemacheia"
//   },
//   "immortal": {
//     "adaptiveBody": "PERGASHA.AdaptiveBody",
//     "beastialForm": "PERGASHA.BeastialForm",
//     "bruteForce": "PERGASHA.BruteForce",
//     "celerity": "PERGASHA.Celerity",
//     "chakraManipulation": "PERGASHA.ChakraManipulation",
//     "corrosiveMetabolism": "PERGASHA.CorrosiveMetabolism",
//     "psionicWeapon": "PERGASHA.PsionicWeapon",
//     "venomousMetabolism": "PERGASHA.VenomousMetabolism"
//   },
//   "nomad": {
//     "chameleon": "PERGASHA.Chameleon",
//     "chronoweaver": "PERGASHA.Chronoweaver",
//     "continuumManipulation": "PERGASHA.ContinuumManipulation",
//     "intelligentArrow": "PERGASHA.IntelligentArrow",
//     "nomadicMind": "PERGASHA.NomadicMind",
//     "nomadicStep": "PERGASHA.NomadicStep",
//     "sonokinesis": "PERGASHA.Sonokinesis"
//   }
// };

PERGASHA.psionicPowerCosts = {
  "focus": "PERGASHA.Focuses&Masteries",
  0: "PERGASHA.PsiCost0",
  1: "PERGASHA.PsiCost1",
  2: "PERGASHA.PsiCost2",
  3: "PERGASHA.PsiCost3",
  4: "PERGASHA.PsiCost4",
  5: "PERGASHA.PsiCost5",
  6: "PERGASHA.PsiCost6",
  7: "PERGASHA.PsiCost7",
  8: "PERGASHA.PsiCostVar"
}

PERGASHA.basePsionicPowerCosts = {
  1: "PERGASHA.PsiCost1",
  2: "PERGASHA.PsiCost2",
  3: "PERGASHA.PsiCost3",
  4: "PERGASHA.PsiCost4",
  5: "PERGASHA.PsiCost5",
  6: "PERGASHA.PsiCost6"
}

PERGASHA.maxPsionicPowerCosts = {
  2: "PERGASHA.PsiCost2",
  3: "PERGASHA.PsiCost3",
  4: "PERGASHA.PsiCost4",
  5: "PERGASHA.PsiCost5",
  6: "PERGASHA.PsiCost6",
  7: "PERGASHA.PsiCost7"
}



/**
 * The available choices for how psionic power damage scaling may be computed
 * @type {Object}
 */
PERGASHA.psionicPowerScaling = {
  "none": "PERGASHA.PsionicPowerNone",
  "talent": "PERGASHA.PsionicPowerTalent",
  "variableCost": "PERGASHA.PsionicPowerVariableCost"
};

PERGASHA.exhaustionEffects = {
  0: "For each level of exhaustion you have, any psionic abilities require 1 extra Psi Point to activate, including Talents.",
  1: "Disadvantage on Strength and Dexterity Ability and Skill checks. You can’t perform the Dash action during combat.",
  2: "Disadvantage on all Ability and Skill checks. Your Speed is halved.",
  3: "Disadvantage on Attack rolls and Saving Throws. Rolling a 1 on attack rolls exhausts 1 Hit Die.",
  4: "You can only take an action or a bonus action during your turn, and you can’t take reactions. You can concentrate on one thing only, such as a psionic ability or enemy target, and ignore all else. You’re limited to simple mental tasks.",
  5: "Hit Point maximum reduce by half. Speed reduced to 5 feet. You cannot use abilities requiring Concentration.",
  6: "You are Dying. Any additional Exhaustion counts as two failed death saves.",
}

PERGASHA.fatigueEffects = {
  1: "Take 1d4 damage when activating psionics.",
  2: "Psi Limit Reduced by 1.",
  3: "Unable to maintain a Psychic Focus.",
  4: "Gain 1 level of exhaustion.",
  5: "Unable to maintain concentration.",
  6: "Overdrive.",
}