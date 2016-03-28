import Weapon from './Weapon';

class Rapier extends Weapon {
	//_mod to be strength modifier 
	constructor(_mod) {
		_mod = !_mod ? 0 : _mod;

		super();
		this.g_name = 'Rapier';
		this.g_numDice = 1;
		this.g_numSides = 8;
		this.g_mod = _mod;
		this.g_isMartial = true;
		this.g_finesse = true;
		this.g_damageType = 'piercing';
	}
}

export default Rapier;