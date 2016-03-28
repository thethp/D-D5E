import Elf from '../../app/scripts/races/Elf.js';
import HighElf from '../../app/scripts/races/Elves/HighElf.js';
import WoodElf from '../../app/scripts/races/Elves/WoodElf.js';
import DarkElf from '../../app/scripts/races/Elves/DarkElf.js';
const should = require('chai').should();

const elf = new Elf();

describe('Elf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			elf.raceName.should.eql('Elf');
			elf.fileName.should.eql('elf');
			elf.raceId.should.eql(2);
			elf.size.should.eql('medium');
			elf.speed.should.eql(30);
			elf.speedArmorDelta.should.eql(10);
			elf.darkvision.should.eql(true);
			elf.features.should.eql([
				'Fey Ancestry: You have advantage on saving throws against being chrmed, and magic can\'t put you to sleep',
				'Trance: You get the same amount of rest from 4 hours of sleep thatmost races get from 8 hours of sleep'
			]);	
			elf.weapons.should.eql([]);
			elf.languages.should.eql(['Common', 'Elvish']);
			elf.dexterity.should.eql(2);
			elf.hpDelta.should.eql(0);
			elf.proficientWeapons.should.eql([]);
			elf.proficientSkills.should.eql({perception: true});
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			elf.getCurrentSpeed({weight: 'heavy'}).should.eql(20);
		});

		it('should return the correct modified speed with medium armour', () => {
			elf.getCurrentSpeed({weight: 'medium'}).should.eql(20);
		});

		it('should return an unmodified speed with light armour', () => {
			elf.getCurrentSpeed({weight: 'light'}).should.eql(30);
		});

		it('should return an unmodified speed with no armour', () => {
			elf.getCurrentSpeed().should.eql(30);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			elf.getSubRaces().should.eql([HighElf, WoodElf, DarkElf]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			elf.getStats().should.eql({ strength: 0, dexterity: 2, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});