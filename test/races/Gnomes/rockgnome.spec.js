import RockGnome from '../../../app/scripts/races/Gnomes/RockGnome';
const should = require('chai').should();

const rockGnome = new RockGnome();

describe('RockGnome', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			rockGnome.raceName.should.eql('RockGnome');
			rockGnome.fileName.should.eql('rockGnome');
			rockGnome.features.should.eql([
				'Gnome Cunning: You have adantage on all intelligence, Wisdom, and Charisma saving throws against magic',
				'Artificer’s Lore: Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.',
				'Tinker: You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.'
			]);
			rockGnome.constitution.should.eql(1);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			rockGnome.getStats().should.eql({ strength: 0, dexterity: 0, constitution: 1, intelligence: 2, wisdom: 0, charisma: 0 });
		});
	});
});