import Tiefling from '../../app/scripts/races/Tiefling.js';
const should = require('chai').should();

const tiefling = new Tiefling();

describe('Tiefling', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			tiefling.raceName.should.eql('Tiefling');
			tiefling.fileName.should.eql('tiefling');
			tiefling.raceId.should.eql(7);
			tiefling.size.should.eql('medium');
			tiefling.speed.should.eql(30);
			tiefling.speedArmorDelta.should.eql(10);
			tiefling.darkvision.should.eql(true);
			tiefling.features.should.eql([
				'Hellish Resistance: You have resistance to fire damage.',
				'Infernal Legacy: You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a 2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.'
			]);	
			tiefling.weapons.should.eql([]);
			tiefling.languages.should.eql(['Common', 'Elvish']);
			tiefling.charisma.should.eql(2);
			tiefling.intelligence.should.eql(1);
			tiefling.hpDelta.should.eql(0);
			tiefling.proficientWeapons.should.eql([]);
			tiefling.proficientSkills.should.eql({});
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			tiefling.getCurrentSpeed({weight: 'heavy'}).should.eql(20);
		});

		it('should return the correct modified speed with medium armour', () => {
			tiefling.getCurrentSpeed({weight: 'medium'}).should.eql(20);
		});

		it('should return an unmodified speed with light armour', () => {
			tiefling.getCurrentSpeed({weight: 'light'}).should.eql(30);
		});

		it('should return an unmodified speed with no armour', () => {
			tiefling.getCurrentSpeed().should.eql(30);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			tiefling.getSubRaces().should.eql(false);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			tiefling.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 0, intelligence: 1, wisdom: 0, charisma: 2 });
		});
	});
});