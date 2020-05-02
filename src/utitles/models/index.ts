import {StatusBarStyle} from "react-native";
import {ThemeType} from '../constants/common'

export interface AppThemeModel {
    accentMainColor: string;
    accentTextColor: string;
    backgroundMainColor: string;
    textMainColor: string;
    textSecondaryColor: string;
    fontMain: string;
    fontThin: string;
    underlayColor: string;
    type: ThemeType;
    barStyle: StatusBarStyle;
}

export interface AppMainState {
    theme: ThemeType;
    loading: boolean;
    tutorialDone: boolean;
}

export interface AppAction {
    type: string;
    payload?: any;
}

