import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Fonts
import "@fontsource-variable/montserrat";
//

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat Variable', sans-serif",
    fontWeightRegular: 300,
  },
  palette: {
    primary: {
      main: "#606c38",
    },
    secondary: {
      main: "#dda15e",
    },
  },
  components: {
    MuiButton: {
      style: {
        borderRadius: "0px",
        textTransform: "none",
        fontWeight: 300,
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
