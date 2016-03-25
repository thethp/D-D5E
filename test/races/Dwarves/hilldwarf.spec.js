import HillDwarf from '../../../app/scripts/races/Dwarves/HillDwarf';
const should = require('chai').should();

const hillDwarf = new HillDwarf();

describe('HillDwarf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			hillDwarf.raceName.should.eql('Hill Dwarf');
			hillDwarf.fileName.should.eql('hilldwarf');
			hillDwarf.wisdom.should.eql(1);
			hillDwarf.hpDelta.should.eql(1);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			hillDwarf.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 1, charisma: 0 });
		});
	});

	describe('getHitPointMod', () => {

		it('should return the modifier for hp based on level', () => {
			hillDwarf.getHitPointMod(1).should.eql(1);
			hillDwarf.getHitPointMod(2).should.eql(2);
		});
	});
});