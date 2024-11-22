// Define the custom theme
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#BE7B2E", 
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#BE7B2E", 
      paper: "#ffffff", 
    },
    text: {
      primary: "#333333", 
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif', 
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 8, 
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "normal", 
          textTransform: "none", 
        },
      },
    },
  },
});
