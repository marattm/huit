import React, { Component } from 'react';
import axios from 'axios';
import { Media, Panel, PanelGroup } from 'react-bootstrap';

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
            
        }
    };
    checkAuthors(info) {
        try {
            if (info.authors) {
                return info.authors;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkPublishers(info) {
        try {
            if (info.publisher) {
                return info.publisher;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkPublishedDate(info) {
        try {
            if (info.publishedDate) {
                return info.publishedDate;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkDescription(info) {
        try {
            if (info.description) {
                return info.description;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkPageCount(info) {
        try {
            if (info.pageCount) {
                return info.pageCount;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkAverageRating(info) {
        try {
            if (info.averageRating) {
                return info.averageRating;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkCategories(info) {
        try {
            var result = '';
            if (info.categories) {
                for (let i = 0; i < info.categories.length; i++) {
                    const element = info.categories[i];
                    result = result + ', ' + element;
                }
                return result;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkPreviewLink(info) {
        try {
            if (info.webReaderLink) {
                return info.webReaderLink;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkLanguage(info) {
        try {
            if (info.language) {
                return info.language;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkInfoLink(info) {
        try {
            if (info.infoLink) {
                return info.infoLink;
            }
        } catch (error) {
            console.log(error);
            
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
                                                        <img width={64} height={64} alt={this.checkTitle(book.volumeInfo)} src={this.checkThumbnail(book.volumeInfo)}/>
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
                                            <p> <b>Description:</b> {this.checkDescription(book.volumeInfo)}</p>
                                            <p> <b>Average Rating:</b> {this.checkAverageRating(book.volumeInfo)}/5</p>
                                            <p> <b>Category:</b> {this.checkCategories(book.volumeInfo)}</p>
                                            <p> <b>Page number:</b> {this.checkPageCount(book.volumeInfo)} pages</p>
                                            <p> <b>Language:</b> {this.checkLanguage(book.volumeInfo)}</p>
                                            <p><a href={this.checkPreviewLink(book.accessInfo)}>Preview</a></p>
                                            <p><a href={this.checkInfoLink(book.volumeInfo)}>More..</a></p>
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
