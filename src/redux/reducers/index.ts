import {AppAction, AppMainState} from '../../utitles/models'
import {ThemeType} from "../../utitles/constants/common";
import {SET_LOADING} from "../actions";

// Initial State
const initialState: AppMainState = {
    loading: false,
    tutorialDone: false,
    theme: ThemeType.DARK
};

export default function reducer(state: AppMainState = initialState, action: AppAction): AppMainState {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.payload};
        default:
            return state;
    }
}
