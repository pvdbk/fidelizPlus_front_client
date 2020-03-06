import { Context, createContext } from 'react';
import { OrientationType } from './types';

const _OrientationCtxt
    : Context<OrientationType>
    = ((o: OrientationType) => createContext(o))('PORTRAIT');
_OrientationCtxt.displayName = 'OrientationCtxt';
export const OrientationCtxt = _OrientationCtxt;
