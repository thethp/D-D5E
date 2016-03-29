class Character {
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