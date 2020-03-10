import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { AnyObj } from './types';

export const toStyleSheet
    : (style?: AnyObj) => AnyObj
    = (style = {}) => StyleSheet.create({ style }).style;

export const lineStyleSheet
    : (style?: AnyObj) => AnyObj
    = (style = {}) => toStyleSheet({ flexDirection: 'row', alignItems: 'center', ...style });

export const picture
    : (name: string, style?: AnyObj) => JSX.Element
    = (name, style = {}) => <Image
        style={style}
        source={require('../pictures/' + name + '.png')}
    />;
