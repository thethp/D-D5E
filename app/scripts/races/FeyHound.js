import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class FeyHound extends Race {

	constructor() {
		super();
		this.g_raceName = 'Fey Hound';
		this.g_fileName = 'feyhound';
		this.g_raceId = RaceConstants.FEYHOUND;
	}
};

export default FeyHound;