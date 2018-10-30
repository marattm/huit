import React, { Component, Fragment } from 'react';
import { Pager } from 'react-bootstrap';


class SearchPaginationNextButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    displayNextButton() {
        /**
         * Disable or enable the previous button based on the query & displayDisabled variables.
         */
        if (this.props.displayDisabled) {
            if (this.props.query) {
                return (
                    <Pager.Item next href="#" name="next" onClick={this.props.handlePreviousNext}>
                        Next  {this.props.maxResults} &rarr;
                    </Pager.Item>
                );
            } else {
                return (
                    <Pager.Item disabled next href="#" name="next" onClick={this.props.handlePreviousNext}>
                        Next  {this.props.maxResults} &rarr;
                    </Pager.Item>
                );
            }
        }
    }

    render() {
        return (
            <Fragment>
                {this.displayNextButton()}
            </Fragment>
        )
    }
}

export default SearchPaginationNextButton;
