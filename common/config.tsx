import { ICfgPage, ICfgMenu, ICfgBoutonMenu } from './types';

export const page: ICfgPage = {
    style: {
        backgroundColor: '#f0f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: { size: 1 }
};

export const menu: ICfgMenu = {
    style: {
        backgroundColor: '#ff0',
        padding: 5
    },
    nbColumns: 2,
};

export const boutonMenu: ICfgBoutonMenu = {
    marginRate: 5,
    paddingRate: 5,
    imageRate: 50,
    fontSize: 1,
    style: {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1
    }
};
