import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            title: 'The Book App',
        };
    };

    render() {
        return(
            <Navbar inverse collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <span>{this.state.title}</span>
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>

                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/about">
                            <NavItem eventKey={2}>About</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

export default NavBar;