import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './Home';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3ea6ff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
