import React from 'react';
import {withTheme} from '../../utitles/theme/theme-provider/withTheme';
import GettingStarted from './screens/GettingStarted';
import Hello from './screens/Hello';

import Swiper from 'react-native-swiper'
import {AppThemeModel} from "../../utitles/models";
import {Dimensions, StyleSheet} from "react-native";
import {textStyleBase} from "../../utitles/styles";

const SCREENS = {
    HELLO: 'HELLO',
    GETTING_STARTED: 'GETTING_STARTED',
    HOW_IT_WORKS: 'HOW_IT_WORKS'
}

interface WelcomeProps {
    completeTutorial: () => void;
}

interface WelcomeState {
    currentScreen: string;
}

class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    constructor(props: WelcomeProps) {
        super(props);
        this.state = {
            currentScreen: SCREENS.HELLO
        };
    }

    render() {
        const {completeTutorial} = this.props;
        const {currentScreen} = this.state;

        return (<Swiper showsButtons={true}>
            <Hello/>
            <GettingStarted/>
            {/*<HowItWorks/>*/}
        </Swiper>)
    }

    private goNext = (newScreen: string) => () => {
        this.setState({currentScreen: newScreen});
    };
}

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


export default withTheme(Welcome);
