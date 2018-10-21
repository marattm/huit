import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';


class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount() {
        this.render();
    };

    displayIndexTop() {
        /**
         * Display the paging result button at the top of the result page.
         */
        if (this.props.disabled) {
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

    displayIndexBot() {
        /**
         * Display the paging result button at the bottom of the result page.
         */
        if (this.props.disabled) {
            if (this.props.startIndex === 0) {
                return (
                    < Pager.Item id='bottom' href="#up">
                        Results from {this.props.startIndex}
                    </Pager.Item >
                )
            } else {
                return (
                    < Pager.Item id='bottom' href="#up">
                        Results up to {this.props.startIndex}
                    </Pager.Item >
                )
            }
        }
    }

    dynamicPreviousButton() {
        /**
         * Disable or enable the previous button.
         */
        if (this.props.disabled) {
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

    dynamicNextButton() {
        /**
         * Disable or enable the previous button.
         */
        if (this.props.disabled) {
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
                    {this.dynamicPreviousButton()}
                    {this.props.bot ? this.displayIndexBot() : this.displayIndexTop()}
                    {this.dynamicNextButton()}
                </Pager>
            </div>
        )
    };
}

export default Pagination;
