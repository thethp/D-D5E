import Gnome from '../../app/scripts/races/Gnome';
import ForestGnome from '../../app/scripts/races/Gnomes/ForestGnome';
import RockGnome from '../../app/scripts/races/Gnomes/RockGnome';
const should = require('chai').should();

const gnome = new Gnome();

describe('Gnome', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			gnome.raceName.should.eql('Gnome');
			gnome.fileName.should.eql('gnome');
			gnome.raceId.should.eql(6);
			gnome.size.should.eql('small');
			gnome.speed.should.eql(25);
			gnome.speedArmorDelta.should.eql(10);
			gnome.darkvision.should.eql(true);
			gnome.features.should.eql([
				'Gnome Cunning: You have adantage on all intelligence, Wisdom, and Charisma saving throws against magic'
			]);	
			gnome.weapons.should.eql([]);
			gnome.languages.should.eql(['Common', 'Gnomish']);
			gnome.intelligence.should.eql(2);

		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			gnome.getCurrentSpeed({weight: 'heavy'}).should.eql(15);
		});

		it('should return the correct modified speed with medium armour', () => {
			gnome.getCurrentSpeed({weight: 'medium'}).should.eql(15);
		});

		it('should return an unmodified speed with light armour', () => {
			gnome.getCurrentSpeed({weight: 'light'}).should.eql(25);
		});

		it('should return an unmodified speed with no armour', () => {
			gnome.getCurrentSpeed().should.eql(25);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			gnome.getSubRaces().should.eql([ForestGnome, RockGnome]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			gnome.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 0, intelligence: 2, wisdom: 0, charisma: 0 });
		});
	});
});