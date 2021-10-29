import ActorSheet5e from "./base.js";

/**
 * An Actor sheet for Inventory type actors.
 * Extends the base ActorSheet5e class.
 * @type {ActorSheet5e}
 */
export default class ActorSheet5eInventory extends ActorSheet5e {
    /**
     * Define default rendering options for the Inventory sheet.
     * @returns {Object}
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["pergashaFoundryvtt", "sheet", "actor", "inventory"],
            width: 605,
            height: 680
        });
    }

    /* -------------------------------------------- */

    /** @override */
    static unsupportedItemTypes = new Set(["class"]);

    _prepareItems(data) {

        // Categorize items as inventory
        const inventory = {
            weapon: { label: "PERGASHA.ItemTypeWeaponPl", items: [], dataset: { type: "weapon" } },
            equipment: { label: "PERGASHA.ItemTypeEquipmentPl", items: [], dataset: { type: "equipment" } },
            consumable: { label: "PERGASHA.ItemTypeConsumablePl", items: [], dataset: { type: "consumable" } },
            tool: { label: "PERGASHA.ItemTypeToolPl", items: [], dataset: { type: "tool" } },
            backpack: { label: "PERGASHA.ItemTypeContainerPl", items: [], dataset: { type: "backpack" } },
            loot: { label: "PERGASHA.ItemTypeLootPl", items: [], dataset: { type: "loot" } }
        };

        // Partition items by category
        let [items] = data.items.reduce((arr, item) => {

            item.img = item.img || CONST.DEFAULT_TOKEN;
            item.isStack = Number.isNumeric(item.data.quantity) && (item.data.quantity !== 1);
            item.attunement = {
                [CONFIG.PERGASHA.attunementTypes.REQUIRED]: {
                    icon: "fa-sun",
                    cls: "not-attuned",
                    title: "PERGASHA.AttunementRequired"
                },
                [CONFIG.PERGASHA.attunementTypes.ATTUNED]: {
                    icon: "fa-sun",
                    cls: "attuned",
                    title: "PERGASHA.AttunementAttuned"
                }
            }[item.data.attunement];

            // Item usage
            item.hasUses = item.data.uses && (item.data.uses.max > 0);
            item.isOnCooldown = item.data.recharge && !!item.data.recharge.value && (item.data.recharge.charged === false);
            item.isDepleted = item.isOnCooldown && (item.data.uses.per && (item.data.uses.value > 0));
            item.hasTarget = !!item.data.target && !(["none", ""].includes(item.data.target.type));

            // Item toggle state
            this._prepareItemToggleState(item);

            // Classify items into types

            if (Object.keys(inventory).includes(item.type)) arr[0].push(item);
            return arr;
        }, [[]]);

        // Apply active item filters
        items = this._filterItems(items, this._filters.inventory);

        // Organize items
        for (let i of items) {
            i.data.quantity = i.data.quantity || 0;
            i.data.weight = i.data.weight || 0;
            i.totalWeight = (i.data.quantity * i.data.weight).toNearest(0.1);
            inventory[i.type].items.push(i);
        }
        // Assign and return
        data.inventory = Object.values(inventory);
    }

    /**
 * A helper method to establish the displayed preparation state for an item
 * @param {Item} item
 * @private
 */

    _prepareItemToggleState(item) {
        const isActive = getProperty(item.data, "equipped");
        const isInQuickdraw = getProperty(item.data, "quickdraw");
        item.toggleQuickdraw = isInQuickdraw ? "active" : "";
        item.toggleClass = isActive ? "active" : "";
        item.toggleTitle = game.i18n.localize(isActive ? "PERGASHA.Equipped" : "PERGASHA.Unequipped");
    }

    activateListeners(html) {
        super.activateListeners(html);
        if (!this.isEditable) return;

        // Item State Toggling
        html.find('.item-toggle').click(this._onToggleItem.bind(this));

    }

    /* -------------------------------------------- */

    /**
     * Handle toggling the state of an Owned Item within the Actor
     * @param {Event} event   The triggering click event
     * @private
     */
    _onToggleItem(event) {
        event.preventDefault();
        const itemId = event.currentTarget.closest(".item").dataset.itemId;
        const item = this.actor.items.get(itemId);
        let attr = null;
        if (event.currentTarget.attributes[0].value.includes("item-quickdraw")) attr = "data.quickdraw";
        else attr = item.data.type === "spell" ? "data.preparation.prepared" : "data.equipped";
        return item.update({ [attr]: !getProperty(item.data, attr) });
    }
}




/* -------------------------------------------- */
