import React from 'react';
import { shallow } from 'enzyme';

import App from '../../App';

describe('App', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(1);
    });
    it('should render a <NavBar />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('NavBar').length).toEqual(1);
    });
    it('should render a <Switch />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Switch').length).toEqual(1);
    });
    it('should render a <Route />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Route').length).toEqual(2);
    });
    // it('should render correctly', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper).toMatchSnapshot();
    // });
});
