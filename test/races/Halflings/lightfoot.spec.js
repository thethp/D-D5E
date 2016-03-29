import Lightfoot from '../../../app/scripts/races/Halflings/Lightfoot';
import WeaponConstants from '../../../app/scripts/constants/WeaponConstants';
const should = require('chai').should();

const lightfoot = new Lightfoot();

describe('Lightfoot', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			lightfoot.raceName.should.eql('Lightfoot');
			lightfoot.fileName.should.eql('lightfoot');
			lightfoot.features.should.eql([
				'Lucky: When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
				'Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours.',
				'Naturally Stealthy: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
			]);
			lightfoot.charisma.should.eql(1);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			lightfoot.getStats().should.eql({ strength: 0, dexterity: 2, constitution: 0, intelligence: 0, wisdom: 0, charisma: 1 });
		});
	});
});