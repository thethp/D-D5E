import Weapon from './Weapon';

class Longsword extends Weapon {
	//_mod to be strength modifier 
	constructor(_mod) {
		_mod = !_mod ? 0 : _mod;

		super();
		this.g_name = 'Longsword';
		this.g_numDice = 1;
		this.g_numSides = 8;
		this.g_mod = _mod;
		this.g_isMartial = true;
		this.g_versatile = true;
		this.g_damageType = 'slashing';
		this.g_cost = 1500;
		this.g_weight = 3;
	}
}

export default Longsword;