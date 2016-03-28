import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class Elf extends Race {

	constructor() {
		super();
		this.g_raceName = 'Elf';
		this.g_fileName = 'elf';
		this.g_raceId = RaceConstants.ELF;
		this.g_speed = 30;
		this.g_speedArmorDelta = 10;
		this.g_darkVision = true;
		this.g_features.push(
			'Fey Ancestry: You have advantage on saving throws against being chrmed, and magic can\'t put you to sleep',
			'Trance: You get the same amount of rest from 4 hours of sleep thatmost races get from 8 hours of sleep'
		);
		this.g_languages.push('Common', 'Elvish');
		this.g_dexterity += 2;
		this.g_proficientSkills.perception = true;
	}
};

export default Elf;