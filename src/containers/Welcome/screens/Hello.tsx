import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Base from './Base';
import {textStyleBase} from '../../../utitles/styles';
import {AppThemeModel} from '../../../utitles/models';
import {withTheme} from '../../../utitles/theme/theme-provider/withTheme';

export interface IHelloProps {
    theme: AppThemeModel;
}

const HelloBase = ({theme}: IHelloProps) => {
    return <Base title="The App Ustad">
        <View>
            <Image style={styles(theme).img} source={require('./img/app_ustad.png')}/>
            <Text style={styles(theme).text}>{"Learn Basic Structure \n\n React-Native Application"}</Text>
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
            maxHeight: imgHeight,
            alignSelf: 'center'
        },
        text: {
            ...textStyleBase(theme),
            marginTop: 30,
            textAlign: 'center'
        }
    })
};
