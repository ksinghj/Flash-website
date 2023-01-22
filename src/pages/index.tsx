import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

import flashLogoText from '../assets/logo-text.png'
import C2AButton from '@/components/C2AButton'

export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='Flash - Flashcards made easy.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <header className='flex flex-row justify-between items-center mb-8 sticky top-0 left-0 w-full'>
          <Image src={flashLogoText} alt='Flash logo' height={40} />
          <C2AButton />
        </header>
        <h1 className='text-white text-4xl text-center font-semibold mb-6'>Flash</h1>
        <h2 className='text-white text-xl text-center font-semibold'>Flashcards made easy.</h2>
      </div>
    </>
  )
}
