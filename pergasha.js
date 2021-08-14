// Import Modules
import { PERGASHA } from "./module/config.js";
import { registerSystemSettings } from "./module/settings.js";
import { preloadHandlebarsTemplates } from "./module/templates.js";
import { _getInitiativeFormula } from "./module/combat.js";
import { measureDistances } from "./module/canvas.js";

// Import Documents
import Actor5e from "./module/actor/entity.js";
import Item5e from "./module/item/entity.js";
import { TokenDocument5e, Token5e } from "./module/token.js";

// Import Applications
import AbilityTemplate from "./module/pixi/ability-template.js";
import AbilityUseDialog from "./module/apps/ability-use-dialog.js";
import ActorSheetFlags from "./module/apps/actor-flags.js";
import ActorSheet5eCharacter from "./module/actor/sheets/character.js";
import ActorSheet5eNPC from "./module/actor/sheets/npc.js";
import ActorSheet5eVehicle from "./module/actor/sheets/vehicle.js";
import ItemSheet5e from "./module/item/sheet.js";
import ShortRestDialog from "./module/apps/short-rest.js";
import TraitSelector from "./module/apps/trait-selector.js";
import ActorMovementConfig from "./module/apps/movement-config.js";
import ActorSensesConfig from "./module/apps/senses-config.js";

// Import Helpers
import * as chat from "./module/chat.js";
import * as dice from "./module/dice.js";
import * as macros from "./module/macros.js";
import * as migrations from "./module/migration.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", function () {
  console.log(`Pergasha | Initializing the Pergasha Game System\n${PERGASHA.ASCII}`);

  // Create a namespace within the game global
  game.pergashaFoundryvtt = {
    applications: {
      AbilityUseDialog,
      ActorSheetFlags,
      ActorSheet5eCharacter,
      ActorSheet5eNPC,
      ActorSheet5eVehicle,
      ItemSheet5e,
      ShortRestDialog,
      TraitSelector,
      ActorMovementConfig,
      ActorSensesConfig
    },
    canvas: {
      AbilityTemplate
    },
    config: PERGASHA,
    dice: dice,
    entities: {
      Actor5e,
      Item5e,
      TokenDocument5e,
      Token5e,
    },
    macros: macros,
    migrations: migrations,
    rollItemMacro: macros.rollItemMacro
  };

  // Record Configuration Values
  CONFIG.PERGASHA = PERGASHA;
  CONFIG.Actor.documentClass = Actor5e;
  CONFIG.Item.documentClass = Item5e;
  CONFIG.Token.documentClass = TokenDocument5e;
  CONFIG.Token.objectClass = Token5e;
  CONFIG.time.roundTime = 6;

  CONFIG.Dice.DamageRoll = dice.DamageRoll;
  CONFIG.Dice.D20Roll = dice.D20Roll;

  // 5e cone RAW should be 53.13 degrees
  CONFIG.MeasuredTemplate.defaults.angle = 53.13;

  // Register System Settings
  registerSystemSettings();

  // Patch Core Functions
  CONFIG.Combat.initiative.formula = "1d20 + @attributes.init.mod + @attributes.init.prof + @attributes.init.bonus";
  Combatant.prototype._getInitiativeFormula = _getInitiativeFormula;

  // Register Roll Extensions
  CONFIG.Dice.rolls.push(dice.D20Roll);
  CONFIG.Dice.rolls.push(dice.DamageRoll);

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("pergashaFoundryvtt", ActorSheet5eCharacter, {
    types: ["character"],
    makeDefault: true,
    label: "PERGASHA.SheetClassCharacter"
  });
  Actors.registerSheet("pergashaFoundryvtt", ActorSheet5eNPC, {
    types: ["npc"],
    makeDefault: true,
    label: "PERGASHA.SheetClassNPC"
  });
  Actors.registerSheet('pergashaFoundryvtt', ActorSheet5eVehicle, {
    types: ['vehicle'],
    makeDefault: true,
    label: "PERGASHA.SheetClassVehicle"
  });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("pergashaFoundryvtt", ItemSheet5e, {
    makeDefault: true,
    label: "PERGASHA.SheetClassItem"
  });

  // Preload Handlebars Templates
  return preloadHandlebarsTemplates();
});


