import React from 'react';
import { View, TouchableHighlight, Dimensions } from 'react-native';
import { toStyleSheet, lineStyleSheet, picture } from '../../common/utils';
import { OrientationCtxt, ActionCtxt } from '../../common/contexts';
import { OrientationType, IOrientedPageCfg } from '../../common/types';
import { page as config } from '../../common/config';
import { internalDims } from '../page/Page';

interface IPrivateDims {
    height: number,
    dimLogo: number
};

const getDims
    : (orientation : OrientationType) => IPrivateDims
    = orientation => {
        const { logoRate }: IOrientedPageCfg = config[orientation];
        const height: number = Dimensions.get('window').height - internalDims(orientation).height;
        return { height, dimLogo: (logoRate * height) / 100 };
    };

export default () =>
    <ActionCtxt.Consumer>{(action : () => void) => <OrientationCtxt.Consumer>
        {
            (orientation: OrientationType) => (({ height, dimLogo } : IPrivateDims) =>
                <View style={lineStyleSheet({ height, alignSelf: 'stretch' })}>
                    <View style={toStyleSheet({ flex: 1, alignItems: 'center' })}>{
                        picture('logo', toStyleSheet({ width: dimLogo, height: dimLogo }))
                    }</View>
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
               </View>)(getDims(orientation))
        }
    </OrientationCtxt.Consumer>}</ActionCtxt.Consumer>;

