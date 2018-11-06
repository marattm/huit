import React from 'react';
import { mount } from 'enzyme';

import SearchPaginationNextButton from '../SearchPaginationNextButton';

describe('SearchPaginationNextButton renders properly', () => {

    let props;
    let mountedSearchPaginationNextButton;
    const searchPaginationNextButton = () => {
        if (!mountedSearchPaginationNextButton) {
            mountedSearchPaginationNextButton = mount(
                <SearchPaginationNextButton {...props} />
            );
        }
        return mountedSearchPaginationNextButton;
    }

    beforeEach(() => {
        props = {
            displayDisabled: undefined,
            query: undefined,
            maxResults: undefined
        };
        mountedSearchPaginationNextButton = undefined;
    });

    it('always render no div', () => {
        let element = searchPaginationNextButton().find('div');
        expect(element.length).toBe(0);
    })

    describe(" CASE 1: displayDisabled=false & query = '' ", () => {
        beforeEach(() => {
            props.displayDisabled = false;
            props.query = '';
            props.maxResults = 10;
        });

        it('renders nothing', () => {
            let element = searchPaginationNextButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 2: displayDisabled=false & query = 'something'", () => {
        beforeEach(() => {
            props.displayDisabled = false;
            props.query = 'something';
            props.maxResults = 10;
        });

        it('renders nothing', () => {
            let element = searchPaginationNextButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 3: displayDisabled=true & query = '' ", () => {
        beforeEach(() => {
            props.displayDisabled = true;
            props.query = '';
            props.maxResults = 10;
        });

        it('renders disabled Next Button with the maxResults', () => {
            let element = searchPaginationNextButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("Next  ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.maxResults);
            expect(element.get(0).props.children.props.children[2]).toBe(" →");
            expect(element.get(0).props.children.props.name).toBe('next');
            expect(element.get(0).props.children.props.disabled).toBe(true); // if nothing is in the query field
        })
    });
    describe(" CASE 4: displayDisabled=true & query = 'something' ", () => {
        beforeEach(() => {
            props.displayDisabled = true;
            props.query = 'something';
            props.maxResults = 10;
        });

        it('renders enabled Next Button with the maxResults', () => {
            let element = searchPaginationNextButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("Next  ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.maxResults);
            expect(element.get(0).props.children.props.children[2]).toBe(" →");
            expect(element.get(0).props.children.props.name).toBe('next');
            expect(element.get(0).props.children.props.disabled).toBe(false);
        })
    });

    it('should render correctly', () => {
        expect(searchPaginationNextButton()).toMatchSnapshot();
    });

})
