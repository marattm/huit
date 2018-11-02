import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Jumbotron, Collapse } from 'react-bootstrap';
import { withFormik } from 'formik';

import SearchForm from "./SearchForm.withFormik";
import SearchResults from './SearchResults';
import SearchPagination from './pagination/SearchPagination';
import SearchResultsBlock from './SearchResultsBlock.withFormik';


import { validationSearch } from "../../services/validation.schemas.service";



const formikEnhancer = withFormik({

    // import validation schema
    validationSchema: validationSearch,

    mapPropsToValues: () => ({
        query: '',
        // startIndex: '0',
        maxResults: '10',
        type: 'relevance',
        filter: 'all',
        printType: 'all',
        language: 'all',
        // displayDisabledValue: false,
        // previousButtonDisabledValue: false,
        // response: {}
    }),

    handleSubmit: (values, { resetForm, props, setStatus, setSubmitting }) => {
        // alert(JSON.stringify(values, null, 2))
        // console.log(values);

        getBooks(
            values.query,
            values.startIndex,
            values.maxResults,
            values.type,
            values.filter,
            values.printType,
            values.language,
            values.previousButtonDisabledValue,
            values.displayDisabledValue,
            values.buttonType)
            .then((res) => {
                console.log('dads', res);
                props.onSuccess(res.data.items);

                // setStatus({ girafe: res.data.items })
            })
            .catch()

        // resetForm()
        setSubmitting(false)
    }
})

const MyEnhancedForm = formikEnhancer(SearchForm);


const makeQuery = (query, newStartIndex, maxResults, type, filter, printType, language) => {
    /** 
     * Create query url based on the query input and the filter parameters.
     * @param {string} query - The user input query.
     * @param {string} newStartIndex - The new start index for paging.
     * @return {string} full query URL.
     */
    var fullUrl = `https://www.googleapis.com/books/v1/volumes?q=`
        + query
        + `&maxResults=` + maxResults
        + `&startIndex=` + newStartIndex
        + `&orderBy=` + type;
    if (filter !== 'all') {
        fullUrl = fullUrl + `&filter=` + filter;
    }
    if (printType !== 'all') {
        fullUrl = fullUrl + `&printType=` + printType;
    }
    if (language !== 'all') {
        fullUrl = fullUrl + `&langRestrict=` + language;
    }
    return fullUrl
}

const sendRequest = (query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue) => {
    /**
     * Send the AJAX request using Google API, and update the state.
     * @param {string} query - The user input query.
     * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
     */
    return axios.get(makeQuery(query, newStartIndex, maxResults, type, filter, printType, language))
        .then((res) => {
            return res
        })
        .catch((err) => { console.log(err); });
}

