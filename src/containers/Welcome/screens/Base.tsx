import React, {ReactNode} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {textStyleHeader} from '../../../utitles/styles';
import {AppThemeModel} from '../../../utitles/models';
import {withTheme} from '../../../utitles/theme/theme-provider/withTheme';

export interface IBaseProps {
    theme: AppThemeModel;
    title: string;
    children?: ReactNode;
}

const Base = ({title, theme, children}: IBaseProps) => {
    return <View style={styles(theme).root}>
        <View style={styles(theme).titleContainer}>
            <Text style={styles(theme).title}>{title}</Text>
        </View>
        <View style={styles(theme).content}>
            {children}
        </View>
    </View>;
};

export default withTheme(Base);


const styles = (theme: AppThemeModel) => {
    const imgWidth = Dimensions.get('screen').width * 0.5;
    const imgHeight = imgWidth * 487 / 586;

    return StyleSheet.create({
        titleContainer: {
            flexBasis: 150,
            justifyContent: 'center'
        },
        title: {
            ...textStyleHeader(theme),
            alignSelf: 'center'
        },
        root: {
            flex: 1,
            backgroundColor: theme.backgroundMainColor,
            //justifyContent: 'space-around',
            // alignItems: 'center'
        },
        content: {
            flexGrow: 1,
            justifyContent: 'center'
        },
        img: {
            maxWidth: imgWidth,
            maxHeight: imgHeight
        }
    })
};
