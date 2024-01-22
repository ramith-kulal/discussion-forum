

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AllRoutes from './shared/routes/AllRoutes';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "'Roboto Mono', monospace;",
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button
        style={{ position: 'fixed', top: 14, right: 10 }}
        onClick={toggleDarkMode}
        color="inherit"
      >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </Button>
      <AllRoutes />
    </ThemeProvider>
  );
};

export default App;



