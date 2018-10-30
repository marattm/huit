import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


class About extends Component {
    constructor() {
        super();
        this.state = {
            healthData: {
                status: 'click on the button',
                message: 'waiting for a message..'
            }
        };
        this.checkHealth = this.checkHealth.bind(this);
    }

    componentDidMount() {
        this.checkHealth();
    }

    checkHealth() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`)
            .then((res) => {
                if (this.state.healthData.status === 200) {
                    this.setState({
                        healthData: {
                            status: 'click on the button',
                            message: 'waiting for the response..'
                        }
                    })
                } else {
                    this.setState({
                        healthData: {
                            message: res.data.totalItems,
                            status: res.status
                        }
                    })
                }
            })
            .catch((err) => { console.log(err); });
    }

    render() {
        return (
            <div>
                <Button
                    className="btn btn-success btn-lg"
                    onClick={(event) => this.checkHealth(event)}
                >
                    Check Health!
                </Button>
                <br /><br /> <hr />
                <p>{"Status Code: " + this.state.healthData.status}</p>
                <p>{"Total Item received: " + this.state.healthData.message}</p>
            </div>
        )
    }
}


export default About;

