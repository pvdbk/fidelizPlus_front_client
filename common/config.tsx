import { IAppCfg, IMenuCfg, IBoutonMenuCfg } from './types';

export const app
    : IAppCfg
    = {
        PORTRAIT: {
            headerRate: 10,
            logoRate: 70
        },
        LANDSCAPE: {
            headerRate: 12,
            logoRate: 75
        },
        style: {
            backgroundColor: '#f0f',
            justifyContent: 'center',
            alignItems: 'center'
        },
        initialOrientation: 'LANDSCAPE',
    };

export const menu
    : IMenuCfg
    = {
        PORTRAIT: {
            nbColumns: 2,
            borderHorizontalRate: 5,
            borderVerticalRate: 7,
            interHorizontalRate: 5,
            interVerticalRate: 7
        },
        LANDSCAPE: {
            nbColumns: 3,
            borderHorizontalRate: 6.5,
            borderVerticalRate: 4.5,
            interHorizontalRate: 6.5,
            interVerticalRate: 4.5
        },
        style: { backgroundColor: '#ff0' }
    };

export const boutonMenu
    : IBoutonMenuCfg
    = {
        PORTRAIT: {
            paddingHorizontalRate: 5,
            paddingVerticalRate: 5,
            imageRate: 50,
            fontSizeRate: 10
        },
        LANDSCAPE: {
            paddingHorizontalRate: 5,
            paddingVerticalRate: 5,
            imageRate: 50,
            fontSizeRate: 10
        },
        style: {
            backgroundColor: '#fff',
            borderStyle: 'solid',
            borderWidth: 1
        }
    };
