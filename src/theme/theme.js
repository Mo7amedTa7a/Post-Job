import { createTheme } from "@mui/material";

const primary = "#2bb8e2ff";
const secondary = "#15161a";

export default createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  components: {
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "8px 24px 16px 24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "6px 24px",
          fontWeight: 600,
          textTransform: "none",
          color: secondary,
        },
        outlined: {
          borderRadius: "35px",
          borderColor: secondary,
          padding: "6px 20px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          padding: "15px 0 15px 15px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          padding: "0 0 0 10px",
          height: "49px",
        },
      },
    },
  },
});

