import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'

import Login                    from './Login';
import NavTop                   from '../components/NavTop';
import Sidebar                  from '../components/Sidebar';
import Footer                   from '../components/Footer';
import Routes                   from '../Routes';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                id:         '',
                name:       '',
                email:      '',
                create_at:  '',
                update_at:  ''
            },
            token: ''
        };

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(token, user) {
        this.setState({user: user, token: token})
    }

    render() {

        const { token, user } = this.state

        if (token == '') {
            return (
                <Login onLog={this.onLogin} />
            )
        }

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