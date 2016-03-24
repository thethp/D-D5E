import FeyCorgi from '../../../app/scripts/races/FeyHounds/FeyCorgi';
const should = require('chai').should();

const feycorgi = new FeyCorgi();

describe('FeyCorgi', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			feycorgi.raceName.should.eql('Fey Corgi');
			feycorgi.fileName.should.eql('feycorgi');
			feycorgi.raceId.should.eql(0);
		});
	});
});