import React, { Component } from 'react';
import axios from 'axios';


class About extends Component {
    constructor() {
        super();
        this.state = {
            healthData: {
                message: 'click on the button',
                status: 'waiting for a message..'
            }
        };
        this.health = this.health.bind(this);
    };

    componentDidMount() {
        this.health();  
    }

    health() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`)
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_GoogleAPIKey}`)
            .then((res) => {
                if (this.state.healthData.status === "success") {
                    this.setState({
                        healthData: {
                            message: 'click on the button',
                            status: 'waiting for a message..'
                        }
                    })
                } else {
                    this.setState({
                        healthData: {
                            message: res.data.totalItems,
                            status: 'OK Google API working..'
                        }
                    })
                }
            })
            .catch((err) => { console.log(err); });
    };

    render() {
        return (
            <div>
                <button 
                    className="btn btn-success btn-lg"
                    onClick={(event) => this.health(event)}
                >
                    Check Health!
                </button>
                <br /><br />
                <p>{this.state.healthData.status}</p>
                <p>{this.state.healthData.message}</p>
            </div>
        )
    };
}




export default About;