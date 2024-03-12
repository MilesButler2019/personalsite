import Head from 'next/head'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import * as React from 'react'

const defaultSEO = {
  title: 'Miles Butler',
  description:
    'Software engineer living in DC.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.milesbutler.me',
    site_name: 'Miles Butler',
    // images: [
    //   {
    //     url: 'https://www.ishanshah.me/static/og/default.png',
    //     alt: 'Miles Butler',
    //   },
    // ],
  },
}

export function Providers() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <link rel="icon" href="/static/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/static/favicon.png"
          type="image/png"
          sizes="any"
        />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/static/meta/manifest.webmanifest" />
        <meta
          name="theme-color"
          content="#fff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="rgb(23, 23, 23)"
          media="(prefers-color-scheme: dark)"
        />

        {/* OpenGraph */}
        {/* <meta property="og:title" content="Ishan Shah" key="title" /> */}
        {/* <meta property="og:image" content="https://www.ishanshah.me/static/og/default.png" /> */}
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script 
        strategy="afterInteractive" 
        src={"https://www.googletagmanager.com/gtag/js?id=G-CEQVMRYG8Q"}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CEQVMRYG8Q', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Dark Mode Toggler */}
      <Script id="darkmode-toggler">
        {`
          if (localStorage.theme === 'light' || (!('theme' in localStorage))) {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
          } else if (localStorage.theme === 'dark') {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
          }
        `}
      </Script>
    </>
  )
}
