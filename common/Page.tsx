import Orientation from 'react-native-orientation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { toStyleSheet, screenWidth } from './utils';
import { page as config } from './config';
import { OrientationCtxt } from './contexts';
import pages from './pagesInfos';
import Menu from '../components/menu/Menu';

export default class extends Component<{}> {
    state : { orientation : Orientation.orientation } = { orientation: 'PORTRAIT' };
    /*
    setOrientation = (orientation : Orientation.orientation) => this.setState({ orientation })
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
                    <Text style={toStyleSheet({
                        fontSize: Math.floor(config.title.size * screenWidth / 10),
                        ...config.title.style
                    })}>
                        Hello !
                    </Text>
                    <Switch>
                        {
                            [
                                { path: '/menu', Comp: Menu },
                                ...pages
                            ].map(({ path, Comp: component }, i) =>
                                <Route key={i} {...{ path, component }} />
                            )
                        }
                        <Route key={pages.length + 1} path="/" component={() => <Redirect to={'/menu'} />} />
                    </Switch>
                </View>
            </BrowserRouter>
        </OrientationCtxt.Provider>
}
