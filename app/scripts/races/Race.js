import RaceConstants from '../constants/RaceConstants';

class Race {
	//constructor
	constructor() {
		this.g_raceName = '';
		this.g_fileName = '';
		this.g_raceId = 0;
	}

	//getters and setters
	get raceName() { return this.g_raceName; }
	set raceName(val) { this.g_raceName = val; }

	get fileName() { return this.g_fileName; }
	set fileName(val) { this.g_fileName = val; }

	get raceId() { return this.g_raceId; }
	set raceId(val) { this.g_raceId = val; }

	//actual functions
	getSubRaces() {
		let result = (RaceConstants.subraces[this.g_raceId].length > 0) ? RaceConstants.subraces[this.g_raceId] : false;

		return result;
	}

}

export default Race;