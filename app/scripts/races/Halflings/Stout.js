import Halfling from '../Halfling';

class Stout extends Halfling {

	constructor() {
		super();
		this.g_raceName = 'Stout';
		this.g_fileName = 'stout';
		this.g_features.push(
			'Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.'
		);
		this.g_constitution += 1;
	}
}

export default Stout;