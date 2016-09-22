import DDClassConstants from '../constants/DDClassConstants';

class DDClass {
	//constructor
	constructor() {
		this.g_className = '';
		this.g_fileName = '';
		this.g_classId = 0;
		this.g_speed = 20;
		this.g_speedArmorDelta = 5;
		this.g_weapons = [];
		this.g_languages = [];
		this.g_strengthSave = false;
		this.g_dexteritySave = false;
		this.g_constitutionSave = false;
		this.g_intelligenceSave = false;
		this.g_wisdomSave = false;
		this.g_charismaSave = false;
		this.g_hpDelta = 0;
		this.g_proficientWeapons = [];
		this.g_proficientSkills = {};
		this.g_abilityAdds = 0;
		this.g_skillAdds = 0;
		this.g_languageAdds = 0;
	}

	//getters and setters
	get className() { return this.g_className; }
	set className(val) { this.g_className = val; }

	get fileName() { return this.g_fileName; }
	set fileName(val) { this.g_fileName = val; }

	get classId() { return this.g_classId; }
	set classId(val) { this.g_classId = val; }

	get speed() { return this.g_speed; }
	set speed(val) { this.g_speed = val; }

	get speedArmorDelta() { return this.g_speedArmorDelta; }
	set speedArmorDelta(val) { this.g_speedArmorDelta = val; }

	get weapons() { return this.g_weapons; }
	set weapons(val) { this.g_weapons = val; }

	get languages() { return this.g_languages; }
	set languages(val) { this.g_languages = val; }

	get strengthSave() { return this.g_strengthSave; }
	set strengthSave(val) { this.g_strengthSave = val; }

	get dexteritySave() { return this.g_dexteritySave; }
	set dexteritySave(val) { this.g_dexteritySave = val; }

	get constitutionSave() { return this.g_constitutionSave; }
	set constitutionSave(val) { this.g_constitutionSave = val; }

	get intelligenceSave() { return this.g_intelligenceSave; }
	set intelligenceSave(val) { this.g_intelligenceSave = val; }

	get wisdomSave() { return this.g_wisdomSave; }
	set wisdomSave(val) { this.g_wisdomSave = val; }

	get charismaSave() { return this.g_charismaSave; }
	set charismaSave(val) { this.g_charismaSave = val; }

	get hpDelta() { return this.g_hpDelta; }
	set hpDelta(val) { this.g_hpDelta = val; }

	get proficientWeapons() { return this.g_proficientWeapons; }
	set proficientWeapons(val) { this.g_proficientWeapons = val; }

	get proficientSkills() { return this.g_proficientSkills; }
	set proficientSkills(val) { this.g_proficientSkills = val; }

	get abilityAdds() { return this.g_abilityAdds; }
	set abilityAdds(val) { this.g_abilityAdds = val; }

	get abilityAdds() { return this.g_abilityAdds; }
	set abilityAdds(val) { this.g_abilityAdds = val; }

	get skillAdds() { return this.g_skillAdds; }
	set skillAdds(val) { this.g_skillAdds = val; }

	get languageAdds() { return this.g_languageAdds; }
	set languageAdds(val) { this.g_languageAdds = val; }

	//actual functions
	getCurrentSpeed(_armor) {
		let result = this.g_speed;

		if(_armor !== undefined && (_armor.weight === 'heavy' || _armor.weight === 'medium')) {
			result = result - this.speedArmorDelta;
		}

		return result;
	}

/*
	getSubRaces() {
		let result = (RaceConstants.subraces[this.classId].length > 0) ? RaceConstants.subraces[this.classId] : false;

		return result;
	}
  */

	getSaves() {

		return {
			strengthSave: this.strengthSave,
			dexteritySave: this.dexteritySave,
			constitutionSave: this.constitutionSave,
			intelligenceSave: this.intelligenceSave,
			wisdomSave: this.wisdomSave,
			charismaSave: this.charismaSave
		}
	}

	getHitPointMod(_level) {

		return _level*this.hpDelta;
	}

}

export default DDClass;
