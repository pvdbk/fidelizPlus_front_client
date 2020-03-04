import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { toStyle } from '../common/utils';
import { boutonMenu as config } from './config';
import { IBoutonMenu } from '../common/interfaces';

const buttonStyle = toStyle({
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    ...config.style
});

export default class extends Component<IBoutonMenu> {
    render() {
        let { title, imageSrc } = this.props;
        return <TouchableHighlight><View style={buttonStyle}>
            <Image style={{width: 50, height: 50}} source={require('../' + imageSrc)} />
            <Text>{title}</Text>
        </View></TouchableHighlight>;
    }
};