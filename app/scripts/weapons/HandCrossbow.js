import Weapon from './Weapon';

class Crossbow extends Weapon {
	//_mod to be strength modifier 
	constructor(_mod) {
		_mod = !_mod ? 0 : _mod;

		super();
		this.g_name = 'Hand Crossbow';
		this.g_numDice = 1;
		this.g_numSides = 6;
		this.g_mod = _mod;
		this.g_isMartial = false;
		this.g_range = [30,120];
		this.g_twoHanded = true;
		this.g_loading = true;
		this.g_light = true;
		this.g_ammunition = true;
		this.g_cost = 7500;
		this.g_weight = 3;
	}
}

export default Crossbow;