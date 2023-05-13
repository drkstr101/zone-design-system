import React, { ReactNode } from 'react';
import { ThemeContext } from './theme-context';

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
  return (
    <ThemeContext.Provider value={{ themeMode, themeDirection }}>
      {children}
    </ThemeContext.Provider>
  );
}
