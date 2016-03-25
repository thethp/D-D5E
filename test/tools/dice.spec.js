import Dice from '../../app/scripts/tools/Dice.js';
const should = require('chai').should();

const dice = new Dice();

describe('Dice', () => {

	describe('roll', () => {

		it('should return a number', () => {
			dice.roll(4).should.be.a('number');
			dice.roll(6).should.be.a('number');
			dice.roll(8).should.be.a('number');
			dice.roll(10).should.be.a('number');
			dice.roll(12).should.be.a('number');
			dice.roll(20).should.be.a('number');
		});

		it('should return each side roughly 1 in 4 times for a D4, and not go over the dice size', () => {
			let diceArr = [0,0,0,0];

			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(4)-1]++;
			}

			diceArr.should.have.lengthOf(4);
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 6 times for a D6, and not go over the dice size', () => {
			let diceArr = [0,0,0,0,0,0];

			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(6)-1]++;
			}

			diceArr.should.have.lengthOf(6);
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 8 times for a D8, and not go over the dice size', () => {
			let diceArr = [0,0,0,0,0,0,0,0];

			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(8)-1]++;
			}

			diceArr.should.have.lengthOf(8);
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 10 times for a D10, and not go over the dice size', () => {
			let diceArr = [0,0,0,0,0,0,0,0,0,0];

			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(10)-1]++;
			}

			diceArr.should.have.lengthOf(10);
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 12 times for a D12, and not go over the dice size', () => {
			let diceArr = [0,0,0,0,0,0,0,0,0,0,0,0];

			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(12)-1]++;
			}

			diceArr.should.have.lengthOf(12);
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 20 times for a D20, and not go over the dice size', () => {
			let diceArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(20)-1]++;
			}

			diceArr.should.have.lengthOf(20);
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should assume the D20 statistics when undeclared, and not go over the dice size', () => {
			let diceArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

			for (var i=0; i < 100; i++) {
				diceArr[dice.roll()-1]++;
			}

			diceArr.should.have.lengthOf(20);
			diceArr.indexOf(null).should.eql(-1);
		});
	});

	describe('rollDice', () => {

		it('should return an object with the correct keys and types', () => {
			dice.rollDice().should.be.a('object');
			dice.rollDice().individualRolls.should.be.a('array');
			dice.rollDice(2,20).dice.should.be.a('string');
			dice.rollDice(2,20).mod.should.be.a('number');
			dice.rollDice(2,20).result.should.be.a('number');
			Object.keys(dice.rollDice(2,20)).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should return the correct number of rolls', () => {
			dice.rollDice(2,20).individualRolls.should.have.lengthOf(2);
			dice.rollDice(10,20).individualRolls.should.have.lengthOf(10);
		});

		it('should return the correct dice', () => {
			dice.rollDice(2,4).dice.should.eql('D4');
			dice.rollDice(2,6).dice.should.eql('D6');
			dice.rollDice(2,8).dice.should.eql('D8');
			dice.rollDice(2,10).dice.should.eql('D10');
			dice.rollDice(2,12).dice.should.eql('D12');
			dice.rollDice(2,20).dice.should.eql('D20');
		});

		it('should roll D20 if number not declared', () => {
			dice.rollDice(2).individualRolls.should.have.lengthOf(2);
			dice.rollDice(2).dice.should.eql('D20');
			dice.rollDice(10).individualRolls.should.have.lengthOf(10);
			dice.rollDice(10).dice.should.eql('D20');
		});

		it('should return the correct mod', () => {
			dice.rollDice(2,20).mod.should.eql(0);
			dice.rollDice(2,20,6).mod.should.eql(6);
		});
	});

	describe('rollAdvantage', () => {

		it('should return an object with the correct keys and types', () => {
			dice.rollAdvantage().should.be.a('object');
			dice.rollAdvantage().individualRolls.should.be.a('array');
			dice.rollAdvantage().dice.should.be.a('string');
			dice.rollAdvantage().mod.should.be.a('number');
			dice.rollAdvantage().result.should.be.a('number');
			Object.keys(dice.rollAdvantage()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should roll two dice', () => {
			dice.rollAdvantage().individualRolls.should.have.lengthOf(2);
			dice.rollAdvantage().individualRolls.should.have.lengthOf(2);
		});

		it('should return a mod of 0 if passed no mod', () => {
			dice.rollAdvantage().mod.should.eql(0);
		});

		it('should have a result value that is the higher of the two dice plus the mod', () => {
			let adv = dice.rollAdvantage();

			adv.result.should.eql(Math.max(adv.individualRolls[0],adv.individualRolls[1]));
		});

		it('should have a result value that is the higher of the two dice plus the mod', () => {
			let adv = dice.rollAdvantage(2);

			adv.result.should.eql(Math.max(adv.individualRolls[0],adv.individualRolls[1])+2);
		});
	});

	describe('rollDisadvantage', () => {

		it('should return an object with the correct keys and types', () => {
			dice.rollDisadvantage().should.be.a('object');
			dice.rollDisadvantage().individualRolls.should.be.a('array');
			dice.rollDisadvantage().dice.should.be.a('string');
			dice.rollDisadvantage().mod.should.be.a('number');
			dice.rollDisadvantage().result.should.be.a('number');
			Object.keys(dice.rollDisadvantage()).should.eql(['individualRolls', 'dice', 'mod', 'result']);
		});

		it('should roll two dice', () => {
			dice.rollDisadvantage().individualRolls.should.have.lengthOf(2);
			dice.rollDisadvantage().individualRolls.should.have.lengthOf(2);
		});

		it('should return a mod of 0 if passed no mod', () => {
			dice.rollAdvantage().mod.should.eql(0);
		});

		it('should have a result value that is the lower of the two dice', () => {
			let adv = dice.rollDisadvantage();

			adv.result.should.eql(Math.min(adv.individualRolls[0],adv.individualRolls[1]));
		});

		it('should have a result value that is the lower of the two dice plus the mod', () => {
			let adv = dice.rollDisadvantage(2);

			adv.result.should.eql(Math.min(adv.individualRolls[0],adv.individualRolls[1])+2);
		});
	});
});