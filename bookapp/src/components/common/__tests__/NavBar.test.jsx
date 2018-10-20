import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import NavBar from '../NavBar';

const title = 'The Book App';

describe('NavBar renders properly..', () => {
    
    const wrapper = shallow(<NavBar title={title}/>);
    
    it('renders properly', () => {
        const element = wrapper.find('span'); 
        expect(element.length).toBe(1); 
        expect(element.get(0).props.children).toBe(title);
    })
    
    it('renders a snapshot properly', () => {
        const tree = renderer.create(
            <Router location="/">
                <NavBar title={title} />
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

})
