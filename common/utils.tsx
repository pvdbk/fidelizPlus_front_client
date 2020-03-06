import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { Dico, AnyObj, ComponentType, PermissiveComponentType } from './types';

export const screenWidth
    : () => number
    = () => Math.round(Dimensions.get('window').width);

export const screenHeight
    : () => number
    = () => Math.round(Dimensions.get('window').height);

export const toStyleSheet
    : (style?: AnyObj) => AnyObj
    = (style = {}) => StyleSheet.create({ style }).style;

export const lineStyleSheet
    : (style?: AnyObj) => AnyObj
    = (style = {}) => toStyleSheet({ flexDirection: 'row', alignItems: 'center', ...style });

export const propsMap
    : (Comp: PermissiveComponentType, listProps: AnyObj[]) => JSX.Element[]
    = (Comp, listProps) => listProps.map((props, i) => <Comp key={i} {...props} />);

export const childrenMap
    : (Comp: ComponentType, listChildren: (JSX.Element | JSX.Element[])[], props?: AnyObj) => JSX.Element[]
    = (Comp, listChildren, props) => listChildren.map((children, i) => <Comp key={i} {...props}>{children}</Comp>);

export const picture
    : (name : string, style?: AnyObj ) => JSX.Element
    = (name, style = {}) => <Image
        style={style}
        source={require('../pictures/' + name + '.png')}
    />;
