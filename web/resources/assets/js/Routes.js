import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import Dashboard from './screens/Dashboard';
import NotFound  from './screens/NotFound';
import Exams     from './screens/Exams';
import Empty     from './screens/Empty';
import LoginForm from './screens/LoginForm';
import requireAuth from './utils/requireAuth';

class Routes extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact={true} path="/" component={Dashboard} /> */}
                <Route path="/dashboard" component={requireAuth(Dashboard)} />
                <Route path="/exams" component={requireAuth(Exams)} />
                <Route path="/questions" component={requireAuth(Empty)} />
                <Route path="/subjects" component={requireAuth(Empty)} />
                <Route path="/formatting" component={requireAuth(Empty)} />
                <Route path="/entities" component={requireAuth(Empty)} />

                {/* 404 not found */}
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;