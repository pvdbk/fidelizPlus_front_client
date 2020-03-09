import React from 'react';
import { Link } from 'react-router-dom';
import { TouchableHighlight, View, Text } from 'react-native';
import { toStyleSheet, picture } from '../../common/utils';
import { boutonMenu as config, menu as configMenu } from '../../common/config';
import { AnyObj, OrientationType, Dico, DimsType, IOrientedBoutonMenuCfg, BoutonMenuPropsType, MarginType } from '../../common/types';
import { OrientationCtxt } from '../../common/contexts';
import pages from '../../common/pagesInfos';
import Line from '../common/Line';
import { internalDims as containerDims } from './Menu';

interface IPrivateDims {
    width: number,
    height: number,
    paddingHorizontal: number,
    paddingVertical: number,
    pictureSide: number,
    fontSize: number
};
interface IStyleSheets {
    boutonContainer: Dico<any>,
    bouton: Dico<any>,
    text: Dico<any>,
    image: Dico<any>
};

const boutonStyle = config.style;

const dims
    : (orientation: OrientationType, margin: MarginType) => IPrivateDims
    = (orientation, { marginHorizontal, marginVertical }) => {
        const {
            paddingHorizontalRate,
            paddingVerticalRate,
            imageRate,
            fontSizeRate
        }: IOrientedBoutonMenuCfg = config[orientation];
        const {
            width: containerWidth,
            height: containerHeight
        }: DimsType = containerDims(orientation);
        const nbColumns: number = configMenu[orientation].nbColumns;
        const nbLines
            : number
            = Math.floor(1 + (pages.length - 1) / nbColumns);
        const totalHeight
            : number
            = containerHeight / nbLines
        const totalWidth
            : number
            = containerWidth / nbColumns;
        const width = totalWidth - 2 * marginHorizontal;
        const height = totalHeight - 2 * marginVertical;
        const paddingVertical = height * (paddingVerticalRate || 0) / 100;
        const insideHeight = height - 2 * paddingVertical;
        return {
            width: Math.floor(width),
            height: Math.floor(height),
            paddingHorizontal: Math.floor(width * (paddingHorizontalRate || 0) / 100),
            paddingVertical: Math.floor(paddingVertical),
            pictureSide: Math.floor(insideHeight * imageRate / 100),
            fontSize: Math.floor(insideHeight * fontSizeRate / 100)
        }
    };

const getStyleSheets
    : (orientation: OrientationType, margin: MarginType) => IStyleSheets
    = (orientation, margin) => {
        const {
            width,
            height,
            paddingHorizontal,
            paddingVertical,
            pictureSide,
            fontSize
        }: IPrivateDims = dims(orientation, margin);
        const boutonContainer
            : AnyObj
            = toStyleSheet({ width, height, ...margin });
        const bouton
            : AnyObj
            = toStyleSheet({
                ...boutonStyle,
                margin: 0,
                justifyContent: 'center',
                alignItems: 'center',
                height,
                width,
                paddingHorizontal,
                paddingVertical
            });
        const text
            : AnyObj
            = toStyleSheet({ fontSize });
        const image
            : AnyObj
            = toStyleSheet({ width: pictureSide, height: pictureSide });
        return { boutonContainer, bouton, text, image };
    }

export default ({ title, name, ...margin }: BoutonMenuPropsType) =>
    <OrientationCtxt.Consumer>{
        (orientation: OrientationType) => (
            ({ boutonContainer, bouton, text, image }: IStyleSheets) =>
                <View style={boutonContainer}>
                    <Link to={'/' + name} style={{ textDecoration: 'none' }}>
                        <TouchableHighlight>
                            <View style={bouton}>
                                <Text style={text}>{title}</Text>
                                <Line />
                                <View style={toStyleSheet({ flex: 1, justifyContent: 'center' })}>
                                    {picture(name, image)}
                                </View>
                            </View>
                        </TouchableHighlight>
                    </Link>
                </View>
        )(getStyleSheets(orientation, margin))
    }</OrientationCtxt.Consumer>;
