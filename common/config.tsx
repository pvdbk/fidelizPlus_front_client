import { IPageCfg, IMenuCfg, IBoutonMenuCfg } from './types';

export const page: IPageCfg = {
    PORTRAIT: {
        enteteRate: 10,
        logoRate: 80
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
    initialOrientation: 'LANDSCAPE',
};

export const menu: IMenuCfg = {
    PORTRAIT: {
        nbColumns: 2,
        paddingHorizontalRate: 5,
        paddingVerticalRate: 5
    },
    LANDSCAPE: {
        nbColumns: 3,
        paddingHorizontalRate: 5,
        paddingVerticalRate: 5
    },
    style: { backgroundColor: '#ff0' }
};

export const boutonMenu: IBoutonMenuCfg = {
    PORTRAIT: {
        marginHorizontalRate: 5,
        marginVerticalRate: 5,
        paddingHorizontalRate: 5,
        paddingVerticalRate: 5,
        imageRate: 50,
        fontSizeRate: 10
    },
    LANDSCAPE: {
        marginHorizontalRate: 5,
        marginVerticalRate: 5,
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
