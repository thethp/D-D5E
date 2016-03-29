import Halfling from '../../app/scripts/races/Halfling.js';
import Lightfoot from '../../app/scripts/races/Halflings/Lightfoot.js';
import Stout from '../../app/scripts/races/Halflings/Stout.js';
const should = require('chai').should();

const halfling = new Halfling();

describe('Halfling', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			halfling.raceName.should.eql('Halfling');
			halfling.fileName.should.eql('halfling');
			halfling.raceId.should.eql(3);
			halfling.size.should.eql('small');
			halfling.speed.should.eql(25);
			halfling.speedArmorDelta.should.eql(5);
			halfling.features.should.eql([
				'Lucky: When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
				'Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours.'
			]);	
			halfling.weapons.should.eql([]);
			halfling.languages.should.eql(['Common', 'Halfling']);
			halfling.dexterity.should.eql(2);
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			halfling.getCurrentSpeed({weight: 'heavy'}).should.eql(20);
		});

		it('should return the correct modified speed with medium armour', () => {
			halfling.getCurrentSpeed({weight: 'medium'}).should.eql(20);
		});

		it('should return an unmodified speed with light armour', () => {
			halfling.getCurrentSpeed({weight: 'light'}).should.eql(25);
		});

		it('should return an unmodified speed with no armour', () => {
			halfling.getCurrentSpeed().should.eql(25);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			halfling.getSubRaces().should.eql([Lightfoot, Stout]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			halfling.getStats().should.eql({ strength: 0, dexterity: 2, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});