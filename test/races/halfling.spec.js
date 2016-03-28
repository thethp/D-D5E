import Halfling from '../../app/scripts/races/Halfling.js';
import Lightfoot from '../../app/scripts/races/Halflings/Lightfoot.js';
import Stout from '../../app/scripts/races/Halflings/Stout.js';
const should = require('chai').should();

const halfling = new Halfling();

describe('Halfling', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			halfling.raceName.should.eql('Elf');
			halfling.fileName.should.eql('elf');
			halfling.raceId.should.eql(2);
			halfling.size.should.eql('medium');
			halfling.speed.should.eql(30);
			halfling.speedArmorDelta.should.eql(10);
			halfling.darkvision.should.eql(true);
			halfling.features.should.eql([
				'Fey Ancestry: You have advantage on saving throws against being chrmed, and magic can\'t put you to sleep',
				'Trance: You get the same amount of rest from 4 hours of sleep thatmost races get from 8 hours of sleep'
			]);	
			halfling.weapons.should.eql([]);
			halfling.languages.should.eql(['Common', 'Elvish']);
			halfling.dexterity.should.eql(2);
			halfling.hpDelta.should.eql(0);
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
			halfling.getCurrentSpeed({weight: 'light'}).should.eql(30);
		});

		it('should return an unmodified speed with no armour', () => {
			halfling.getCurrentSpeed().should.eql(30);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			halfling.getSubRaces().should.eql([HighElf, WoodElf, DarkElf]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			halfling.getStats().should.eql({ strength: 0, dexterity: 2, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});