import React from 'react';
import Counter from './Counter';
import { shallow } from 'enzyme';

describe('Counter Component', () => {
	it('should start in 0', () => {
		const wrapper = shallow(<Counter />);
		const textWrapper = wrapper.find('p').text();

		expect(textWrapper).toEqual('Current Count: 0');
	});

	it('should increase to 1 ', () => {
		const wrapper = shallow(<Counter />);
		const button = wrapper.find('button[data-testid="increase-button"]');

		button.simulate('click');

		const textWrapper = wrapper.find('p').text();

		expect(textWrapper).toEqual('Current Count: 1');
	})


	it('should descrease count ', () => {
		const wrapper = shallow(<Counter />);
		const button = wrapper.find('button[data-testid="decrease-button"]');

		button.simulate('click');

		const textWrapper = wrapper.find('p').text();

		expect(textWrapper).toEqual('Current Count: -1');
	})
});
