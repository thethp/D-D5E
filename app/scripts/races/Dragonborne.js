import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class Dragonborne extends Race {

	constructor() {
		super();
		this.g_raceName = 'Dragonborne';
		this.g_fileName = 'dragonborne';
		this.g_raceId = RaceConstants.DRAGONBORNE;
		this.g_speed = 30;
		this.g_speedArmorDelta = 5;
		this.g_features.push();
		this.g_languages.push('Common', 'Draconic');
		this.g_strength += 2;
		this.g_charisma += 1;
	}
}

export default Dragonborne;