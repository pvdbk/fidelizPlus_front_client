import { IPageCfg, IMenuCfg, IBoutonMenuCfg } from './types';

export const page
    : IPageCfg
    = {
        PORTRAIT: {
            enteteRate: 10,
            logoRate: 70
        },
        LANDSCAPE: {
            enteteRate: 13,
            logoRate: 80
        },
        style: {
            backgroundColor: '#f0f',
            justifyContent: 'center',
            alignItems: 'center'
        },
        initialOrientation: 'PORTRAIT',
    };

export const menu
    : IMenuCfg
    = {
        PORTRAIT: {
            nbColumns: 2,
            borderHorizontalRate: 7,
            borderVerticalRate: 5,
            interHorizontalRate: 7,
            interVerticalRate: 5
        },
        LANDSCAPE: {
            nbColumns: 2,
            borderHorizontalRate: 2,
            borderVerticalRate: 2,
            interHorizontalRate: 3,
            interVerticalRate: 2
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
