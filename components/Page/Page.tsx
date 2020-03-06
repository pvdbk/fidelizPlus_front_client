import React, { Component } from 'react';
import { View } from 'react-native';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { toStyleSheet, propsMap } from '../../common/utils';
import { page as config } from '../../common/config';
import { OrientationType, ComponentType } from '../../common/types';
import { OrientationCtxt } from '../../common/contexts';
import pages from '../../common/pagesInfos';
import Menu from '../menu/Menu';
import EnTete from './EnTete';

const routes
    : { path: string, component: ComponentType }[]
    = [
        { path: '/menu', component: Menu },
        ...pages.map(({ name, component }) => ({ path: '/' + name, component })),
        { path: '/', component: () => <Redirect to={'/menu'} /> }
    ];
const switchElt
    : JSX.Element
    = <Switch>{propsMap(Route, routes)}</Switch>;

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
        <OrientationCtxt.Provider value={this.state.orientation}>
            <BrowserRouter>
                <View style={toStyleSheet(config.style)}>
                    <EnTete />
                    {switchElt}
                </View>
            </BrowserRouter>
        </OrientationCtxt.Provider>
}
