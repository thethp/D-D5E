import Dwarf from '../Dwarf';

class HillDwarf extends Dwarf {

	constructor() {
		super();
		this.g_raceName = 'Hill Dwarf';
		this.g_fileName = 'hilldwarf';
		this.g_wisdom += 1;
		this.g_hpDelta = 1;
	}
}

export default HillDwarf;