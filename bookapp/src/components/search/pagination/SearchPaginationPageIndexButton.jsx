import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';


class SearchPaginationPageIndexButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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

    render() {
        return (
            <React.Fragment>
                {this.props.bot ? this.displayPageIndexButtonBottom() : this.displayPageIndexButtonTop()}
            </React.Fragment>
        )
    }
}

export default SearchPaginationPageIndexButton;
