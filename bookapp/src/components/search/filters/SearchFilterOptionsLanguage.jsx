import React, { Component, Fragment } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { parameters } from '../../../services/utils';

class SearchFilterOptionsLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parameters: parameters
        }
    }

    render() {
        const {
            handleToggleChange
        } = this.props;
        return (
            <Fragment>
                <FormGroup controlId="formControlsSelect" >
                    <ControlLabel style={{ color: 'white' }}>Select a language</ControlLabel>
                    <FormControl
                        name="language"
                        componentClass="select"
                        placeholder="Select a language"
                        onChange={handleToggleChange}
                        style={{ width: 340 }}
                    >
                        {this.state.parameters.map((lang) => {
                            return (
                                <option key={lang.value} value={lang.value}> {lang.title}</option>
                            )
                        })}
                    </FormControl>
                </FormGroup>
            </Fragment>
        )
    }
}

export default SearchFilterOptionsLanguage;
