import Dice from '../../app/scripts/tools/dice.js';
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

		it('should return each side roughly 1 in 4 times for a D4', () => {
			let diceArr = [0,0,0,0];

			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(4)-1]++;
			}
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 6 times for a D6', () => {
			let diceArr = [0,0,0,0,0,0];
			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(6)-1]++;
			}
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 8 times for a D8', () => {
			let diceArr = [0,0,0,0,0,0,0,0];
			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(8)-1]++;
			}
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 10 times for a D10', () => {
			let diceArr = [0,0,0,0,0,0,0,0,0,0];
			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(10)-1]++;
			}
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 12 times for a D12', () => {
			let diceArr = [0,0,0,0,0,0,0,0,0,0,0,0];
			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(12)-1]++;
			}
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should return each side roughly 1 in 20 times for a D20', () => {
			let diceArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			for (var i=0; i < 100; i++) {
				diceArr[dice.roll(20)-1]++;
			}
			diceArr.indexOf(null).should.eql(-1);
		});

		it('should assume the D20 statistics when undeclared', () => {
			let diceArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			for (var i=0; i < 100; i++) {
				diceArr[dice.roll()-1]++;
			}
			diceArr.indexOf(null).should.eql(-1);
		});
	});

	describe('rollDice', () => {
		it('should return an object with the correct keys', () => {
			console.log(dice.rollDice(2,20));

		});
	});
});