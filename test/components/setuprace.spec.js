import React from 'react';
import {shallow, mount} from 'enzyme';
const should = require('chai').should();

import AppConstants from '../../app/scripts/constants/AppConstants';
import SetupRace from '../../app/scripts/components/Setup/SetupRace.jsx';

describe('<SetupRace />', () => {

	describe('render', () => {
		let setupRaceWrapper = shallow(<SetupRace handleUpdateCharRace={{function(){}}}/>);

		it('should display the race icons correctly', () => {
			let races = AppConstants.races;

			for(let i = 0; i < races.length; i++) {
				setupRaceWrapper.html().should.include('<img src="public/images/svgs/'+races[i]+'.svg" data-race="'+races[i]+'"/>');
			}
		});

		it('should display the link to the previous step correctly', () => {
			setupRaceWrapper.html().should.include('<a class=""><button>before</button></a>');
		});
	});
});