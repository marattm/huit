import React, { Component } from 'react';
import { Form, InputGroup, FormControl, Button, Glyphicon, Alert, Collapse } from 'react-bootstrap';


import FilterOptions from '../filters/filters.withFormik/SearchFilterOptions.withFormik';



import { placeholder } from '../../../services/utils';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }

    render() {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
        } = this.props;

        return (
            <div className='container'>
                {/* SEARCH BLOCK */}
                <Form onSubmit={handleSubmit}>
                    {/* <FormGroup> */}
                    <InputGroup>
                        <InputGroup.Button>
                            <Button onClick={() => this.setState({ open: !this.state.open })}>
                                <Glyphicon glyph="align-justify" />
                            </Button>
                        </InputGroup.Button>

                        <FormControl
                            id='queryInput'
                            name="query"
                            className={errors.query ? "form-control input error" : "form-control input"} // && touched.query
                            type="text"
                            placeholder={placeholder[0] + '..'}
                            value={values.query}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {/* SUBMIT BUTTON */}
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

                    <Collapse in={this.state.open}>
                        <div>
                            {/* FILTER BLOCK */}
                            <FilterOptions
                                open={this.state.open}
                                handleChange={handleChange}
                            />
                        </div>
                    </Collapse>
                </Form>
            </div>
        )
    }
}


export default SearchForm;
