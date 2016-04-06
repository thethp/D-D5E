import Shortbow from '../../app/scripts/weapons/Shortbow.js';
const should = require('chai').should();

describe('Shortbow', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			const shortBow = new Shortbow(4);

			shortBow.weaponName.should.eql('Shortbow');
			shortBow.numDice.should.eql(1);
			shortBow.numSides.should.eql(6);
			shortBow.mod.should.eql(4);
			shortBow.isMartial.should.eql(false);
			shortBow.range.should.eql([80,320]);
			shortBow.twoHanded.should.eql(true);
			shortBow.damageType.should.eql('piercing');
			shortBow.ammunition.should.eql(true);
			shortBow.cost.should.eql(2500);
			shortBow.weight.should.eql(2);
		});

		it('should have the correct mod if none supplied', () => {
			const shortBow = new Shortbow();

			shortBow.mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const shortBow = new Shortbow(2);

		it('should return a correctly formatted dice object', () => {
			shortBow.getDamagePoints().should.be.a('object');
			Object.keys(shortBow.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct individualRolls', () => {
			shortBow.getDamagePoints().individualRolls.should.have.lengthOf(1);
		});

		it('should return the correct dice', () => {
			shortBow.getDamagePoints().dice.should.eql('D6');
		});

		it('should return the correct mod value', () => {
			shortBow.getDamagePoints().mod.should.eql(2);
		});
	});

	describe('getBattleType', () => {
		const shortBow = new Shortbow();

		it('should return ranged', () => {
			shortBow.getBattleType().should.eql('ranged');
		});
	});
});