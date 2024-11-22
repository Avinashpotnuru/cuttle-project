
import { Box,  ThemeProvider } from '@mui/material';
import './App.css'
import LandingPage from './pages/LandingPage'
import { theme } from './theme';

function App() {
  

  return (
    <>
    <ThemeProvider theme={theme}>
      <Box component="div" >
        <LandingPage />
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App
