import FeyHound from '../../app/scripts/races/FeyHound.js';
import FeyCorgi from '../../app/scripts/races/FeyHounds/FeyCorgi';
import FeyNewf from '../../app/scripts/races/FeyHounds/FeyNewf';
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
});