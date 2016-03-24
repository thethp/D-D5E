import Race from '../../app/scripts/races/Race.js';
import FeyCorgi from '../../app/scripts/races/FeyHounds/FeyCorgi';
import FeyNewf from '../../app/scripts/races/FeyHounds/FeyNewf';
const should = require('chai').should();

const race = new Race();

describe('Race', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			race.raceName.should.eql('');
			race.fileName.should.eql('');
			race.raceId.should.eql(0);
		});
	});

	describe('raceName', () => {

		it('should set and get the raceName value', () => {
			race.raceName = 'Test Race';

			race.raceName.should.eql('Test Race');
		});
	});

	describe('fileName', () => {

		it('should set and get the fileName value', () => {
			race.fileName = 'testrace';

			race.fileName.should.eql('testrace');
		});
	});

	describe('raceId', () => {

		it('should set and get the raceId value', () => {
			race.raceId = 2;
			
			race.raceId.should.eql(2);
		});
	});

	describe('getSubRaces', () => {

		it('should return an array of subraces if they exist ', () => {
			race.raceId = 0;
			
			race.getSubRaces().should.eql([FeyCorgi, FeyNewf]);
		});

		it('should return false if there are no arrays for the race', () => {
			race.raceId = 1;
			
			race.getSubRaces().should.eql(false);
		});
	});
});