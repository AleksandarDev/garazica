/* eslint-disable react/jsx-props-no-spreading */
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import components from '../components/mdxComponents';
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
                    <MDXProvider components={components}>
                        <Component {...pageProps} />
                    </MDXProvider>
                </MainLayout>
            </ThemeProvider>
        </>
    );
}
