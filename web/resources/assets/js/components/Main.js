import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dashboard    from './dashboard';
import Sidebar      from './Sidebar';
import NavTop       from './NavTop';
import Footer       from './Footer';
 
/* An example React component */
class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel">    
                    <NavTop />
                    <div className="content">
                        <Dashboard />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
 
export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}