import React from 'react';
import { mount } from 'enzyme';

import SearchPaginationPageIndexButton from '../SearchPaginationPageIndexButton';

const displayDisabled = [false, true];
const previousButtonDisabled = [false, true];
const startIndex = [0, 10];
const query = ['', 'something'];
const bor = [false, true];

describe('SearchPaginationPageIndexButton renders properly', () => {

    let props;
    let mountedSearchPaginationPageIndexButton;
    const searchPaginationPageIndexButton = () => {
        if (!mountedSearchPaginationPageIndexButton) {
            mountedSearchPaginationPageIndexButton = mount(
                <SearchPaginationPageIndexButton {...props} />
            );
        }
        return mountedSearchPaginationPageIndexButton;
    }

    beforeEach(() => {
        props = {
            displayDisabled: undefined,
            startIndex: undefined,
            bot: undefined
        };
        mountedSearchPaginationPageIndexButton = undefined;
    });

    it('always render no div', () => {
        let element = searchPaginationPageIndexButton().find('div');
        expect(element.length).toBe(0);
    })

    describe(" CASE 1: bot=false & displayDisabled=false & startIndex = 0 ", () => {
        beforeEach(() => {
            props.bot = false;
            props.displayDisabled = false;
            props.startIndex = 0;
        });

        it('renders nothing', () => {
            let element = searchPaginationPageIndexButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 2: bot=false & displayDisabled=false & startIndex = 10 ", () => {
        beforeEach(() => {
            props.bot = false;
            props.displayDisabled = false;
            props.startIndex = 10;
        });

        it('renders nothing', () => {
            let element = searchPaginationPageIndexButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 3: bot=false & displayDisabled=true & startIndex = 0 ", () => {
        beforeEach(() => {
            props.bot = false;
            props.displayDisabled = true;
            props.startIndex = 0;
        });

        it('renders enabled Results from button with id=#bottom and the startIndex of 0', () => {
            let element = searchPaginationPageIndexButton().find('li');
            expect(element.length).toBe(1);

            expect(element.get(0).props.children.props.children[0]).toBe("Results from ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.startIndex);
            expect(element.get(0).props.children.props.href).toBe('#bottom');
            expect(element.get(0).props.children.props.disabled).toBe(false);
        })
    });
    describe(" CASE 4: bot=false & displayDisabled=false & startIndex = 10 ", () => {
        beforeEach(() => {
            props.bot = false;
            props.displayDisabled = true;
            props.startIndex = 10;
        });

        it('renders enabled Results up to button with id=#bottom and the startIndex of 10', () => {
            let element = searchPaginationPageIndexButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("Results from ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.startIndex);
            expect(element.get(0).props.children.props.href).toBe('#bottom');
            expect(element.get(0).props.children.props.disabled).toBe(false);
        })
    });
    describe(" CASE 5: bot=true & displayDisabled=false & startIndex = 0 ", () => {
        beforeEach(() => {
            props.bot = true;
            props.displayDisabled = false;
            props.startIndex = 0;
        });

        it('renders nothing', () => {
            let element = searchPaginationPageIndexButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 6: bot=true & displayDisabled=false & startIndex = 10 ", () => {
        beforeEach(() => {
            props.bot = true;
            props.displayDisabled = false;
            props.startIndex = 10;
        });

        it('renders nothing', () => {
            let element = searchPaginationPageIndexButton().find('li');
            expect(element.length).toBe(0);
        })
    });
    describe(" CASE 7: bot=true & displayDisabled=true & startIndex = 0 ", () => {
        beforeEach(() => {
            props.bot = true;
            props.displayDisabled = true;
            props.startIndex = 0;
        });

        it('renders enabled Results from to button with id=#top and the startIndex of 0', () => {
            let element = searchPaginationPageIndexButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("Results from ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.startIndex);
            expect(element.get(0).props.children.props.href).toBe('#top');
            expect(element.get(0).props.children.props.disabled).toBe(false);
        })
    });
    describe(" CASE 8: bot=true & displayDisabled=true & startIndex = 10 ", () => {
        beforeEach(() => {
            props.bot = true;
            props.displayDisabled = true;
            props.startIndex = 10;
        });

        it('renders enabled Results up to to button with id=#top and the startIndex of 10', () => {
            let element = searchPaginationPageIndexButton().find('li');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children.props.children[0]).toBe("Results from ");
            expect(element.get(0).props.children.props.children[1]).toBe(props.startIndex);
            expect(element.get(0).props.children.props.href).toBe('#top');
            expect(element.get(0).props.children.props.disabled).toBe(false);
        })
    });


    it('should render correctly', () => {
        expect(searchPaginationPageIndexButton()).toMatchSnapshot();
    });

})
