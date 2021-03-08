/* eslint-disable react/jsx-props-no-spreading */
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider, jssPreset } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import { create } from 'jss';
import components from '../components/mdxComponents';
import AppSettingsService from '../src/AppSettingsService';
import theme from '../src/theme';
import '../styles/global.scss';
import MainLayout from '../components/MainLayout';

if (typeof document !== 'undefined') {
    const styleNode = document.createComment('jss-insertion-point');
    document.head.insertBefore(styleNode, document.head.firstChild);
}

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
            <StylesProvider
                jss={
                    create({
                        ...jssPreset(),
                        insertionPoint: 'jss-insertion-point',
                    })
                }
            >
                <ThemeProvider theme={currentTheme}>
                    <CssBaseline />
                    <MainLayout onThemeChange={handleThemeChange}>
                        <MDXProvider components={components}>
                            <Component {...pageProps} />
                        </MDXProvider>
                    </MainLayout>
                </ThemeProvider>
            </StylesProvider>
        </>
    );
}
