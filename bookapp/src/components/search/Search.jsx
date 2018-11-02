import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Collapse, Jumbotron } from 'react-bootstrap';


import SearchForm from "./SearchForm";
import SearchResults from './SearchResults';
import SearchPagination from './pagination/SearchPagination';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Search books..',
            books: [],
            query: '',
            type: 'relevance',
            printType: 'all',
            filter: 'all',
            language: 'all',
            maxResults: "10",
            option: 'title',
            startIndex: 0,
            oldStartIndex: 0,
            displayDisabled: false,
            previousButtonDisabled: true
        };
        this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSelectLanguageChange = this.handleSelectLanguageChange.bind(this);
        this.handlePreviousNext = this.handlePreviousNext.bind(this);
    }

    componentDidMount() {
        this.clearForm();
    }

    makeQuery(query, newStartIndex) {
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

    sendRequest(newStartIndex, query, displayDisabledValue, previousButtonDisabledValue) {
        /**
         * Send the AJAX request using Google API, and update the state.
         * @param {string} query - The user input query.
         * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
         */
        axios.get(this.makeQuery(query, newStartIndex))
            .then((res) => {
                this.setState({
                    books: res.data.items,
                    startIndex: newStartIndex,
                    displayDisabled: displayDisabledValue,
                    previousButtonDisabled: previousButtonDisabledValue
                });
            })
            .catch((err) => { console.log(err); });
    }

    getBooks(query, buttonType) {
        /**
         * Redirect the the API call depending the buttonType, and call the sendRequest function.
         * @param {string} query - The user input query.
         * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
         */
        if (buttonType === "next") {
            let newStartIndex = parseInt(this.state.startIndex) + parseInt(this.state.maxResults);
            this.sendRequest(newStartIndex, query, true, false);

        }
        else if (buttonType === "prev") {
            let newStartIndex = parseInt(this.state.startIndex) - parseInt(this.state.maxResults);
            this.sendRequest(newStartIndex, query, true, false);

        }
        else {
            let newStartIndex = 0 + parseInt(this.state.maxResults);
            this.sendRequest(newStartIndex, query, true, true);
        }
    }

    clearForm() {
        /**
         * Clear the form.
         */
        this.setState({
            query: '',
            startIndex: 0
        });
    }

    handleFormChange(event) {
        /**
         * Update the state for every input in the form field.
         * @param {object} event - Carry the name and the value in the form field.
         */
        let obj = this.state; // can't do this.state[event.target.name]
        obj[event.target.name] = event.target.value;
        this.setState(obj); // update the state with the whole new state obj
    }

    handleSearchFormSubmit(event) {
        /**
         * Submit the query to the getBook() function.
         * @param {object} event
         */
        event.preventDefault();
        let query;
        query = this.state.query;
        this.getBooks(query);
    }

    handleToggleChange(event) {
        /**
         * Update the value of the event target state.
         * @param {object} event - Carry the name and the value from the toggle button.
         */
        event.preventDefault();
        let obj = this.state;
        obj[event.target.name] = String(event.target.value);
        this.setState(obj);
    }

    handleSelectLanguageChange(eventKey) {
        /**
         * Update the value of the language state.
         * @param {object} eventKey - Value of the dropdown button.
         */
        this.setState({
            language: eventKey
        });
    }
    handleSelectDownloadableChange(eventKey) {
        /**
         * Update the value of the language state.
         * @param {object} eventKey - Value of the dropdown button.
         */
        this.setState({
            downloadable: eventKey
        });
    }

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
        if (event.target.name === "prev") {
            if (this.state.startIndex >= this.state.maxResults) {
                this.getBooks(this.state.query, "prev");
                let newStartIndex = 0 - parseInt(this.state.maxResults);
                this.setState({
                    oldStartIndex: newStartIndex
                });
            }
        }
    }



    render() {
        return (
            <Fragment>



                {/* SEARCH INPUT */}
                <Jumbotron style={{ backgroundColor: 'transparent' }}>
                    <h1 style={{ color: 'white' }} className='container'>  {this.state.title} </h1>
                    <SearchForm
                        // search
                        query={this.state.query}
                        handleSearchFormSubmit={this.handleSearchFormSubmit}
                        handleFormChange={this.handleFormChange}

                        type={this.state.type}
                        printType={this.state.printType}
                        filter={this.state.filter}
                        language={this.state.language}
                        maxResults={this.state.maxResults}
                        handleToggleChange={this.handleToggleChange}
                        handleSelectLanguageChange={this.handleSelectLanguageChange}
                    />
                </Jumbotron>



                {/* PAGINATION TOP */}
                <SearchPagination
                    bot={false}
                    displayDisabled={this.state.displayDisabled}
                    startIndex={this.state.startIndex}
                    previousButtonDisabled={this.state.previousButtonDisabled}
                    query={this.state.query}
                    maxResults={this.state.maxResults}
                    handlePreviousNext={this.handlePreviousNext}
                />



                {/* RESULT BLOCK */}
                <SearchResults books={this.state.books} />



                {/* PAGINATION BOTTOM */}
                <Collapse in={this.state.displayDisabled}>
                    <SearchPagination
                        bot={true}
                        displayDisabled={this.state.displayDisabled}
                        startIndex={this.state.startIndex}
                        previousButtonDisabled={this.state.previousButtonDisabled}
                        query={this.state.query}
                        maxResults={this.state.maxResults}
                        handlePreviousNext={this.handlePreviousNext}
                    />
                </Collapse>

            </Fragment >
        )
    }
}


export default Search;
