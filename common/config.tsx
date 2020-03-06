import { IPageCfg, IMenuCfg, IBoutonMenuCfg } from './types';

export const page: IPageCfg = {
    PORTRAIT: {
        enTeteRate: 10,
        logoRate: 80
    },
    LANDSCAPE: {
        enTeteRate: 10,
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
    PORTRAIT: { nbColumns: 2 },
    LANDSCAPE: { nbColumns: 3 },
    style: {
        backgroundColor: '#ff0',
        padding: 5
    }
};

export const boutonMenu: IBoutonMenuCfg = {
    PORTRAIT: {
        marginRate: 5,
        paddingRate: 5,
        imageRate: 50,
        fontSize: 1    
    },
    LANDSCAPE: {
        marginRate: 5,
        paddingRate: 5,
        imageRate: 50,
        fontSize: 1    
    },
    style: {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1
    }
};
