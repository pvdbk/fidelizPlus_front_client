import React from 'react';
import { View } from 'react-native';
import { toStyleSheet } from '../../common/utils';

export default ({
    color: borderBottomColor = '#999',
    width: borderBottomWidth = 2,
    horizMargin = 0,
    vertMargin = 10
}: {
    color?: string,
    width?: number,
    horizMargin?: number,
    vertMargin?: number,
}) => <View style={toStyleSheet({
    borderBottomColor,
    borderBottomWidth,
    marginTop : vertMargin,
    marginBottom : vertMargin,
    marginLeft : horizMargin,
    marginRight : horizMargin,
    alignSelf: 'stretch'
})} />
