import { Context, createContext } from 'react';
import { OrientationType } from './types';

const _ActionCtxt
    : Context<() => void>
    = ((a: () => void) => createContext(a))(() => { });
_ActionCtxt.displayName = 'ActionCtxt';
export const ActionCtxt = _ActionCtxt;

const _OrientationCtxt
    : Context<OrientationType>
    = ((o: OrientationType) => createContext(o))('PORTRAIT');
_OrientationCtxt.displayName = 'OrientationCtxt';
export const OrientationCtxt = _OrientationCtxt;
