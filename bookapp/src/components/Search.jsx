import React, { Component } from 'react';
import axios from 'axios';
import { Media, Panel, PanelGroup, Table } from 'react-bootstrap';

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

    render() {
        return (
            <div>
                <h1> {this.state.title} </h1> <hr /><br />

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
                                                <Media>
                                                    <Media.Left>
                                                        <img width={64} height={64} src={this.checkThumbnail(book.volumeInfo)}/>
                                                    </Media.Left>
                                                    <Media.Body>
                                                        <Media.Heading>{this.checkTitle(book.volumeInfo)}</Media.Heading>
                                                        <p>
                                                            {this.checkAuthors(book.volumeInfo)} 
                                                            <em>   {this.checkPublishers(book.volumeInfo)}</em> 
                                                            <em>   {this.checkPublishedDate(book.volumeInfo)}</em>

                                                        </p>
                                                    </Media.Body>
                                                </Media>
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
