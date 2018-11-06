import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton, FormGroup, ControlLabel } from 'react-bootstrap';


class FilterOptionsPrintType extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            printType,
            handleToggleChange
        } = this.props;
        return (
            <Fragment>
                <ControlLabel style={{ color: 'white' }}>Filter by print type</ControlLabel>
                <FormGroup>
                    <ButtonGroup >
                        <ToggleButtonGroup type="radio" name="printType" defaultValue={printType}>
                            <ToggleButton value={"all"} onChange={handleToggleChange}>All</ToggleButton>
                            <ToggleButton value={"books"} onChange={handleToggleChange}>Books</ToggleButton>
                            <ToggleButton value={"magazines"} onChange={handleToggleChange}>Magazines</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonGroup>
                </FormGroup>
            </Fragment>
        )
    }
}

export default FilterOptionsPrintType;
