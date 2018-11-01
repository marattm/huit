import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'


import About from './components/common/About';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import Search from './components/search/Search';

import { imageURLs } from './utils';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {
        return (
            <div id='top' style={{ backgroundImage: `url(${imageURLs[1]})`, backgroundAttachment: 'fixed', "height": "100%" }}>
                <NavBar />
                <Switch>
                    <Route
                        exact path='/'
                        render={() => (<Search />)}
                    />
                    <Route
                        exact path='/about'
                        render={() => (<About />)}
                    />
                </Switch>
                <hr />
                <Footer />
            </div>
        )
    };
};

export default App;