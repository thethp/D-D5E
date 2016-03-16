var random = require('random-js')();

class Dice {

	//Returns a single dice roll for a dice of numSides sides
	roll(numSides) {
		numSides = !numSides ? 20 : numSides;

		return random.integer(1,numSides);
	}

	//Returns an object with the total dice roll, the mod, and an array containing the individual rolls
	rollDice(numDice, numSides, mod) {
		let diceArr = [];
		let total = 0;
		mod = !mod ? 0 : mod;

		for(var i = 0; i < numDice; i++) {
			diceArr.push(this.roll(numSides));
			total+=diceArr[i];
		}

		total+=mod;

		return {
			individualRolls: diceArr,
			mod: mod,
			result: total
		};
	}

}

export default Dice;