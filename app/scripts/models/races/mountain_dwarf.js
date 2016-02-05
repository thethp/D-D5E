var Backbone = require('backbone');
'use strict';

module.exports = Backbone.Model.extend({
	defaults: {
		race_stats: {
			strength: 2,
			dexterity: 0,
			constitution: 2,
			intelligence: 0,
			wisdom: 0,
			charisma: 0
		},
		size: 'medium',
		speed: 25,
		heavy_armor_slow: false,
		darkvision: true,
		features: [
			'Dwarven Resiliance: advantage on saving throws against poison & resistance against poison damange',
			'Dwarven Combat Training: Proficiency with Battle Axe, Throwing Hammer, and Warhammer',
			'Dwarven Armor Training: Proficiency with light and medium armor',
			'Tool Proficiency: [choose one] Smith\'s Tools, Brewer\'s Supplies, Mason\'s Tools',
			'Stonecunning: Double proficiency bonus to Intelligence [history] checks on origin of stonework'
		],
		languages: ['Common', 'Dwarvish']
	},

	getClassHP: function(_level) {
		return 0;
	}

	return MountainDwarf;
});