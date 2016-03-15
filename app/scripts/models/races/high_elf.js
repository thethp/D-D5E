var Backbone = require('Backbone');

const HighElf = Backbone.Model.extend({
	defaults: {
		race_stats: {
			strength: 0,
			dexterity: 2,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0
		},
		size: 'medium',
		speed: 30,
		heavy_armor_slow: true,
		darkvision: true,
		features: [
			'Keen Senses: Proficiency in Perception'
		],
		languages: ['Common', 'Elvish']
	},

	getClassHP: function(_level) {
		return 0;
	}
});

export default HighElf;