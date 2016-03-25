import Dice from '../tools/Dice';
const dice = new Dice();

class Weapon {
	//constructor
	constructor() {
		this.g_name = '';
		this.g_description = '';
		this.g_numDice = 0;
		this.g_numSides = 0;
		this.g_mod = 0;
	}

	//getters and setters
	get weaponName() { return this.g_name; }
	set weaponName(val) { this.g_name = val; }

	get description() { return this.g_description; }
	set description(val) { this.g_description = val; }

	get numDice() { return this.g_numDice; }
	set numDice(val) { this.g_numDice = val; }

	get numSides() { return this.g_numSides; }
	set numSides(val) { this.g_numSides = val; }

	get mod() { return this.g_mod; }
	set mod(val) { this.g_mod = val; }

	getAttackRoll(_mod, _advantage, _disadvantage) {
		_mod = !_mod ? 0 : _mod;
		_advantage = !_advantage ? false : _advantage;
		_disadvantage = !_disadvantage ? false : _disadvantage;

		if(_advantage) {
			return dice.rollAdvantage(_mod);
		} else if (_disadvantage) {
			return dice.rollDisadvantage(_mod);
		} else {
			return dice.rollDice(1,20,_mod);
		}
	}

	getDamagePoints() {
		return dice.rollDice(this.numDice, this.numSides, this.mod);
	}
}

export default Weapon;