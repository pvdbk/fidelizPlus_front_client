import React from 'react';
import { View } from 'react-native';
import { toStyleSheet, screenWidth, lineStyleSheet, picture } from '../../common/utils';

const dim = Math.floor(screenWidth / 15);

export default () =>
    <View style={lineStyleSheet({ padding: 10, alignSelf: 'stretch' })}>
        <View style={toStyleSheet({ flex: 1, alignItems: 'center' })}>{
            picture('logo', toStyleSheet({ width: dim, height: dim }))
        }</View>
    </View>