import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {textStyleBase} from '../../../utitles/styles';
import {AppThemeModel} from '../../../utitles/models';
import {withTheme} from '../../../utitles/theme/theme-provider/withTheme';
import Base from './Base';

export interface IHowItWorksProps {
    theme: AppThemeModel;
}

const HowItWorksBase = ({theme}: IHowItWorksProps) => {
    return <Base title="How It Works">
        <View style={styles(theme).root}>
            <Text style={styles(theme).text}>All expenses are saved in your phone's memory. Nothing is transmitted to
                any third party service. This also means that if you lose your phone or delete the app, all your data
                will be lost. Use the Dropbox backup to get around that limitation.</Text>
            <Text style={styles(theme).text}>Play around with the Add expense screen to see the different options
                available.</Text>
            <Text style={styles(theme).text}>The categories and sub categories are editable. Just click on the pencil to
                get started.</Text>
            <Text style={styles(theme).text}>The Latest Expenses screen allows you to delete individual expenses if
                needed.</Text>
            <Text style={styles(theme).text}>Click on Categories in the Summary Screen to see what you have spent your
                money on within a category.</Text>
            <Text style={styles(theme).text}>Thank you for trying out Klug Saver ! Use the feedback button to get in
                touch !</Text>
        </View>
    </Base>;
};

export default withTheme(HowItWorksBase);

const styles = (theme: AppThemeModel) => StyleSheet.create({
    root: {
        backgroundColor: theme.backgroundMainColor,
        paddingHorizontal: 30
    },
    title: {
        ...textStyleBase(theme),
        marginBottom: 40
    },
    text: {
        marginLeft: 10,
        marginBottom: 20,
        ...textStyleBase(theme)
    }
});
