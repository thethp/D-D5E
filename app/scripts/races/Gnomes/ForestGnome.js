import Gnome from '../Gnome';
import RaceConstants from '../../constants/RaceConstants';
import Race from '../Race';

class ForestGnome extends Gnome {

	constructor() {
		super();
		this.g_raceName = 'Forest Gnome';
		this.g_fileName = 'forestgnome';
		this.g_features.push(
			'Natural Illusionist: You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.',
			'Speak with SmallBeasts: Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.'
		);
		this.g_dexterity += 1;
	}
}

export default ForestGnome;