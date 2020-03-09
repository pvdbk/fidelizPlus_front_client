import React from 'react';
import { AnyObj, OrientationType, DimsType, PaddingType, MarginType, IOrientedMenuCfg, BoutonMenuPropsType } from '../../common/types';
import { OrientationCtxt } from '../../common/contexts';
import { menu as config } from '../../common/config';
import pages from '../../common/pagesInfos';
import Grid from '../common/Grid';
import { internalDims as containerDims } from '../page/Page';
import BoutonMenu from './BoutonMenu';

const dims
    : (orientation: OrientationType) => DimsType & PaddingType & MarginType
    = orientation => {
        const { width, height } = containerDims(orientation);
        const {
            borderHorizontalRate,
            borderVerticalRate,
            interHorizontalRate,
            interVerticalRate
        }: IOrientedMenuCfg = config[orientation];
        const marginHorizontal
            : number
            = Math.floor(width * (interHorizontalRate || 0) / 200);
        const marginVertical
            : number
            = Math.floor(height * (interVerticalRate || 0) / 200);
        return {
            width,
            height,
            paddingHorizontal: Math.floor(width * (borderHorizontalRate || 0) / 100)- marginHorizontal,
            paddingVertical: Math.floor(height * (borderVerticalRate || 0) / 100) - marginVertical,
            marginHorizontal,
            marginVertical
        };
    }

export const internalDims
    : (orientation: OrientationType) => DimsType
    = orientation => {
        const { width, height, paddingHorizontal, paddingVertical } = dims(orientation);
        return {
            width: width - 2 * paddingHorizontal,
            height: height - 2 * paddingVertical
        };
    };

export default (_: {}) =>
    <OrientationCtxt.Consumer>{(orientation: OrientationType) => {
        const nbColumns: number = config[orientation].nbColumns;
        const style: AnyObj | undefined = config.style;
        const {
            width,
            height,
            paddingHorizontal,
            paddingVertical,
            marginHorizontal,
            marginVertical
        }: DimsType & PaddingType & MarginType = dims(orientation);
        return <Grid {...{
            style: { ...style, width, height, paddingHorizontal, paddingVertical },
            nbColumns,
            elements: pages.map(({ title, name }, i) => {
                const props: BoutonMenuPropsType = { title, name, marginHorizontal, marginVertical };
                return <BoutonMenu key={i} {...props} />;
            })
        }} />
    }}</OrientationCtxt.Consumer>;
