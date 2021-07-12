/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([

    // Shared Partials
    "systems/pergasha-foundryvtt/templates/actors/parts/active-effects.html",

    // Actor Sheet Partials
    "systems/pergasha-foundryvtt/templates/actors/parts/actor-traits.html",
    "systems/pergasha-foundryvtt/templates/actors/parts/actor-inventory.html",
    "systems/pergasha-foundryvtt/templates/actors/parts/actor-features.html",
    "systems/pergasha-foundryvtt/templates/actors/parts/actor-spellbook.html",

    // Item Sheet Partials
    "systems/pergasha-foundryvtt/templates/items/parts/item-action.html",
    "systems/pergasha-foundryvtt/templates/items/parts/item-activation.html",
    "systems/pergasha-foundryvtt/templates/items/parts/item-description.html",
    "systems/pergasha-foundryvtt/templates/items/parts/item-mountable.html"
  ]);
};
