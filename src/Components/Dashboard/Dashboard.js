import React from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});



function Dashboard() {
  return (
    <> 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveDrawer />
    </ThemeProvider>
    </>
  )
}

export default Dashboard