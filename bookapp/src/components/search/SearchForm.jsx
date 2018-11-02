import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

import FilterOptions from './filters/SearchFilterOptions';

import { placeholder } from '../../utils';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }

    render() {
        const {
            query,
            handleFormChange,
            type,
            printType,
            filter,
            language,
            maxResults,
            handleToggleChange,
            handleSelectLanguageChange
        } = this.props;

        return (
            <div className='container'>
                {/* SEARCH BLOCK */}
                <Form onSubmit={(event) => { this.props.handleSearchFormSubmit(event) }}>
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
                                placeholder={placeholder[0] + '..'}
                                required
                                value={query}
                                onChange={handleFormChange}
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

                    {/* FILTER BLOCK */}
                    <FilterOptions
                        open={this.state.open}
                        type={type}
                        printType={printType}
                        filter={filter}
                        language={language}
                        maxResults={maxResults}
                        handleToggleChange={handleToggleChange}
                        handleSelectLanguageChange={handleSelectLanguageChange}
                    />
                </Form>

            </div>
        )
    }
}


export default SearchForm;
