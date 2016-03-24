import FeyNewf from '../../../app/scripts/races/FeyHounds/FeyNewf';
const should = require('chai').should();

const feyNewf = new FeyNewf();

describe('FeyNewf', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			feyNewf.raceName.should.eql('Fey Newfoundland');
			feyNewf.fileName.should.eql('feynewf');
			feyNewf.size.should.eql('medium');
			feyNewf.raceId.should.eql(0);
			feyNewf.speed.should.eql(30);
			feyNewf.speedArmorDelta.should.eql(5);
			feyNewf.darkvision.should.eql(true);
		});
	});
});