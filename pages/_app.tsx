/* eslint-disable react/jsx-props-no-spreading */
import '../styles/global.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { memo, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import AppSettingsService from '../src/AppSettingsService';
import {MDXProvider} from '@mdx-js/react';
import { Typography } from '@material-ui/core';
import components from '../src/mdxComponents';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const [isDark, setIsDark] = useState(AppSettingsService.getIsNightMode());
  const currentTheme = theme(isDark);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = !isDark;
    AppSettingsService.setIsNightMode(newTheme);
    setIsDark(newTheme);
  };

  return (
    <>
      <Head>
        <title>Garažica</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
      </Head>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <MDXProvider components={components}>
          <Component {...pageProps} onThemeChange={handleThemeChange} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}
