import FeyCorgi from '../../../app/scripts/races/FeyHounds/FeyCorgi';
import Bite from '../../../app/scripts/weapons/Bite';
const should = require('chai').should();

const feyCorgi = new FeyCorgi();

describe('FeyCorgi', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			feyCorgi.raceName.should.eql('Fey Corgi');
			feyCorgi.fileName.should.eql('feycorgi');
			feyCorgi.features.should.eql([
				'Colorblind: Red/Green Colorblind',
				'I\'ve Eaten Worse: Advantage on saving throws against poison & resistance against poison damange',
				'Fetch: Advantage on distraction checks against me, advantage on saving throws against being charmed, and can\'t be put to sleep magically',
				'Follow Your Nose: Advantage checks to track creatures in the past week, unless it as rained or the scent has been altered magically',
				'Corgi Grin: Advantage to checks to persuade non-hostile creatures that mean no harm'
			]);
			feyCorgi.charisma.should.eql(1);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			feyCorgi.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 2, intelligence: 0, wisdom: 0, charisma: 1 });
		});
	});
});