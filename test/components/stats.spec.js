import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
const should = require('chai').should();

import Stats from '../../app/scripts/components/Stats/Stats.jsx';

describe('<Stats />', () => {

	describe('getInitialState', () => {

		it('should return the default types for the initial state', () => {
			Stats.prototype.getInitialState().should.be.a('object');
			Stats.prototype.getInitialState().strength.should.be.a('number');
			Stats.prototype.getInitialState().dexterity.should.be.a('number');
			Stats.prototype.getInitialState().constitution.should.be.a('number');
			Stats.prototype.getInitialState().intelligence.should.be.a('number');
			Stats.prototype.getInitialState().wisdom.should.be.a('number');
			Stats.prototype.getInitialState().charisma.should.be.a('number');
		});

		it('should return an object with the correct keys for the initial state', () => {
			Object.keys(Stats.prototype.getInitialState()).should.eql(['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']);
		});
	});

	describe('componentDidMount / componentWillUnmount', () => {

		it('should call componentDidMount', () => {
			sinon.spy(Stats.prototype, 'componentDidMount');
			const wrapper = mount(<Stats />);
			Stats.prototype.componentDidMount.calledOnce.should.eql(true);
			Stats.prototype.componentDidMount.restore();
		});

		it('should call componentWillUnmount', () => {
			sinon.spy(Stats.prototype, 'componentWillUnmount');
			const wrapper = mount(<Stats />);
			wrapper.unmount();
			Stats.prototype.componentWillUnmount.calledOnce.should.eql(true);
			Stats.prototype.componentWillUnmount.restore();
		});
	});

	describe('render', () => {

		it('should display <Stats />', () => {
			let setupWrapper = shallow(<Stats />);

			setupWrapper.html().should.include('<div class="stats"><div class="stat"><div class="label">STR</div><div class="mod">-5</div><div class="val">0</div></div><div class="stat"><div class="label">DEX</div><div class="mod">-5</div><div class="val">0</div></div><div class="stat"><div class="label">CON</div><div class="mod">-5</div><div class="val">0</div></div><div class="stat"><div class="label">INT</div><div class="mod">-5</div><div class="val">1</div></div><div class="stat"><div class="label">WIS</div><div class="mod">-5</div><div class="val">0</div></div><div class="stat"><div class="label">CHA</div><div class="mod">-4</div><div class="val">2</div></div></div>');
		});
	});
});