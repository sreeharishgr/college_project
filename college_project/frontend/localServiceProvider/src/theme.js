import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4f46e5", // indigo
    },
    secondary: {
      main: "#22c55e", // green
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"`,
    h3: { fontSize: "2.25rem" },
    h5: { fontSize: "1.5rem" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 700, borderRadius: 10 },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 16 } },
    },
  },
});

export default theme;
