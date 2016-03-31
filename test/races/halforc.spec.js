import HalfOrc from '../../app/scripts/races/HalfOrc.js';
const should = require('chai').should();

const halfOrc = new HalfOrc();

describe('Half-Orc', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			halfOrc.raceName.should.eql('Half-Orc');
			halfOrc.fileName.should.eql('halforc');
			halfOrc.raceId.should.eql(7);
			halfOrc.size.should.eql('medium');
			halfOrc.speed.should.eql(30);
			halfOrc.speedArmorDelta.should.eql(10);
			halfOrc.darkvision.should.eql(true);
			halfOrc.features.should.eql([
				'Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.',
				'Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.'
			]);	
			halfOrc.weapons.should.eql([]);
			halfOrc.languages.should.eql(['Common', 'Orc']);
			halfOrc.strength.should.eql(2);
			halfOrc.constitution.should.eql(1);
			halfOrc.hpDelta.should.eql(0);
			halfOrc.proficientWeapons.should.eql([]);
			halfOrc.proficientSkills.should.eql({intimidation: true});
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			halfOrc.getCurrentSpeed({weight: 'heavy'}).should.eql(20);
		});

		it('should return the correct modified speed with medium armour', () => {
			halfOrc.getCurrentSpeed({weight: 'medium'}).should.eql(20);
		});

		it('should return an unmodified speed with light armour', () => {
			halfOrc.getCurrentSpeed({weight: 'light'}).should.eql(30);
		});

		it('should return an unmodified speed with no armour', () => {
			halfOrc.getCurrentSpeed().should.eql(30);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			halfOrc.getSubRaces().should.eql(false);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			halfOrc.getStats().should.eql({ strength: 2, dexterity: 0, constitution: 1, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});