import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { toStyle } from '../common/utils';
import { boutonMenu as config } from '../common/config';
import { IBoutonMenu } from '../common/interfaces';

const margin = config.style.margin;

const buttonStyle = toStyle({
    ...config.style,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
});

export default ({ title, imageSrc, path } : IBoutonMenu) =>
    <View style={toStyle((margin || margin === 0) ? { margin } : {})}>
        <Link to={path}>
            <TouchableHighlight>
                <View style={buttonStyle}>
                    <Image style={toStyle({width: 50, height: 50})} source={require('../' + imageSrc)} />
                    <Text>{title}</Text>
                </View>
            </TouchableHighlight>
        </Link>
    </View>;