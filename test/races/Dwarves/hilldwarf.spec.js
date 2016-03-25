import HillDwarf from '../../../app/scripts/races/Dwarves/HillDwarf';
const should = require('chai').should();

const hillDwarf = new HillDwarf();

describe('HillDwarf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			hillDwarf.raceName.should.eql('Mountain Dwarf');
			hillDwarf.fileName.should.eql('mountaindwarf');
			hillDwarf.size.should.eql('medium');
			hillDwarf.raceId.should.eql(1);
			hillDwarf.speed.should.eql(25);
			hillDwarf.speedArmorDelta.should.eql(0);
			hillDwarf.darkvision.should.eql(true);
			hillDwarf.features.should.eql([
				'Dwarven Resiliance: Advantage on saving throws against poison & resistance against poison damange',
				'Dwarven Combat Training: Proficiency with Battle Axe, Throwing Hammer, and Warhammer',
				'Dwarven Armor Training: Proficiency with light and medium armor',
				'Tool Proficiency: [choose one] Smith\'s Tools, Brewer\'s Supplies, Mason\'s Tools',
				'Stonecunning: Double proficiency bonus to Intelligence [history] checks on origin of stonework'
			]);
			hillDwarf.weapons.should.eql([]);
			hillDwarf.languages.should.eql(['Common', 'Dwarvish']);
			hillDwarf.constitution.should.eql(2);
			hillDwarf.wisdom.should.eql(1);
			hillDwarf.hpMod.should.eql(1);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			hillDwarf.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 1, charisma: 0 });
		});
	});
});