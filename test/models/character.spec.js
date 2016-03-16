import Character from '../../app/scripts/models/character.js';
const should = require('chai').should();

const characterModel = new Character;

describe('Character', function() {

	describe('Stats', function () {
		it('should return the correct value as a modifier', function () {
			characterModel.getStatModifier(1).should.eql(-5);
			characterModel.getStatModifier(3).should.eql(-4);
			characterModel.getStatModifier(10).should.eql(0);
			characterModel.getStatModifier(21).should.eql(5);
			characterModel.getStatModifier(30).should.eql(10);
		});
	});

	describe('Alignment', function () {

		it('should output alignment in spoken english', function () {
			characterModel.set('alignment', [0,0]);
			characterModel.getAlignment().should.not.equal('Neutral');
			characterModel.getAlignment().should.equal('Lawful Good');
			characterModel.getAlignment().should.be.a('string');

			characterModel.set('alignment', [1,1]);
			characterModel.getAlignment().should.equal('Neutral');

			characterModel.set('alignment', [2,2]);
			characterModel.getAlignment().should.equal('Chaotic Evil');
		});
	});

});