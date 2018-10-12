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

export default More;