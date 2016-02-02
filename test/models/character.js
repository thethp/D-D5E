define(['chai', '../../app/scripts/models/character.js'], function(Chai, CharacterModel) {
  'use strict';

  var character = new CharacterModel();
  var should = Chai.should();
  var expect = Chai.expect;
  var assert = Chai.assert;

  describe('Character', function() {
  	
	  describe('Stats', function () {
	    it('should return the correct value as a modifier', function () {
	      assert.equal(-5, character.getStatModifier(1));
	      assert.equal(-4, character.getStatModifier(3));
	      assert.equal(0, character.getStatModifier(10));
	      assert.equal(5, character.getStatModifier(21));
	      assert.equal(10, character.getStatModifier(30));
	    });
	  });

	  describe('Alignment', function () {
	  	
	    it('should output alignment in spoken english', function () {

	    	character.set('alignment', [0,0]);
	      character.getAlignment().should.not.equal('Neutral');

	      character.set('alignment', [1,1]);
	      character.getAlignment().should.equal('Neutral');
	    });
	  });

	});
});