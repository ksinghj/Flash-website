import Head from 'next/head'
import Image from 'next/image'

import flashLogoText from '../assets/logo-text.png'
import excelDeck from '../assets/format-tips-excel.png'
import studyScreen from '../assets/study-screen.png'
import createDeckManual from '../assets/create-deck-manual.png'
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
        <div className='flex flex-col justify-center items-center'>
          <Image className='mb-6' src={flashLogoText} alt='Flash logo' height={100} />
          <h2 className='text-white text-2xl text-center font-semibold mb-12'>Flashcards made easy.</h2>
          <div className='flex flex-col md:flex-row my-6 md:my-10'>
            <div className='flex flex-col justify-center items-center flex-1'>
              <p className='text-white text-lg text-center flex-1 mb-6'>
                Create decks of flashcards easily by importing them from excel or google sheets.
              </p>
              <Image
                className='mb-12'
                src={excelDeck}
                alt='formatting tips when creating deck of flashcards'
                height={300}
              />
            </div>
            <div className='flex flex-col justify-center items-center flex-1'>
              <p className='text-white text-lg text-center flex-1 mb-6'>Of couse you could always do it manually...</p>
              <Image className='mb-12' src={createDeckManual} alt='create deck manually demo' height={320} />
            </div>
          </div>
          <p className='text-white text-lg text-center mb-6'>Then put the work in and ace that test!</p>
          <Image className='mb-12' src={studyScreen} alt='Demonstrates Flash user studying flashcards' height={600} />
          <p className='text-white text-lg text-center mb-6'>Try for free today</p>
          <C2AButton className='px-14 py-3 text-2xl' />
        </div>
      </div>
    </>
  )
}
