import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Mulish", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#1e88e5",
    },
    secondary: {
      main: "rgb(107 114 128)",
    },
  },
});

export default theme;
