import React, { Component } from 'react';
import axios from 'axios';
import { Media, Panel, PanelGroup, Form, Collapse, FormGroup, InputGroup, FormControl, ToggleButtonGroup, ToggleButton, ButtonGroup, Button, Pager, Glyphicon, DropdownButton, MenuItem} from 'react-bootstrap';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Search books..',
            books: [],
            query: '',
            type: 'relevance',
            option: 'title',
            maxResults: "10",
            startIndex: 0,
            oldStartIndex: 0, 
            disabled: false, 
            open: true, 
            printType: 'all',
            filter: 'all', 
            language: 'all', 
            previousButtonDisabled: true
        };
        this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleToogleChange = this.handleToogleChange.bind(this);
        this.handleSelectLanguageChange = this.handleSelectLanguageChange.bind(this);
        this.handlePreviousNext = this.handlePreviousNext.bind(this);
    };

    componentDidMount() {
        this.clearForm();
        this.render();
        this.hydrateStateWithLocalStorage();

        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    };

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );

        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(key);

                // parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    // handle empty string
                    this.setState({ [key]: value });
                }
            }
        }
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    queryMaker(query, newStartIndex) {
        /** 
         * Create query url based on the query input and the filter parameters.
         * @param {string} query - The user input query.
         * @param {string} newStartIndex - The new start index for paging.
         * @return {string} full query URL.
         */
        var fullUrl = `https://www.googleapis.com/books/v1/volumes?q=`
            + query
            + `&maxResults=` + this.state.maxResults
            + `&startIndex=` + newStartIndex
            + `&orderBy=` + this.state.type;
        if (this.state.filter !== 'all') {
            fullUrl = fullUrl + `&filter=` + this.state.filter;
        }
        if (this.state.printType !== 'all') {
            fullUrl = fullUrl + `&printType=` + this.state.printType;
        }
        if (this.state.language !== 'all') {
            fullUrl = fullUrl + `&langRestrict=` + this.state.language;
        }
        return fullUrl
    }

    getBooks(query, movement) {
        /**
         * Get the books list by send a request using Google API, and update the state.
         * @param {string} query - The user input query.
         * @param {string} movement - Selector to distinguish if the user use the search, previous or next button.
         */
        if (movement === "next") {
            let newStartIndex = parseInt(this.state.startIndex) + parseInt(this.state.maxResults);
            axios.get(this.queryMaker(query, newStartIndex))
                .then((res) => {
                    this.setState({ 
                        books: res.data.items,
                        startIndex: newStartIndex,
                        disabled: true, 
                        previousButtonDisabled: false
                    });
                })
                .catch((err) => { console.log(err); });
        }
        else if (movement === "prev") {
            let newStartIndex = parseInt(this.state.startIndex) - parseInt(this.state.maxResults);
            axios.get(this.queryMaker(query, newStartIndex))
                .then((res) => {
                    this.setState({
                        books: res.data.items,
                        startIndex: newStartIndex,
                        disabled: true, 
                        previousButtonDisabled: false
                    });
                })
                .catch((err) => { console.log(err); });
        }
        else {
            let newStartIndex = 0;
            axios.get(this.queryMaker(query, newStartIndex))
                .then((res) => { 
                    let newStartIndex = 0 + parseInt(this.state.maxResults);
                    this.setState({
                        books: res.data.items,
                        startIndex: newStartIndex,
                        disabled: true, 
                        previousButtonDisabled: true
                    });
                })
                .catch((err) => { console.log(err); });
        }
    };

    clearForm() {
        /**
         * Clear the form.
         */
        this.setState({
            query: '', 
            startIndex: 0
        });
    };

    handleFormChange(event) {
        /**
         * Update the state for every input in the form field.
         * @param {object} event - Carry the name and the value in the form field.
         */
        const obj = this.state;
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    };

    handleSearchFormSubmit(event) {
        /**
         * Submit the query to the getBook() function.
         * @param {object} event
         */
        event.preventDefault();
        let query;
        query = this.state.query;
        this.getBooks(query);
    };

    handleToogleChange(event) {
        /**
         * Update the value of the event target state.
         * @param {object} event - Carry the name and the value from the toogle button.
         */
        event.preventDefault();
        const obj = this.state;
        obj[event.target.name] = String(event.target.value);
        this.setState(obj);
    };

    handleSelectLanguageChange(eventKey) {
        /**
         * Update the value of the language state.
         * @param {object} eventKey - Value of the dropdown button.
         */
        this.setState({
            language: eventKey
        });
    };
    handleSelectDownloadableChange(eventKey) {
        /**
         * Update the value of the language state.
         * @param {object} eventKey - Value of the dropdown button.
         */
        this.setState({
            downloadable: eventKey
        });
    };

    handlePreviousNext(event) {
        /**
         * Trigger the getBook() for the previous and next button case.
         * @param {object} event - Carry the target name, either prev or next.
         */
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
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} URL to the book's thumbnail.
         */
        try {
            if (info.imageLinks.smallThumbnail) {
                return info.imageLinks.smallThumbnail;
            }
        } catch (error) {
            console.log(error)
        }
    };
    checkTitle(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's title.
         */
        try {
            if (info.title) {
                return info.title;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkAuthors(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's authors.
         */
        try {
            if (info.authors) {
                return info.authors;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkPublishers(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's publisher.
         */
        try {
            if (info.publisher) {
                return info.publisher;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkPublishedDate(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's publish date.
         */
        try {
            if (info.publishedDate) {
                return info.publishedDate;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkDescription(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's description.
         */
        try {
            if (info.description) {
                return info.description;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkPageCount(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's page count.
         */
        try {
            if (info.pageCount) {
                return info.pageCount;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkAverageRating(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's average rating.
         */
        try {
            if (info.averageRating) {
                return info.averageRating;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkCategories(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's categories.
         */
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
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's web reader link.
         */
        try {
            if (info.webReaderLink) {
                return info.webReaderLink;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkLanguage(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's language.
         */
        try {
            if (info.language) {
                return info.language;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkInfoLink(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's information link.
         */
        try {
            if (info.infoLink) {
                return info.infoLink;
            }
        } catch (error) {
            console.log(error);
            
        }
    };

    displayIndexTop() {
        /**
         * Display the paging result button at the top of the result page.
         */
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
        /**
         * Display the paging result button at the bottom of the result page.
         */
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
        /**
         * Disable or enable the previous button.
         */
        if (this.state.disabled) {
            if (this.state.startIndex === 0 || this.state.previousButtonDisabled) {
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
        /**
         * Disable or enable the previous button.
         */
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
                    <div>
                    {/* <Pager> */}
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="type" defaultValue={this.state.type}>
                                <ToggleButton value={"relevance"} onChange={this.handleToogleChange}>Relevance</ToggleButton>
                                <ToggleButton value={"newest"} onChange={this.handleToogleChange}>Newest</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="printType" defaultValue={this.state.printType}>
                                <ToggleButton value={"all"} onChange={this.handleToogleChange}>All</ToggleButton>
                                <ToggleButton value={"books"} onChange={this.handleToogleChange}>Books</ToggleButton>
                                <ToggleButton value={"magazine"} onChange={this.handleToogleChange}>Magazine</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <ToggleButtonGroup type="radio" name="filter" defaultValue={this.state.filter}>
                                <ToggleButton value={"all"} onChange={this.handleToogleChange}>All</ToggleButton>
                                <ToggleButton value={"partial"} onChange={this.handleToogleChange}>Partial</ToggleButton>
                                <ToggleButton value={"full"} onChange={this.handleToogleChange}>Full</ToggleButton>
                                <ToggleButton value={"free-ebooks"} onChange={this.handleToogleChange}>Free</ToggleButton>
                                <ToggleButton value={"paid-ebooks"} onChange={this.handleToogleChange}>Paid</ToggleButton>
                                <ToggleButton value={"ebooks"} onChange={this.handleToogleChange}>Google ebooks</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup >
                            <DropdownButton title="language" id="bg-nested-dropdown">
                                <MenuItem eventKey="all" onSelect={this.handleSelectLanguageChange}>All</MenuItem>
                                <MenuItem eventKey="eng" onSelect={this.handleSelectLanguageChange}>Eng</MenuItem>
                                <MenuItem eventKey="fr" onSelect={this.handleSelectLanguageChange}>Fr</MenuItem>
                            </DropdownButton>
                        </ButtonGroup>
                        <br/>
                        <ButtonGroup>
                            <ToggleButtonGroup type="radio" name="maxResults" defaultValue={this.state.maxResults}>
                                <ToggleButton value={"10"} onChange={this.handleToogleChange}>10</ToggleButton>
                                <ToggleButton value={"20"} onChange={this.handleToogleChange}>20</ToggleButton>
                                <ToggleButton value={"30"} onChange={this.handleToogleChange}>30</ToggleButton>
                                <ToggleButton value={"40"} onChange={this.handleToogleChange}>40</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                    {/* </Pager> */}
                    </div>
                </Collapse>

                <Pager>
                    {this.dynamicPreviousButton()}
                    {this.displayIndexTop()}
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
