import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Dashboard from './screens/Dashboard';
import NotFound  from './screens/NotFound';
import Exams     from './screens/Exams';
import Empry     from './screens/Empty';

class Routes extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact={true} path="/" component={Dashboard} /> */}
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/exams" component={Exams} />
                <Route path="/questions" component={Empry} />
                <Route path="/subjects" component={Empry} />
                <Route path="/formatting" component={Empry} />
                <Route path="/entities" component={Empry} />

                {/* 404 not found */}
                <Route component={NotFound} />
            </Switch>

        );
    }
}
 
export default Routes;