import React, { Component, Fragment } from 'react';
// import axios from 'axios';
import { Collapse } from 'react-bootstrap';



import SearchResults from './SearchResults.withFormik';
import SearchPagination from '../pagination/SearchPagination';






class SearchResultsBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Search books..',
            books: [],
            queryData: {
                query: '',
                type: 'relevance',
                printType: 'all',
                filter: 'all',
                language: 'all',
                maxResults: "10",
            },
            option: 'title',
            startIndex: 0,
            oldStartIndex: 0,
            displayDisabled: false,
            previousButtonDisabled: true,
            nextStateOpen: false
        };
    }



    render() {
        console.log('this.props.form.status', this.props.values)
        return (
            <Fragment>


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
                <SearchResults books={this.props.values} />



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

export default SearchResultsBlock;
