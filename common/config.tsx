import { Component } from 'react';
import { AnyObj, ComponentType } from './utils';
import ToImplement from '../components/ToImplement';
import { IBoutonMenu } from './interfaces';

export const pages: (IBoutonMenu & { Comp : ComponentType })[]
= [
    {title: '1 Hello world !', imageSrc: 'logo192.png', path: '/ToImplement1', Comp: ToImplement },
    {title: '2 Hello world !', imageSrc: 'logo192.png', path: '/ToImplement2', Comp: ToImplement },
    {title: '3 Hello world !', imageSrc: 'logo192.png', path: '/ToImplement3', Comp: ToImplement },
    {title: '4 Hello world !', imageSrc: 'logo192.png', path: '/ToImplement4', Comp: ToImplement },
    {title: '5 Hello world !', imageSrc: 'logo192.png', path: '/ToImplement5', Comp: ToImplement },
];

export const page: { mainStyle : AnyObj, titleStyle : AnyObj } = {
    mainStyle: {
        backgroundColor: '#f0f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: { fontSize: 100 }
};

export const menu: { style: AnyObj, nbColumns: number } = {
    style: {
        backgroundColor: '#ff0',
        padding: 10
    },
    nbColumns: 2,
};

export const boutonMenu: { style: AnyObj } = {
    style: {
        backgroundColor : '#0ff',
        width: 200,
        padding: 30,
        borderStyle: 'dashed',
        borderWidth: 5,
        margin : 10
    }
};
