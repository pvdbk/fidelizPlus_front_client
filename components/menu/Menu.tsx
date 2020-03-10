import React from 'react';
import { internalDims as containerDims } from '../../App';
import { OrientationCtxt } from '../../common/contexts';
import { menu as config } from '../../common/config';
import {
    OrientationType,
    AnyObj,
    DimsType,
    PaddingType,
    MarginType,
    BoutonMenuPropsType,
    IOrientedMenuCfg
} from '../../common/types';

import pages from '../../common/pagesInfos';
import Grid from '../common/Grid';
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
            = Math.floor(width * (interVerticalRate || 0) / 200);
        const marginVertical
            : number
            = Math.floor(height * (interHorizontalRate || 0) / 200);
        return {
            width,
            height,
            paddingHorizontal: Math.floor(width * (borderVerticalRate || 0) / 100)- marginHorizontal,
            paddingVertical: Math.floor(height * (borderHorizontalRate || 0) / 100) - marginVertical,
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
