import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import Footer from '../Footer';

const author = " The Book App - Marat Tulepbayev-Monnie - 2018 - ";

describe('About renders properly ..', () => {


    const wrapper = shallow(<Footer />);

    it('renders properly', () => {
        const element = wrapper.find('p');
        expect(element.length).toBe(1);
        expect(element.get(0).props.children.props.children[0]).toBe(author);
    })

    // it('renders a snapshot properly', () => {
    //     const tree = renderer.create(<Footer />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // })

})


