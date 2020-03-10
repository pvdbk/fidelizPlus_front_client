import { Component } from 'react';

export type OrientationType = 'PORTRAIT' | 'LANDSCAPE';

export type Dico<T> = { [key: string]: T };

export type AnyObj = Dico<any>;

export type ComponentType = (typeof Component) | ((props: AnyObj) => JSX.Element);

export type DimsType = {
    width: number,
    height: number
};

export type PaddingType = {
    paddingVertical: number,
    paddingHorizontal: number
};

export type MarginType = {
    marginVertical: number,
    marginHorizontal: number
};

export type BoutonMenuPropsType = {
    title: string,
    name: string,
    marginHorizontal: number,
    marginVertical: number,
};


export interface IOrientedAppCfg {
    headerRate: number,
    logoRate: number
};

export interface IOrientedMenuCfg {
    nbColumns: number,
    borderHorizontalRate?: number,
    borderVerticalRate?: number,
    interHorizontalRate?: number,
    interVerticalRate?: number
};

export interface IOrientedBoutonMenuCfg {
    paddingHorizontalRate?: number,
    paddingVerticalRate?: number,
    imageRate: number,
    fontSizeRate: number,
}

export interface IAppCfg extends Record<OrientationType, IOrientedAppCfg> {
    style: AnyObj,
    initialOrientation: OrientationType
};

export interface IMenuCfg extends Record<OrientationType, IOrientedMenuCfg> { style?: AnyObj };

export interface IBoutonMenuCfg extends Record<OrientationType, IOrientedBoutonMenuCfg> { style?: AnyObj };
