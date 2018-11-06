import React, { Component, Fragment } from 'react';
// import axios from 'axios';
import { Collapse } from 'react-bootstrap';



import SearchResults from './SearchResults.withFormik';
import SearchPagination from '../pagination/SearchPagination';






class SearchResultsBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <Fragment>


                {/* PAGINATION TOP */}
                {/* <SearchPagination
                    bot={false}
                    displayDisabled={this.state.displayDisabled}
                    startIndex={this.state.startIndex}
                    previousButtonDisabled={this.state.previousButtonDisabled}
                    query={this.state.query}
                    maxResults={this.state.maxResults}
                    handlePreviousNext={this.handlePreviousNext}
                /> */}



                {/* RESULT BLOCK */}
                <SearchResults books={this.props.values} />



                {/* PAGINATION BOTTOM */}
                {/* <Collapse in={this.state.displayDisabled}>
                    <SearchPagination
                        bot={true}
                        displayDisabled={this.state.displayDisabled}
                        startIndex={this.state.startIndex}
                        previousButtonDisabled={this.state.previousButtonDisabled}
                        query={this.state.query}
                        maxResults={this.state.maxResults}
                        handlePreviousNext={this.handlePreviousNext}
                    />
                </Collapse> */}

            </Fragment >
        )
    }
}

export default SearchResultsBlock;
