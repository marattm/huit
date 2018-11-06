import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Jumbotron, Collapse } from 'react-bootstrap';
import { withFormik } from 'formik';

import SearchForm from "./SearchForm.withFormik";
import SearchPagination from '../pagination/SearchPagination';
import SearchResults from './SearchResults.withFormik';


import { validationSearch } from "../../../services/validation.schemas.service";


const formikEnhancer = withFormik({

    // import validation schema
    validationSchema: validationSearch,

    mapPropsToValues: () => ({
        query: '',
        maxResults: '10',
        type: 'relevance',
        filter: 'all',
        printType: 'all',
        language: 'all',
        buttonType: '',
        startIndex: 0
    }),

    handleSubmit: (values, { resetForm, props, setSubmitting }) => {
        getBooks(
            values.query,
            values.startIndex,
            values.maxResults,
            values.type,
            values.filter,
            values.printType,
            values.language,
            values.buttonType)
            .then((res) => {
                props.onSuccess({
                    res,
                    queryData: {
                        query: values.query,
                        startIndex: values.startIndex,
                        maxResults: values.maxResults,
                        type: values.type,
                        filter: values.filter,
                        printType: values.printType,
                        language: values.language
                    }
                })
            })
            .catch((err) => { console.log(err) })
        resetForm()
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
            return {
                res: res,
                displayDisabledValue: displayDisabledValue,
                previousButtonDisabledValue: previousButtonDisabledValue
            }
        })
        .catch((err) => { console.log(err) })
}

const getBooks = (query, startIndex, maxResults, type, filter, printType, language, buttonType) => {
    /**
     * Redirect the API call depending the buttonType, and call the sendRequest function.
     * @param {string} query - The user input query.
     * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
     */
    if (buttonType === "next") {
        return sendRequest(query, startIndex, maxResults, type, filter, printType, language, true, false);
    }
    else if (buttonType === "prev") {
        var newPreviousButtonDisabledValue = false
        if (startIndex === 0) {
            newPreviousButtonDisabledValue = true
        }

        return sendRequest(query, startIndex, maxResults, type, filter, printType, language, true, newPreviousButtonDisabledValue);
    }
    else {
        let newStartIndex = 0;
        return sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, true, true);
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
            displayDisabled: false,
            previousButtonDisabled: true,
            searchMode: false
        }
        this.handlePreviousNext = this.handlePreviousNext.bind(this);
    }




    handleNextButtonBehavior() {
        let newStartIndex2 = this.state.startIndex + parseInt(this.state.maxResults);
        getBooks(this.state.query, newStartIndex2, this.state.maxResults, this.state.type, this.state.filter, this.state.printType, this.state.language, "next")
            .then((res) => {
                this.setState({
                    values: res.res.data.items
                })
            })
            .catch((err) => { console.log(err); });
        this.setState({
            startIndex: newStartIndex2
        });
    }

    handlePreviousButtonBehavior() {
        let newStartIndex = Math.abs(this.state.startIndex - parseInt(this.state.maxResults));
        getBooks(this.state.query, newStartIndex, this.state.maxResults, this.state.type, this.state.filter, this.state.printType, this.state.language, "prev")
            .then((res) => {
                console.log('dads', res);
                this.setState({
                    values: res.res.data.items
                })
            })
            .catch((err) => { console.log(err); });
        console.log('apres next', this.state.values)
        this.setState({
            startIndex: newStartIndex
        });
    }

    handlePreviousNext(event) {
        /**
         * Trigger the getBook() for the previous and next button case.
         * @param {object} event - Carry the target name, either prev or next.
         */
        if (event.target.name === "next") {
            this.handleNextButtonBehavior()
        }
        if (event.target.name === "prev") {
            this.handlePreviousButtonBehavior()
        }
    }


    handleOnSuccess = (value) => {
        /**
         * Update the general state.
         * @param {object} eventKey - Value of the dropdown button.
         */
        this.setState({
            values: value.res.res.data.items,
            displayDisabled: value.res.displayDisabledValue,
            previousButtonDisabled: value.res.displayDisabledValue,

            query: value.queryData.query,
            startIndex: value.queryData.startIndex,
            maxResults: value.queryData.maxResults,
            type: value.queryData.type,
            filter: value.queryData.filter,
            printType: value.queryData.printType,
            language: value.queryData.language,
            searchMode: true
        })
        console.log('apres', this.state)
    }

    render() {
        console.log('this.props.form.status', this.props.form)
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
                {this.state.values ?
                    <SearchPagination
                        bot={false}
                        displayDisabled={this.state.displayDisabled}
                        startIndex={this.state.startIndex}
                        previousButtonDisabled={this.state.previousButtonDisabled}
                        query={this.state.query}
                        maxResults={this.state.maxResults}
                        handlePreviousNext={this.handlePreviousNext}
                    />
                    : null}




                {/* SEARCH RESULTS BLOCK */}
                {this.state.searchMode ?
                    < SearchResults
                        books={this.state.values}
                    />
                    : null}





                {/* PAGINATION BOTTOM */}
                {this.state.values ?
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
                    : null}

            </Fragment >
        )
    }
}


export default Search;
