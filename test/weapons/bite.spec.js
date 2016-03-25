import Bite from '../../app/scripts/weapons/Bite.js';
const should = require('chai').should();

describe('Bite', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			const bite = new Bite(4);
			bite.weaponName.should.eql('Bite');
			bite.description.should.eql('Jaws and teeth can be vicious');
			bite.numDice.should.eql(1);
			bite.numSides.should.eql(6);
			bite.mod.should.eql(4);
		});

		it('should have the correct mod if none supplied', () => {
			const bite = new Bite();
			bite.mod.should.eql(0);
		});
	});

	describe('getDamagePoints', () => {
		const bite = new Bite(2);

		it('should return a correctly formatted dice object', () => {
			bite.getDamagePoints().should.be.a('object');
			Object.keys(bite.getDamagePoints()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct individualRolls', () => {
			bite.getDamagePoints().individualRolls.should.have.lengthOf(1);
		});

		it('should return the correct dice', () => {
			bite.getDamagePoints().dice.should.eql('D6');
		});

		it('should return the correct mod value', () => {
			bite.getDamagePoints().mod.should.eql(2);
		});
	});
});