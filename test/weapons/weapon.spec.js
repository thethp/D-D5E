import Weapon from '../../app/scripts/weapons/Weapon.js';
const should = require('chai').should();

describe('Weapon', () => {

	describe('defaults', () => {
		const weapon = new Weapon();

		it('should have the correct defaults', () => {
			weapon.weaponName.should.eql('');
			weapon.numDice.should.eql(0);
			weapon.numSides.should.eql(0);
			weapon.mod.should.eql(0);
			weapon.range.should.eql([]);
			weapon.isMartial.should.eql(false);
			weapon.ammunition.should.eql(false);
			weapon.finesse.should.eql(false);
			weapon.heavy.should.eql(false);
			weapon.light.should.eql(false);
			weapon.loading.should.eql(false);
			weapon.reach.should.eql(false);
			weapon.special.should.eql(false);
			weapon.thrown.should.eql(false);
			weapon.twoHanded.should.eql(false);
			weapon.versatile.should.eql(false);
			weapon.silvered.should.eql(false);
			weapon.damageType.should.eql('piercing');
		});
	});

	describe('weaponName', () => {
		const weapon = new Weapon();

		it('should set and get the raceName value', () => {
			weapon.weaponName = 'Test Name';

			weapon.weaponName.should.eql('Test Name');
		});
	});
	
	describe('numDice', () => {
		const weapon = new Weapon();

		it('should set and get the numDice value', () => {
			weapon.numDice = 2;

			weapon.numDice.should.eql(2);
		});
	});

	describe('mod', () => {
		const weapon = new Weapon();

		it('should set and get the mod value', () => {
			weapon.mod = 2;

			weapon.mod.should.eql(2);
		});
	});

	describe('range', () => {
		const weapon = new Weapon();

		it('should set and get the range value', () => {
			weapon.range = [20,60];

			weapon.range.should.eql([20,60]);
		});
	});

	describe('isMartial', () => {
		const weapon = new Weapon();

		it('should set and get the isMartial value', () => {
			weapon.isMartial = true;

			weapon.isMartial.should.eql(true);
		});
	});

	describe('ammunition', () => {
		const weapon = new Weapon();

		it('should set and get the ammunition value', () => {
			weapon.ammunition = true;

			weapon.ammunition.should.eql(true);
		});
	});

	describe('finesse', () => {
		const weapon = new Weapon();

		it('should set and get the finesse value', () => {
			weapon.finesse = true;

			weapon.finesse.should.eql(true);
		});
	});

	describe('heavy', () => {
		const weapon = new Weapon();

		it('should set and get the heavy value', () => {
			weapon.heavy = true;

			weapon.heavy.should.eql(true);
		});
	});

	describe('light', () => {
		const weapon = new Weapon();

		it('should set and get the light value', () => {
			weapon.light = true;

			weapon.light.should.eql(true);
		});
	});

	describe('loading', () => {
		const weapon = new Weapon();

		it('should set and get the loading value', () => {
			weapon.loading = true;

			weapon.loading.should.eql(true);
		});
	});

	describe('reach', () => {
		const weapon = new Weapon();

		it('should set and get the reach value', () => {
			weapon.reach = true;

			weapon.reach.should.eql(true);
		});
	});

	describe('special', () => {
		const weapon = new Weapon();

		it('should set and get the special value', () => {
			weapon.special = true;

			weapon.special.should.eql(true);
		});
	});

	describe('thrown', () => {
		const weapon = new Weapon();

		it('should set and get the thrown value', () => {
			weapon.thrown = true;

			weapon.thrown.should.eql(true);
		});
	});

	describe('twoHanded', () => {
		const weapon = new Weapon();

		it('should set and get the twoHanded value', () => {
			weapon.twoHanded = true;

			weapon.twoHanded.should.eql(true);
		});
	});

	describe('versatile', () => {
		const weapon = new Weapon();

		it('should set and get the versatile value', () => {
			weapon.versatile = true;

			weapon.versatile.should.eql(true);
		});
	});

	describe('silvered', () => {
		const weapon = new Weapon();

		it('should set and get the silvered value', () => {
			weapon.silvered = true;

			weapon.silvered.should.eql(true);
		});
	});

	describe('damageType', () => {
		const weapon = new Weapon();

		it('should set and get the damageType value', () => {
			weapon.damageType = 'bludgeoning';

			weapon.damageType.should.eql('bludgeoning');
		});
	});

	describe('getBattleType', () => {
		const weapon = new Weapon();

		it('should return melee if the value is an empty array', () => {
			weapon.getBattleType().should.eql('melee');
		});

		it('should return ranged if the weapon is ranged', () => {
			weapon.range = [20,60];

			weapon.getBattleType().should.eql('ranged');
		});
	});

	describe('getAttackRoll', () => {
		const weapon = new Weapon();

		it('should return a correctly formatted dice object', () => {
			weapon.getAttackRoll().should.be.a('object');
			Object.keys(weapon.getAttackRoll()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return 2 rolls if advantage', () => {
			weapon.getAttackRoll(2,true).individualRolls.should.have.lengthOf(2);
		});

		it('should return 2 rolls if disadvantage', () => {
			weapon.getAttackRoll(2,false,true).individualRolls.should.have.lengthOf(2);
		});

		it('should return 1 rolls if not specified', () => {
			weapon.getAttackRoll(2).individualRolls.should.have.lengthOf(1);
		});

		it('should return a mod of 0 if not specified', () => {
			weapon.getAttackRoll().mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const weapon = new Weapon();

		it('should return a correctly formatted dice object', () => {
			weapon.getDamagePoints().should.be.a('object');
			Object.keys(weapon.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});
	});
});