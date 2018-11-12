import React from 'react';
import { mount } from 'enzyme';

import SearchPaginationPreviousButton from '../SearchPaginationPreviousButton';

const displayDisabled = [false, true];
const previousButtonDisabled = [false, true];
const startIndex = [0, 10];
const query = ['', 'something'];
const bot = [false, true];

describe('SearchPaginationPreviousButton renders properly', () => {

    let props;
    let mountedSearchPaginationPreviousButton;
    const searchPaginationPreviousButton = () => {
        if (!mountedSearchPaginationPreviousButton) {
            mountedSearchPaginationPreviousButton = mount(
                <SearchPaginationPreviousButton {...props} />
            );
        }
        return mountedSearchPaginationPreviousButton;
    }

    beforeEach(() => {
        props = {
            displayDisabled: undefined,
            query: undefined,
            maxResults: undefined,
            startIndex: undefined,
            previousButtonDisabled: undefined
        };
        mountedSearchPaginationPreviousButton = undefined;
    });

    it('always render no div', () => {
        let element = searchPaginationPreviousButton().find('div');
        expect(element.length).toBe(0);
    })

    describe(" CASE 1: displayDisabled=false & previousButtonDisabled=false & startIndex=0 & maxResults=10", () => {
        beforeEach(() => {
            props.displayDisabled = false;
            props.previousButtonDisabled = false;
            props.startIndex = 0;
            props.maxResults = 10;
        });

        it('renders nothing', () => {
            let element = searchPaginationPreviousButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 2: displayDisabled=false & previousButtonDisabled=false & startIndex=10 & maxResults=10", () => {
        beforeEach(() => {
            props.displayDisabled = false;
            props.previousButtonDisabled = false;
            props.startIndex = 10;
            props.maxResults = 10;
        });

        it('renders nothing', () => {
            let element = searchPaginationPreviousButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 3: displayDisabled=false & previousButtonDisabled=true & startIndex=0 & maxResults=10", () => {
        beforeEach(() => {
            props.displayDisabled = false;
            props.previousButtonDisabled = true;
            props.startIndex = 0;
            props.maxResults = 10;
        });

        it('renders nothing', () => {
            let element = searchPaginationPreviousButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 4: displayDisabled=false & previousButtonDisabled=false & startIndex=0 & maxResults=10", () => {
        beforeEach(() => {
            props.displayDisabled = false;
            props.previousButtonDisabled = true;
            props.startIndex = 10;
            props.maxResults = 10;
        });

        it('renders nothing', () => {
            let element = searchPaginationPreviousButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 5: displayDisabled=true & previousButtonDisabled=false & startIndex=0 & maxResults=10", () => {
        beforeEach(() => {
            props.displayDisabled = true;
            props.previousButtonDisabled = false;
            props.startIndex = 0;
            props.maxResults = 10;
        });

        it('renders enabled Prev button with maxResults of 10', () => {
            let element = searchPaginationPreviousButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.maxResults);
            expect(element.get(0).props.children.props.name).toBe('prev');
            expect(element.get(0).props.children.props.disabled).toBe(true); // meaning disabled button
        })
    });
    describe(" CASE 6: displayDisabled=true & previousButtonDisabled=false & startIndex=10 & maxResults=10", () => {
        beforeEach(() => {
            props.displayDisabled = true;
            props.previousButtonDisabled = false;
            props.startIndex = 10;
            props.maxResults = 10;
        });

        it('renders disabled Prev button with maxResults of 10', () => {
            let element = searchPaginationPreviousButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.maxResults);
            expect(element.get(0).props.children.props.name).toBe('prev');
            expect(element.get(0).props.children.props.disabled).toBe(true); // meaning disabled button
        })
    });
    describe(" CASE 7: displayDisabled=true & previousButtonDisabled=true & startIndex=0 & maxResults=10", () => {
        beforeEach(() => {
            props.displayDisabled = true;
            props.previousButtonDisabled = true;
            props.startIndex = 0;
            props.maxResults = 10;
        });

        it('renders enabled Prev button with maxResults of 10', () => {
            let element = searchPaginationPreviousButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.maxResults);
            expect(element.get(0).props.children.props.name).toBe('prev');
            expect(element.get(0).props.children.props.disabled).toBe(true); // meaning disabled button
        })
    });
    describe(" CASE 8: displayDisabled=true & previousButtonDisabled=true & startIndex=10 & maxResults=10", () => {
        beforeEach(() => {
            props.displayDisabled = true;
            props.previousButtonDisabled = true;
            props.startIndex = 10;
            props.maxResults = 10;
        });

        it('renders enabled Prev button with maxResults of 10', () => {
            let element = searchPaginationPreviousButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.maxResults);
            expect(element.get(0).props.children.props.name).toBe('prev');
            expect(element.get(0).props.children.props.disabled).toBe(false); // meaning disabled button
        })
    });


    // it('should render correctly', () => {
    //     expect(searchPaginationPreviousButton()).toMatchSnapshot();
    // });

})
