import Dice from '../tools/Dice';
const dice = new Dice();

class Weapon {
	//constructor
	constructor() {
		this.g_name = '';
		this.g_numDice = 0;
		this.g_numSides = 0;
		this.g_mod = 0;
		this.g_range = [];
		this.g_isMartial = false;
		this.g_ammunition = false;
		this.g_finesse = false;
		this.g_heavy = false;
		this.g_light = false;
		this.g_loading = false;
		this.g_reach = false;
		this.g_special = false;
		this.g_thrown = false;
		this.g_twoHanded = false;
		this.g_versatile = false;
		this.g_silvered = false;
		this.g_damageType = 'piercing';
	}

	//getters and setters
	get weaponName() { return this.g_name; }
	set weaponName(val) { this.g_name = val; }

	get numDice() { return this.g_numDice; }
	set numDice(val) { this.g_numDice = val; }

	get numSides() { return this.g_numSides; }
	set numSides(val) { this.g_numSides = val; }

	get mod() { return this.g_mod; }
	set mod(val) { this.g_mod = val; }

	get range() { return this.g_range; }
	set range(val) { this.g_range = val; }

	get isMartial() { return this.g_isMartial; }
	set isMartial(val) { this.g_isMartial = val; }

	get ammunition() { return this.g_ammunition; }
	set ammunition(val) { this.g_ammunition = val; }

	get finesse() { return this.g_finesse; }
	set finesse(val) { this.g_finesse = val; }

	get heavy() { return this.g_heavy; }
	set heavy(val) { this.g_heavy = val; }

	get light() { return this.g_light; }
	set light(val) { this.g_light = val; }

	get loading() { return this.g_loading; }
	set loading(val) { this.g_loading = val; }

	get reach() { return this.g_reach; }
	set reach(val) { this.g_reach = val; }

	get special() { return this.g_special; }
	set special(val) { this.g_special = val; }

	get thrown() { return this.g_thrown; }
	set thrown(val) { this.g_thrown = val; }

	get twoHanded() { return this.g_twoHanded; }
	set twoHanded(val) { this.g_twoHanded = val; }

	get versatile() { return this.g_versatile; }
	set versatile(val) { this.g_versatile = val; }

	get silvered() { return this.g_silvered; }
	set silvered(val) { this.g_silvered = val; }

	get damageType() { return this.g_damageType; }
	set damageType(val) { this.g_damageType = val; }

	getBattleType() {
		if(this.range.length <= 0) {
			return 'melee';
		} else {
			return 'ranged';
		}
	}

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