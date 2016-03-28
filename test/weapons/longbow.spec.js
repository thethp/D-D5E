import Longbow from '../../app/scripts/weapons/Longbow.js';
const should = require('chai').should();

describe('Longbow', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			const longBow = new Longbow(4);

			longBow.weaponName.should.eql('Longbow');
			longBow.numDice.should.eql(1);
			longBow.numSides.should.eql(8);
			longBow.mod.should.eql(4);
			longBow.isMartial.should.eql(true);
			longBow.range.should.eql([150,600]);
			longBow.heavy.should.eql(true);
			longBow.twoHanded.should.eql(true);
			longBow.damageType.should.eql('piercing');
			longBow.ammunition.should.eql(true);
		});

		it('should have the correct mod if none supplied', () => {
			const longBow = new Longbow();

			longBow.mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const longBow = new Longbow(2);

		it('should return a correctly formatted dice object', () => {
			longBow.getDamagePoints().should.be.a('object');
			Object.keys(longBow.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct individualRolls', () => {
			longBow.getDamagePoints().individualRolls.should.have.lengthOf(1);
		});

		it('should return the correct dice', () => {
			longBow.getDamagePoints().dice.should.eql('D8');
		});

		it('should return the correct mod value', () => {
			longBow.getDamagePoints().mod.should.eql(2);
		});
	});

	describe('getBattleType', () => {
		const longBow = new Longbow();

		it('should return ranged', () => {
			longBow.getBattleType().should.eql('ranged');
		});
	});
});