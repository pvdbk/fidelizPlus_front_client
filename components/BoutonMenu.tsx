import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { EventHandler, toStyle } from '../common/utils';

const buttonStyle = toStyle({
    backgroundColor : '#0ff',
    width: 200,
    margin: 0,
    padding: 30,
    borderStyle: 'dashed',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
});

export default class extends Component<{ title: string, onPress: EventHandler, imageSrc: string }> {
    render() {
        let { title, onPress, imageSrc } = this.props;
        return <TouchableHighlight onPress={onPress}><View style={buttonStyle}>
            <Image style={{width: 50, height: 50}} source={require('../' + imageSrc)} />
            <Text>{title}</Text>
        </View></TouchableHighlight>;
    }
};