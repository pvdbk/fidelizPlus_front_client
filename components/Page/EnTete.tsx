import React from 'react';
import { View } from 'react-native';
import { toStyleSheet, screenWidth, lineStyleSheet, picture } from '../../common/utils';
import { OrientationCtxt } from '../../common/contexts';
import { OrientationType } from '../../common/types';
import { page as config } from '../../common/config';

const dim = Math.floor(screenWidth() / 15);
const paddindRate = config;

export default () =>
<OrientationCtxt.Consumer>
{
    (orientation: OrientationType) =>    <View style={lineStyleSheet({ padding: 10, alignSelf: 'stretch' })}>
    <View style={toStyleSheet({ flex: 1, alignItems: 'center' })}>{
        picture('logo', toStyleSheet({ width: dim, height: dim }))
    }</View>
</View>
}
</OrientationCtxt.Consumer>;

