/*
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Page1 } from '../pages/Page1'
import { Page2 } from '../pages/Page2'

export class Routing extends Component {
    render = () => (
        <BrowserRouter>
            {this.props.children}
            <Switch>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/" component={() => (<Redirect to="/page1" />)} />
            </Switch>
        </BrowserRouter>
    );
}
*/