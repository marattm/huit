import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


class FilterOptionsType extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <ButtonGroup >
                    <ToggleButtonGroup type="radio" name="type" defaultValue={this.props.type}>
                        <ToggleButton value={"relevance"} onChange={this.props.handleToggleChange}>Relevance</ToggleButton>
                        <ToggleButton value={"newest"} onChange={this.props.handleToggleChange}>Newest</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonGroup>
            </Fragment>
        )
    }
}

export default FilterOptionsType;
