import React from 'react';
import { mount } from 'enzyme';

import SearchResults from '../SearchResults';

import { collection } from '../../../services/utils'

describe('SearchResults renders properly', () => {

    let props;
    let mountedSearchResults;
    const searchResults = () => {
        if (!mountedSearchResults) {
            mountedSearchResults = mount(
                <SearchResults {...props} />
            );
        }
        return mountedSearchResults;
    }

    beforeEach(() => {
        props = {
            books: undefined,
        };
        mountedSearchResults = undefined;
    });


    it('always render div component properly', () => {
        let element = searchResults().find('div');
        expect(element.length).toBe(1);
    })

    describe("when `books` is undefined", () => {
        beforeEach(() => {
            props.books = undefined;
        });

        it('renders nothing', () => {
            let element = searchResults().find('PanelGroup');
            expect(element.length).toBe(0);
        })
    });

    describe("when `books` is defined", () => {

        beforeEach(() => {
            props.books = collection;
        });

        it('renders 1 results', () => {
            let element = searchResults().find('PanelGroup');
            expect(element.length).toBe(1);
        })
        it('should render Panel component properly', () => {
            let element = searchResults().find('Panel');
            expect(element.length).toBe(1);
        })
        it('should render Panel.Heading component properly', () => {
            let element = searchResults().find('div.Panel-Heading');
            expect(element.length).toBe(0);
        })
        it('should render Panel.Title component properly', () => {
            let element = searchResults().find('div.Panel-Title');
            expect(element.length).toBe(0);
        })

        // media area
        it('should render Media component properly', () => {
            let element = searchResults().find('div.media');
            expect(element.length).toBe(1);
        })
        it('should render Media.Left component properly', () => {
            let element = searchResults().find('div.media-left');
            expect(element.length).toBe(1);
            expect(element.first().children());
        })
        it('should render Media.Heading component properly', () => {
            let element = searchResults().find('h4.media-heading');
            expect(element.length).toBe(1);
        })
        it('should render em component properly', () => {
            let element = searchResults().find('em');
            expect(element.length).toBe(1);
            expect(element.get(0).props.children[2]).toBe('HMH');
        })

        // panel body area
        it('should render Panel-Body component properly', () => {
            let element = searchResults().find('div.panel-body');
            expect(element.length).toBe(1);
        })
        it('should render Panel-Body > p component properly', () => {
            let element = searchResults().find('div.panel-body>p');
            expect(element.length).toBe(7);
            expect(element.get(0).props.children[0].props.children).toBe('Description:');
            expect(element.get(0).props.children[2]).toBe("A “balanced, insightful” biography of the politician that “shows how the pressure to succeed has shaped virtually every aspect of Gore’s career” (Publishers Weekly, starred review). Why did Al Gore, after angry opposition to the Vietnam War, submit to the draft? What happened in Vietnam that made him sullen and bitter? After he renounced politics, what set this son of a Tennessee senator back on the track mapped out for him? What was the real nature of his partnership with Bill Clinton, and how was it altered by the Lewinsky affair? Inventing Al Gore addresses these issues and more as it unveils the true motivations, ideals, and idiosyncrasies of one of America’s most inscrutable political figures. Bill Turque, who covered both of Gore’s vice presidential campaigns and the Clinton White House, draws on extensive access to Gore’s key advisers, friends, and family. He unmasks a man who in private can sing and dance to George Strait’s music but in public measures every comment and gesture with legendary caution. As Turque details, Gore’s great political albatross—a lack of empathy—was hatched during his lonely childhood as the product of ambitious political parents who groomed him for the presidency. Turque’s keen analysis also uncovers the genesis of Gore’s questionable fund-raising and of a political platform laden with worthy but emotionally safe planks such as bioethics and global warming. In addition, Inventing Al Gore illuminates how personal tragedies have shaped his political life—and the remarkable influence that women, from his mother to Naomi Wolf, have had on his career. “Refreshing . . . Turque finds [Gore] to be like so many of the rest of us—occasionally decent, usually flawed, always conflicted.” —Newsday");
            expect(element.get(1).props.children[0].props.children).toBe('Average Rating:');
            expect(element.get(1).props.children[2]).toBe(3.5);
            expect(element.get(2).props.children[0].props.children).toBe('Category:');
            expect(element.get(2).props.children[2]).toBe('Biography & Autobiography');
            expect(element.get(3).props.children[0].props.children).toBe('Page number:');
            expect(element.get(3).props.children[2]).toBe(480);
            expect(element.get(4).props.children[0].props.children).toBe('Language:');
            expect(element.get(4).props.children[2]).toBe('en');
            expect(element.get(5).props.children.props.children).toBe('Preview');
            expect(element.get(5).props.children.props.href).toBe('http://play.google.com/books/reader?id=XmzAAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api');
            expect(element.get(6).props.children.props.children).toBe('More..');
            expect(element.get(6).props.children.props.href).toBe('https://play.google.com/store/books/details?id=XmzAAgAAQBAJ&source=gbs_api');
        })

    });



    it('should render correctly', () => {
        expect(searchResults()).toMatchSnapshot();
    });

})
