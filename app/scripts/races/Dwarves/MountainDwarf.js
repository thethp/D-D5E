import Dwarf from '../Dwarf';

class MountainDwarf extends Dwarf {

	constructor() {
		super();
		this.g_raceName = 'Mountain Dwarf';
		this.g_fileName = 'mountaindwarf';
		this.g_strength += 2;
	}
}

export default MountainDwarf;