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
            },
            responseData: {
                status: 'click on the button',
                message: 'waiting for a message..'
            }
        };
        this.checkGoogleAPIHealth = this.checkGoogleAPIHealth.bind(this);
        this.checkBackendAPI = this.checkBackendAPI.bind(this);
    }

    componentDidMount() {
        this.checkGoogleAPIHealth();
        this.checkBackendAPI();
        axios.get(window.location.origin + '/api/v0/health')
            .then(res => {
                console.log(res);
            })
    }

    checkGoogleAPIHealth() {
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

    checkBackendAPI() {
        axios.get(window.location.origin + `api/v0/health`)
            .then((res) => {
                console.log(res);
                if (this.state.responseData.status === 200) {
                    this.setState({
                        responseData: {
                            status: 'click on the button',
                            message: 'waiting for the response..'
                        }
                    })
                } else {
                    this.setState({
                        responseData: {
                            message: res.data,
                            status: res.status
                        }
                    })
                }
            })
            .catch((err) => { console.log(err); });
    }


    render() {
        return (
            <div className='container'>
                <Button
                    className="btn btn-success btn-lg"
                    onClick={(event) => this.checkGoogleAPIHealth(event)}

                >
                    Check Google API Health!
                </Button>
                <br /><br /> <hr />
                <p style={{ color: 'white' }}> <strong> Status Code: </strong><strong><em>{this.state.healthData.status}</em></strong></p>
                <p style={{ color: 'white' }}><strong>Total Item received: </strong> <strong><em>{this.state.healthData.message}</em></strong></p>

                <br />

                <Button
                    className="btn btn-success btn-lg"
                    onClick={axios.get(window.location.origin + `api/v0/health`)
                        .then((res) => {
                            console.log(res);
                            if (this.state.responseData.status === 200) {
                                this.setState({
                                    responseData: {
                                        status: 'click on the button',
                                        message: 'waiting for the response..'
                                    }
                                })
                            } else {
                                this.setState({
                                    responseData: {
                                        message: res.data,
                                        status: res.status
                                    }
                                })
                            }
                        })
                        .catch((err) => { console.log(err); })}

                >
                    Check Backend Service Health!
                </Button>
                <br /><br /> <hr />
                <p style={{ color: 'white' }}> <strong> Status Code: </strong><strong><em>{this.state.responseData.status}</em></strong></p>
                <p style={{ color: 'white' }}><strong>Message: </strong> <strong><em>{this.state.responseData.message}</em></strong></p>

            </div>
        )
    }
}


export default About;

