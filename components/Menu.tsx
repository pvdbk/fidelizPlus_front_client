import React from 'react';
import { Link } from 'react-router-dom';
import BoutonMenu from './BoutonMenu';
import { Grid, AnyObj } from '../common/utils';
import { menu as config, pages } from '../common/config';

const { nbColumns, style } : { nbColumns : number, style: AnyObj } = config;

export default () => <Grid {...{
    style,
    nbColumns,
    elements: pages.map(({ title, imageSrc, path }, i) => <BoutonMenu key={i} {...{ title, imageSrc, path }} />)
}}/>;