/* -------------------------------------------- */
/*  Foundry VTT Setup                           */
/* -------------------------------------------- */

/**
 * This function runs after game data has been requested and loaded from the servers, so entities exist
 */
Hooks.once("setup", function () {

  // Localize CONFIG objects once up-front
  const toLocalize = [
    "abilities", "abilityAbbreviations", "abilityActivationTypes", "abilityConsumptionTypes", "actorSizes", "alignments",
    "armorProficiencies", "conditionTypes", "consumableTypes", "cover", "currencies", "damageResistanceTypes",
    "damageTypes", "distanceUnits", "equipmentTypes", "healingTypes", "itemActionTypes", "languages",
    "limitedUsePeriods", "movementTypes", "movementUnits", "polymorphSettings", "proficiencyLevels", "psionicOrders", "avatarDisciplines", "awakenedDisciplines", "farhandDisciplines", "immortalDisciplines", "nomadDisciplines", "psionicPowerCosts", "psionicPowerScaling", "basePsionicPowerCosts", "maxPsionicPowerCosts", "senses", "skills",
    "spellComponents", "spellLevels", "spellPreparationModes", "spellScalingModes", "spellSchools", "targetTypes",
    "timePeriods", "toolProficiencies", "weaponProficiencies", "weaponProperties", "armorProperties", "weaponTypes", "armorLayers"
  ];

  // Exclude some from sorting where the default order matters
  const noSort = [
    "abilities", "alignments", "currencies", "distanceUnits", "movementUnits", "itemActionTypes", "proficiencyLevels",
    "limitedUsePeriods", "psionicPowerCosts", "basePsionicPowerCosts", "maxPsionicPowerCosts", "spellComponents", "spellLevels", "spellPreparationModes", "weaponTypes", "armorLayers"
  ];

  // Localize and sort CONFIG objects
  for (let o of toLocalize) {
    const localized = Object.entries(CONFIG.PERGASHA[o]).map(e => {
      return [e[0], game.i18n.localize(e[1])];
    });
    if (!noSort.includes(o)) localized.sort((a, b) => a[1].localeCompare(b[1]));
    CONFIG.PERGASHA[o] = localized.reduce((obj, e) => {
      obj[e[0]] = e[1];
      return obj;
    }, {});
  }
});

/* -------------------------------------------- */

/**
 * Once the entire VTT framework is initialized, check to see if we should perform a data migration
 */
Hooks.once("ready", function () {

  // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
  Hooks.on("hotbarDrop", (bar, data, slot) => macros.create5eMacro(data, slot));

  // Determine whether a system migration is required and feasible
  if (!game.user.isGM) return;
  const currentVersion = game.settings.get("pergashaFoundryvtt", "systemMigrationVersion");
  const NEEDS_MIGRATION_VERSION = "1.3.4";
  const COMPATIBLE_MIGRATION_VERSION = 0.80;
  const totalDocuments = game.actors.size + game.scenes.size + game.items.size;
  if (!currentVersion && totalDocuments === 0) return game.settings.set("pergashaFoundryvtt", "systemMigrationVersion", game.system.data.version);
  const needsMigration = !currentVersion || isNewerVersion(NEEDS_MIGRATION_VERSION, currentVersion);
  if (!needsMigration) return;

  // Perform the migration
  if (currentVersion && isNewerVersion(COMPATIBLE_MIGRATION_VERSION, currentVersion)) {
    const warning = `Your DnD5e system data is from too old a Foundry version and cannot be reliably migrated to the latest version. The process will be attempted, but errors may occur.`;
    ui.notifications.error(warning, { permanent: true });
  }
  migrations.migrateWorld();
});

/* -------------------------------------------- */
/*  Canvas Initialization                       */
/* -------------------------------------------- */

