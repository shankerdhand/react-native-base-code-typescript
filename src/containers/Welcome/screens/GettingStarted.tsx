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

const GettingStartedBase = ({goNext, theme}: IGettingStartedProps) => {
    return <Base goNext={goNext} title="">
        <View style={styles(theme).root}>
            <Text style={styles(theme).title}>Swipe left and right to navigate in between the 4 screens</Text>
            <Text style={styles(theme).text}>Add Expense Screen</Text>
            <Text style={styles(theme).text}>List of Expenses Screen</Text>
            <Text style={styles(theme).text}>Statistics</Text>
            <Text style={styles(theme).text}>Backup and Settings</Text>
        </View>
    </Base>;
};

export default withTheme(GettingStartedBase);

const styles = (theme: AppThemeModel) => StyleSheet.create({
    root: {
        justifyContent: 'center',
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
