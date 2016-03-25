import FeyHound from '../../app/scripts/races/FeyHound.js';
import FeyCorgi from '../../app/scripts/races/FeyHounds/FeyCorgi';
import FeyNewf from '../../app/scripts/races/FeyHounds/FeyNewf';
import Bite from '../../app/scripts/weapons/Bite';
const should = require('chai').should();

const feyHound = new FeyHound();

describe('FeyHound', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			feyHound.raceName.should.eql('Fey Hound');
			feyHound.fileName.should.eql('feyhound');
			feyHound.raceId.should.eql(0);
			feyHound.size.should.eql('medium');
			feyHound.speed.should.eql(30);
			feyHound.speedArmorDelta.should.eql(5);
			feyHound.darkvision.should.eql(true);
			feyHound.features.should.eql([
				'Colorblind: Red/Green Colorblind',
				'I\'ve Eaten Worse: Advantage on saving throws against poison & resistance against poison damange',
				'Fetch: Advantage on distraction checks against me, advantage on saving throws against being charmed, and can\'t be put to sleep magically',
				'Follow Your Nose: Advantage checks to track creatures in the past week, unless it as rained or the scent has been altered magically'
			]);
			feyHound.weapons.should.eql([Bite]);
			feyHound.languages.should.eql(['Common', 'Sylvan', 'Canine']);
			feyHound.constitution.should.eql(2);
		});
	});

	describe('getCurrentSpeed', () => {

		it('should return the correct modified speed with heavy armour', () => {
			feyHound.getCurrentSpeed({weight: 'heavy'}).should.eql(25);
		});

		it('should return the correct modified speed with medium armour', () => {
			feyHound.getCurrentSpeed({weight: 'medium'}).should.eql(25);
		});

		it('should return an unmodified speed with light armour', () => {
			feyHound.getCurrentSpeed({weight: 'light'}).should.eql(30);
		});

		it('should return an unmodified speed with no armour', () => {
			feyHound.getCurrentSpeed().should.eql(30);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			feyHound.getSubRaces().should.eql([FeyCorgi, FeyNewf]);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			feyHound.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});