import React from 'react';
import { shallow } from 'enzyme';

import SearchFilterOptions from '../SearchFilterOptions';

const parameters = [
    { value: "all", title: "All" },
    { value: "af", title: "Afrikaans" },
    { value: "sq", title: "Albanian" },
    { value: "am", title: "Amharic" },
    { value: "ar", title: "Arabic" },
    { value: "hy", title: "Armenian" },
    { value: "az", title: "Azerbaijani" },
    { value: "eu", title: "Basque" },
    { value: "be", title: "Belarusian" },
    { value: "bn", title: "Bengali" },
    { value: "bs", title: "Bosnian" },
    { value: "bg", title: "Bulgarian" },
    { value: "ca", title: "Catalan" },
    { value: "ce", title: "Cebuano " },
    { value: "ny", title: "Chichewa" },
    { value: "zh", title: "Chinese (Simplified)" },
    { value: "zh", title: "Chinese (Traditional)" },
    { value: "co", title: "Corsican" },
    { value: "hr", title: "Croatian" },
    { value: "cs", title: "Czech" },
    { value: "da", title: "Danish" },
    { value: "nl", title: "Dutch" },
    { value: "en", title: "English" },
    { value: "eo", title: "Esperanto" },
    { value: "et", title: "Estonian" },
    { value: "tl", title: "Filipino" },
    { value: "fi", title: "Finnish" },
    { value: "fr", title: "French" },
    { value: "fy", title: "Frisian" },
    { value: "gl", title: "Galician" },
    { value: "ka", title: "Georgian" },
    { value: "de", title: "German" },
    { value: "el", title: "Greek" },
    { value: "gu", title: "Gujarati" },
    { value: "ht", title: "Haitian Creole" },
    { value: "ha", title: "Hausa" },
    { value: "ha", title: "Hawaiian " },
    { value: "iw", title: "Hebrew" },
    { value: "hi", title: "Hindi" },
    { value: "hm", title: "Hmong " },
    { value: "hu", title: "Hungarian" },
    { value: "is", title: "Icelandic" },
    { value: "ig", title: "Igbo" },
    { value: "id", title: "Indonesian" },
    { value: "ga", title: "Irish" },
    { value: "it", title: "Italian" },
    { value: "ja", title: "Japanese" },
    { value: "jw", title: "Javanese" },
    { value: "kn", title: "Kannada" },
    { value: "kk", title: "Kazakh" },
    { value: "km", title: "Khmer" },
    { value: "ko", title: "Korean" },
    { value: "ku", title: "Kurdish" },
    { value: "ky", title: "Kyrgyz" },
    { value: "lo", title: "Lao" },
    { value: "la", title: "Latin" },
    { value: "lv", title: "Latvian" },
    { value: "lt", title: "Lithuanian" },
    { value: "lb", title: "Luxembourgish" },
    { value: "mk", title: "Macedonian" },
    { value: "mg", title: "Malagasy" },
    { value: "ms", title: "Malay" },
    { value: "ml", title: "Malayalam" },
    { value: "mt", title: "Maltese" },
    { value: "mi", title: "Maori" },
    { value: "mr", title: "Marathi" },
    { value: "mn", title: "Mongolian" },
    { value: "my", title: "Myanmar" },
    { value: "ne", title: "Nepali" },
    { value: "no", title: "Norwegian" },
    { value: "ps", title: "Pashto" },
    { value: "fa", title: "Persian" },
    { value: "pl", title: "Polish" },
    { value: "pt", title: "Portuguese" },
    { value: "pa", title: "Punjabi" },
    { value: "ro", title: "Romanian" },
    { value: "ru", title: "Russian" },
    { value: "sm", title: "Samoan" },
    { value: "gd", title: "Scots Gaelic" },
    { value: "sr", title: "Serbian" },
    { value: "st", title: "Sesotho" },
    { value: "sn", title: "Shona" },
    { value: "sd", title: "Sindhi" },
    { value: "si", title: "Sinhala" },
    { value: "sk", title: "Slovak" },
    { value: "sl", title: "Slovenian" },
    { value: "so", title: "Somali" },
    { value: "es", title: "Spanish" },
    { value: "su", title: "Sundanese" },
    { value: "sw", title: "Swahili" },
    { value: "sv", title: "Swedish" },
    { value: "tg", title: "Tajik" },
    { value: "ta", title: "Tamil" },
    { value: "te", title: "Telugu" },
    { value: "th", title: "Thai" },
    { value: "tr", title: "Turkish" },
    { value: "uk", title: "Ukrainian" },
    { value: "ur", title: "Urdu" },
    { value: "uz", title: "Uzbek" },
    { value: "vi", title: "Vietnamese" },
    { value: "cy", title: "Welsh" },
    { value: "xh", title: "Xhosa" },
    { value: "yi", title: "Yiddish" },
    { value: "yo", title: "Yoruba" },
    { value: "zu", title: "Zulu" },
]
const titles = ["Relevance", "Newest", "All", 'Books', 'Magazines', 'All', 'Partial', 'Full', 'Free', 'Paid', 'Google ebooks', '10', '20', '30', '40']

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
        let i=0;
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
