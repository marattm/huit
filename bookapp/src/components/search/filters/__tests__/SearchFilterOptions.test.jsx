import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchFilterOptions from '../SearchFilterOptions';
// import SearchFilterOptions from '../SearchFilterOptions';

import SearchFilterOptionsPrintType from '../SearchFilterOptionsPrintType';
import SearchFilterOptionsFilter from '../SearchFilterOptionsFilter';
import SearchFilterOptionsLanguage from '../SearchFilterOptionsLanguage';
import SearchFilterOptionsType from '../SearchFilterOptionsType';
import SearchFilterOptionsMaxResults from '../SearchFilterOptionsMaxResults';

import { parameters, titles } from '../../../../services/utils';


describe('SearchFilterOptions renders properly', () => {

    let props;
    let mountedSearchFilterOptions;
    const searchFilterOptions = () => {
        if (!mountedSearchFilterOptions) {
            mountedSearchFilterOptions = mount(
                <SearchFilterOptions {...props} />
            )
        }
        return mountedSearchFilterOptions;
    }

    beforeEach(() => {
        props = {
            open: undefined,
            type: undefined,
            printType: undefined,
            filter: undefined,
            maxResults: undefined,
            handleToggleChange: undefined,
            handleSelectLanguageChange: undefined
        }
        mountedSearchFilterOptions = undefined;
    })


    it('should always render Collapse component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        let element = wrapper.find('Collapse')
        expect(element.length).toBe(1)
    })

    it('should always render div component properly', () => {
        let wrapper = shallow(<SearchFilterOptions />)
        let element = wrapper.find('div')
        expect(element.length).toBe(1)
    })




    describe("SearchFilterOptionsPrintType should renders properly", () => {
        beforeEach(() => {
            props.books = undefined;
            props.open = undefined;
            props.type = undefined;
            props.printType = undefined;
            props.filter = undefined;
            props.maxResults = undefined;
            props.handleToggleChange = undefined;
            props.handleSelectLanguageChange = undefined;
        })

        it('renders nothing', () => {
            let element = searchFilterOptions().find('PanelGroup');
            expect(element.length).toBe(0);
        })

        it('should render SearchFilterOptionsPrintType component properly', () => {
            let wrapper = shallow(<SearchFilterOptionsPrintType />)
            let element = wrapper.find('ButtonGroup')
            expect(element.length).toBe(1)
        })
    })



    // describe("SearchFilterOptionsFilter should renders properly", () => {
    //     beforeEach(() => {
    //         props.books = undefined;
    //         props.open = undefined;
    //         props.type = undefined;
    //         props.printType = undefined;
    //         props.filter = undefined;
    //         props.maxResults = undefined;
    //         props.handleToggleChange = undefined;
    //         props.handleSelectLanguageChange = undefined;
    //     })

    //     it('renders nothing', () => {
    //         let element = searchFilterOptions().find('PanelGroup');
    //         expect(element.length).toBe(0);
    //     })

    //     it('should render SearchFilterOptionsFilter component properly', () => {
    //         let wrapper = shallow(<SearchFilterOptionsFilter />)
    //         let element = wrapper.find('ToggleButtonGroup')
    //         expect(element.length).toBe(1)
    //     })
    // })





    // describe("SearchFilterOptionsLanguage should renders properly", () => {
    //     beforeEach(() => {
    //         props.books = undefined;
    //         props.open = undefined;
    //         props.type = undefined;
    //         props.printType = undefined;
    //         props.filter = undefined;
    //         props.maxResults = undefined;
    //         props.handleToggleChange = undefined;
    //         props.handleSelectLanguageChange = undefined;
    //     })

    //     it('renders nothing', () => {
    //         let element = searchFilterOptions().find('PanelGroup');
    //         expect(element.length).toBe(0)
    //     })

    //     it('should render SearchFilterOptionsLanguage component properly', () => {
    //         let wrapper = shallow(<SearchFilterOptionsLanguage />)
    //         let element = wrapper.find('ToggleButtonGroup')
    //         expect(element.length).toBe(1)
    //     })
    // })


    // describe("SearchFilterOptionsType should renders properly", () => {
    //     beforeEach(() => {
    //         props.books = undefined;
    //         props.open = undefined;
    //         props.type = undefined;
    //         props.printType = undefined;
    //         props.filter = undefined;
    //         props.maxResults = undefined;
    //         props.handleToggleChange = undefined;
    //         props.handleSelectLanguageChange = undefined;
    //     })

    //     it('renders nothing', () => {
    //         let element = searchFilterOptions().find('PanelGroup');
    //         expect(element.length).toBe(0)
    //     })

    //     it('should render SearchFilterOptionsType component properly', () => {
    //         let wrapper = shallow(<SearchFilterOptionsType />)
    //         let element = wrapper.find('DropdownButton')
    //         expect(element.length).toBe(1)
    //     })
    // })





    // describe("SearchFilterOptionsMaxResults should renders properly", () => {
    //     beforeEach(() => {
    //         props.books = undefined;
    //         props.open = undefined;
    //         props.type = undefined;
    //         props.printType = undefined;
    //         props.filter = undefined;
    //         props.maxResults = undefined;
    //         props.handleToggleChange = undefined;
    //         props.handleSelectLanguageChange = undefined;
    //     })

    //     it('renders nothing', () => {
    //         let element = searchFilterOptions().find('PanelGroup');
    //         expect(element.length).toBe(0)
    //     })

    //     it('should render SearchFilterOptionsMaxResults component properly', () => {
    //         let wrapper = shallow(<SearchFilterOptionsMaxResults />)
    //         let element = wrapper.find('DropdownButton')
    //         expect(element.length).toBe(1)
    //     })
    // })




    // it('should render correctly', () => {
    //     let wrapper = shallow(<SearchFilterOptions />)
    //     expect(wrapper).toMatchSnapshot()
    // })
})
