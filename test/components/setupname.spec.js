import React from 'react';
import {shallow, mount} from 'enzyme';
const should = require('chai').should();

import SetupName from '../../app/scripts/components/Setup/SetupName.jsx';

describe('<SetupName />', () => {

	describe('render', () => {
		let setupNameWrapper = shallow(<SetupName handleUpdateCharName={{function(){}}}/>);

		it('should display the name input correctly', () => {
			setupNameWrapper.html().should.include('<input type="text" placeholder="Character Name" name="charname" autocomplete="off"/>');
		});

		it('should display the link to the next step correctly', () => {
			setupNameWrapper.html().should.include('<button>next</button>');
		});
	});
});