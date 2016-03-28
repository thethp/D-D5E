import WoodElf from '../../../app/scripts/races/Elves/WoodElf';
import WeaponConstants from '../../../app/scripts/constants/WeaponConstants';
const should = require('chai').should();

const woodElf = new WoodElf();

describe('WoodElf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			woodElf.raceName.should.eql('Wood Elf');
			woodElf.fileName.should.eql('woodelf');
			woodElf.speed.should.eql(35);
			woodElf.features.should.eql([
				'Fey Ancestry: You have advantage on saving throws against being chrmed, and magic can\'t put you to sleep',
				'Trance: You get the same amount of rest from 4 hours of sleep thatmost races get from 8 hours of sleep',
				'Mask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena'
			]);
			woodElf.wisdom.should.eql(1);
			woodElf.proficientWeapons.should.eql([WeaponConstants.LONGSWORD, WeaponConstants.SHORTSWORD, WeaponConstants.LONGBOW, WeaponConstants.SHORTBOW]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			woodElf.getStats().should.eql({ strength: 0, dexterity: 2, constitution: 0, intelligence: 0, wisdom: 1, charisma: 0 });
		});
	});
});