import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'


import About from './components/common/About';
import NavBar from './components/common/NavBar';
import Search from './components/search/Search';


class App extends Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {
        return (
            <div id='top'>

                <NavBar />

                <div className="container"> 
                    <br />
                    <Switch>
                        <Route 
                            exact path='/'
                            render={() => (<Search/>)} 
                        />
                        <Route
                            exact path='/about'
                            render={() => (<About />)}
                        />
                    </Switch>
                </div>
            </div>
        )
    };
};

export default App;