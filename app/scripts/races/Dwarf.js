import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class Dwarf extends Race {

	constructor() {
		super();
		this.g_raceName = 'Dwarf';
		this.g_fileName = 'dwarf';
		this.g_raceId = RaceConstants.DWARF;
		this.g_speed = 25;
		this.g_speedArmorDelta = 0;
		this.g_darkVision = true;
		this.g_features.push(
			'Dwarven Resiliance: Advantage on saving throws against poison & resistance against poison damange',
			'Dwarven Combat Training: Proficiency with Battle Axe, Throwing Hammer, and Warhammer',
			'Dwarven Armor Training: Proficiency with light and medium armor',
			'Tool Proficiency: [choose one] Smith\'s Tools, Brewer\'s Supplies, Mason\'s Tools',
			'Stonecunning: Double proficiency bonus to Intelligence [history] checks on origin of stonework'
		);
		this.g_languages.push('Common', 'Dwarvish');
		this.g_constitution += 2;
	}
};

export default Dwarf;