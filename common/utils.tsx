import { StyleSheet, Dimensions } from 'react-native';
import { AnyObj } from './types';

export const screenWidth : number = Math.round(Dimensions.get('window').width);
export const toStyleSheet : (style: AnyObj) => AnyObj = (style: AnyObj) => StyleSheet.create({ style: { ...style }}).style;
