import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class Human extends Race {

	constructor() {
		super();
		this.g_raceName = 'Human';
		this.g_fileName = 'human';
		this.g_raceId = RaceConstants.HUMAN;
		this.g_size = 'medium';
		this.g_speed = 30;
		this.g_speedArmorDelta = 10;
		this.g_languages.push('Common');
		this.g_strength += 1;
		this.g_dexterity += 1;
		this.g_constitution += 1;
		this.g_intelligence += 1;
		this.g_wisdom += 1;
		this.g_charisma += 1;
	}
}

export default Human;