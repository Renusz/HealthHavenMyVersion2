import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Values from Site.json spec
const theme = createTheme({
  palette: {
    primary: {
      main: "#00897B", // Teal from logo
      dark: "#00695C",
    },
    secondary: {
      main: "#8E24AA", // Purple from logo
    },
    text: {
      primary: "#1F2933",
      secondary: "#6B7280",
    },
    background: {
      default: "#F4FAFF",
      paper: "#FFFFFF",
    },
    error: {
      main: "#DC2626",
    },
  },
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    h1: {
      fontSize: "clamp(2.4rem, 3vw, 3.2rem)",
      fontWeight: 700,
    },
    h2: {
      fontSize: "clamp(1.9rem, 2.4vw, 2.4rem)",
      fontWeight: 600,
    },
    h3: {
      fontSize: "clamp(1.5rem, 2vw, 1.8rem)",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "1rem", // Keeping body2 readable, maybe slightly smaller or same as body1 but different usage
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },
});

export default responsiveFontSizes(theme);
