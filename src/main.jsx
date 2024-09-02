import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Fonts
// Supports weights 100-900
import "@fontsource-variable/montserrat";
// Supports weights 400-900
import "@fontsource-variable/playfair-display";
//

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat Variable', sans-serif",
    fontWeightRegular: 300,
  },
  palette: {
    primary: {
      main: "#283618",
    },
    secondary: {
      main: "#fefae0",
    },
  },
  components: {
    MuiButton: {
      style: {
        borderRadius: "0px",
        textTransform: "none",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
