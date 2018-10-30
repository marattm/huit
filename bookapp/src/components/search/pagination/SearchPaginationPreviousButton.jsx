import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';


class SearchPaginationPreviousButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    displayPreviousButton() {
        /**
         * Disable or enable the previous button based on the startIndex &  previousButtonDisabled & displayDisabled variables.
         */
        if (this.props.displayDisabled) {
            if (this.props.startIndex === 0 || this.props.previousButtonDisabled) {
                return (
                    <Pager.Item disabled previous href="#" name="prev" onClick={this.props.handlePreviousNext}>
                        &larr; Prev {this.props.maxResults}
                    </Pager.Item>
                );
            } else {
                return (
                    <Pager.Item previous href="#" name="prev" onClick={this.props.handlePreviousNext}>
                        &larr; Prev {this.props.maxResults}
                    </Pager.Item>
                );
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.displayPreviousButton()}
            </React.Fragment>
        )
    }
}

export default SearchPaginationPreviousButton;
