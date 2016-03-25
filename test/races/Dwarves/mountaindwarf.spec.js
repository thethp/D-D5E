import MountainDwarf from '../../../app/scripts/races/Dwarves/MountainDwarf';
const should = require('chai').should();

const mountainDwarf = new MountainDwarf();

describe('MountainDwarf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			mountainDwarf.raceName.should.eql('Mountain Dwarf');
			mountainDwarf.fileName.should.eql('mountaindwarf');
			mountainDwarf.strength.should.eql(2);
			mountainDwarf.hpDelta.should.eql(0);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			mountainDwarf.getStats().should.eql({ strength: 2, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});

	describe('getHitPointMod', () => {

		it('should return 0 because we are 0', () => {
			mountainDwarf.getHitPointMod(1).should.eql(0);
			mountainDwarf.getHitPointMod(2).should.eql(0);
		});
	});
});