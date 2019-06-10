import React from 'react';
import chai, { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Test from './TestComponent';

configure({ adapter: new Adapter() });
describe('Dummy test block:', function () {

    it('should pass dummy test', () => {
        const wrapper = shallow(<Test />);
        expect(wrapper.contains(<h1>Hello World!</h1>)).to.be.false;

    });

});