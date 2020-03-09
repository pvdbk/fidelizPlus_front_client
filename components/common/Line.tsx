import React from 'react';
import { View } from 'react-native';
import { toStyleSheet } from '../../common/utils';

interface ILineProps {
    color?: string,
    width?: number,
    marginHorizontal?: number,
    marginVertical?: number,
};

export default (
    {
        color: borderBottomColor = '#999',
        width: borderBottomWidth = 2,
        marginHorizontal = 0,
        marginVertical = 10
    }: ILineProps
) => <View style={toStyleSheet({
    borderBottomColor,
    borderBottomWidth,
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    alignSelf: 'stretch'
})} />
