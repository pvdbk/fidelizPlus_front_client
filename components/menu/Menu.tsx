import React from 'react';
import { OrientationType, AnyObj } from '../../common/types';
import { OrientationCtxt } from '../../common/contexts';
import { menu as config } from '../../common/config';
import pages from '../../common/pagesInfos';
import { propsMap } from '../../common/utils';
import Grid from '../common/Grid';
import BoutonMenu from './BoutonMenu';

const props = pages.map(({ title, name }) => ({ title, name }));

export default () =>
    <OrientationCtxt.Consumer>{(orientation : OrientationType) => {
        const nbColumns: number = config[orientation].nbColumns;
        const style: AnyObj | undefined = config.style;
        return <Grid {...{
            style: { ...style },
            nbColumns,
            elements: propsMap(BoutonMenu, props)
        }} />
    }}</OrientationCtxt.Consumer>;
