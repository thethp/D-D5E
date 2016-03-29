import Halfling from '../Halfling';

class Lightfoot extends Halfling {

	constructor() {
		super();
		this.g_raceName = 'Lightfoot';
		this.g_fileName = 'lightfoot';
		this.g_features.push(
			'Naturally Stealthy: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
		);
		this.g_charisma += 1;
	}
}

export default Lightfoot;