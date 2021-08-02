/**
 * An application class which provides advanced configuration for special character flags which modify an Actor
 * @implements {DocumentSheet}
 */
export default class ActorSheetFlags extends DocumentSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "actor-flags",
      classes: ["pergashaFoundryvtt"],
      template: "systems/pergashaFoundryvtt/templates/apps/actor-flags.html",
      width: 500,
      closeOnSubmit: true
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return `${game.i18n.localize('PERGASHA.FlagsTitle')}: ${this.object.name}`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = {};
    data.actor = this.object;
    data.classes = this._getClasses();
    data.flags = this._getFlags();
    data.bonuses = this._getBonuses();
    return data;
  }

  /* -------------------------------------------- */

  /**
   * Prepare an object of sorted classes.
   * @return {object}
   * @private
   */
  _getClasses() {
    const classes = this.object.items.filter(i => i.type === "class");
    return classes.sort((a, b) => a.name.localeCompare(b.name)).reduce((obj, i) => {
      obj[i.id] = i.name;
      return obj;
    }, {});
  }

  /* -------------------------------------------- */

  /**
   * Prepare an object of flags data which groups flags by section
   * Add some additional data for rendering
   * @return {object}
   * @private
   */
  _getFlags() {
    const flags = {};
    const baseData = this.document.toJSON();
    for (let [k, v] of Object.entries(CONFIG.PERGASHA.characterFlags)) {
      if (!flags.hasOwnProperty(v.section)) flags[v.section] = {};
      let flag = foundry.utils.deepClone(v);
      flag.type = v.type.name;
      flag.isCheckbox = v.type === Boolean;
      flag.isSelect = v.hasOwnProperty('choices');
      flag.value = getProperty(baseData.flags, `pergashaFoundryvtt.${k}`);
      flags[v.section][`flags.pergashaFoundryvtt.${k}`] = flag;
    }
    return flags;
  }

  /* -------------------------------------------- */

  /**
   * Get the bonuses fields and their localization strings
   * @return {Array<object>}
   * @private
   */
  _getBonuses() {
    const bonuses = [
      { name: "data.bonuses.mwak.attack", label: "PERGASHA.BonusMWAttack" },
      { name: "data.bonuses.mwak.damage", label: "PERGASHA.BonusMWDamage" },
      { name: "data.bonuses.rwak.attack", label: "PERGASHA.BonusRWAttack" },
      { name: "data.bonuses.rwak.damage", label: "PERGASHA.BonusRWDamage" },
      // { name: "data.bonuses.msak.attack", label: "PERGASHA.BonusMSAttack" },
      // { name: "data.bonuses.msak.damage", label: "PERGASHA.BonusMSDamage" },
      // { name: "data.bonuses.rsak.attack", label: "PERGASHA.BonusRSAttack" },
      // { name: "data.bonuses.rsak.damage", label: "PERGASHA.BonusRSDamage" },
      { name: "data.bonuses.mpak.attack", label: "PERGASHA.BonusMPAttack" },
      { name: "data.bonuses.mpak.damage", label: "PERGASHA.BonusMPDamage" },
      { name: "data.bonuses.rpak.attack", label: "PERGASHA.BonusRPAttack" },
      { name: "data.bonuses.rpak.damage", label: "PERGASHA.BonusRPDamage" },
      { name: "data.bonuses.abilities.check", label: "PERGASHA.BonusAbilityCheck" },
      { name: "data.bonuses.abilities.save", label: "PERGASHA.BonusAbilitySave" },
      { name: "data.bonuses.abilities.skill", label: "PERGASHA.BonusAbilitySkill" },
      // { name: "data.bonuses.spell.dc", label: "PERGASHA.BonusSpellDC" },
      { name: "data.bonuses.psionics.dc", label: "PERGASHA.BonusPsionicDC" }
    ];
    for (let b of bonuses) {
      b.value = getProperty(this.object._data, b.name) || "";
    }
    return bonuses;
  }

  /* -------------------------------------------- */

  /** @override */
  async _updateObject(event, formData) {
    const actor = this.object;
    let updateData = expandObject(formData);

    // Unset any flags which are "false"
    let unset = false;
    const flags = updateData.flags.pergashaFoundryvtt;
    for (let [k, v] of Object.entries(flags)) {
      if ([undefined, null, "", false, 0].includes(v)) {
        delete flags[k];
        if (hasProperty(actor._data.flags, `pergashaFoundryvtt.${k}`)) {
          unset = true;
          flags[`-=${k}`] = null;
        }
      }
    }

    // Clear any bonuses which are whitespace only
    for (let b of Object.values(updateData.data.bonuses)) {
      for (let [k, v] of Object.entries(b)) {
        b[k] = v.trim();
      }
    }

    // Diff the data against any applied overrides and apply
    await actor.update(updateData, { diff: false });
  }
}
