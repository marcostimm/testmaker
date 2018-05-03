import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import setAuthorizationToken from './utils/setAuthorizationToken';
import rootReducer from './rootReducer';
import { setCurrentUser } from './actions/authActions';
import jwtDecode from 'jwt-decode';
import {
    BrowserRouter,
    Router
  } from 'react-router-dom'


import LoginForm                from './screens/LoginForm';
import NavTop                   from './components/NavTop';
import Sidebar                  from './components/Sidebar';
import Footer                   from './components/Footer';
import Routes                   from './Routes';

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginForm} />
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
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
  

// class Main extends Component {

//     render() {

//         const { token, user } = this.state

//         if (token == '') {
//             return (
//                 <LoginForm onLog={this.onLogin} />
//             )
//         }

//         return (
//             <BrowserRouter>
//                 <div className="wrapper">
//                     <Sidebar />
//                     <div className="main-panel">    
//                         <NavTop />
//                         <div className="content">
//                             <Routes />
//                         </div>
//                         <Footer />
//                     </div>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// }
 
// export default Main;

// if (document.getElementById('root')) {
//     ReactDOM.render(<Main />, document.getElementById('root'));
// }