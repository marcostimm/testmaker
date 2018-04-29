import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'

import NavTop                   from '../components/NavTop';
import Sidebar                  from '../components/Sidebar';
import Footer                   from '../components/Footer';
import Routes                   from '../Routes';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main-panel">    
                        <NavTop />
                        <div className="content">
                            <Routes />
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}