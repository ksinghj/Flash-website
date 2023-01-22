import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='Flash - Flashcards made easy.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1 className='text-white'>Flash</h1>
      </div>
    </>
  )
}
