/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import MainLayout from '../components/MainLayout';
import '../styles/global.scss';

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Garažica</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
                />
            </Head>
            <ThemeProvider attribute="class">
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ThemeProvider>
        </>
    );
}
