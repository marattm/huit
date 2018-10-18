import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'


import About from './components/Common/About';
import NavBar from './components/Common/NavBar';
import Search from './components/Search/Search';


class App extends Component {
    constructor() {
        super();
        this.state = {
        };
    };

    render() {
        return (
            <div id='up'>

                <NavBar />

                <div className="container"> 
                    <div> <br />
                        <Switch>

                            <Route 
                                exact path='/' render={() => (
                                    <Search/>
                                )} 
                            />

                            <Route
                                exact path='/about' render={() => (
                                    <About />
                                )}
                            />
                            
                        </Switch>
                    </div>
                </div>
            </div>
        )
    };
};

export default App;