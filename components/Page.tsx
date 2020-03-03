import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { toStyle } from '../common/utils';

const [pageStyle, titleStyle] = [
    {
        backgroundColor: '#f0f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    { fontSize: 100 }
].map(toStyle);

export default (props) => <View style={pageStyle}>
    <Text style={titleStyle}>Hello !</Text>
    {props.children}
</View>;
