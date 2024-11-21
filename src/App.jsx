
import { Container, ThemeProvider } from '@mui/material';
import './App.css'
import LandingPage from './pages/LandingPage'
import { theme } from './theme';

function App() {
  

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container  maxWidth="xl" >
        <LandingPage />
      </Container>
      </ThemeProvider>
    </>
  );
}

export default App
