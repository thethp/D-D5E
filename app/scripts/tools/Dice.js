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
		numSides = !numSides ? 20 : numSides;
		mod = !mod ? 0 : mod;

		for(var i = 0; i < numDice; i++) {
			diceArr.push(this.roll(numSides));
			total+=diceArr[i];
		}

		total+=mod;

		return {
			individualRolls: diceArr,
			dice: 'D'+numSides,
			mod: mod,
			result: total
		}
	}

	//Returns an object with the individual rolls, and the highest of the two
	rollAdvantage(_mod) {
		_mod = !_mod ? 0 : _mod;
		let diceArr = this.rollDice(2).individualRolls;

		return {
			individualRolls: diceArr,
			dice: 'D20',
			mod: _mod,
			result: (Math.max(diceArr[0], diceArr[1])+_mod)
		}
	}

	//Returns an object with the individual rolls, and the lower of the two
	rollDisadvantage(_mod) {
		_mod = !_mod ? 0 : _mod;
		let diceArr = this.rollDice(2).individualRolls;
		
		return {
			individualRolls: diceArr,
			dice: 'D20',
			mod: _mod,
			result: (Math.min(diceArr[0], diceArr[1])+_mod)
		}
	}

}

export default Dice;