import Weapon from '../../app/scripts/weapons/Weapon.js';
const should = require('chai').should();

describe('Weapon', () => {

	describe('defaults', () => {
		const weapon = new Weapon();

		it('should have the correct defaults', () => {
			weapon.weaponName.should.eql('');
			weapon.description.should.eql('');
			weapon.numDice.should.eql(0);
			weapon.numSides.should.eql(0);
			weapon.mod.should.eql(0);
		});
	});

	describe('weaponName', () => {
		const weapon = new Weapon();

		it('should set and get the raceName value', () => {
			weapon.weaponName = 'Test Name';

			weapon.weaponName.should.eql('Test Name');
		});
	});

	describe('description', () => {
		const weapon = new Weapon();

		it('should set and get the description value', () => {
			weapon.description = 'Test Description';

			weapon.description.should.eql('Test Description');
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

	describe('defaults', () => {
		const weapon = new Weapon();

		it('should have the correct defaults', () => {
			weapon.weaponName.should.eql('');
			weapon.description.should.eql('');
			weapon.numDice.should.eql(0);
			weapon.numSides.should.eql(0);
			weapon.mod.should.eql(0);
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