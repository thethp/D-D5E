import Race from '../../app/scripts/races/Race.js';
import FeyCorgi from '../../app/scripts/races/FeyHounds/FeyCorgi';
import FeyNewf from '../../app/scripts/races/FeyHounds/FeyNewf';
const should = require('chai').should();

describe('Race', () => {

	describe('defaults', () => {
		const race = new Race();

		it('should have the correct defaults', () => {
			race.raceName.should.eql('');
			race.fileName.should.eql('');
			race.raceId.should.eql(0);
			race.size.should.eql('medium');
			race.speed.should.eql(20);
			race.speedArmorDelta.should.eql(5);
			race.darkvision.should.eql(false);
		});
	});

	describe('raceName', () => {
		const race = new Race();

		it('should set and get the raceName value', () => {
			race.raceName = 'Test Race';

			race.raceName.should.eql('Test Race');
		});
	});

	describe('fileName', () => {
		const race = new Race();

		it('should set and get the fileName value', () => {
			race.fileName = 'testrace';

			race.fileName.should.eql('testrace');
		});
	});

	describe('raceId', () => {
		const race = new Race();

		it('should set and get the raceId value', () => {
			race.raceId = 2;
			
			race.raceId.should.eql(2);
		});
	});

	describe('size', () => {
		const race = new Race();

		it('should set and get the size value', () => {
			race.size = 'small';
			
			race.size.should.eql('small');
		});
	});

	describe('speed', () => {
		const race = new Race();

		it('should set and get the speed value', () => {
			race.speed = 40;
			
			race.speed.should.eql(40);
		});
	});

	describe('speedArmorDelta', () => {
		const race = new Race();

		it('should set and get the speedArmorDelta value', () => {
			race.speedArmorDelta = 10;
			
			race.speedArmorDelta.should.eql(10);
		});
	});

	describe('darkVision', () => {
		const race = new Race();

		it('should set and get the darkVision value', () => {
			race.darkvision = true;
			
			race.darkvision.should.eql(true);
		});
	});

	describe('getCurrentSpeed', () => {
		const race = new Race();

		it('should return the correct modified speed with heavy armour', () => {
			race.getCurrentSpeed({weight: 'heavy'}).should.eql(15);
		});

		it('should return the correct modified speed with medium armour', () => {
			race.getCurrentSpeed({weight: 'medium'}).should.eql(15);
		});

		it('should return an unmodified speed with light armour', () => {
			race.getCurrentSpeed({weight: 'light'}).should.eql(20);
		});

		it('should return an unmodified speed with no armour', () => {
			race.getCurrentSpeed().should.eql(20);
		});
	});

	describe('getSubRaces', () => {
		const race = new Race();

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