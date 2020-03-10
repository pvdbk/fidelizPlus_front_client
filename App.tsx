import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { toStyleSheet } from './common/utils';
import { app as config } from './common/config';
import { DimsType, OrientationType, ComponentType } from './common/types';
import { OrientationCtxt, ActionCtxt } from './common/contexts';
import pages from './common/pagesInfos';
import Menu from './components/menu/Menu';
import Header from './components/common/Header';

const routesProps
    : { path: string, component: ComponentType }[]
    = [
        { path: '/menu', component: Menu },
        ...pages.map(({ name, component }) => ({ path: '/' + name, component })),
        { path: '/', component: () => <Redirect to={'/menu'} /> }
    ];

export const internalDims
    : (orientation: OrientationType) => DimsType
    = orientation => {
        const { width, height } = Dimensions.get('window');
        const headerRate = config[orientation].headerRate;
        return {
            width,
            height: Math.floor(height * (1 - headerRate / 100))
        };
    };

export default class extends Component<{}> {
    state
        : { orientation: OrientationType }
        = { orientation: config.initialOrientation };
    setOrientation
        : (orientation: OrientationType) => void
        = orientation => this.setState({ orientation })
    /*
    componentDidMount = () => {
        Orientation.getOrientation((err, orientation) => {
            if(err)
                throw err;
            else
                return this.setOrientation(orientation);
        });
        Orientation.addOrientationListener(this.setOrientation);
    }
    componentWillUnmount = () => Orientation.removeOrientationListener(this.setOrientation)
    */
    render = () =>
        <ActionCtxt.Provider value={
            () => this.setOrientation(this.state.orientation === 'PORTRAIT' ? 'LANDSCAPE' : 'PORTRAIT')
        }>
            <OrientationCtxt.Provider value={this.state.orientation}>
                <BrowserRouter>
                    <View style={toStyleSheet(config.style)}>
                        <Header />
                        <View style={toStyleSheet(internalDims(this.state.orientation))}>
                            <Switch>{
                                routesProps.map((routeProps, i) => <Route key={i} {...routeProps}/>)
                            }</Switch>
                        </View>
                    </View>
                </BrowserRouter>
            </OrientationCtxt.Provider>
        </ActionCtxt.Provider>;
}
