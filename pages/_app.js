import "../styles/global.scss";
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;

      return (
      <>
        <Head>
          <title>Garažica</title>
        </Head>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
}
