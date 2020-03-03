import React from 'react';
import { View, Text } from 'react-native';
import BoutonMenu from './components/BoutonMenu';
import Menu from './components/Menu';
import Page from './components/Page';
import { toStyle } from './common/utils';

let boutons = [];
for(let i = 0; i < 6; i++) boutons.push(<BoutonMenu key={i} title='Hello !' onPress={() => console.log('clic')} imageSrc='logo192.png'/>)

export default () => (<Page><Menu boutons={boutons}/></Page>);
