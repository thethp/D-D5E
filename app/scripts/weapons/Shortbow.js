import Weapon from './Weapon';

class Shortbow extends Weapon {
	//_mod to be strength modifier 
	constructor(_mod) {
		_mod = !_mod ? 0 : _mod;

		super();
		this.g_name = 'Shortbow';
		this.g_numDice = 1;
		this.g_numSides = 6;
		this.g_mod = _mod;
		this.g_range = [80,320];
		this.g_twoHanded = true;
		this.g_ammunition = true;
	}
}

export default Shortbow;