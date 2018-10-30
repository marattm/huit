import React, { Component } from 'react';
import { Collapse, ToggleButtonGroup, ToggleButton, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import { parameters } from '../../utils';

class FilterOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parameters: parameters
        }
    }

    componentDidMount() {
        this.render();
    }

    render() {
        const {
            open,
            type,
            printType,
            filter,
            maxResults,
            handleToggleChange,
            handleSelectLanguageChange
        } = this.props;
        return (
            <div>
                <Collapse in={open}>
                    <div>
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="type" defaultValue={type}>
                                <ToggleButton value={"relevance"} onChange={handleToggleChange}>Relevance</ToggleButton>
                                <ToggleButton value={"newest"} onChange={handleToggleChange}>Newest</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="printType" defaultValue={printType}>
                                <ToggleButton value={"all"} onChange={handleToggleChange}>All</ToggleButton>
                                <ToggleButton value={"books"} onChange={handleToggleChange}>Books</ToggleButton>
                                <ToggleButton value={"magazines"} onChange={handleToggleChange}>Magazines</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
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
                        <br />
                        <ButtonGroup >
                            <DropdownButton title="language" id="bg-nested-dropdown">
                                {this.state.parameters.map((lang) => {
                                    return (
                                        <MenuItem key={lang.value} id={lang.value} eventKey={lang.value} onSelect={handleSelectLanguageChange}>{lang.title}</MenuItem>
                                    )
                                })}
                            </DropdownButton>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup>
                            <ToggleButtonGroup type="radio" name="maxResults" defaultValue={maxResults}>
                                <ToggleButton value={"10"} onChange={handleToggleChange}>10</ToggleButton>
                                <ToggleButton value={"20"} onChange={handleToggleChange}>20</ToggleButton>
                                <ToggleButton value={"30"} onChange={handleToggleChange}>30</ToggleButton>
                                <ToggleButton value={"40"} onChange={handleToggleChange}>40</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                    </div>
                </Collapse>
            </div>
        )
    }
}


export default FilterOptions;
