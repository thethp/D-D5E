import RaceConstants from '../constants/RaceConstants';
import Race from './Race';
import WeaponConstants from '../constants/WeaponConstants';

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
		this.g_weapons.push(WeaponConstants.BITE);
		this.g_languages.push('Common', 'Sylvan', 'Canine');
		this.g_constitution += 2;
		this.g_proficientWeapons.push(WeaponConstants.BITE);
	}
};

export default FeyHound;