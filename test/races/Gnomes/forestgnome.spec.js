import ForestGnome from '../../../app/scripts/races/Gnomes/ForestGnome';
const should = require('chai').should();

const forestGnome = new ForestGnome();

describe('ForestGnome', () => {

	describe('defaults', () => {

		it('should have the correct defaults', () => {
			forestGnome.raceName.should.eql('ForestGnome');
			forestGnome.fileName.should.eql('forestGnome');
			forestGnome.features.should.eql([
				'Gnome Cunning: You have adantage on all intelligence, Wisdom, and Charisma saving throws against magic',
				'Natural Illusionist: You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.'
				'Speak with SmallBeasts: Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.'
			]);
			forestGnome.dexterity.should.eql(1);
		});
	});

	describe('getStats', () => {

		it('should return the correct stats', () => {
			forestGnome.getStats().should.eql({ strength: 0, dexterity: 1, constitution: 0, intelligence: 2, wisdom: 0, charisma: 0 });
		});
	});
});