import FeyNewf from '../../../app/scripts/races/FeyHounds/FeyNewf';
const should = require('chai').should();

const feynewf = new FeyNewf();

describe('FeyNewf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			feynewf.raceName.should.eql('Fey Newfoundland');
			feynewf.fileName.should.eql('feynewf');
			feynewf.raceId.should.eql(0);
		});
	});
});