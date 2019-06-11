import React from 'react';
import Header, { IHeaderProps } from './Header';
import { shallow, mount, render, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("Header test", () => {
    let wrapper: ShallowWrapper<IHeaderProps, null>;
    let fakeImg = "http://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/image/2019-06/UFC_FIGHT_NIGHT_GREENVILLE_HERO.jpg?m_Rg918sSMThJM4XZDHBRCla94I6E5IG&h=d1cb525d&itok=i4Ag-Nvj.com/";
    beforeEach( ()=> {
        wrapper= shallow(<Header promoImg={fakeImg} />);
    })

    it('Should have h1 tag with Promo text', () => {
        expect(wrapper.find('h1').text()).toBe('Promo');
    });

    it('Should have div element as main wrapper', () => {
        expect(wrapper.name()).toBe('div');
    });

    it('Should have div with className === promo-header', () => {
        expect(wrapper.find('div.promo-header').length).toEqual(1);
    });

    
    // it('Should have h1 tag with Promo text', () => {
    //     let wrapper = mount(<Header promoImg={fakeImg}/>);
    //     let node = wrapper.getDOMNode();
    //     let styles = getComputedStyle(node);
    //     let backGround = styles.getPropertyValue('background-image');
    //     console.log(styles);
    //     expect(wrapper.prop('promoImg')).toBe(fakeImg);
    //     expect(backGround).toBe(fakeImg);
    // });
})

