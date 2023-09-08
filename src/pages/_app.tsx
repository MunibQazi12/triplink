import { theme } from "src/config/theme"
import { ThemeProvider, CssBaseline } from "@mui/material";
import "src/assets/scss/app.scss";

const MyApp = (props: any) => {

  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>

  );
}

export default MyApp;


