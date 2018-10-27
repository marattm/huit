import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';


class SearchPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.render();
    }

    displayPageIndexButtonTop() {
        /**
         * Display the page index button at the top of the result page. This button also serve as an anchor and as a shortcut to get to the bottom of the page.
         */
        if (this.props.displayDisabled) {
            if (this.props.startIndex === 0) {
                return (
                    < Pager.Item href="#bottom">
                        Results from {this.props.startIndex}
                    </Pager.Item >
                )
            } else {
                return (
                    < Pager.Item href="#bottom">
                        Results up to {this.props.startIndex}
                    </Pager.Item >
                )
            }
        }
    }

    displayPageIndexButtonBottom() {
        /**
         * Display the page index result button at the bottom of the result page. This button also serve as an anchor and as a shortcut to get to the top of the page.
         */
        if (this.props.displayDisabled) {
            if (this.props.startIndex === 0) {
                return (
                    < Pager.Item id='bottom' href="#top">
                        Results from {this.props.startIndex}
                    </Pager.Item >
                )
            } else {
                return (
                    < Pager.Item id='bottom' href="#top">
                        Results up to {this.props.startIndex}
                    </Pager.Item >
                )
            }
        }
    }

    displayPreviousButton() {
        /**
         * Disable or enable the previous button.
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

    displayNextButton() {
        /**
         * Disable or enable the previous button.
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
            <div>
                <Pager>
                    {this.displayPreviousButton()}
                    {this.props.bot ? this.displayPageIndexButtonBottom() : this.displayPageIndexButtonTop()}
                    {this.displayNextButton()}
                </Pager>
            </div>
        )
    }
}

export default SearchPagination;
