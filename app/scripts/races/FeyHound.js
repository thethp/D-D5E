import RaceConstants from '../constants/RaceConstants';
import Race from './Race';
import Bite from '../weapons/Bite';

class FeyHound extends Race {

	constructor() {
		super();
		this.g_raceName = 'Fey Hound';
		this.g_fileName = 'feyhound';
		this.g_raceId = RaceConstants.FEYHOUND;
		this.g_speed = 30;
		this.g_darkVision = true;
		this.g_features.push(
			'Colorblind: Red/Green Colorblind',
			'I\'ve Eaten Worse: Advantage on saving throws against poison & resistance against poison damange',
			'Fetch: Advantage on distraction checks against me, advantage on saving throws against being charmed, and can\'t be put to sleep magically',
			'Follow Your Nose: Advantage checks to track creatures in the past week, unless it as rained or the scent has been altered magically'
		);
		this.g_weapons = [Bite];
		this.g_languages.push('Common', 'Sylvan', 'Canine');
		this.g_strength += 0;
		this.g_dexterity += 0;
		this.g_constitution += 2;
		this.g_intelligence += 0;
		this.g_wisdom += 0;
		this.g_charisma += 0;
	}
};

export default FeyHound;