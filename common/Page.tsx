import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { toStyle } from './utils';
import Menu from '../components/Menu';
import { page as config, pages } from './config';

export default () =>
    <BrowserRouter>
        <View style={toStyle(config.mainStyle)}>
            <Text style={toStyle(config.titleStyle)}>Hello !</Text>
            <Switch>
                {
                    [
                        { path: '/menu', Comp: Menu },
                        ...pages
                    ].map(({ path, Comp : component }, i) =>
                        <Route key={i} {...{ path, component }}/>
                    )
                }
                <Route key={pages.length + 1} path="/" component={() => <Redirect to={'/menu'} />} />
            </Switch>
        </View>
    </BrowserRouter>;
