import Weapon from './Weapon';

class Shortsword extends Weapon {
	//_mod to be strength modifier 
	constructor(_mod) {
		_mod = !_mod ? 0 : _mod;

		super();
		this.g_name = 'Shortsword';
		this.g_numDice = 1;
		this.g_numSides = 6;
		this.g_mod = _mod;
		this.g_isMartial = true;
		this.g_light = true;
		this.g_finesse = true;
		this.g_damageType = 'piercing';
		this.g_cost = 1000;
		this.g_weight = 2;
	}
}

export default Shortsword;