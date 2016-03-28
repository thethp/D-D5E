import Shortsword from '../../app/scripts/weapons/Shortsword.js';
const should = require('chai').should();

describe('Shortsword', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			const shortSword = new Shortsword(4);

			shortSword.weaponName.should.eql('Shortsword');
			shortSword.description.should.eql('Slishy slashs and clicky clacks of the short variety');
			shortSword.numDice.should.eql(1);
			shortSword.numSides.should.eql(6);
			shortSword.mod.should.eql(4);
			shortSword.isMartial.should.eql(true);
			shortSword.light.should.eql(true);
			shortSword.finesse.should.eql(true);
			shortSword.damageType.should.eql('piercing');
		});

		it('should have the correct mod if none supplied', () => {
			const shortSword = new Shortsword();

			shortSword.mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const shortSword = new Shortsword(2);

		it('should return a correctly formatted dice object', () => {
			shortSword.getDamagePoints().should.be.a('object');
			Object.keys(shortSword.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct individualRolls', () => {
			shortSword.getDamagePoints().individualRolls.should.have.lengthOf(1);
		});

		it('should return the correct dice', () => {
			shortSword.getDamagePoints().dice.should.eql('D6');
		});

		it('should return the correct mod value', () => {
			shortSword.getDamagePoints().mod.should.eql(2);
		});
	});

	describe('getBattleType', () => {
		const shortSword = new Shortsword();

		it('should return melee', () => {
			shortSword.getBattleType().should.eql('melee');
		});
	});
});