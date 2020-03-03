import React, { Component } from 'react';
import { StyleSheet, NativeSyntheticEvent, NativeTouchEvent, View, createElement } from 'react-native';

export type Dico<T> = { [key : string] : T };
export type AnyObj = Dico<any>;
export type EventHandler = (event : NativeSyntheticEvent<NativeTouchEvent>) => void;

export const toStyle = style => StyleSheet.create({ style }).style;

export const updateState : (component : Component, key: string, isNumber: boolean) => EventHandler =
    (component, key, isNumber) => event => component.setState({ [key] : event.target[isNumber ? 'valueOf' : 'toString']() });
