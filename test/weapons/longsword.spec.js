import Longsword from '../../app/scripts/weapons/Longsword.js';
const should = require('chai').should();

describe('Longsword', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			const longSword = new Longsword(4);

			longSword.weaponName.should.eql('Longsword');
			longSword.numDice.should.eql(1);
			longSword.numSides.should.eql(8);
			longSword.mod.should.eql(4);
			longSword.isMartial.should.eql(true);
			longSword.versatile.should.eql(true);
			longSword.damageType.should.eql('slashing');
			longSword.cost.should.eql(1500);
			longSword.weight.should.eql(3);
		});

		it('should have the correct mod if none supplied', () => {
			const longSword = new Longsword();

			longSword.mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const longSword = new Longsword(2);

		it('should return a correctly formatted dice object', () => {
			longSword.getDamagePoints().should.be.a('object');
			Object.keys(longSword.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct individualRolls', () => {
			longSword.getDamagePoints().individualRolls.should.have.lengthOf(1);
		});

		it('should return the correct dice', () => {
			longSword.getDamagePoints().dice.should.eql('D8');
		});

		it('should return the correct mod value', () => {
			longSword.getDamagePoints().mod.should.eql(2);
		});
	});

	describe('getBattleType', () => {
		const longSword = new Longsword();

		it('should return melee', () => {
			longSword.getBattleType().should.eql('melee');
		});
	});
});