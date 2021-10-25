import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './Home';

const useStyles = makeStyles({
  root: {},
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3ea6ff',
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#fff',
      }
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
