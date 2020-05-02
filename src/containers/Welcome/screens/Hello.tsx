import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Base from './Base';
import {textStyleBase} from '../../../utitles/styles';
import {AppThemeModel} from '../../../utitles/models';
import {withTheme} from '../../../utitles/theme/theme-provider/withTheme';

export interface IHelloProps {
    goNext: () => {};
    theme: AppThemeModel;
}

const HelloBase = ({goNext, theme}: IHelloProps) => {
    return <Base goNext={goNext} title="Welcome to Klug Saver">
        <View>
            <Image style={styles(theme).img} source={require('./img/welcome.png')}/>
            <Text style={styles(theme).text}>Track your expenses freely and anonymously</Text>
        </View>
    </Base>;
};

export default withTheme(HelloBase);


const styles = (theme: AppThemeModel) => {
    const imgWidth = Dimensions.get('screen').width * 0.5;
    const imgHeight = imgWidth * 487 / 586;

    return StyleSheet.create({
        img: {
            maxWidth: imgWidth,
            maxHeight: imgHeight
        },
        text: {
            ...textStyleBase(theme),
            marginTop: 30,
            textAlign: 'center'
        }
    })
};
