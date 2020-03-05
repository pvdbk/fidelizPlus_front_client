import { Component } from 'react';

export type Dico<T> = { [key: string]: T };

export type AnyObj = Dico<any>;

export type ComponentType = (typeof Component) | ((x: AnyObj) => JSX.Element);

export interface IBoutonMenu {
    title: string,
    imageSrc: string,
    path: string
};

export interface ICfgPage {
    style: AnyObj,
    title: { size: number, style?: AnyObj }
};

export interface ICfgMenu { style?: AnyObj, nbColumns: number };

export interface ICfgBoutonMenu {
    marginRate: number,
    paddingRate: number,
    imageRate: number,
    fontSize: number,
    style?: AnyObj
};
