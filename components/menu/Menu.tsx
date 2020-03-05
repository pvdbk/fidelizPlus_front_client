import React from 'react';
import { AnyObj } from '../../common/types';
import { menu as config } from '../../common/config';
import pages from '../../common/pagesInfos';
import Grid from '../common/Grid';
import BoutonMenu from './BoutonMenu';

const { nbColumns, style }: { nbColumns: number, style?: AnyObj } = config;

export default () => <Grid {...{
    style: { ...style },
    nbColumns,
    elements: pages.map(({ title, imageSrc, path }, i) => <BoutonMenu key={i} {...{ title, imageSrc, path }} />)
}} />;
