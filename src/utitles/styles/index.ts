import {AppThemeModel} from '../models';

export const textStyleBase = (theme: AppThemeModel) => ({
    fontFamily: theme.fontMain,
    color: theme.textMainColor
});

export const textStyleThin = (theme: AppThemeModel) => ({
    fontFamily: theme.fontThin,
    color: theme.textMainColor,
});
