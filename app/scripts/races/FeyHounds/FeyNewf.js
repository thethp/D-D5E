import FeyHound from '../FeyHound';

class FeyNewf extends FeyHound {

	constructor() {
		super();
		this.g_raceName = 'Fey Newfoundland';
		this.g_fileName = 'feynewf';
		this.g_features.push('Water Rescue: You have a base swimming speed of 20 feet');
		this.g_strength += 2;
	}
}

export default FeyNewf;