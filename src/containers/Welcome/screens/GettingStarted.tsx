import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {textStyleBase, textStyleThin} from '../../../utitles/styles';
import {AppThemeModel} from '../../../utitles/models';
import {withTheme} from '../../../utitles/theme/theme-provider/withTheme';
import Base from './Base';

export interface IGettingStartedProps {
    goNext: () => {};
    theme: AppThemeModel;
}

const GettingStartedBase = ({theme}: IGettingStartedProps) => {
    return <Base title="">
        <View style={styles(theme).root}>
            <Text style={styles(theme).title}>Following Dependency used in Repo</Text>
            <Text style={styles(theme).text}>Redux with Persist</Text>
            <Text style={styles(theme).text}>React Navigation</Text>
            <Text style={styles(theme).text}>React Native Swiper</Text>
            <Text style={styles(theme).text}>Common Component</Text>
            <Text style={styles(theme).text}>Common Theme Integration</Text>
            <Text style={styles(theme).text}>Common Style Integration</Text>
            <Text style={styles(theme).text}>Elint, Prettier</Text>
        </View>
    </Base>;
};

export default withTheme(GettingStartedBase);

const styles = (theme: AppThemeModel) => StyleSheet.create({
    root: {
        backgroundColor: theme.backgroundMainColor
    },
    title: {
        ...textStyleBase(theme),
        textAlign: 'center',
        marginBottom: 40,
        marginHorizontal: 40,
        lineHeight: 40
    },
    subtitle: {
        textAlign: 'center',
        marginLeft: 10,
        marginBottom: 10,
        ...textStyleBase(theme)
    },
    text: {
        textAlign: 'center',
        marginLeft: 10,
        marginBottom: 40,
        ...textStyleThin(theme)
    }
});
