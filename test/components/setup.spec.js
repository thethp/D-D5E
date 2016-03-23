import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
const should = require('chai').should();

import RaceConstants from '../../app/scripts/constants/RaceConstants';
import Setup from '../../app/scripts/components/Setup/Setup.jsx';

describe('<Setup />', () => {

	describe('getInitialState', () => {

		it('should return the default types for the initial state', () => {
			Setup.prototype.getInitialState().should.be.a('object');
			Setup.prototype.getInitialState().charName.should.be.a('string');
			Setup.prototype.getInitialState().charRace.should.be.a('string');
		});

		it('should return an object with the correct keys for the initial state', () => {
			Object.keys(Setup.prototype.getInitialState()).should.eql(['charName', 'charRace']);
		});

		it('should return an object whose values have the correct default values', () => {
			Setup.prototype.getInitialState().charName.should.eql('Traveler');
			Setup.prototype.getInitialState().charRace.should.eql('');
		});
	});

	describe('componentDidMount / componentWillUnmount', () => {

		it('should call componentDidMount', () => {
			sinon.spy(Setup.prototype, 'componentDidMount');
			const wrapper = mount(<Setup />);
			Setup.prototype.componentDidMount.calledOnce.should.eql(true);
			Setup.prototype.componentDidMount.restore();
		});

		it('should call componentWillUnmount', () => {
			sinon.spy(Setup.prototype, 'componentWillUnmount');
			const wrapper = mount(<Setup />);
			wrapper.unmount();
			Setup.prototype.componentWillUnmount.calledOnce.should.eql(true);
			Setup.prototype.componentWillUnmount.restore();
		});
	});

	describe('handleUpdateCharName', () => {

		it('should change the state of the character name when input is changed', () => {
			let setupWrapper = mount(<Setup params={{"step": 1}} />);

			setupWrapper.childAt(1).find('input').simulate('change', {target: {value: 'Tiller'}});

			setupWrapper.state('charName').should.eql('Tiller');
		});
	});

	describe('handleUpdateCharRace', () => {

		it('should change the state of the character race when icon is clicked', () => {
			let setupWrapper = mount(<Setup params={{"step": 2}} />);
			let races = RaceConstants.races;

			for(let i = 0; i < races.length; i++) {
				let race = new races[i]();
				setupWrapper.childAt(1).find({'data-race': race.getRaceName()}).simulate('click');

				setupWrapper.state('charRace').should.eql(race.getRaceName());
			}
		});
	});

	describe('render', () => {

		it('should display <SetupName /> if no step is passed in', () => {
			let setupWrapper = shallow(<Setup />);

			setupWrapper.html().should.include('<input type="text" placeholder="Character Name" name="charname" autocomplete="off"/>');
		});

		it('should display <SetupName /> if it is step 1', () => {
			let setupWrapper = shallow(<Setup params={{"step": 1}} />);

			setupWrapper.html().should.include('<input type="text" placeholder="Character Name" name="charname" autocomplete="off"/>');
		});

		it('should display <SetupName /> if it is a step that does not exist', () => {
			let setupWrapper = shallow(<Setup params={{"step": 99}} />);

			setupWrapper.html().should.include('<input type="text" placeholder="Character Name" name="charname" autocomplete="off"/>');
		});

		it('should display <SetupRace /> if it is step 2', () => {
			let setupWrapper = shallow(<Setup params={{"step": 2}} />);
			let races = RaceConstants.races;

			for(let i = 0; i < races.length; i++) {
				let race = new races[i]();
				setupWrapper.html().should.include('<img src="public/images/svgs/'+race.getFileName()+'.svg" data-race="'+race.getRaceName()+'"/>');
			}
		});
	});
});