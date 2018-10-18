import React, { Component } from 'react';
import { Collapse, ToggleButtonGroup, ToggleButton, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';


class FilterOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {
        this.render();
    };

    render() {
        return (
            <div>
                <Collapse in={this.props.open}>
                    <div>
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="type" defaultValue={this.props.type}>
                                <ToggleButton value={"relevance"} onChange={this.props.handleToogleChange}>Relevance</ToggleButton>
                                <ToggleButton value={"newest"} onChange={this.props.handleToogleChange}>Newest</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="printType" defaultValue={this.props.printType}>
                                <ToggleButton value={"all"} onChange={this.props.handleToogleChange}>All</ToggleButton>
                                <ToggleButton value={"books"} onChange={this.props.handleToogleChange}>Books</ToggleButton>
                                <ToggleButton value={"magazine"} onChange={this.props.handleToogleChange}>Magazine</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="filter" defaultValue={this.props.filter}>
                                <ToggleButton value={"all"} onChange={this.props.handleToogleChange}>All</ToggleButton>
                                <ToggleButton value={"partial"} onChange={this.props.handleToogleChange}>Partial</ToggleButton>
                                <ToggleButton value={"full"} onChange={this.props.handleToogleChange}>Full</ToggleButton>
                                <ToggleButton value={"free-ebooks"} onChange={this.props.handleToogleChange}>Free</ToggleButton>
                                <ToggleButton value={"paid-ebooks"} onChange={this.props.handleToogleChange}>Paid</ToggleButton>
                                <ToggleButton value={"ebooks"} onChange={this.props.handleToogleChange}>Google ebooks</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <DropdownButton title="language" id="bg-nested-dropdown">
                                <MenuItem eventKey="all" onSelect={this.props.handleSelectLanguageChange}>All</MenuItem>
                                <MenuItem eventKey="eng" onSelect={this.props.handleSelectLanguageChange}>Eng</MenuItem>
                                <MenuItem eventKey="fr" onSelect={this.props.handleSelectLanguageChange}>Fr</MenuItem>
                            </DropdownButton>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup>
                            <ToggleButtonGroup type="radio" name="maxResults" defaultValue={this.props.maxResults}>
                                <ToggleButton value={"10"} onChange={this.props.handleToogleChange}>10</ToggleButton>
                                <ToggleButton value={"20"} onChange={this.props.handleToogleChange}>20</ToggleButton>
                                <ToggleButton value={"30"} onChange={this.props.handleToogleChange}>30</ToggleButton>
                                <ToggleButton value={"40"} onChange={this.props.handleToogleChange}>40</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                    </div>
                </Collapse>
            </div>
        )
    };
}


export default FilterOptions;
