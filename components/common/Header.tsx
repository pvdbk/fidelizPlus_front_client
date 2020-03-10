import React from 'react';
import { View, Dimensions } from 'react-native';
import { toStyleSheet, lineStyleSheet, picture } from '../../common/utils';
import { OrientationCtxt } from '../../common/contexts';
import { OrientationType, IOrientedAppCfg } from '../../common/types';
import { app as config } from '../../common/config';
import { internalDims as containerDims } from '../../App';

interface IPrivateDims {
    height: number,
    dimLogo: number
};

const getDims
    : (orientation : OrientationType) => IPrivateDims
    = orientation => {
        const { logoRate }: IOrientedAppCfg = config[orientation];
        const height: number = Dimensions.get('window').height - containerDims(orientation).height;
        return { height, dimLogo: (logoRate * height) / 100 };
    };

export default (_: {}) =>
    <OrientationCtxt.Consumer>{
        (orientation: OrientationType) => (({ height, dimLogo } : IPrivateDims) =>
            <View style={lineStyleSheet({ height, alignSelf: 'stretch' })}>
                <View style={toStyleSheet({ flex: 1, alignItems: 'center' })}>{
                    picture('logo', toStyleSheet({ width: dimLogo, height: dimLogo }))
                }</View>
            </View>)(getDims(orientation))
    }</OrientationCtxt.Consumer>;

/*
    <ActionCtxt.Consumer>{(orientation : () => void) =>
        <TouchableHighlight onPress={() => console.log('!')}>
            <View style={toStyleSheet({
                margin: 10,
                height: 20,
                width: 20,
                backgroundColor: '#000'
            })}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={action}>
            <View style={toStyleSheet({
                margin: 10,
                height: 20,
                width: 20,
                backgroundColor: '#000'
            })}></View>
        </TouchableHighlight>
*/