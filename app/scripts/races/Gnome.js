import RaceConstants from '../constants/RaceConstants';
import Race from './Race';

class Gnome extends Race {

	constructor() {
		super();
		this.g_raceName = 'Gnome';
		this.g_fileName = 'gnome';
		this.g_raceId = RaceConstants.GNOME;
		this.g_size = 'small';
		this.g_speed = 25;
		this.g_speedArmorDelta = 10;
		this.g_darkVision = true;
		this.g_features.push(
			'Gnome Cunning: You have adantage on all intelligence, Wisdom, and Charisma saving throws against magic'
		);
		this.g_languages.push('Common', 'Gnomish');
		this.g_intelligence += 2;
	}
}

export default Gnome;