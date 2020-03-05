import { Context, createContext } from 'react';
import { orientation } from 'react-native-orientation';

const _OrientationCtxt : Context<orientation> = ((o : orientation) => createContext(o))('PORTRAIT');
_OrientationCtxt.displayName = 'orientationCtxt';
export const OrientationCtxt = _OrientationCtxt;
