import { Component } from 'react';

export type OrientationType = 'PORTRAIT' | 'LANDSCAPE';

export type Dico<T> = { [key: string]: T };

export type AnyObj = Dico<any>;

export type ComponentType = (typeof Component) | ((props: AnyObj) => JSX.Element);

export type PermissiveComponentType = (typeof Component) | ((props: any) => JSX.Element);

export interface IBoutonMenuProps {
    title: string,
    name: string
};

export interface IPageCfg extends Record<
OrientationType,
{
    enTeteRate: number,
    logoRate: number
} > {
    style: AnyObj,
    initialOrientation: OrientationType
};

export interface IMenuCfg extends Record<
    OrientationType,
    {
        nbColumns: number,
        padding?: number,
    }
> { style?: AnyObj };

export interface IBoutonMenuCfg extends Record<
    OrientationType,
    {
        marginRate: number,
        paddingRate: number,
        imageRate: number,
        fontSize: number,
    }
> { style?: AnyObj };
