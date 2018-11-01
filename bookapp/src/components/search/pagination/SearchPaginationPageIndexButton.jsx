import React, { Component } from 'react';
import { Pager, Popover, OverlayTrigger } from 'react-bootstrap';


class SearchPaginationPageIndexButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    popoverHoverFocus = (
        <Popover id="popover-trigger-hover-focus">
            {!this.props.bot ? "Click to go down." : "Click to go up."}
        </Popover>
    );

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
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="top"
                        overlay={this.popoverHoverFocus}
                    >
                        < Pager.Item href="#bottom">
                            Results up to {this.props.startIndex}
                        </Pager.Item >
                    </OverlayTrigger>
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
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={this.popoverHoverFocus}
                    >
                        < Pager.Item id='bottom' href="#top">
                            Results up to {this.props.startIndex}
                        </Pager.Item >
                    </OverlayTrigger>
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
