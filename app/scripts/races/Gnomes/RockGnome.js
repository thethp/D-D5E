import Gnome from '../Gnome';
import RaceConstants from '../../constants/RaceConstants';
import Race from '../Race';

class RockGnome extends Gnome {

	constructor() {
		super();
		this.g_raceName = 'RockGnome';
		this.g_fileName = 'rockgnome';
		this.g_features.push(
			'Artificer’s Lore: Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.',
			'Tinker: You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.'
		);
		this.g_constitution += 1;
	}
}

export default RockGnome;