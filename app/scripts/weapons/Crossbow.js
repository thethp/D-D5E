import Weapon from './Weapon';

class Crossbow extends Weapon {
	//_mod to be strength modifier 
	constructor(_mod) {
		_mod = !_mod ? 0 : _mod;

		super();
		this.g_name = 'Crossbow';
		this.g_numDice = 1;
		this.g_numSides = 8;
		this.g_mod = _mod;
		this.g_isMartial = false;
		this.g_range = [80,320];
		this.g_twoHanded = true;
		this.g_loading = true;
		this.g_light = true;
		this.g_ammunition = true;
	}
}

export default Crossbow;