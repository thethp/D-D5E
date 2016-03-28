import HighElf from '../../../app/scripts/races/Elves/HighElf';
import WeaponConstants from '../../../app/scripts/constants/WeaponConstants';
const should = require('chai').should();

const highElf = new HighElf();

describe('HighElf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			highElf.raceName.should.eql('High Elf');
			highElf.fileName.should.eql('highelf');
			highElf.features.should.eql([
				'Fey Ancestry: You have advantage on saving throws against being chrmed, and magic can\'t put you to sleep',
				'Trance: You get the same amount of rest from 4 hours of sleep thatmost races get from 8 hours of sleep',
				'Cantrip: You get one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it',
				'Extra Language: You can speak, read, and write one extra language of your choice'
			]);
			highElf.intelligence.should.eql(1);
			highElf.proficientWeapons.should.eql([
				WeaponConstants.LONGSWORD, 
				WeaponConstants.SHORTSWORD, 
				WeaponConstants.LONGBOW, 
				WeaponConstants.SHORTBOW
			]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			highElf.getStats().should.eql({ strength: 0, dexterity: 2, constitution: 0, intelligence: 1, wisdom: 0, charisma: 0 });
		});
	});
});