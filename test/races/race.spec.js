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
			race.features.should.eql([]);
			race.weapons.should.eql([]);
			race.languages.should.eql([]);
			race.strength.should.eql(0);
			race.dexterity.should.eql(0);
			race.constitution.should.eql(0);
			race.intelligence.should.eql(0);
			race.wisdom.should.eql(0);
			race.charisma.should.eql(0);
			race.hpDelta.should.eql(0);
			race.proficientWeapons.should.eql([]);
			race.proficientSkills.should.eql({});
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

		it('should set and get the darkvision value', () => {
			race.darkvision = true;
			
			race.darkvision.should.eql(true);
		});
	});

	describe('features', () => {
		const race = new Race();

		it('should set and get the feature value', () => {
			race.feature = ['test value', 'another test value'];
			
			race.feature.should.eql(['test value', 'another test value']);
		});
	});

	describe('weapons', () => {
		const race = new Race();

		it('should set and get the weapons value', () => {
			race.weapons = ['test value', 'another test value'];
			
			race.weapons.should.eql(['test value', 'another test value']);
		});
	});

	describe('language', () => {
		const race = new Race();

		it('should set and get the languages value', () => {
			race.languages = ['test value', 'another test value'];
			
			race.languages.should.eql(['test value', 'another test value']);
		});
	});

	describe('strength', () => {
		const race = new Race();

		it('should set and get the strength value', () => {
			race.strength = 1;
			
			race.strength.should.eql(1);
		});
	});

	describe('dexterity', () => {
		const race = new Race();

		it('should set and get the strength value', () => {
			race.dexterity = 1;
			
			race.dexterity.should.eql(1);
		});
	});

	describe('constitution', () => {
		const race = new Race();

		it('should set and get the strength value', () => {
			race.constitution = 1;
			
			race.constitution.should.eql(1);
		});
	});

	describe('intelligence', () => {
		const race = new Race();

		it('should set and get the strength value', () => {
			race.intelligence = 1;
			
			race.intelligence.should.eql(1);
		});
	});

	describe('wisdom', () => {
		const race = new Race();

		it('should set and get the strength value', () => {
			race.wisdom = 1;
			
			race.wisdom.should.eql(1);
		});
	});

	describe('charisma', () => {
		const race = new Race();

		it('should set and get the strength value', () => {
			race.charisma = 1;
			
			race.charisma.should.eql(1);
		});
	});

	describe('proficientWeapons', () => {
		const race = new Race();

		it('should set and get the proficientWeapons value', () => {
			race.proficientWeapons = ['test value', 'other test value'];
			
			race.proficientWeapons.should.eql(['test value', 'other test value']);
		});
	});

	describe('proficientSkills', () => {
		const race = new Race();

		it('should set and get the proficientSkills value', () => {
			race.proficientWeapons = {perception: true};
			
			race.proficientWeapons.should.eql({perception: true});
			race.proficientWeapons.perception.should.eql(true);
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
			race.raceId = race.getSubRaces().length;
			
			race.getSubRaces().should.eql(false);
		});
	});

	describe('getStats', () => {
		const race = new Race();

		it('should return an object with all the stats', () => {
			race.strength = 2;
			race.dexterity = 3;
			race.constitution = 4;
			race.intelligence = 0;
			race.wisdom = -2;
			race.charisma = 5;

			race.getStats().should.eql({ strength: 2, dexterity: 3, constitution: 4, intelligence: 0, wisdom: -2, charisma: 5 });
		});
	});

	describe('getHitPointMod', () => {
		const race = new Race();

		it('should return the modifier for hp based on level', () => {
			race.getHitPointMod(2).should.eql(0);

			race.hpDelta = 1;
			race.getHitPointMod(2).should.eql(2);

			race.hpDelta = 2;
			race.getHitPointMod(2).should.eql(4);
		});
	});
});