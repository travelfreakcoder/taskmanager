import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

export const ThemeContext = createContext<any>(undefined);

interface ThemeProps {
  children: ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
