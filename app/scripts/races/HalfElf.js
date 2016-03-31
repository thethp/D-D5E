import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class HalfElf extends Race {

	constructor() {
		super();
		this.g_raceName = 'Half-Elf';
		this.g_fileName = 'halfelf';
		this.g_raceId = RaceConstants.HALFELF;
		this.g_speed = 30;
		this.g_speedArmorDelta = 10;
		this.g_darkVision = true;
		this.g_features.push(
			'Fey Ancestry: You have advantage on saving throws against being chrmed, and magic can\'t put you to sleep'
		);
		this.g_languages.push('Common', 'Elvish');
		this.g_charisma += 2;
	}
}

export default HalfElf;