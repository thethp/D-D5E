import FeyNewf from '../../../app/scripts/races/FeyHounds/FeyNewf';
import Bite from '../../../app/scripts/weapons/Bite';
const should = require('chai').should();

const feyNewf = new FeyNewf();

describe('FeyNewf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			feyNewf.raceName.should.eql('Fey Newfoundland');
			feyNewf.fileName.should.eql('feynewf');
			feyNewf.features.should.eql([
				'Colorblind: Red/Green Colorblind',
				'I\'ve Eaten Worse: Advantage on saving throws against poison & resistance against poison damange',
				'Fetch: Advantage on distraction checks against me, advantage on saving throws against being charmed, and can\'t be put to sleep magically',
				'Follow Your Nose: Advantage checks to track creatures in the past week, unless it as rained or the scent has been altered magically',
				'Water Rescue: You have a base swimming speed of 20 feet'
			]);
			feyNewf.constitution.should.eql(2);
			feyNewf.strength.should.eql(2);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			feyNewf.getStats().should.eql({ strength: 2, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 0, charisma: 0 });
		});
	});
});