import React from 'react';
import { View } from 'react-native';
import { AnyObj } from '../../common/types';
import { toStyleSheet } from '../../common/utils';

export default ({
    style,
    nbColumns,
    elements
}: {
    style?: AnyObj,
    nbColumns: number,
    elements: JSX.Element[]
}) => {
    const rowDirection: AnyObj = toStyleSheet({ flexDirection: 'row', justifyContent: 'center' });
    let rows: JSX.Element[][] = [];
    elements.forEach((element, i) =>
        rows.push(i % nbColumns
            ? [...(rows.pop() || []), element]
            : [element]
        ));
    return <View style={toStyleSheet({ ...style })}>
        {rows.map(
            (row, i) =>
                <View key={i} style={rowDirection}>{row}</View>
        )}
    </View>;
};
