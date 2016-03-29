import Stout from '../../../app/scripts/races/Halflings/Stout';
import WeaponConstants from '../../../app/scripts/constants/WeaponConstants';
const should = require('chai').should();

const stout = new Stout();

describe('Stout', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			stout.raceName.should.eql('Stout');
			stout.fileName.should.eql('stout');
			stout.features.should.eql([
				'Lucky: When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
				'Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours.',
				'Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.'
			]);
			stout.constitution.should.eql(1);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			stout.getStats().should.eql({ strength: 0, dexterity: 2, constitution: 1, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});