import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from '../SearchForm';

describe('SearchForm renders properly', () => {

    it('should render div component properly', () => {
        let wrapper = shallow(<SearchForm />)
        let element = wrapper.find('div');
        expect(element.length).toBe(1);
    })
    it('should render Form component properly', () => {
        let wrapper = shallow(<SearchForm />)
        let element = wrapper.find('Form');
        expect(element.length).toBe(1);
    })
    it('should render FormGroup component properly', () => {
        let wrapper = shallow(<SearchForm />)
        let element = wrapper.find('FormGroup');
        expect(element.length).toBe(1);
    })
    it('should render InputGroup component properly', () => {
        let wrapper = shallow(<SearchForm />)
        let element = wrapper.find('InputGroup');
        expect(element.length).toBe(1);
    })
    it('should render Button component properly', () => {
        let wrapper = shallow(<SearchForm />)
        let element = wrapper.find('Button');
        expect(element.length).toBe(2);
        expect(element.get(1).props.children).toBe('Search');
    })
    it('should render FormControl component properly', () => {
        let wrapper = shallow(<SearchForm />)
        let element = wrapper.find('FormControl');
        expect(element.length).toBe(1);
    })
    it('should render div component properly', () => {
        let wrapper = shallow(<SearchForm />)
        let element = wrapper.find('div');
        expect(element.length).toBe(1);
    })
    it('should render FilterOptions component properly', () => {
        let wrapper = shallow(<SearchForm />)
        let element = wrapper.find('FilterOptions');
        expect(element.length).toBe(1);
    })
    it('should have an initial open state', () => {
        let wrapper = shallow(<SearchForm />);
        expect(wrapper.state().open).toBe(true);
    })
    it('should render correctly', () => {
        let wrapper = shallow(<SearchForm />)
        expect(wrapper).toMatchSnapshot();
    });
})
