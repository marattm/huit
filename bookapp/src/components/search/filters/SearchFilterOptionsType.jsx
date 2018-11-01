import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton, FormGroup, ControlLabel } from 'react-bootstrap';


class FilterOptionsType extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>


                <ControlLabel style={{ color: 'white' }}>Order by</ControlLabel>
                <FormGroup >
                    <ButtonGroup >
                        <ToggleButtonGroup type="radio" name="type" defaultValue={this.props.type}>
                            <ToggleButton value={"relevance"} onChange={this.props.handleToggleChange}>Relevance</ToggleButton>
                            <ToggleButton value={"newest"} onChange={this.props.handleToggleChange}>Newest</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonGroup>
                </FormGroup>
            </Fragment>
        )
    }
}

export default FilterOptionsType;
