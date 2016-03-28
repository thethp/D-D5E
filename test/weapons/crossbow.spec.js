import Crossbow from '../../app/scripts/weapons/Crossbow.js';
const should = require('chai').should();

describe('Crossbow', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			const crossBow = new Crossbow(4);

			crossBow.weaponName.should.eql('Crossbow');
			crossBow.numDice.should.eql(1);
			crossBow.numSides.should.eql(8);
			crossBow.mod.should.eql(4);
			crossBow.isMartial.should.eql(false);
			crossBow.range.should.eql([80,320]);
			crossBow.twoHanded.should.eql(true);
			crossBow.loading.should.eql(true);
			crossBow.light.should.eql(true);
			crossBow.ammunition.should.eql(true);
			crossBow.damageType.should.eql('piercing');
		});

		it('should have the correct mod if none supplied', () => {
			const crossBow = new Crossbow();

			crossBow.mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const crossBow = new Crossbow(2);

		it('should return a correctly formatted dice object', () => {
			crossBow.getDamagePoints().should.be.a('object');
			Object.keys(crossBow.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct individualRolls', () => {
			crossBow.getDamagePoints().individualRolls.should.have.lengthOf(1);
		});

		it('should return the correct dice', () => {
			crossBow.getDamagePoints().dice.should.eql('D8');
		});

		it('should return the correct mod value', () => {
			crossBow.getDamagePoints().mod.should.eql(2);
		});
	});

	describe('getBattleType', () => {
		const crossBow = new Crossbow();

		it('should return ranged', () => {
			crossBow.getBattleType().should.eql('ranged');
		});
	});
});