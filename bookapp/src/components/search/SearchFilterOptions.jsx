import React, { Component } from 'react';
import { Collapse, ToggleButtonGroup, ToggleButton, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';


class FilterOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parameters: [
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
        }
    };

    componentDidMount() {
        this.render();
    };

    render() {
        return (
            <div>
                <Collapse in={this.props.open}>
                    <div>
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="type" defaultValue={this.props.type}>
                                <ToggleButton value={"relevance"} onChange={this.props.handleToogleChange}>Relevance</ToggleButton>
                                <ToggleButton value={"newest"} onChange={this.props.handleToogleChange}>Newest</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="printType" defaultValue={this.props.printType}>
                                <ToggleButton value={"all"} onChange={this.props.handleToogleChange}>All</ToggleButton>
                                <ToggleButton value={"books"} onChange={this.props.handleToogleChange}>Books</ToggleButton>
                                <ToggleButton value={"magazines"} onChange={this.props.handleToogleChange}>Magazines</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="filter" defaultValue={this.props.filter}>
                                <ToggleButton value={"all"} onChange={this.props.handleToogleChange}>All</ToggleButton>
                                <ToggleButton value={"partial"} onChange={this.props.handleToogleChange}>Partial</ToggleButton>
                                <ToggleButton value={"full"} onChange={this.props.handleToogleChange}>Full</ToggleButton>
                                <ToggleButton value={"free-ebooks"} onChange={this.props.handleToogleChange}>Free</ToggleButton>
                                <ToggleButton value={"paid-ebooks"} onChange={this.props.handleToogleChange}>Paid</ToggleButton>
                                <ToggleButton value={"ebooks"} onChange={this.props.handleToogleChange}>Google ebooks</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <DropdownButton title="language" id="bg-nested-dropdown">
                                {this.state.parameters.map( (lang) => {
                                    return(
                                        <MenuItem eventKey={lang.value} onSelect={this.props.handleSelectLanguageChange}>{lang.title}</MenuItem>
                                    )
                                })}
                            </DropdownButton>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup>
                            <ToggleButtonGroup type="radio" name="maxResults" defaultValue={this.props.maxResults}>
                                <ToggleButton value={"10"} onChange={this.props.handleToogleChange}>10</ToggleButton>
                                <ToggleButton value={"20"} onChange={this.props.handleToogleChange}>20</ToggleButton>
                                <ToggleButton value={"30"} onChange={this.props.handleToogleChange}>30</ToggleButton>
                                <ToggleButton value={"40"} onChange={this.props.handleToogleChange}>40</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                    </div>
                </Collapse>
            </div>
        )
    };
}


export default FilterOptions;
