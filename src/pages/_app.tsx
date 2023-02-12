import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import { Montserrat_Alternates } from '@next/font/google'
import '@fontsource/montserrat-alternates' // fonts were requiring reload so added this

import Container from '@/components/Container'
import Layout from '@/components/layout'

const montserratAlternates = Montserrat_Alternates({
  weight: ['200', '400', '600'], // tailwind classes are: 'font-extralight' || 'font-normal' || 'font-semibold'
  style: ['normal', 'italic'],
  variable: '--font-ma',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
  subsets: ['latin']
})

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Flash - Flashcards made easy</title>
      </Head>
      <main
        className={`${montserratAlternates.className} ${montserratAlternates.variable} h-full w-full bg-white dark:bg-dark-blue`}>
        <Layout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Layout>
      </main>
    </>
  )
}
