import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';
import { ThemeProvider } from './theme-provider';

function MockComponent() {
  const theme = useContext(ThemeContext);

  return (
    <Paper sx={{ padding: 4 }}>
      <Button>this should be {theme.themeMode}</Button>
    </Paper>
  );
}

export const LightThemeExample = () => {
  return (
    <ThemeProvider>
      <MockComponent />
    </ThemeProvider>
  );
};

export const DarkThemeExample = () => {
  return (
    <ThemeProvider themeMode="dark">
      <MockComponent />
    </ThemeProvider>
  );
};
