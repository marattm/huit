import React from 'react';
import { shallow } from 'enzyme';


import Search from '../Search';


const title = 'Search books..';
const books = [];

describe('Search renders properly', () => {

    it('should render a proper title', () => {
        let wrapper = shallow(<Search title={title} />);
        let element_title = wrapper.find('h1');
        expect(element_title.length).toBe(1);
        expect(element_title.get(0).props.children[1]).toBe(title);
    })
    it('should render Search component properly', () => {
        let wrapper = shallow(<Search title={title} />);
        let element_search = wrapper.find('SearchForm');
        expect(element_search.length).toBe(1);
    })
    it('should render SearchResults component properly', () => {
        let wrapper = shallow(<Search title={title} />);
        let element_searchResult = wrapper.find('SearchResults');
        expect(element_searchResult.length).toBe(1);
    })
    it('should render SearchPagination component properly', () => {
        let wrapper = shallow(<Search title={title} />);
        let element_pagination = wrapper.find('SearchPagination');
        expect(element_pagination.length).toBe(2);
    })
    it('should have an initial title state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().title).toBe(title);
    })
    // it('should have an empty initial books state', () => {
    //     let wrapper = shallow(<Search title={title} />);
    //     expect(wrapper.state().books).toBe(books);
    // })
    it('should have an initial query state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().query).toBe('');
    })
    it('should have an initial type state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().type).toBe('relevance');
    })
    it('should have an initial printType state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().printType).toBe('all');
    })
    it('should have an initial filter state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().filter).toBe('all');
    })
    it('should have an initial language state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().language).toBe('all');
    })
    it('should have an initial maxResults state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().maxResults).toBe('10');
    })
    it('should have an initial option state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().option).toBe('title');
    })
    it('should have an initial startIndex state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().startIndex).toBe(0);
    })
    it('should have an initial oldStartIndex state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().oldStartIndex).toBe(0);
    })
    it('should have an initial disabled state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().displayDisabled).toBe(false);
    })
    it('should have an initial previousButtonDisabled state', () => {
        let wrapper = shallow(<Search title={title} />);
        expect(wrapper.state().previousButtonDisabled).toBe(true);
    })

    // it('should render correctly', () => {
    //     let wrapper = shallow(<Search title={title} />);
    //     expect(wrapper).toMatchSnapshot();
    // });
})
