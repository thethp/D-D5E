import Weapon from './Weapon';

class Bite extends Weapon {
	//constructor
	constructor(_mod) {
		_mod = !_mod ? 0 : _mod;

		super();
		this.g_name = 'Bite';
		this.g_description = 'Jaws and teeth can be vicious';
		this.g_numDice = 1;
		this.g_numSides = 6;
		this.g_mod = _mod;
	}
}

export default Bite;