import React, { Component, Fragment } from 'react';
import { ButtonGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


class SearchFilterOptionsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            filter,
            handleToggleChange
        } = this.props;
        return (
            <Fragment>
                <ButtonGroup >
                    <ToggleButtonGroup type="radio" name="filter" defaultValue={filter}>
                        <ToggleButton value={"all"} onChange={handleToggleChange}>All</ToggleButton>
                        <ToggleButton value={"partial"} onChange={handleToggleChange}>Partial</ToggleButton>
                        <ToggleButton value={"full"} onChange={handleToggleChange}>Full</ToggleButton>
                        <ToggleButton value={"free-ebooks"} onChange={handleToggleChange}>Free</ToggleButton>
                        <ToggleButton value={"paid-ebooks"} onChange={handleToggleChange}>Paid</ToggleButton>
                        <ToggleButton value={"ebooks"} onChange={handleToggleChange}>Google ebooks</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonGroup>
            </Fragment>
        )
    }
}

export default SearchFilterOptionsFilter;
