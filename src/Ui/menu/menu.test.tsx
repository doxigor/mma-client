import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { shallow, mount, render, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import UiLink from '../ui-link/UiLink';
configure({ adapter: new Adapter() });

describe("Menu test", () => {
    let wrapper: ShallowWrapper<null, null>;
    beforeEach( ()=> {
        wrapper= shallow(<Menu />);
    })

    it('Should have UL element to store links', () => {
        expect(wrapper.find('ul')).toBeDefined;
    });

    it('Should have UL element inside Nav element', () => {
        expect(wrapper.find('ul').parent().is('nav')).toBeTruthy();
    });

    it('Should have UL element with className of mma-menu', () => {
        expect(wrapper.find('ul').hasClass('mma-client')).toBeTruthy
    });

    it('Should have 3 li child elements inside ul', () => {
        expect(wrapper.find('ul li').length).toBe(3);
    });

    it('Should have UILink component with url leading to main page', () => {
        expect(wrapper.find(UiLink).first().props().url).toBe('/');
    });

    it('Should have UILink component with link to main page and text Home', () => {
        expect(wrapper.find(UiLink).first().props().title).toBe('Home');
    });

    it('Should have 3 UILink components', () => {
        expect(wrapper.find(UiLink).length).toBe(3);
    });
})

