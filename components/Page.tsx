import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { toStyle } from '../common/utils';
import { page as config } from './config';

const [pageStyle, titleStyle] = [
    config.style,
    { fontSize: 100 }
].map(toStyle);

export default (props) => <View style={pageStyle}>
    <Text style={titleStyle}>Hello !</Text>
    {props.children}
</View>;
