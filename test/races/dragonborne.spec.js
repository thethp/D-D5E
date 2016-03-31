import Dragonborne from '../../app/scripts/races/Dragonborne.js';
const should = require('chai').should();

const dragonborne = new Dragonborne();

describe('Dragonborne', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			dragonborne.raceName.should.eql('Dragonborne');
			dragonborne.fileName.should.eql('dragonborne');
			dragonborne.raceId.should.eql(5);
			dragonborne.size.should.eql('medium');
			dragonborne.speed.should.eql(30);
			dragonborne.speedArmorDelta.should.eql(5);
			dragonborne.features.should.eql([]);	
			dragonborne.weapons.should.eql([]);
			dragonborne.languages.should.eql(['Common', 'Draconic']);
			dragonborne.strength.should.eql(2);
			dragonborne.charisma.should.eql(1);
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			dragonborne.getCurrentSpeed({weight: 'heavy'}).should.eql(25);
		});

		it('should return the correct modified speed with medium armour', () => {
			dragonborne.getCurrentSpeed({weight: 'medium'}).should.eql(25);
		});

		it('should return an unmodified speed with light armour', () => {
			dragonborne.getCurrentSpeed({weight: 'light'}).should.eql(30);
		});

		it('should return an unmodified speed with no armour', () => {
			dragonborne.getCurrentSpeed().should.eql(30);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			dragonborne.getSubRaces().should.eql(false);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			dragonborne.getStats().should.eql({ strength: 2, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 1 });
		});
	});
});