Hooks.on("canvasInit", function () {
  // Extend Diagonal Measurement
  canvas.grid.diagonalRule = game.settings.get("pergashaFoundryvtt", "diagonalMovement");
  SquareGrid.prototype.measureDistances = measureDistances;
});


/* -------------------------------------------- */
/*  Other Hooks                                 */
/* -------------------------------------------- */

Hooks.on("renderChatMessage", (app, html, data) => {

  // Display action buttons
  chat.displayChatActionButtons(app, html, data);

  // Highlight critical success or failure die
  chat.highlightCriticalSuccessFailure(app, html, data);

  // Optionally collapse the content
  if (game.settings.get("pergashaFoundryvtt", "autoCollapseItemCards")) html.find(".card-content").hide();
});
Hooks.on("getChatLogEntryContext", chat.addChatMessageContextOptions);
Hooks.on("renderChatLog", (app, html, data) => Item5e.chatListeners(html));
Hooks.on("renderChatPopout", (app, html, data) => Item5e.chatListeners(html));
Hooks.on('getActorDirectoryEntryContext', Actor5e.addDirectoryContextOptions);

// FIXME: This helper is needed for the vehicle sheet. It should probably be refactored.
Handlebars.registerHelper('getProperty', function (data, property) {
  return getProperty(data, property);
});

//Handlebar helper for variable costs on psionic powers
Handlebars.registerHelper('isVariableCost', function (psionicPower) {
  if (psionicPower.psicost == 8) {
    return true;
  } else {
    psionicPower.variableCost.baseCost = null;
    psionicPower.variableCost.maxCost = null;
    return false;
  }
});

Handlebars.registerHelper('isVariableSection', function (label) {
  if (label === "Variable") {
    return true;
  } else {
    return false;
  }
});

Handlebars.registerHelper('isTalent', function (psionicPower) {
  if (psionicPower.psicost == 0) {
    psionicPower.psionicOrder = null;
    psionicPower.psionicDiscipline = null;
    return true;
  } else {
    return false;
  }
});

Handlebars.registerHelper('maxHigherThanBase', function (psionicPower) {
  const base = psionicPower.variableCost.baseCost;
  const max = psionicPower.variableCost.maxCost;
  if (base && max) {
    if (max > base) {
      return true;
    } else {
      return false;
    }
  }
});

Handlebars.registerHelper('isTalentSection', function (label) {
  if (label === "Talent") {
    return true;
  } else {
    return false;
  }
});

Handlebars.registerHelper('isFocusSection', function (label) {
  if (label === "Focuses & Masteries") {
    return true;
  } else {
    return false;
  }
});

Handlebars.registerHelper('isFocus', function (data) {
  if (data === "focus") {
    return true;
  } else {
    return false;
  }
});

Handlebars.registerHelper('focusArray', function (data) {
  let array = [];
  data.forEach(element => {
    if (element.order === "focus") {
      array = element.psionicPowers;
    }
  });
  return array;
});

Handlebars.registerHelper('disciplinesArray', function (data) {
  const orderArray = `${data}Disciplines`;
  return CONFIG.PERGASHA[orderArray];
});

Handlebars.registerHelper('displayEffects', function (effectIndex, type) {
  let effects = "";
  if (type === "exhaustion") {
    for (let index = 0; index <= effectIndex; index++) {
      effects += `<li>${CONFIG.PERGASHA.exhaustionEffects[index]}</li>`;
    }
  } else if (type === "fatigue") {
    for (let index = 1; index <= effectIndex; index++) {
      effects += `<li>${CONFIG.PERGASHA.fatigueEffects[index]}</li>`;
    }
  }
  return effects;
});

Handlebars.registerHelper('setPsiSpent', function (data, cost) {
  console.log("data:", data);
  console.log("cost:", cost);
});


Handlebars.registerHelper('testData', function (data) {
  console.log('Datatype: ', typeof (data));
  console.log('Data: ', data);
});






