import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';

import SearchPaginationNextButton from './SearchPaginationNextButton';
import SearchPaginationPageIndexButton from './SearchPaginationPageIndexButton';
import SearchPaginationPreviousButton from './SearchPaginationPreviousButton';


class SearchPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                <Pager>
                    <SearchPaginationPreviousButton
                        displayDisabled={this.props.displayDisabled}
                        startIndex={this.props.startIndex}
                        previousButtonDisabled={this.props.previousButtonDisabled}
                        maxResults={this.props.maxResults}
                        handlePreviousNext={this.props.handlePreviousNext}
                    />
                    <SearchPaginationPageIndexButton
                        bot={this.props.bot}
                        displayDisabled={this.props.displayDisabled}
                        startIndex={this.props.startIndex}
                    />
                    <SearchPaginationNextButton
                        displayDisabled={this.props.displayDisabled}
                        query={this.props.query}
                        maxResults={this.props.maxResults}
                        handlePreviousNext={this.props.handlePreviousNext}
                    />
                </Pager>
            </div>
        )
    }
}

export default SearchPagination;
