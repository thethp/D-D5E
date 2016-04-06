import HalfElf from '../../app/scripts/races/HalfElf.js';
const should = require('chai').should();

const halfElf = new HalfElf();

describe('Half-Elf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			halfElf.raceName.should.eql('Half-Elf');
			halfElf.fileName.should.eql('half-elf');
			halfElf.raceId.should.eql(7);
			halfElf.size.should.eql('medium');
			halfElf.speed.should.eql(30);
			halfElf.speedArmorDelta.should.eql(10);
			halfElf.darkvision.should.eql(true);
			halfElf.features.should.eql([
				'Fey Ancestry: You have advantage on saving throws against being chrmed, and magic can\'t put you to sleep'
			]);	
			halfElf.weapons.should.eql([]);
			halfElf.languages.should.eql(['Common', 'Elvish']);
			halfElf.charisma.should.eql(2);
			halfElf.hpDelta.should.eql(0);
			halfElf.proficientWeapons.should.eql([]);
			halfElf.proficientSkills.should.eql({});
			halfElf.abilityAdds.should.eql(2);
			halfElf.skillAdds.should.eql(2);
			halfElf.languageAdds.should.eql(1);
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			halfElf.getCurrentSpeed({weight: 'heavy'}).should.eql(20);
		});

		it('should return the correct modified speed with medium armour', () => {
			halfElf.getCurrentSpeed({weight: 'medium'}).should.eql(20);
		});

		it('should return an unmodified speed with light armour', () => {
			halfElf.getCurrentSpeed({weight: 'light'}).should.eql(30);
		});

		it('should return an unmodified speed with no armour', () => {
			halfElf.getCurrentSpeed().should.eql(30);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			halfElf.getSubRaces().should.eql(false);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			halfElf.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 2 });
		});
	});
});