import React from 'react';
import { shallow } from 'enzyme';

import SearchPagination from '../SearchPagination';

const var_disabled = [false, true];
const var_previousButtonDisabled = [false, true];
const var_startIndex = [0,10];
const var_query = ['', 'something'];

describe('SearchPagination renders properly', () => {
    
    const wrapper = shallow(<SearchPagination />);

    it('should render div component properly', () => {
        let element = wrapper.find('div');
        expect(element.length).toBe(1);
    })
    it('should render Pager component properly', () => {
        let element = wrapper.find('Pager');
        expect(element.length).toBe(1);
    })



    // it('should render Pager.Item component properly', () => {
    //     let element = wrapper.find('Pager.Item');
    //     wrapper.setProps({ disabled: 'foo' });
    //     expect(element.length).toBe(6);
    // })



    // it('should render case 1 properly', () => {
    //     let element = wrapper.find('Pager.Item');
    //     wrapper.setProps({ disabled: var_disabled[1] });
    //     wrapper.setProps({ startIndex: var_startIndex[1] });
    //     wrapper.setProps({ query: var_query[1] });
    //     wrapper.setProps({ previousButtonDisabled: var_previousButtonDisabled[0] });
    //     expect(element.length).toBe(6);
    // })
    // it('should render case 2 properly', () => {
    //     let element = wrapper.find('Pager.Item');
    //     wrapper.setProps({ disabled: var_disabled[] });
    //     wrapper.setProps({ previousButtonDisabled: var_previousButtonDisabled[] });
    //     wrapper.setProps({ startIndex: var_startIndex[] });
    //     wrapper.setProps({ query: var_query[] });
    //     expect(element.length).toBe(6);
    // })
    // it('should render case 2 properly', () => {
    //     let element = wrapper.find('Pager.Item');
    //     wrapper.setProps({ disabled: var_disabled[] });
    //     wrapper.setProps({ previousButtonDisabled: var_previousButtonDisabled[] });
    //     wrapper.setProps({ startIndex: var_startIndex[] });
    //     wrapper.setProps({ query: var_query[] });
    //     expect(element.length).toBe(6);
    // })
    // it('should render case 4 properly', () => {
    //     let element = wrapper.find('Pager.Item');
    //     wrapper.setProps({ disabled: var_disabled[] });
    //     wrapper.setProps({ previousButtonDisabled: var_previousButtonDisabled[] });
    //     wrapper.setProps({ startIndex: var_startIndex[] });
    //     wrapper.setProps({ query: var_query[] });
    //     expect(element.length).toBe(6);
    // })




    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})