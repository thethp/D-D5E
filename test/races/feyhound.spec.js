import FeyHound from '../../app/scripts/races/FeyHound.js';
import FeyCorgi from '../../app/scripts/races/FeyHounds/FeyCorgi';
import FeyNewf from '../../app/scripts/races/FeyHounds/FeyNewf';
const should = require('chai').should();

const feyhound = new FeyHound();

describe('FeyHound', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			feyhound.raceName.should.eql('Fey Hound');
			feyhound.fileName.should.eql('feyhound');
			feyhound.raceId.should.eql(0);
		});
	});

	describe('getSubRaces', () => {

		it('should return the correct subraces', () => {
			feyhound.getSubRaces().should.eql([FeyCorgi, FeyNewf]);
		});
	});
});