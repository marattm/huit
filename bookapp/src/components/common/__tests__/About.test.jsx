import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import About from '../About';

describe('About renders properly ..', () => {
    
    const wrapper = shallow(<About />);
    
    it('renders properly', () => {
        const element = wrapper.find('button'); 
        expect(element.length).toBe(1);
        expect(element.text()).toBe('Check Health!');
    })
    
    it('renders a snapshot properly', () => {
        const tree = renderer.create(<About />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})
