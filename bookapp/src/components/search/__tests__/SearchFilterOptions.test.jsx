import React from 'react';
import { shallow } from 'enzyme';

import SearchFilterOptions from '../SearchFilterOptions';
import { parameters, titles } from '../../../utils';

describe('SearchFilterOptions renders properly', () => {

    it('should render div component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        let element = wrapper.find('div');
        expect(element.length).toBe(2);
    })
    it('should render Collapse component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        let element = wrapper.find('Collapse');
        expect(element.length).toBe(1);
    })
    it('should render ButtonGroup component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        let element = wrapper.find('ButtonGroup');
        expect(element.length).toBe(5);
    })
    it('should render ToggleButtonGroup component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        let element = wrapper.find('ToggleButtonGroup');
        expect(element.length).toBe(0);
    })
    it('should render ToggleButton component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        let element = wrapper.find('ToggleButton');
        expect(element.length).toBe(15);
        for (let i = 0; i < element.length; i++) {
            expect(element.get(i).props.children).toBe(titles[i]);
        }
    })
    it('should render DropdownButton component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        let element = wrapper.find('DropdownButton');
        expect(element.length).toBe(1);
    })
    it('should render DropDownMenu  MenuItem properly', () => {
        let wrapper = shallow(<SearchFilterOptions />);
        let i = 0;
        wrapper.state().parameters.forEach(element => {
            expect(element.value).toBe(parameters[i].value);
            expect(element.title).toBe(parameters[i].title);
            i++;
        });
    })
    it('should render MenuItem component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />);
        // let element = wrapper.find(`${el.value}`);
        let element = wrapper.find('MenuItem');
        expect(element.length).toBe(105);
    })
    it('should render correctly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        expect(wrapper).toMatchSnapshot();
    });
})
