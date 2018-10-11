import React, { Component } from 'react';
import axios from 'axios';
import { Table, Panel, PanelGroup } from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Search books..',
            books: [],
            query: ''
        };
        this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    };

    componentDidMount() {
        this.clearForm();
        this.render();
        // this.getBooks();
    };

    getBooks(query) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + query + `&key=${process.env.REACT_APP_GoogleAPIKey}`)
            .then((res) => { this.setState({ books: res.data.items }); })
            .catch((err) => { console.log(err); });
    };

    clearForm() {
        this.setState({
            query: ''
        });
    };

    handleFormChange(event) {
        const obj = this.state;
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    };

    handleSearchFormSubmit(event) {
        event.preventDefault();
        let query;

        query = this.state.query;

        // const url = `${process.env.REACT_APP_BOOKS_SERVICE_URL}/api/v0/books/books`;
        // axios.post(url, data)
        //     .then((res) => {
        //         this.clearForm();
        //         console.log((res.data.data.books));
        //         this.setState({ books: res.data.data.books });
        //         this.render();
        //     })
        //     .catch((err) => { console.log(err); });
        this.getBooks(query);
    };

    checkThumbnail(info) {
        try {
            if (info.imageLinks.smallThumbnail) {
                return info.imageLinks.smallThumbnail;
            }
        } catch (error) {
            console.log(error)
        }
    };
    checkTitle(info) {
        try {
            if (info.title) {
                return info.title;
            }
        } catch (error) {
            console.log(error);
            return "No information available.";
        }
    };
    checkAuthors(info) {
        try {
            if (info.authors) {
                return info.authors;
            }
        } catch (error) {
            console.log(error);
            return "No information available.";
        }
    };
    checkPublishers(info) {
        try {
            if (info.publisher) {
                return info.publisher;
            }
        } catch (error) {
            console.log(error);
            return "No information available.";
        }
    };
    checkPublishedDate(info) {
        try {
            if (info.publishedDate) {
                return info.publishedDate;
            }
        } catch (error) {
            console.log(error);
            return "No information available.";
        }
    };
    checkDescription(info) {
        try {
            if (info.description) {
                return info.description;
            }
        } catch (error) {
            console.log(error);
            return "No information available.";
        }
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         query: ""
    //     };
    // };

    // componentDidMount() {
    //     this.clearForm();
    // };

    // clearForm() {
    //     this.setState({
    //         query: ''
    //     });
    // };

    // handleFormChange(event) {
    //     const obj = this.state.query;
    //     obj[event.target.name] = event.target.value;
    //     this.setState(obj);
    // };

    // search(event) {
    //     event.preventDefault();
    //     const data = {
    //         username: this.state.username,
    //         email: this.state.email
    //     };
    //     axios.post(`${process.env.REACT_APP_BOOKS_SERVICE_URL}/books`, data)
    //         .then((res) => {
    //             this.getbooks();
    //             this.setState({
    //                 formData: { username: '', email: '', password: '' },
    //                 username: '',
    //                 email: '',
    //             });
    //         })
    //         .catch((err) => { console.log(err); });
    // };

    render() {
        return (
            <div>
                <h1> {this.state.title} </h1> <hr /><br />

                {/* <form>
                    <FormGroup>
                        <Grid>
                            <Row className="show-grid">
                                <Col xs={8} md={4}>
                                    <input
                                        name="username"
                                        className="form-control input-lg"
                                        type="text"
                                        placeholder="Al Gore"
                                        required
                                        value={this.state.formData.username}
                                        onChange={this.handleFormChange}
                                    />
                                </Col>
                                <Col xs={8} md={4}>
                                    <Button>Search</Button>
                                </Col>
                            </Row>
                        </Grid>
                    </FormGroup>
                </form> */}

                <div>


                    <form onSubmit={(event) => this.handleSearchFormSubmit(event)}>

                        <div className="form-group">
                            <input
                                name="query"
                                className="form-control input-lg"
                                type="text"
                                placeholder="Al Gore.."
                                required
                                value={this.state.query}
                                onChange={this.handleFormChange}
                            />
                        </div>

                        <input
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                            value="Submit"
                        />

                    </form>
                </div>
                <br /><br />
                {/* This the ACTUAL display of the result list. */}
                <div>
                    {
                        this.state.books.map((book) => {
                            return (
                                <PanelGroup accordion id="accordion-example">
                                    <Panel eventKey="1" key={book.id} bsStyle="info">
                                        <Panel.Heading>
                                            <Panel.Title toggle>
                                                <img src={this.checkThumbnail(book.volumeInfo)}/>
                                                <p>
                                                    {this.checkTitle(book.volumeInfo)}
                                                </p>
                                                <p>
                                                    {this.checkAuthors(book.volumeInfo)}
                                                </p>
                                                <p>
                                                    <em>Publisher: {this.checkPublishers(book.volumeInfo)}</em>
                                                </p>
                                                <p>
                                                    <em>Date: {this.checkPublishedDate(book.volumeInfo)}</em>
                                                </p>
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Body collapsible>
                                            <p>{this.checkDescription(book.volumeInfo)}</p>
                                        </Panel.Body>
                                    </Panel>
                                </PanelGroup>
                            )
                        })
                    }

                </div>

            </div>
        )
    };
}




export default Search;
