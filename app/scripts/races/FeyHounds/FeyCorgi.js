import FeyHound from '../FeyHound';

class FeyCorgi extends FeyHound {

	constructor() {
		super();
		this.g_raceName = 'Fey Corgi';
		this.g_fileName = 'feycorgi';
		this.g_features.push('Corgi Grin: Advantage to checks to persuade non-hostile creatures that mean no harm');
		this.g_charisma += 1;
	}
};

export default FeyCorgi;