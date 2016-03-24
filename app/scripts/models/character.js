class Character {
	/*
	defaults: {
		id: 0,
		created_at: new Date(),
		character_name: '',
		player_name: '',
		level: 1,
		class_primary: '',
		class_secondary: '',
		race: '',
		xp: 0,
		background: '',
		alignment: [0,0],
		size: 'medium',
		stats: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0
		},
		race_stats: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0
		},
		proficiency_bonus: 0,
		inspriation: false,
		armor_class: 0,
		initiative: 0,
		speed: 0,
		carry: 0,
		hp_max: 0,
		hp_current: 0,
		hp_temp: 0,
		hitdie_total: 0,
		hitdie_current: 0,
		deathsaves_success: 0,
		deathsaves_fail: 0,
		personality_traits: '',
		ideals: '',
		bonds: '',
		flaws: '',
		age: 0,
		height: 0,
		weight: 0,
		eyes: '',
		hair: '',
		features: [],
		appearance: '',
		heavy_armor_slow: true,
		darkvision: false,
		languages: [],
		weapons: [],
		saves: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0
		},
		skills_proficiency: {
			athletics: 0,
			acrobatics: 0
		}
	},
	*/

	constructor() {
		this.g_alignment = [];
	}

	get alignment() { return this.getAlignment(); }
	set alignment(val) { this.g_alignment = val; }

	getStatModifier(_stat) {
		return Math.floor((_stat-10)/2);
	}

	getAlignment() {
		var lc = ['Lawful', 'Neutral', 'Chaotic'];
		var ge = ['Good', 'Neutral', 'Evil'];

		var lcVal = this.g_alignment[0];
		var geVal = this.g_alignment[1];

		if((lcVal === 1) && (geVal === 1)) {
			return 'Neutral';
		} else {
			return lc[lcVal] +' '+ ge[geVal];
		}
	}
}

export default Character;