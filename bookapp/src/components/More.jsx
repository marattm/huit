import React, { Component } from 'react';


class More extends Component {
    constructor() {
        super();
        this.state = {
            title: 'The Book App',
        };
    };

    render(){
        return(
            <h1>{this.props.totalItems}</h1>
        );
    }
}

{/* <LinkContainer to="/more">
    <Button bookData={this.state.books} bsStyle="link"> More..
                                                </Button>
</LinkContainer> */}

export default More;