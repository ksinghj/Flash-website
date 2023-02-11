import Head from 'next/head'
import Image from 'next/image'

import flashLogoText from '../assets/logo-text.png'
import excelDeck from '../assets/format-tips-excel.png'
import createDeckManual from '../assets/create-deck-manual.png'

import C2AButton from '@/components/C2AButton'
import InteractiveDeck from '@/components/InteractiveDeck'

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
          <h2 className='text-white text-2xl text-center font-semibold mb-8'>Flashcards made easy.</h2>
          <div className='flex flex-col md:flex-row my-6 md:my-10'>
            <div className='flex flex-col justify-center items-center flex-1'>
              <h3 className='text-white text-lg text-center flex-1 mb-8 font-semibold'>
                Create decks of flashcards in minutes.
              </h3>
              <Image
                className='mb-16'
                src={excelDeck}
                alt='Create a deck of flashcards from a file. Can be excel or google sheets.'
                height={300}
              />
              <p className='text-white text-lg text-center font-semibold mb-8'>
                The above file uploaded to{' '}
                <a href='https://flashapp.cards' className='underline text-flash-yellow'>
                  Flash
                </a>{' '}
                would create 2 decks, &apos;Spanish verbs&apos; and &apos;Nouns&apos;. Try &apos;Spanish verbs&apos;
                yourself:
              </p>
            </div>
          </div>
          <div className='bg-white rounded-xl p-10 lg:p-2'>
            <InteractiveDeck />
          </div>
          <div className='flex flex-col justify-center items-center flex-1'>
            <h4 className='text-white text-lg text-center flex-1 mt-16 mb-10 font-semibold'>
              Of couse you can also create the flashcards manually...
            </h4>
            <div className='mb-12 max-w-xs'>
              <Image className='w-100' src={createDeckManual} alt='create deck manually demo' />
            </div>
          </div>
          <p className='text-white text-lg text-center mb-6 font-semibold'>
            Create an account and study flashcards without any distractions at{' '}
            <a className='underline text-flash-yellow' href='https://flashapp.cards'>
              flashapp.cards
            </a>
            .
          </p>
          <p className='text-white text-lg text-center mb-6 lg:mb-12 font-semibold'>
            All online, no download required. No ads, simple user interface and mobile friendly.
          </p>
          <C2AButton className='px-14 py-3 my-10 text-2xl'>Try for free</C2AButton>
        </div>
      </div>
    </>
  )
}
