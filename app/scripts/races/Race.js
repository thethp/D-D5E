import RaceConstants from '../constants/RaceConstants';

class Race {
	//constructor
	constructor() {
		this.g_raceName = '';
		this.g_fileName = '';
		this.g_raceId = 0;
		this.g_size = 'medium';
		this.g_speed = 20;
		this.g_speedArmorDelta = 5;
		this.g_darkVision = false;
		this.g_features = [];
		this.g_weapons = [];
		this.g_languages = [];
		this.g_strength = 0;
		this.g_dexterity = 0;
		this.g_constitution = 0;
		this.g_intelligence = 0;
		this.g_wisdom = 0;
		this.g_charisma = 0;
		this.g_hpDelta = 0;
		this.g_proficientWeapons = [];
		this.g_proficientSkills = {};
	}

	//getters and setters
	get raceName() { return this.g_raceName; }
	set raceName(val) { this.g_raceName = val; }

	get fileName() { return this.g_fileName; }
	set fileName(val) { this.g_fileName = val; }

	get raceId() { return this.g_raceId; }
	set raceId(val) { this.g_raceId = val; }

	get size() { return this.g_size; }
	set size(val) { this.g_size = val; }

	get speed() { return this.g_speed; }
	set speed(val) { this.g_speed = val; }

	get speedArmorDelta() { return this.g_speedArmorDelta; }
	set speedArmorDelta(val) { this.g_speedArmorDelta = val; }

	get darkvision() { return this.g_darkVision; }
	set darkvision(val) { this.g_darkVision = val; }

	get features() { return this.g_features; }
	set features(val) { this.g_features = val; }

	get weapons() { return this.g_weapons; }
	set weapons(val) { this.g_weapons = val; }

	get languages() { return this.g_languages; }
	set languages(val) { this.g_languages = val; }

	get strength() { return this.g_strength; }
	set strength(val) { this.g_strength = val; }

	get dexterity() { return this.g_dexterity; }
	set dexterity(val) { this.g_dexterity = val; }

	get constitution() { return this.g_constitution; }
	set constitution(val) { this.g_constitution = val; }

	get intelligence() { return this.g_intelligence; }
	set intelligence(val) { this.g_intelligence = val; }

	get wisdom() { return this.g_wisdom; }
	set wisdom(val) { this.g_wisdom = val; }

	get charisma() { return this.g_charisma; }
	set charisma(val) { this.g_charisma = val; }

	get hpDelta() { return this.g_hpDelta; }
	set hpDelta(val) { this.g_hpDelta = val; }

	get proficientWeapons() { return this.g_proficientWeapons; }
	set proficientWeapons(val) { this.g_proficientWeapons = val; }

	get proficientSkills() { return this.g_proficientSkills; }
	set proficientSkills(val) { this.g_proficientSkills = val; }

	//actual functions
	getCurrentSpeed(_armor) {
		let result = this.g_speed;

		if(_armor != undefined && (_armor.weight == 'heavy' || _armor.weight == 'medium')) {
			result = result - this.speedArmorDelta;
		}

		return result;
	}

	getSubRaces() {
		let result = (RaceConstants.subraces[this.raceId].length > 0) ? RaceConstants.subraces[this.raceId] : false;

		return result;
	}

	getStats() {
		return {
			strength: this.strength,
			dexterity: this.dexterity,
			constitution: this.constitution,
			intelligence: this.intelligence,
			wisdom: this.wisdom,
			charisma: this.charisma
		};
	}

	getHitPointMod(_level) {
		return _level*this.hpDelta;
	}

}

export default Race;