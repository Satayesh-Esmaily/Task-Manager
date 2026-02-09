import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode, 
      primary: {
        main: mode === "light" ? "#FFFFFF" : "#000000", 
      },
      secondary: {
        main: mode === "light" ? "#FFFFFF" : "#000000",
      },
      background: {
        default: mode === "light" ? "#FFFFFF" : "#000000", 
        paper: mode === "light" ? "#FFFFFF" : "#000000", 
      },
      text: {
        primary: mode === "light" ? "#000000" : "#FFFFFF", 
        secondary: mode === "light" ? "#000000" : "#FFFFFF",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial",
      h4: {
        fontWeight: 700,
        color: mode === "light" ? "#000000" : "#FFFFFF",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: "none",
            color: mode === "light" ? "#000000" : "#FFFFFF",
            borderColor: mode === "light" ? "#000000" : "#FFFFFF",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === "light"
              ? "0 3px 10px rgba(0,0,0,0.1)"
              : "0 3px 10px rgba(255,255,255,0.1)",
            backgroundColor: mode === "light" ? "#FFFFFF" : "#000000",
          },
        },
      },
    },
  });
