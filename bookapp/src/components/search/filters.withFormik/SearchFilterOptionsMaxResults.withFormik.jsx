import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton, FormGroup, ControlLabel } from 'react-bootstrap';


class SearchFilterOptionsMaxResults extends Component {
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
                <ControlLabel style={{ color: 'white' }}>Results per page</ControlLabel>
                <FormGroup>
                    <ButtonGroup>
                        <ToggleButtonGroup type="radio" name="maxResults" defaultValue={"10"}>
                            <ToggleButton value={"10"} onChange={handleChange}>10</ToggleButton>
                            <ToggleButton value={"20"} onChange={handleChange}>20</ToggleButton>
                            <ToggleButton value={"30"} onChange={handleChange}>30</ToggleButton>
                            <ToggleButton value={"40"} onChange={handleChange}>40</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonGroup>
                </FormGroup>
            </Fragment>
        )
    }
}

export default SearchFilterOptionsMaxResults;
