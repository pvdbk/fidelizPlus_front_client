import React, { Component } from 'react';
import { StyleSheet, NativeSyntheticEvent, NativeTouchEvent, View } from 'react-native';

export type Dico<T> = { [key : string] : T };
export type AnyObj = Dico<any>;
export type EventHandler = (event : NativeSyntheticEvent<NativeTouchEvent>) => void;

export const toStyle = (style : AnyObj) => style ? StyleSheet.create({ style }).style : {};

export const updateState = (
    component : Component,
    key: string,
    isNumber: boolean
) => (
    event: NativeSyntheticEvent<NativeTouchEvent>
) => component.setState({
    [key] : event.target[isNumber ? 'valueOf' : 'toString']()
});

export const Grid = ({ style = null, nbColumns, elements } : {
    style?: AnyObj,
    nbColumns: number,
    elements : JSX.Element[]
}) => {
    const rowDirection = toStyle({ flexDirection:'row', justifyContent: 'center' });
    let rows = [];
    elements.forEach((element, i) => rows.push(i%nbColumns ? [...rows.pop(), element] : [element]));
    return <View style={toStyle(style)}>{
        rows.map((row, i) => <View key={i} style={rowDirection}>{row}</View>)
    }</View>;
};
