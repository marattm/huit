import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton, FormGroup, ControlLabel } from 'react-bootstrap';


class FilterOptionsPrintType extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            handleChange
        } = this.props;
        return (
            <Fragment>
                <ControlLabel style={{ color: 'white' }}>Filter by print type</ControlLabel>
                <FormGroup>
                    <ButtonGroup >
                        <ToggleButtonGroup type="radio" name="printType" defaultValue={"all"}>
                            <ToggleButton value={"all"} onChange={handleChange}>All</ToggleButton>
                            <ToggleButton value={"books"} onChange={handleChange}>Books</ToggleButton>
                            <ToggleButton value={"magazines"} onChange={handleChange}>Magazines</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonGroup>
                </FormGroup>
            </Fragment>
        )
    }
}

export default FilterOptionsPrintType;
