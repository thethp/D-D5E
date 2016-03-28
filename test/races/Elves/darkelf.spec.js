import DarkElf from '../../../app/scripts/races/Elves/DarkElf';
import WeaponConstants from '../../../app/scripts/constants/WeaponConstants';
const should = require('chai').should();

const darkElf = new DarkElf();

describe('DarkElf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			darkElf.raceName.should.eql('Dark Elf');
			darkElf.fileName.should.eql('darkelf');
			darkElf.features.should.eql([
				'Fey Ancestry: You have advantage on saving throws against being chrmed, and magic can\'t put you to sleep',
				'Trance: You get the same amount of rest from 4 hours of sleep thatmost races get from 8 hours of sleep',
				'Superior Darkvision: Your darkvision has a radius of 120 feet',
				'Sunlight Sensitivity: You have disadvantage on attack rolls and wisdom [perception] checks that rely on sight when you or the target are in direct sunlight',
				'Drow Magic: You know the dancing lights cantrip at level 3 can cast faerie fire once per day and at level 5 can cast darkness once per day - all using charisma'
			]);
			darkElf.charisma.should.eql(1);
			darkElf.proficientWeapons.should.eql([WeaponConstants.RAPIER, WeaponConstants.SHORTSWORD, WeaponConstants.CROSSBOW]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			darkElf.getStats().should.eql({ strength: 0, dexterity: 2, constitution: 0, intelligence: 0, wisdom: 0, charisma: 1 });
		});
	});
});