import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, FormControl, Button, Glyphicon, Alert } from 'react-bootstrap';

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
            handleSelectLanguageChange,

            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            dirty
        } = this.props;

        return (
            <div className='container'>
                {/* SEARCH BLOCK */}
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button onClick={() => this.setState({ open: !this.state.open })}>
                                    <Glyphicon glyph="align-justify" />
                                </Button>
                            </InputGroup.Button>

                            <FormControl
                                id='queryInput'
                                name="query"
                                className={errors.query && touched.query ? "form-control input error" : "form-control input"}
                                type="text"
                                placeholder={placeholder[0] + '..'}
                                value={values.query}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <InputGroup.Button>
                                <Button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={isSubmitting}
                                >
                                    Search
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                        {errors.query && touched.query && <Alert className="Small input-feedback" bsStyle="danger"> {errors.query} </Alert>}
                    </FormGroup>
                </form>

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
            </div>
        )
    }
}


export default SearchForm;
