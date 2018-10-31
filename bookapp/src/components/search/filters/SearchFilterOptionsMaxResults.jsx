import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


class SearchFilterOptionsMaxResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            maxResults,
            handleToggleChange
        } = this.props;
        return (
            <Fragment>
                <ButtonGroup>
                    <ToggleButtonGroup type="radio" name="maxResults" defaultValue={maxResults}>
                        <ToggleButton value={"10"} onChange={handleToggleChange}>10</ToggleButton>
                        <ToggleButton value={"20"} onChange={handleToggleChange}>20</ToggleButton>
                        <ToggleButton value={"30"} onChange={handleToggleChange}>30</ToggleButton>
                        <ToggleButton value={"40"} onChange={handleToggleChange}>40</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonGroup>
            </Fragment>
        )
    }
}

export default SearchFilterOptionsMaxResults;
