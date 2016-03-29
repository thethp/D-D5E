import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class Halfling extends Race {

	constructor() {
		super();
		this.g_raceName = 'Halfling';
		this.g_fileName = 'halfling';
		this.g_raceId = RaceConstants.HALFLING;
		this.g_size = 'small';
		this.g_speed = 25;
		this.g_speedArmorDelta = 5;
		this.g_features.push(
			'Lucky: When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
			'Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours.'
		);
		this.g_languages.push('Common', 'Halfling');
		this.g_dexterity += 2;
	}
}

export default Halfling;