import React from 'react';
import { mount } from 'enzyme';

import SearchPagination from '../SearchPagination';

const displayDisabled = [false, true];
const previousButtonDisabled = [false, true];
const startIndex = [0, 10];
const query = ['', 'something'];
const bot = [false, true];

describe('SearchPagination renders properly', () => {

    let props;
    let mountedSearchPagination;
    const searchPagination = () => {
        if (!mountedSearchPagination) {
            mountedSearchPagination = mount(
                <SearchPagination {...props} />
            );
        }
        return mountedSearchPagination;
    }

    beforeEach(() => {
        props = {
            displayDisabled: undefined,
            query: undefined,
            maxResults: undefined
        };
        mountedSearchPagination = undefined;
    });

    it('always render a div', () => {
        let element = searchPagination().find('div');
        expect(element.length).toBe(1);
    })

    // it('always render a Pager', () => {
    //     let element = searchPagination().find('pager');
    //     expect(element.length).toBe(1);
    // })

    // it('should render correctly', () => {
    //     expect(searchPagination()).toMatchSnapshot();
    // });

})
