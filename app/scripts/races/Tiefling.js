import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class Tiefling extends Race {

	constructor() {
		super();
		this.g_raceName = 'Tiefling';
		this.g_fileName = 'tiefling';
		this.g_raceId = RaceConstants.TIEFLING;
		this.g_speed = 30;
		this.g_speedArmorDelta = 10;
		this.g_darkVision = true;
		this.g_features.push(
			'Hellish Resistance: You have resistance to fire damage.',
			'Infernal Legacy: You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a 2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.'
		);
		this.g_languages.push('Common', 'Infernal');
		this.g_charisma += 2;
		this.g_intelligence += 1;
	}
}

export default Tiefling;