const getBooks = (query, startIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue, buttonType) => {
    /**
     * Redirect the API call depending the buttonType, and call the sendRequest function.
     * @param {string} query - The user input query.
     * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
     */
    if (buttonType === "next") {
        let newStartIndex = parseInt(startIndex) + parseInt(maxResults);
        return sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue);

    }
    else if (buttonType === "prev") {
        let newStartIndex = parseInt(startIndex) - parseInt(maxResults);
        return sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue);

    }
    else {
        let newStartIndex = 0 + parseInt(maxResults);
        return sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue);
    }
}





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
        }
        // this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        // this.handleFormChange = this.handleFormChange.bind(this);
        // this.handleToggleChange = this.handleToggleChange.bind(this);
        // this.handleSelectLanguageChange = this.handleSelectLanguageChange.bind(this);
        this.handlePreviousNext = this.handlePreviousNext.bind(this);
    }

    // state = {
    //     title: 'Search books..',
    //     books: [],
    //     query: '',
    //     type: 'relevance',
    //     printType: 'all',
    //     filter: 'all',
    //     language: 'all',
    //     maxResults: "10",
    //     option: 'title',
    //     startIndex: 0,
    //     oldStartIndex: 0,
    //     displayDisabled: false,
    //     previousButtonDisabled: true
    // }

    // componentDidMount() {
    //     this.clearForm()
    // }



    // hello() {
    //     console.log('this.state.maxResults')
    //     console.log(this.state)
    // }

    // makeQuery(query, newStartIndex, maxResults, type, filter, printType, language) {
    //     /** 
    //      * Create query url based on the query input and the filter parameters.
    //      * @param {string} query - The user input query.
    //      * @param {string} newStartIndex - The new start index for paging.
    //      * @return {string} full query URL.
    //      */
    //     var fullUrl = `https://www.googleapis.com/books/v1/volumes?q=`
    //         + query
    //         + `&maxResults=` + maxResults
    //         + `&startIndex=` + newStartIndex
    //         + `&orderBy=` + type
    //     if (filter !== 'all') {
    //         fullUrl = fullUrl + `&filter=` + filter
    //     }
    //     if (printType !== 'all') {
    //         fullUrl = fullUrl + `&printType=` + printType
    //     }
    //     if (language !== 'all') {
    //         fullUrl = fullUrl + `&langRestrict=` + language
    //     }
    //     return fullUrl
    // }

    // sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue) {
    //     /**
    //      * Send the AJAX request using Google API, and update the state.
    //      * @param {string} query - The user input query.
    //      * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
    //      */
    //     axios.get(this.makeQuery(query, newStartIndex, maxResults, type, filter, printType, language))
    //         .then((res) => {
    //             // console.log(res)
    //             console.log('displayDisabledValue:', displayDisabledValue)
    //             console.log('previousButtonDisabledValue:', previousButtonDisabledValue)
    //             return res
    //         })
    //         .catch((err) => { console.log(err); })
    // }

    // getBooks(query, startIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue, buttonType) {
    //     /**
    //      * Redirect the API call depending the buttonType, and call the sendRequest function.
    //      * @param {string} query - The user input query.
    //      * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
    //      */
    //     if (buttonType === "next") {
    //         let newStartIndex = parseInt(startIndex) + parseInt(maxResults);
    //         return sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue);

    //     }
    //     else if (buttonType === "prev") {
    //         let newStartIndex = parseInt(startIndex) - parseInt(maxResults);
    //         this.sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue);

    //     }
    //     else {
    //         let newStartIndex = 0 + parseInt(maxResults);
    //         this.sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue);
    //     }
    // }




    // clearForm() {
    //     /**
    //      * Clear the form.
    //      */
    //     this.setState({
    //         query: '',
    //         startIndex: 0
    //     });
    // }

    // handleFormChange(event) {
    //     /**
    //      * Update the state for every input in the form field.
    //      * @param {object} event - Carry the name and the value in the form field.
    //      */
    //     let obj = this.state; // can't do this.state[event.target.name]
    //     obj[event.target.name] = event.target.value;
    //     this.setState(obj); // update the state with the whole new state obj
    // }

    // handleSearchFormSubmit(event) {
    //     /**
    //      * Submit the query to the getBook() function.
    //      * @param {object} event
    //      */
    //     event.preventDefault();
    //     let query;
    //     query = this.state.query;
    //     this.getBooks(query);
    // }

    // handleToggleChange(event) {
    //     /**
    //      * Update the value of the event target state.
    //      * @param {object} event - Carry the name and the value from the toggle button.
    //      */
    //     event.preventDefault();
    //     let obj = this.state;
    //     obj[event.target.name] = String(event.target.value);
    //     this.setState(obj);
    // }

    // handleSelectLanguageChange(eventKey) {
    //     /**
    //      * Update the value of the language state.
    //      * @param {object} eventKey - Value of the dropdown button.
    //      */
    //     this.setState({
    //         language: eventKey
    //     });
    // }
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

    handleOnSuccess = (value) => {
        /**
         * Update the value of the language state.
         * @param {object} eventKey - Value of the dropdown button.
         */
        console.log(this.state)
        this.setState({ values: value })

    }

    render() {
        console.log('this.props.form.status22', this.props.form)
        return (
            <Fragment>

                {/* SEARCH INPUT */}
                <Jumbotron style={{ backgroundColor: 'transparent' }}>
                    <h1 style={{ color: 'white' }} className='container'>  {this.state.title} </h1>
                    <MyEnhancedForm
                        onSuccess={this.handleOnSuccess}
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



                {/* SEARCH RESULTS BLOCK */}
                {this.state.values ?
                    < SearchResultsBlock values={this.state.values} />
                    : null}





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
