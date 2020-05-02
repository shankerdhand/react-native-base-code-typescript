import React from 'react';
import {withTheme} from '../../utitles/theme/theme-provider/withTheme';
import GettingStarted from './screens/GettingStarted';
import Hello from './screens/Hello';
import HowItWorks from './screens/HowItWorks';

const SCREENS = {
    HELLO: 'HELLO',
    SET_CURRENCY: 'SET_CURRENCY',
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

        if (currentScreen === SCREENS.HELLO) {
            return <Hello goNext={this.goNext(SCREENS.SET_CURRENCY)}/>;
        } else if (currentScreen === SCREENS.GETTING_STARTED) {
            return <GettingStarted goNext={completeTutorial}/>;
        } else if (currentScreen === SCREENS.HOW_IT_WORKS) {
            return <HowItWorks goNext={completeTutorial}/>;
        }

        return null;
    }

    private goNext = (newScreen: string) => () => {
        this.setState({currentScreen: newScreen});
    };
}

export default withTheme(Welcome);
