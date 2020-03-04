import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BoutonMenu from './BoutonMenu';
import { toStyle } from '../common/utils';
import { menu as config } from './config';
import { IBoutonMenu } from '../common/interfaces';

const [styleMenu, rowDirection ] = [
    config.style,
    { flexDirection:'row', justifyContent: 'center' },
].map(toStyle);

export default (props : { boutons : IBoutonMenu[] }) => {
    return (<View style={styleMenu}>{
        props.boutons
            .reduce(
                (lines, bouton, i) => {
                    let ls = [...lines];
                    let x = i%2;
                    ls.push(x ? [ls.pop(), bouton] : [bouton]);
                    return ls;
                },
                []
            ).map((row, i) => <View key={i} style={rowDirection}>{
                row.map((props, j) => <BoutonMenu key={j} {...props} />)
            }</View>)
    }</View>);
};
