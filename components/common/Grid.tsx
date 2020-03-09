import React from 'react';
import { View } from 'react-native';
import { AnyObj } from '../../common/types';
import { toStyleSheet, childrenMap, lineStyleSheet } from '../../common/utils';

const getRows
    : (elements: JSX.Element[], nbColumns: number) => JSX.Element[]
    = (elements, nbColumns) => {
        let rows: JSX.Element[][] = [];
        elements.forEach((element, i) =>
            rows.push(i % nbColumns
                ? [...(rows.pop() || []), element]
                : [element]
            ));
        return childrenMap(View, rows, { style: lineStyleSheet({ justifyContent: 'center' }) });
    };

interface IGridProps {
    style?: AnyObj,
    nbColumns: number,
    elements: JSX.Element[]
};

export default (
    {
        style,
        nbColumns,
        elements
    }: IGridProps
) => <View style={toStyleSheet({ ...style })}>{getRows(elements, nbColumns)}</View>;
