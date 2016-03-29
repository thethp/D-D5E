import Human from '../../app/scripts/races/Human.js';
const should = require('chai').should();

const human = new Human();

describe('Human', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			human.raceName.should.eql('Human');
			human.fileName.should.eql('human');
			human.raceId.should.eql(4);
			human.size.should.eql('medium');
			human.speed.should.eql(30);
			human.speedArmorDelta.should.eql(10);
			human.features.should.eql([]);	
			human.weapons.should.eql([]);
			human.languages.should.eql(['Common']);
			human.strength.should.eql(1);
			human.dexterity.should.eql(1);
			human.constitution.should.eql(1);
			human.intelligence.should.eql(1);
			human.wisdom.should.eql(1);
			human.charisma.should.eql(1);
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			human.getCurrentSpeed({weight: 'heavy'}).should.eql(20);
		});

		it('should return the correct modified speed with medium armour', () => {
			human.getCurrentSpeed({weight: 'medium'}).should.eql(20);
		});

		it('should return an unmodified speed with light armour', () => {
			human.getCurrentSpeed({weight: 'light'}).should.eql(30);
		});

		it('should return an unmodified speed with no armour', () => {
			human.getCurrentSpeed().should.eql(30);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			human.getSubRaces().should.eql(false);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			human.getStats().should.eql({ strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 });
		});
	});
});