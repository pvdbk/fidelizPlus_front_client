import React from 'react';
import { View } from 'react-native';
import { AnyObj } from '../../common/types';
import { toStyleSheet, childrenMap, lineStyleSheet } from '../../common/utils';

const
    getRows: (elements: JSX.Element[], nbColumns: number) => JSX.Element[] =
    (elements, nbColumns) => {
        let rows: JSX.Element[][] = [];
        elements.forEach((element, i) =>
            rows.push(i % nbColumns
                ? [...(rows.pop() || []), element]
                : [element]
            ));
        return childrenMap(View, rows, { style : lineStyleSheet({ justifyContent: 'center' }) });
    };

export default ({
    style,
    nbColumns,
    elements
}: {
    style?: AnyObj,
    nbColumns: number,
    elements: JSX.Element[]
}) => <View style={toStyleSheet({ ...style })}>{getRows(elements, nbColumns)}</View>;
