import { createTheme } from "@mui/material";

const getTheme = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#4365D0",
      },
    },
    typography: {
      fontFamily: [
        "Nunito Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            borderRadius: "10px",
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          style: {
            borderRadius: "10px",
          },
        },
      },
      MuiCard: {
        defaultProps: {
          style: {
            boxShadow: "none",
            borderRadius: "20px",
          },
        },
      },
    },
  });
  return theme;
};

export { getTheme };
