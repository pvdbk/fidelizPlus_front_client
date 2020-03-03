import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BoutonMenu from './BoutonMenu';
import { toStyle } from '../common/utils';

const backgroundColor = '#ff0';
const spacing = 10;

const [styleMenu, rowDirection, marged ] = [
    { backgroundColor, padding: spacing },
    { backgroundColor, flexDirection:'row' },
    { margin : spacing }
].map(toStyle);

export default (props : { boutons : BoutonMenu[] }) => {
    return (<View style={styleMenu}><View>{
        props.boutons
            .reduce(
                (lines, bouton, i) => {
                    let ls = [...lines];
                    let x = i%2;
                    let wrapped = <View style={marged} key={x}>{bouton}</View>;
                    ls.push(x ? [ls.pop(), wrapped] : [wrapped]);
                    return ls;
                },
                []
            ).map((row, i) => <View key={i} style={rowDirection}>{row}</View>)
    }</View></View>);
};
