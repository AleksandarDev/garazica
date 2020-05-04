import "../styles/global.scss";
import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class GApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Garažica</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
