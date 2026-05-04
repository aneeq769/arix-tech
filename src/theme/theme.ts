import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00d4ff" },
    secondary: { main: "#a855f7" },
    background: { default: "#020408", paper: "#050c14" },
    text: { primary: "#f0f8ff", secondary: "rgba(180,220,255,0.65)" },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Nasalization Rg', 'Nasalization', sans-serif", fontWeight: 400 },
    h2: { fontFamily: "'Nasalization Rg', 'Nasalization', sans-serif", fontWeight: 400 },
    h3: { fontFamily: "'Nasalization Rg', 'Nasalization', sans-serif", fontWeight: 400 },
    h4: { fontFamily: "'Nasalization Rg', 'Nasalization', sans-serif", fontWeight: 400 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", borderRadius: 8 } } },
    MuiCssBaseline: { styleOverrides: { body: { overflowX: "hidden" } } },
  },
});
