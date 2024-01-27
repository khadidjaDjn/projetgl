import React, { useState } from 'react';
import Navbar from '../HomePage/Navbar';
import Footer from '../Footer';
import Card1 from './Card1';
import Card2 from './Card2';
import { Stack } from '@mui/material';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function Userprofile() {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(false);

  const handleCard1Click = () => {
    setShowCard1(false);
    setShowCard2(true);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Stack spacing={6}>
          <Navbar />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {showCard1 && <Card1 onInformationsClick={handleCard1Click} />}
            {showCard2 && <Card2 />}
          </div>
          <Footer />
        </Stack>
      </div>
      </ThemeProvider>
    </>
  );
}

export default Userprofile;
