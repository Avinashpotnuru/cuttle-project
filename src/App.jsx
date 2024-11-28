import { ThemeProvider } from "@mui/material";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { theme } from "./theme";
import Layout from "./Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const location = useLocation();
  const noLayoutRoutes = ["/login", "/register"];
  const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

  return (
    <ThemeProvider theme={theme}>
      {isNoLayoutRoute ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;
