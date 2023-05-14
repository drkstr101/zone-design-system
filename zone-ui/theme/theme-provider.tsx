/// <reference path="mui5-types.d.ts" />

import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles';
import React, { ReactNode, useMemo } from 'react';
import customShadows from './customShadows';
import GlobalStyles from './global-styles';
import overrideComponents from './overrides';
import palette from './palette';
import shadows from './shadows';
import { ThemeContext } from './theme-context';
import typography from './typography';

export type ThemeProviderProps = {
  /**
   * primary color of theme.
   */
  themeMode?: 'light' | 'dark';

  /**
   * primary layout direction of theme.
   */
  themeDirection?: 'rtl' | 'ltr';

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

export function ThemeProvider({
  themeMode = 'light',
  themeDirection = 'ltr',
  children,
}: ThemeProviderProps) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: shadows(themeMode),
      customShadows: customShadows(themeMode),
    }),
    [themeDirection, themeMode]
  );

  const theme = overrideComponents(createTheme(themeOptions));

  return (
    <ThemeContext.Provider value={{ themeMode, themeDirection }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
