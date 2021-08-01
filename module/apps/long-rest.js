/**
 * A helper Dialog subclass for completing a long rest
 * @extends {Dialog}
 */
export default class LongRestDialog extends Dialog {
  constructor(actor, dialogData = {}, options = {}) {
    super(dialogData, options);
    /**
     * Store a reference to the Actor entity which is resting
     * @type {Actor}
     */
    this.actor = actor;

    /**
     * Track the most recently used HD denomination for re-rendering the form
     * @type {string}
     */
    this._denom = null;
  }

  /* -------------------------------------------- */

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/pergashaFoundryvtt/templates/apps/long-rest.html",
      classes: ["pergashaFoundryvtt", "dialog"]
    });
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();
    // Determine Hit Dice
    data.availableHD = this.actor.data.items.reduce((hd, item) => {
      if (item.type === "class") {
        const d = item.data.data;
        const denom = d.hitDice || "d6";
        const available = parseInt(d.levels || 1) - parseInt(d.hitDiceUsed || 0);
        hd[denom] = denom in hd ? hd[denom] + available : available;
      }
      return hd;
    }, {});
    data.canRoll = this.actor.data.data.attributes.hd > 0;
    data.denomination = this._denom;
    // const variant = game.settings.get("pergashaFoundryvtt", "restVariant");
    // data.promptNewDay = variant !== "gritty";     // It's always a new day when resting 1 week
    // data.newDay = variant === "normal";           // It's probably a new day when resting normally (8 hours)
    return data;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    let btn = html.find("#roll-hd");
    btn.click(this._onRollHitDie.bind(this));
  }


  /* -------------------------------------------- */

  /**
   * Handle rolling a Hit Die as part of a Short Rest action
   * @param {Event} event     The triggering click event
   * @private
   */
  async _onRollHitDie(event) {
    event.preventDefault();
    const btn = event.currentTarget;
    this._denom = btn.form.hd.value;
    await this.actor.rollHitDie(this._denom, true);
    this.render();
  }

  /**
   * A helper constructor function which displays the Long Rest confirmation dialog and returns a Promise once it's
   * workflow has been resolved.
   * @param {Actor5e} actor
   * @return {Promise}
   */
  static async longRestDialog({ actor } = {}) {
    return new Promise((resolve, reject) => {
      const dlg = new this(actor, {
        title: game.i18n.localize("DND5E.LongRest"),
        buttons: {
          rest: {
            icon: '<i class="fas fa-bed"></i>',
            label: game.i18n.localize("DND5E.Rest"),
            callback: html => {
              // let newDay = true;
              // if (game.settings.get("pergashaFoundryvtt", "restVariant") !== "gritty")
              //   newDay = html.find('input[name="newDay"]')[0].checked;
              // resolve(newDay);
              let fullRest = true;
              fullRest = html.find('input[name="fullRest"]')[0].checked;
              let usedHitDice = true;
              usedHitDice = html.find('input[name="usedHitDice"]')[0].checked;
              resolve([fullRest, usedHitDice]);

              // resolve(usedHitDice);
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: game.i18n.localize("Cancel"),
            callback: reject
          }
        },
        default: 'rest',
        close: reject
      });
      dlg.render(true);
    });
  }
}