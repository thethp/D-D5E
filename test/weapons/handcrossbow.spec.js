import HandCrossbow from '../../app/scripts/weapons/HandCrossbow.js';
const should = require('chai').should();

describe('Hand Crossbow', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			const crossBow = new HandCrossbow(4);

			crossBow.weaponName.should.eql('Hand Crossbow');
			crossBow.numDice.should.eql(1);
			crossBow.numSides.should.eql(6);
			crossBow.mod.should.eql(4);
			crossBow.isMartial.should.eql(false);
			crossBow.range.should.eql([30,120]);
			crossBow.twoHanded.should.eql(true);
			crossBow.loading.should.eql(true);
			crossBow.light.should.eql(true);
			crossBow.ammunition.should.eql(true);
			crossBow.damageType.should.eql('piercing');
			crossBow.cost.should.eql(7500);
			crossBow.weight.should.eql(3);
		});

		it('should have the correct mod if none supplied', () => {
			const crossBow = new HandCrossbow();

			crossBow.mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const crossBow = new HandCrossbow(2);

		it('should return a correctly formatted dice object', () => {
			crossBow.getDamagePoints().should.be.a('object');
			Object.keys(crossBow.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct individualRolls', () => {
			crossBow.getDamagePoints().individualRolls.should.have.lengthOf(1);
		});

		it('should return the correct dice', () => {
			crossBow.getDamagePoints().dice.should.eql('D6');
		});

		it('should return the correct mod value', () => {
			crossBow.getDamagePoints().mod.should.eql(2);
		});
	});

	describe('getBattleType', () => {
		const crossBow = new HandCrossbow();

		it('should return ranged', () => {
			crossBow.getBattleType().should.eql('ranged');
		});
	});
});