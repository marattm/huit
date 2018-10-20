import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';

import FilterOptions from './SearchFilterOptions';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    };

    componentDidMount() {
        // this.clearForm();
        this.render();
    };

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                {/* SEARCH BLOCK */}
                <Form onSubmit={(event) => this.props.handleSearchFormSubmit(event)}>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button onClick={() => this.setState({ open: !this.state.open })}>
                                    <Glyphicon glyph="align-justify" />
                                </Button>
                            </InputGroup.Button>

                            <FormControl 
                                name="query"
                                className="form-control input"
                                type="text"
                                placeholder="Al Gore.."
                                required
                                value={this.props.query}
                                onChange={this.props.handleFormChange}
                                    />
                            <InputGroup.Button>
                                <Button
                                    type="submit"
                                    className="btn-primary"
                                >
                                    Search
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Form>

                {/* FILTER BLOCK */}
                <FilterOptions
                    open={this.state.open}
                    type={this.props.type}
                    printType={this.props.printType}
                    filter={this.props.filter}
                    language={this.props.language}
                    maxResults={this.props.maxResults}
                    handleToggleChange={this.props.handleToggleChange}
                    handleSelectLanguageChange={this.props.handleSelectLanguageChange}
                />
            </div>
        )
    };
}


export default SearchForm;
