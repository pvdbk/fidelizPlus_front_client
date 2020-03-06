import React from 'react';
import { Link } from 'react-router-dom';
import { TouchableHighlight, View, Text } from 'react-native';
import { toStyleSheet, screenWidth, picture } from '../../common/utils';
import { boutonMenu as configBouton, menu as configMenu } from '../../common/config';
import { AnyObj, OrientationType, IBoutonMenuProps, Dico } from '../../common/types';
import { OrientationCtxt } from '../../common/contexts';
import Line from '../common/Line';

const boutonStyle = configBouton.style;

const getDims = (orientation: OrientationType) => {
    const {
        marginRate,
        paddingRate,
        imageRate,
        fontSize,
    }: Dico<number> = configBouton[orientation];
    const {
        nbColumns,
        padding: menuPadding
    }: Dico<number | undefined> = configMenu[orientation];
    const
        totalWidth: number =
        (screenWidth - 2 * (menuPadding || 0)) / nbColumns;
    const
        [boutonMargin, boutonPadding]: number[] =
        [marginRate, paddingRate].map(rate => totalWidth * rate / 100);
    const
        boutonWidth: number =
        totalWidth - 2 * boutonMargin;
    return {
        boutonWidth: Math.floor(boutonWidth),
        boutonMargin: Math.floor(boutonMargin),
        boutonPadding: Math.floor(boutonPadding),
        pictureSide: Math.floor((boutonWidth - 2 * boutonPadding) * imageRate / 100),
        fontSize: Math.floor(fontSize * screenWidth / 30)
    }
};

const getStyleSheets = (orientation: OrientationType) => {
    const {
        boutonMargin,
        boutonWidth,
        boutonPadding,
        pictureSide,
        fontSize
    }: Dico<number> = getDims(orientation);
    const menu
        : AnyObj
        = toStyleSheet({ margin: boutonMargin });
    const bouton
        : AnyObj
        = toStyleSheet({
            ...boutonStyle,
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: boutonWidth,
            padding: boutonPadding
        });
    const text
        : AnyObj
        = toStyleSheet({ fontSize });
    const image
        : AnyObj
        = toStyleSheet({ width: pictureSide, height: pictureSide });
    return { menu, bouton, text, image };
}

export default ({ title, name }: IBoutonMenuProps) =>
    <OrientationCtxt.Consumer>
        {
            (orientation: OrientationType) => (
                (styleSheets : Dico<AnyObj>) => <View style={styleSheets.menu}>
                    <Link to={'/' + name} style={{ textDecoration: 'none' }}>
                        <TouchableHighlight>
                            <View style={styleSheets.bouton}>
                                <Text style={styleSheets.text}>{title}</Text>
                                <Line />
                                {picture(name, styleSheets.image)}
                            </View>
                        </TouchableHighlight>
                    </Link>
                </View>
            )(getStyleSheets(orientation))
        }
    </OrientationCtxt.Consumer>;
