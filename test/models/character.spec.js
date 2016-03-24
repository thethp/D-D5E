import Character from '../../app/scripts/models/character.js';
const should = require('chai').should();

const character = new Character();

describe('Character', function() {

	describe('Stats', function () {
		it('should return the correct value as a modifier', function () {
			character.getStatModifier(1).should.eql(-5);
			character.getStatModifier(3).should.eql(-4);
			character.getStatModifier(10).should.eql(0);
			character.getStatModifier(21).should.eql(5);
			character.getStatModifier(30).should.eql(10);
		});
	});

	describe('Alignment', function () {

		it('should output alignment in spoken english', function () {
			character.alignment = [0,0];
			character.getAlignment().should.not.equal('Neutral');
			character.getAlignment().should.equal('Lawful Good');
			character.getAlignment().should.be.a('string');

			character.alignment = [1,1];
			character.getAlignment().should.equal('Neutral');

			character.alignment = [2,2];
			character.getAlignment().should.equal('Chaotic Evil');
		});
	});

});