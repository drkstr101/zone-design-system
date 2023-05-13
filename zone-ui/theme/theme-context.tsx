import { createContext } from 'react';

export type ThemeContextType = {
  /**
   * primary color of theme.
   */
  themeMode?: 'light' | 'dark';
  themeDirection?: 'rtl' | 'ltr';
};

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'light',
  themeDirection: 'ltr',
});
