import Character from '../../app/scripts/models/character.js';

const assert = require('chai').assert;
const should = require('chai').should();

const characterModel = new Character;

describe('Character', function() {

	describe('Stats', function () {
		it('should return the correct value as a modifier', function () {
			assert.equal(-5, characterModel.getStatModifier(1));
			assert.equal(-4, characterModel.getStatModifier(3));
			assert.equal(0, characterModel.getStatModifier(10));
			assert.equal(5, characterModel.getStatModifier(21));
			assert.equal(10, characterModel.getStatModifier(30));
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