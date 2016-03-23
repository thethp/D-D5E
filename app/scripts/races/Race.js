class Race {
	constructor() {
		this.g_raceName = '';
		this.g_fileName = '';
	}

	get raceName() { return this.g_raceName; }
	set raceName(val) { this.g_raceName = val; }

	get fileName() { return this.g_fileName; }
	set fileName(val) { this.g_fileName = val; }
}

export default Race;