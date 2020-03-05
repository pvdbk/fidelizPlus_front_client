import React from 'react';
import { ICfgMenu } from '../../common/types';
import { menu as config } from '../../common/config';
import { OrientationCtxt } from '../../common/contexts';
import pages from '../../common/pagesInfos';
import Grid from '../common/Grid';
import BoutonMenu from './BoutonMenu';

const { nbColumns, style }: ICfgMenu = config;

export default () =>
    <OrientationCtxt.Consumer>
        {() => <Grid {...{
            style: { ...style },
            nbColumns,
            elements: pages.map(({ title, imageSrc, path }, i) => <BoutonMenu key={i} {...{ title, imageSrc, path }} />)
        }} />}
    </OrientationCtxt.Consumer>;
