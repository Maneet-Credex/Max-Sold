import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    color: "#373A3F",
    h3: {
      fontSize: "2.6rem",
      "@media (min-width:300px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:600px)": {
        fontSize: "2.3rem",
      },
      "@media (min-width:960px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      "@media (min-width:300px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:740px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.8rem",
      },
    },

    // h6: {
    //   fontSize: "1.25rem",
    //   "@media (min-width:300px)": {
    //     fontSize: "0.8rem",
    //   },
    //   "@media (min-width:600px)": {
    //     fontSize: "1rem",
    //   },
    //   "@media (min-width:740px)": {
    //     fontSize: "1.1rem",
    //   },
    //   "@media (min-width:960px)": {
    //     fontSize: "1.5rem",
    //   },
    // },
    // subtitle1: {
    //   fontSize: "1rem",
    //   "@media (min-width:600px)": {
    //     fontSize: "0.8rem",
    //   },
    //   "@media (min-width:740px)": {
    //     fontSize: "1rem",
    //   },
    //   "@media (min-width:960px)": {
    //     fontSize: "1.2rem",
    //   },
    // },
    // body1: {
    //   fontSize: "1.2rem", // Default font size
    //   "@media (min-width:600px)": {
    //     fontSize: "0.8rem", // Font size for screens bigger than 600px wide
    //   },
    //   "@media (min-width:740px)": {
    //     fontSize: "1rem", // Font size for screens bigger than 600px wide
    //   },
    //   "@media (min-width:960px)": {
    //     fontSize: "1.2rem", // Font size for screens bigger than 960px wide
    //   },
    // },
  },
  palette: {
    primary: {
      main: "#2E6F94",
      light: "#4bb5f2",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#373A3F",
    },
  },
});
