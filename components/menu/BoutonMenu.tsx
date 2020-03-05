import React from 'react';
import { Link } from 'react-router-dom';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { toStyleSheet, screenWidth } from '../../common/utils';
import { boutonMenu as configBM, menu as configMenu } from '../../common/config';
import { AnyObj, IBoutonMenu, ICfgBoutonMenu } from '../../common/types';
import Line from '../common/Line';

const {
    marginRate,
    paddingRate,
    imageRate,
    fontSize,
    style
}: ICfgBoutonMenu = configBM;

const widthWithMargins: number = Math.floor(
    (screenWidth - 2*(
        (configMenu.style && configMenu.style.padding) || 0
    )) / configMenu.nbColumns
);
const [margin, padding] : number[] = [marginRate, paddingRate].map(
    rate => Math.floor(widthWithMargins * rate / 100)
);
const width: number = widthWithMargins - 2*margin;

const imageStyleSheet: AnyObj = toStyleSheet(
    (dim => ({ width: dim, height: dim }))(
        Math.floor((width - 2*padding) * imageRate / 100)
    )
);
const buttonStyleSheet: AnyObj = toStyleSheet({
    ...style,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    padding
});
const titleStyleSheet: AnyObj = toStyleSheet({
    fontSize : Math.floor(fontSize * screenWidth / 30)
});

export default ({ title, imageSrc, path }: IBoutonMenu) =>
    <View style={toStyleSheet({ margin })}>
        <Link to={path} style={{ textDecoration: 'none' }}>
            <TouchableHighlight>
                <View style={buttonStyleSheet}>
                    <Text style={titleStyleSheet}>{title}</Text>
                    <Line />
                    <Image style={imageStyleSheet} source={require('../../pictures/' + imageSrc)} />
                </View>
            </TouchableHighlight>
        </Link>
    </View>;
