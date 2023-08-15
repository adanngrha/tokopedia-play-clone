import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#121212", // Blue shade
    },
    secondary: {
      main: "#FF7043", // Orange shade
    },
    background: {
      default: "#121212", // Dark background
      paper: "#121212", // Slightly lighter background
    },
    text: {
      primary: "#FFFFFF", // White text
      secondary: "#B0B0B0", // Light gray text
    },
  },
});

export default theme;
