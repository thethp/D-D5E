import FeyCorgi from '../../../app/scripts/races/FeyHounds/FeyCorgi';
const should = require('chai').should();

const feyCorgi = new FeyCorgi();

describe('FeyCorgi', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			feyCorgi.raceName.should.eql('Fey Corgi');
			feyCorgi.fileName.should.eql('feycorgi');
			feyCorgi.size.should.eql('medium');
			feyCorgi.raceId.should.eql(0);
			feyCorgi.speed.should.eql(30);
			feyCorgi.speedArmorDelta.should.eql(5);
			feyCorgi.darkvision.should.eql(true);
		});
	});
});