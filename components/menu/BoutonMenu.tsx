import React from 'react';
import { Link } from 'react-router-dom';
import { TouchableHighlight, View, Text } from 'react-native';
import { toStyleSheet, picture } from '../../common/utils';
import { boutonMenu as config, menu as configMenu } from '../../common/config';
import { AnyObj, OrientationType, Dico, IDims, IOrientedBoutonMenuCfg } from '../../common/types';
import { OrientationCtxt } from '../../common/contexts';
import pages from '../../common/pagesInfos';
import Line from '../common/Line';
import { internalDims as containerDims } from './Menu';

interface IPrivateDims {
    marginHorizontal: number,
    marginVertical: number,
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
interface IBoutonMenuProps {
    title: string,
    name: string
};


const boutonStyle = config.style;

const getDims
    : (orientation: OrientationType) => IPrivateDims
    = orientation => {
        const {
            marginHorizontalRate,
            paddingHorizontalRate,
            marginVerticalRate,
            paddingVerticalRate,
            imageRate,
            fontSizeRate
        }: IOrientedBoutonMenuCfg = config[orientation];
        const {
            width: containerWidth,
            height: containerHeight
        }: IDims = containerDims(orientation);
        const nbColumns: number = configMenu[orientation].nbColumns;
        const nbLines
            : number
            = Math.floor(1 + (pages.length - 1) / nbColumns);
        const totalHeight = containerHeight / nbLines
        const totalWidth
            : number
            = containerWidth / nbColumns;
        const marginHorizontal = totalWidth * marginHorizontalRate / 100;
        const marginVertical = totalHeight * marginVerticalRate / 100;
        const width = totalWidth - 2 * marginHorizontal;
        const height = totalHeight - 2 * marginVertical;
        const paddingHorizontal = width * paddingHorizontalRate / 100;
        const paddingVertical = height * paddingVerticalRate / 100;
        const insideHeight = height - 2 * paddingVertical;
        return {
            marginHorizontal: Math.floor(marginHorizontal),
            marginVertical: Math.floor(marginVertical),
            width: Math.floor(width),
            height: Math.floor(height),
            paddingHorizontal: Math.floor(paddingHorizontal),
            paddingVertical: Math.floor(paddingVertical),
            pictureSide: Math.floor(insideHeight * imageRate / 100),
            fontSize: Math.floor(insideHeight * fontSizeRate / 100)
        }
    };

const getStyleSheets
    : (orientation: OrientationType) => IStyleSheets
    = orientation => {
        const {
            marginHorizontal,
            marginVertical,
            width,
            height,
            paddingHorizontal,
            paddingVertical,
            pictureSide,
            fontSize
        }: IPrivateDims = getDims(orientation);
        const boutonContainer
            : AnyObj
            = toStyleSheet({
                width,
                height,
                marginHorizontal,
                marginVertical
            });
        const bouton
            : AnyObj
            = toStyleSheet({
                ...boutonStyle,
                margin: 0,
                justifyContent: 'center',
                alignItems: 'center',
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

export default ({ title, name }: IBoutonMenuProps) =>
    <OrientationCtxt.Consumer>
        {
            (orientation: OrientationType) => (
                ({ boutonContainer, bouton, text, image }: IStyleSheets) =>
                    <View style={boutonContainer}>
                        <Link to={'/' + name} style={{ textDecoration: 'none' }}>
                            <TouchableHighlight>
                                <View style={bouton}>
                                    <Text style={text}>{title}</Text>
                                    <Line />
                                    {picture(name, image)}
                                </View>
                            </TouchableHighlight>
                        </Link>
                    </View>
            )(getStyleSheets(orientation))
        }
    </OrientationCtxt.Consumer>;
