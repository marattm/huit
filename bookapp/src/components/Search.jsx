import React, { Component } from 'react';
import axios from 'axios';
import { Media, Panel, PanelGroup, Form, Collapse, FormGroup, InputGroup, FormControl, ToggleButtonGroup, ToggleButton, ButtonGroup, Button, Pager, Glyphicon} from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Search books..',
            books: [],
            query: '',
            type: 'relevance',
            option: 'title',
            maxResults: 10,
            startIndex: 0,
            oldStartIndex: 0, 
            disabled: false, 
            open: true


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
                + `&startIndex=` + newStartIndex
                + `&orderBy=` + this.state.type)
                .then((res) => {
                    this.setState({ 
                        books: res.data.items,
                        startIndex: newStartIndex,
                        disabled: true
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
                + `&startIndex=` + newStartIndex
                + `&orderBy=` + this.state.type)
                .then((res) => {
                    this.setState({
                        books: res.data.items,
                        startIndex: newStartIndex,
                        disabled: true
                    });
                })
                .catch((err) => { console.log(err); });
        }
        else {
            axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=`
                + query
                + `&maxResults=` + this.state.maxResults
                + `&startIndex=` + 0
                + `&orderBy=` + this.state.type)
                .then((res) => { 
                    let newStartIndex = 0 + parseInt(this.state.maxResults);
                    this.setState({
                        books: res.data.items,
                        startIndex: newStartIndex,
                        disabled: true
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
            let newStartIndex = 0 + parseInt(this.state.maxResults);
            this.setState({
                oldStartIndex: newStartIndex
            });
        }
        if(event.target.name === "prev") {
            if (this.state.startIndex >= this.state.maxResults) {
                this.getBooks(this.state.query, "prev");
                let newStartIndex = 0 - parseInt(this.state.maxResults);
                this.setState({
                    oldStartIndex: newStartIndex
                });
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
                    result += element;
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

    endIndex() {
        if (this.state.startIndex === 0) {
            return 0    
        }
        else {
            return parseInt(this.state.oldStartIndex) + parseInt(this.state.maxResults)
        }
    }

    displayIndexUp() {
        if (this.state.disabled) {
            if (this.state.startIndex === 0) {
                return (
                    < Pager.Item href="#bottom">
                        Results from {this.state.startIndex}
                    </Pager.Item >
                )
            } else {
                return (
                    < Pager.Item href="#bottom">
                        Results up to {this.state.startIndex}
                    </Pager.Item >
                )
            }
        }
    }

    displayIndexBot() {
        if (this.state.startIndex === 0) {
            return (
                < Pager.Item id='bottom' href="#up">
                    Results from {this.state.startIndex}
                </Pager.Item >
            )
        } else {
            return (
                < Pager.Item id='bottom' href="#up">
                    Results up to {this.state.startIndex}
                </Pager.Item >
            )
        }
    }

    dynamicPreviousButton() {
        if (this.state.disabled) {
            if (this.state.startIndex === 0) {
                return (
                    <Pager.Item disabled previous href="#" name="prev" onClick={this.handlePreviousNext}>
                        &larr; Prev Page
                        </Pager.Item>
                );
            } else {
                return (
                    <Pager.Item previous href="#" name="prev" onClick={this.handlePreviousNext}>
                        &larr; Prev Page
                    </Pager.Item>
                );
            }
        }
    }

    dynamicNextButton() {
        if (this.state.disabled) {
            if (this.state.query) {
                return (
                    <Pager.Item next href="#" name="next" onClick={this.handlePreviousNext}>
                        Next Page &rarr;
                    </Pager.Item>
                );
            } else {
                return (
                    <Pager.Item disabled next href="#" name="next" onClick={this.handlePreviousNext}>
                        Next Page &rarr;
                    </Pager.Item>
                );
            }
        }
    }

    render() {
        return (
            <div>
                <h1 id='up'> {this.state.title} </h1><hr/>

                <Form onSubmit={(event) => this.handleSearchFormSubmit(event)}>
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
                                value={this.state.query}
                                onChange={this.handleFormChange}
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

                <Collapse in={this.state.open}>
                    <Pager>
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="type" defaultValue={"relevance"}>
                                <ToggleButton value={"relevance"} onChange={this.handleToogleChange}>Relevance</ToggleButton>
                                <ToggleButton value={"newest"} onChange={this.handleToogleChange}>Newest</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup>
                            <ToggleButtonGroup type="radio" name="maxResults" defaultValue={"10"}>
                                <ToggleButton value={"10"} onChange={this.handleToogleChange}>10</ToggleButton>
                                <ToggleButton value={"20"} onChange={this.handleToogleChange}>20</ToggleButton>
                                <ToggleButton value={"30"} onChange={this.handleToogleChange}>30</ToggleButton>
                                <ToggleButton value={"40"} onChange={this.handleToogleChange}>40</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                    </Pager>
                </Collapse>

                <Pager>
                    {this.dynamicPreviousButton()}
                    {this.displayIndexUp()}
                    {this.dynamicNextButton()}
                </Pager>

                <hr />

                {this.state.books.map( (book) => {
                    return (
                        <PanelGroup accordion id="accordion-example">
                            <Panel eventKey="1" key={book.id} bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        <Media>
                                            <Media.Left>
                                                <img width={64} height={64} alt='' src={this.checkThumbnail(book.volumeInfo)}/>
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
                                    <p><a href={this.checkPreviewLink(book.accessInfo)} target="_blank">Preview</a></p>
                                    <p><a href={this.checkInfoLink(book.volumeInfo)} target="_blank">More..</a></p>
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                    )
                })}

                <Collapse in={ this.state.disabled }>
                    <Pager>
                        {this.dynamicPreviousButton()}
                        {this.displayIndexBot()}
                        {this.dynamicNextButton()}
                    </Pager>
                </Collapse>
            </div>
        )
    };
}



export default Search;
