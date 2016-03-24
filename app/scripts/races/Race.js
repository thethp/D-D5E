class Race {
	constructor() {
		this.g_raceName = '';
		this.g_fileName = '';
		this.g_subRaces = [];
	}

	get raceName() { return this.g_raceName; }
	set raceName(val) { this.g_raceName = val; }

	get fileName() { return this.g_fileName; }
	set fileName(val) { this.g_fileName = val; }

	get subRaces() { return this.g_subRaces; }
	set subRaces(val) { this.g_subRaces = val; }
}

export default Race;