import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                {/* SEARCH BLOCK: Input */}
                <Form onSubmit={(event) => this.props.handleSearchFormSubmit(event)}>
                    <FormGroup>
                        <InputGroup>

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
            </div>
        )
    };
}


export default SearchForm;
