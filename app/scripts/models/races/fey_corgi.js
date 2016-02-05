var Backbone = require('backbone');
'use strict';

module.exports = Backbone.Model.extend({
	defaults: {
		race_stats: {
			strength: 0,
			dexterity: 0,
			constitution: 2,
			intelligence: 0,
			wisdom: 0,
			charisma: 1
		},
		size: 'medium',
		speed: 30,
		heavy_armor_slow: true,
		darkvision: true,
		features: [
			'Colorblind: Red/Green Colorblind',
			'I\'ve Eaten Worse: advantage on saving throws against poison & resistance against poison damange',
			'Fetch: advantage on distraction checks against me, advantage on saving throws against being charmed, and can\'t be put to sleep magically',
			'Follow Your Nose: +5 to checks to track creatures in the past week, unless it as rained or the scent has been altered magically',
			'Corgi Grin: Checks to persuade non-hostile creatures that mean no harm to are made at advantage'
		],
		languages: ['Common', 'Sylvan', 'Canine'],
		weapons: [
			'Bite, proficient, 1D6+strength'
		]
	},

	getClassHP: function(_level) {
		return 0;
	}

	return FeyCorgi;
});