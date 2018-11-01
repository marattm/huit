import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import About from '../About';


describe('About renders properly ..', () => {

    const healthData = {
        status: 'click on the button',
        message: 'waiting for a message..'
    }

    const wrapper = shallow(<About />);

    it('renders properly', () => {
        const button = wrapper.find('Button');
        expect(button.length).toBe(1);
        expect(button.get(0).props.children).toBe('Check Health!');

        const information = wrapper.find('p');
        expect(information.length).toBe(2);
        expect(information.get(0).props.children[1].props.children).toBe(' Status Code: ');
        expect(information.get(0).props.children[2].props.children.props.children).toBe(healthData.status);
        expect(information.get(1).props.children[0].props.children).toBe('Total Item received: ');
        expect(information.get(1).props.children[2].props.children.props.children).toBe(healthData.message);
    })

    it('renders a snapshot properly', () => {
        const tree = renderer.create(<About />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})


