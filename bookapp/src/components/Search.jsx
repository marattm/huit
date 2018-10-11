import React, { Component } from 'react';
import axios from 'axios';
import { Media, Panel, PanelGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton, Row, Col, ButtonGroup, Button} from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Search books..',
            books: [],
            query: '',
            type: 'Authors',
            option: 'title',
            maxResults: 10,
            startIndex: 0

        };
        this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleToogleChange = this.handleToogleChange.bind(this);
        this.handlePreviousNext = this.handlePreviousNext.bind(this);
    };

    componentDidMount() {
        this.clearForm();
        this.render();
    };

    getBooks(query, movement) {
        if (movement === "next") {
            let newStartIndex = parseInt(this.state.startIndex) + parseInt(this.state.maxResults);
            axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=`
                + query
                + `&maxResults=` + this.state.maxResults
                + `&startIndex=` + newStartIndex)
                .then((res) => {
                    this.setState({ 
                        books: res.data.items,
                        startIndex: newStartIndex
                    });
                })
                .catch((err) => { console.log(err); });
        }
        else if (movement === "prev") {
            let newStartIndex = parseInt(this.state.startIndex) - parseInt(this.state.maxResults);
            axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=`
                + query
                + `&maxResults=` + this.state.maxResults
                + `&startIndex=` + newStartIndex)
                .then((res) => {
                    this.setState({
                        books: res.data.items,
                        startIndex: newStartIndex
                    });
                })
                .catch((err) => { console.log(err); });
        }
        else {
            axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=`
                + query
                + `&maxResults=` + this.state.maxResults
                + `&startIndex=` + 0)
                .then((res) => { 
                    let newStartIndex = 0 + parseInt(this.state.maxResults);                    
                    this.setState({
                        books: res.data.items,
                        startIndex: newStartIndex
                    });
                })
                .catch((err) => { console.log(err); });
        }
    };


    clearForm() {
        this.setState({
            query: '', 
            startIndex: 0
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

    handleToogleChange(event) {
        event.preventDefault();
        const obj = this.state;
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    };

    startIndexUp() {
        let newStartIndex = parseInt(this.state.startIndex) + parseInt(this.state.maxResults);
        this.setState({
            startIndex: newStartIndex
        });
    };
    startIndexDown() {
        let newStartIndex = parseInt(this.state.startIndex) - parseInt(this.state.maxResults);
        this.setState({
            startIndex: newStartIndex
        });
    };

    handlePreviousNext(event) {
        if (event.target.name === "next") {
            this.getBooks(this.state.query, "next");
        }
        if(event.target.name === "prev") {
            if (this.state.startIndex >= this.state.maxResults) {
                this.getBooks(this.state.query, "prev");
            }
        }
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
                
                <Row className="show-grid">
                    <Col md={6} mdOffset={5}>
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="type" defaultValue={"Books"}>
                                <ToggleButton value={"Books"} onChange={this.handleToogleChange}>Books</ToggleButton>
                                <ToggleButton value={"Library"} onChange={this.handleToogleChange}>Library</ToggleButton>
                                <ToggleButton value={"Users"} onChange={this.handleToogleChange}>Users</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                    </Col>

                    <Col md={6} mdOffset={5}>
                        <ButtonToolbar >
                            <ToggleButtonGroup type="radio" name="option" defaultValue={"Authors"}>
                                <ToggleButton value={"Authors"} onChange={this.handleToogleChange}>Authors</ToggleButton>
                                <ToggleButton value={"Publisher"} onChange={this.handleToogleChange}>Publisher</ToggleButton>
                                <ToggleButton value={"Title"} onChange={this.handleToogleChange}>Title</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Col>

                    <Col md={6} mdOffset={5}>
                        <ButtonToolbar >
                            <ToggleButtonGroup type="radio" name="maxResults" defaultValue={"10"}>
                                <ToggleButton value={"10"} onChange={this.handleToogleChange}>10</ToggleButton>
                                <ToggleButton value={"20"} onChange={this.handleToogleChange}>20</ToggleButton>
                                <ToggleButton value={"30"} onChange={this.handleToogleChange}>30</ToggleButton>
                                <ToggleButton value={"40"} onChange={this.handleToogleChange}>40</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </Row>




                <div>
                    <form onSubmit={(event) => this.handleSearchFormSubmit(event)}>
                        
                        
                        <br/>

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
                    <ButtonGroup>
                        <Button name="prev" onClick={this.handlePreviousNext}>Prev</Button>
                        <Button name="next" onClick={this.handlePreviousNext}>Next</Button>
                    </ButtonGroup>
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
                                                            {this.checkAuthors(book.volumeInfo)}, 
                                                            <em>   {this.checkPublishers(book.volumeInfo)}</em>, 
                                                            <em>   {this.checkPublishedDate(book.volumeInfo)}</em>
                                                        </p>
                                                    </Media.Body>
                                                </Media>
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Body collapsible>
                                            <p><b>Description:</b> {this.checkDescription(book.volumeInfo)}</p>
                                            <p><b>Average Rating:</b> {this.checkAverageRating(book.volumeInfo)}/5</p>
                                            <p><b>Category:</b> {this.checkCategories(book.volumeInfo)}</p>
                                            <p><b>Page number:</b> {this.checkPageCount(book.volumeInfo)} pages</p>
                                            <p><b>Language:</b> {this.checkLanguage(book.volumeInfo)}</p>
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
