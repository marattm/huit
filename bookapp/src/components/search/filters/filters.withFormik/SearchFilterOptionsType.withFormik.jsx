import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton, FormGroup, ControlLabel } from 'react-bootstrap';


class FilterOptionsType extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            handleChange
        } = this.props
        return (
            <Fragment>
                <ControlLabel style={{ color: 'white' }}>Order by</ControlLabel>
                <FormGroup >
                    <ButtonGroup >
                        <ToggleButtonGroup type="radio" name="type" defaultValue={"relevance"}>
                            <ToggleButton value={"relevance"} onChange={handleChange}>Relevance</ToggleButton>
                            <ToggleButton value={"newest"} onChange={handleChange}>Newest</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonGroup>
                </FormGroup>
            </Fragment>
        )
    }
}

export default FilterOptionsType;
