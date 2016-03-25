import MountainDwarf from '../../../app/scripts/races/Dwarves/MountainDwarf';
const should = require('chai').should();

const mountainDwarf = new MountainDwarf();

describe('MountainDwarf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			mountainDwarf.raceName.should.eql('Mountain Dwarf');
			mountainDwarf.fileName.should.eql('mountaindwarf');
			mountainDwarf.size.should.eql('medium');
			mountainDwarf.raceId.should.eql(1);
			mountainDwarf.speed.should.eql(25);
			mountainDwarf.speedArmorDelta.should.eql(0);
			mountainDwarf.darkvision.should.eql(true);
			mountainDwarf.features.should.eql([
				'Dwarven Resiliance: advantage on saving throws against poison & resistance against poison damange',
				'Dwarven Combat Training: Proficiency with Battle Axe, Throwing Hammer, and Warhammer',
				'Dwarven Armor Training: Proficiency with light and medium armor',
				'Tool Proficiency: [choose one] Smith\'s Tools, Brewer\'s Supplies, Mason\'s Tools',
				'Stonecunning: Double proficiency bonus to Intelligence [history] checks on origin of stonework'
			]);
			mountainDwarf.weapons.should.eql([]);
			mountainDwarf.languages.should.eql(['Common', 'Dwarvish']);
			mountainDwarf.constitution.should.eql(2);
			mountainDwarf.strength.should.eql(2);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			mountainDwarf.getStats().should.eql({ strength: 2, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});