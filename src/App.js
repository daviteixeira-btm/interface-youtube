import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './Home';

const useStyles = makeStyles({
  root: {},
});

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

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
