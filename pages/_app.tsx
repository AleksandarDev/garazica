/* eslint-disable react/jsx-props-no-spreading */
import '../styles/global.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import AppSettingsService from '../src/AppSettingsService';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const [isDark, setIsDark] = useState(AppSettingsService.getIsNightMode());
  const currentTheme = theme(isDark);

  const handleThemeChange = () => {
    const newTheme = !isDark;
    AppSettingsService.setIsNightMode(newTheme);
    setIsDark(newTheme);
  };

  return (
    <>
      <AppCacheProvider {...props}>
        <Head>
          <title>Garažica</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
          />
        </Head>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <Component {...pageProps} onThemeChange={handleThemeChange} />
        </ThemeProvider>
      </AppCacheProvider>
    </>
  );
}
