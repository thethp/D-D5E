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

	//actual functions
	getCurrentSpeed(_armor) {
		let result = this.g_speed;

		if(_armor != undefined && (_armor.weight == 'heavy' || _armor.weight == 'medium')) {
			result = result - this.g_speedArmorDelta;
		}

		return result;
	}

	getSubRaces() {
		let result = (RaceConstants.subraces[this.g_raceId].length > 0) ? RaceConstants.subraces[this.g_raceId] : false;

		return result;
	}

}

export default Race;