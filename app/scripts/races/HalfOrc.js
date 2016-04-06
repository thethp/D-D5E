import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class HalfOrc extends Race {

	constructor() {
		super();
		this.g_raceName = 'Half-Orc';
		this.g_fileName = 'half-orc';
		this.g_raceId = RaceConstants.HALFORC;
		this.g_speed = 30;
		this.g_speedArmorDelta = 10;
		this.g_darkVision = true;
		this.g_features.push(
			'Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.',
			'Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.'
		);
		this.g_languages.push('Common', 'Orc');
		this.g_strength += 2;
		this.g_constitution += 1;
		this.g_proficientSkills.intimidation = true;
	}
}

export default HalfOrc;