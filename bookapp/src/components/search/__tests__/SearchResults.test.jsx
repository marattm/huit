import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from '../SearchResults';


describe('SearchResults renders properly', () => {
    
    it('should render div component properly', () => {
        let wrapper = shallow(<SearchResults />);
        let element = wrapper.find('div');
        expect(element.length).toBe(1);
    })

    // it('should render PanelGroup component properly', () => {
    //     let wrapper = shallow(<SearchResults />);
    //     let element = wrapper.find('PanelGroup');
    //     expect(element.length).toBe(1);
    // })

    // it('should render ButtonGroup component properly', () => {
    //     let wrapper = shallow(<SearchResults />);
    //     let element = wrapper.find('ButtonGroup');
    //     expect(element.length).toBe(5);
    // })

    // it('should render ToggleButtonGroup component properly', () => {
    //     let wrapper = shallow(<SearchResults />);
    //     let element = wrapper.find('ToggleButtonGroup');
    //     expect(element.length).toBe(0);
    // })

    // it('should render ToggleButton component properly', () => {
    //     let wrapper = shallow(<SearchResults />);
    //     let element = wrapper.find('ToggleButton');
    //     expect(element.length).toBe(15);
    // })

    // it('should render DropdownButton component properly', () => {
    //     let wrapper = shallow(<SearchResults />);
    //     let element = wrapper.find('DropdownButton');
    //     expect(element.length).toBe(1);
    // })

    it('should render correctly', () => {
        
        let wrapper = shallow(<SearchResults />)
        expect(wrapper).toMatchSnapshot();
    });

})
