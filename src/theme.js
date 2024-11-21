



// Define the custom theme
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#BE7B2E", // Custom primary color
    },
    secondary: {
      main: "#ff4081", // Custom secondary color
    },
    background: {
      default: "#BE7B2E", // Background color
      paper: "#ffffff", // Surface background color
    },
    text: {
      primary: "#333333", // Text color
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', // Font family
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 8, // Default spacing (1 unit = 8px)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "normal", // Normal font weight
          textTransform: "none", // Disable uppercase text
        },
      },
    },
  },
});

