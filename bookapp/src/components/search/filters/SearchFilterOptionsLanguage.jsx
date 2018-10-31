import React, { Component, Fragment } from 'react';
import { ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import { parameters } from '../../../utils';

class SearchFilterOptionsLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parameters: parameters
        }
    }

    render() {
        const {
            handleSelectLanguageChange
        } = this.props;
        return (
            <Fragment>
                <ButtonGroup >
                    <DropdownButton title="language" id="bg-nested-dropdown">
                        {this.state.parameters.map((lang) => {
                            return (
                                <MenuItem key={lang.value} id={lang.value} eventKey={lang.value} onSelect={handleSelectLanguageChange}>{lang.title}</MenuItem>
                            )
                        })}
                    </DropdownButton>
                </ButtonGroup>
            </Fragment>
        )
    }
}

export default SearchFilterOptionsLanguage;
