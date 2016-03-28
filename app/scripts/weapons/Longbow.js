import Weapon from './Weapon';

class Longbow extends Weapon {
	//_mod to be strength modifier 
	constructor(_mod) {
		_mod = !_mod ? 0 : _mod;

		super();
		this.g_name = 'Longbow';
		this.g_numDice = 1;
		this.g_numSides = 8;
		this.g_mod = _mod;
		this.g_isMartial = true;
		this.g_range = [150,600];
		this.g_twoHanded = true;
		this.g_heavy = true;
		this.g_ammunition = true;
	}
}

export default Longbow;