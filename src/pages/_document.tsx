import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='dark'>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description'>
          Flash - Make flash cards for free. No download required, simple and easy to use, flashing cards on screen.
        </meta>
        <meta charSet='UTF-8'></meta>
        <meta name='theme-color' content='#6a94ff'></meta>
        {/* Favicons */}
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#6a94ff' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;400;600&display=swap'
          rel='stylesheet'
        />
        <meta name='msapplication-TileColor' content='#6a94ff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
