import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton, FormGroup, ControlLabel } from 'react-bootstrap';


class SearchFilterOptionsFilter extends Component {
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
                <ControlLabel style={{ color: 'white' }}>Filter by kind</ControlLabel>
                <ControlLabel style={{ color: 'white' }}>Filter by kind</ControlLabel>
                <FormGroup>
                    <ButtonGroup >
                        <ToggleButtonGroup type="radio" name="filter" defaultValue={"all"}>
                            <ToggleButton value={"all"} onChange={handleChange}>All</ToggleButton>
                            <ToggleButton value={"partial"} onChange={handleChange}>Partial</ToggleButton>
                            <ToggleButton value={"full"} onChange={handleChange}>Full</ToggleButton>
                            <ToggleButton value={"free-ebooks"} onChange={handleChange}>Free</ToggleButton>
                            <ToggleButton value={"paid-ebooks"} onChange={handleChange}>Paid</ToggleButton>
                            <ToggleButton value={"ebooks"} onChange={handleChange}> Google's</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonGroup>
                </FormGroup>
            </Fragment>
        )
    }
}

export default SearchFilterOptionsFilter;
