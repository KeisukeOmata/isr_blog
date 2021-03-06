import React from 'react'
import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Config } from 'lib/site.config'
import { SiteHeader } from 'components/layouts/SiteHeader'
import { SiteFooter } from 'components/layouts/SiteFooter'
import { FixedFooter } from 'components/layouts/FixedFooter'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${Config.siteRoot}/logo.png`}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="manifest.webmanifest" />
        <script
          async
          src="https://unpkg.com/pwacompat"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" type="image/png" href="pwa.png" sizes="128x128" />
      </Head>
      <FixedFooter>
        <SiteHeader />
        <Component {...pageProps} />
        <SiteFooter />
      </FixedFooter>
    </>
  )
}

export default MyApp
