import React from 'react';
import BoutonMenu from './components/BoutonMenu';
import Menu from './components/Menu';
import Page from './components/Page';

let boutons = [];
for(let i = 0; i < 5; i++) boutons.push(<BoutonMenu key={i} title='Hello world !' imageSrc='logo192.png'/>)

export default () => (<Page><Menu boutons={boutons}/></Page>);
