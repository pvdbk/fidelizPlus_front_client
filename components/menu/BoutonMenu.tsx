import React from 'react';
import { Link } from 'react-router-dom';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { toStyleSheet, screenWidth } from '../../common/utils';
import { boutonMenu as configBM, menu as configMenu } from '../../common/config';
import { IBoutonMenu, AnyObj } from '../../common/types';
import Line from '../common/Line';

const widthWithMargins: number = Math.floor((screenWidth - 2*((configMenu.style && configMenu.style.padding) || 0)) / configMenu.nbColumns);
const { marginRate, paddingRate, imageRate, style } :
{
    marginRate: number,
    paddingRate: number,
    imageRate: number,
    style?: AnyObj
} = configBM;
const [margin, padding] : number[] = [marginRate, paddingRate].map(
    rate => Math.floor(widthWithMargins * rate / 100)
);
const width: number = widthWithMargins - 2*margin;
const [imageStyleSheet, buttonStyleSheet, titleStyleSheet ]: AnyObj[] = [
    (dim => ({ width: dim, height: dim }))(
        Math.floor((width - 2*padding) * imageRate / 100)
    ),
    {
        ...style,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width,
        padding
    },
    { fontSize : Math.floor(configBM.fontSize * screenWidth / 30) }
].map(toStyleSheet);

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
