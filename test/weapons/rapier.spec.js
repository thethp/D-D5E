import Rapier from '../../app/scripts/weapons/Rapier.js';
const should = require('chai').should();

describe('Rapier', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			const rapier = new Rapier(4);

			rapier.weaponName.should.eql('Rapier');
			rapier.description.should.eql('Slishy slashs and clicky clacks of the fancy variety');
			rapier.numDice.should.eql(1);
			rapier.numSides.should.eql(8);
			rapier.mod.should.eql(4);
			rapier.isMartial.should.eql(true);
			rapier.finesse.should.eql(true);
			rapier.damageType.should.eql('piercing');
		});

		it('should have the correct mod if none supplied', () => {
			const rapier = new Rapier();

			rapier.mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const rapier = new Rapier(2);

		it('should return a correctly formatted dice object', () => {
			rapier.getDamagePoints().should.be.a('object');
			Object.keys(rapier.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct individualRolls', () => {
			rapier.getDamagePoints().individualRolls.should.have.lengthOf(1);
		});

		it('should return the correct dice', () => {
			rapier.getDamagePoints().dice.should.eql('D6');
		});

		it('should return the correct mod value', () => {
			rapier.getDamagePoints().mod.should.eql(2);
		});
	});

	describe('getBattleType', () => {
		const rapier = new Rapier();

		it('should return melee', () => {
			rapier.getBattleType().should.eql('melee');
		});
	});
});