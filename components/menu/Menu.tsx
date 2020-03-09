import React from 'react';
import { AnyObj, OrientationType, IDims, IOrientedMenuCfg } from '../../common/types';
import { OrientationCtxt } from '../../common/contexts';
import { menu as config } from '../../common/config';
import pages from '../../common/pagesInfos';
import { propsMap } from '../../common/utils';
import Grid from '../common/Grid';
import { internalDims as containerDims } from '../page/Page';
import BoutonMenu from './BoutonMenu';

const props = pages.map(({ title, name }) => ({ title, name }));

export const internalDims
    : (orientation: OrientationType) => IDims
    = orientation => {
        const { width, height } = containerDims(orientation);
        const { paddingHorizontalRate, paddingVerticalRate }: IOrientedMenuCfg = config[orientation];
        return {
            width: width - 2 * width * (paddingHorizontalRate || 0) / 100,
            height: height - 2 * height * (paddingVerticalRate || 0) / 100
        };
    };

export default () =>
    <OrientationCtxt.Consumer>{(orientation: OrientationType) => {
        const nbColumns: number = config[orientation].nbColumns;
        const style: AnyObj | undefined = config.style;
        return <Grid {...{
            style: { ...style },
            nbColumns,
            elements: propsMap(BoutonMenu, props)
        }} />
    }}</OrientationCtxt.Consumer>;
