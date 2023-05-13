import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';
import { ThemeProvider } from './theme-context-provider';

export function MockComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ color: theme.themeMode }}>
      this should be {theme.themeMode}
    </div>
  );
}

export const BasicThemeUsage = () => {
  return (
    <ThemeProvider>
      <MockComponent />
    </ThemeProvider>
  );
};
