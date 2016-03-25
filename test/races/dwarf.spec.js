import Dwarf from '../../app/scripts/races/Dwarf.js';
import HillDwarf from '../../app/scripts/races/Dwarves/HillDwarf.js';
import MountainDwarf from '../../app/scripts/races/Dwarves/MountainDwarf.js';
const should = require('chai').should();

const dwarf = new Dwarf();

describe('dwarf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			dwarf.raceName.should.eql('Dwarf');
			dwarf.fileName.should.eql('dwarf');
			dwarf.raceId.should.eql(1);
			dwarf.size.should.eql('medium');
			dwarf.speed.should.eql(25);
			dwarf.speedArmorDelta.should.eql(0);
			dwarf.darkvision.should.eql(true);
			dwarf.features.should.eql([
				'Dwarven Resiliance: advantage on saving throws against poison & resistance against poison damange',
				'Dwarven Combat Training: Proficiency with Battle Axe, Throwing Hammer, and Warhammer',
				'Dwarven Armor Training: Proficiency with light and medium armor',
				'Tool Proficiency: [choose one] Smith\'s Tools, Brewer\'s Supplies, Mason\'s Tools',
				'Stonecunning: Double proficiency bonus to Intelligence [history] checks on origin of stonework'
			]);
			dwarf.weapons.should.eql([]);
			dwarf.languages.should.eql(['Common', 'Dwarvish']);
			dwarf.constitution.should.eql(2);
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			dwarf.getCurrentSpeed({weight: 'heavy'}).should.eql(25);
		});

		it('should return the correct modified speed with medium armour', () => {
			dwarf.getCurrentSpeed({weight: 'medium'}).should.eql(25);
		});

		it('should return an unmodified speed with light armour', () => {
			dwarf.getCurrentSpeed({weight: 'light'}).should.eql(25);
		});

		it('should return an unmodified speed with no armour', () => {
			dwarf.getCurrentSpeed().should.eql(25);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			dwarf.getSubRaces().should.eql([HillDwarf, MountainDwarf]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			dwarf.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});