import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'


import About from './components/common/About';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import Search from './components/search/Search';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }



    render() {
        return (
            <div id='top'>
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
                <Footer />
            </div>
        )
    }
}

export default App;