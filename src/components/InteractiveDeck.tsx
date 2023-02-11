import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'

import restartIcon from '../assets/restart-icon.png'
import undoIcon from '../assets/undo-icon.png'
import Button from './Button'
import useStore, { type Card } from '../store/InteractiveDeckStore'
interface CardProps {
  card: Card
  side: 0 | 1
}

function Card({ card, side }: CardProps) {
  const [activeSide, setActiveSide] = useState(0)

  useEffect(() => {
    setActiveSide(side)
  }, [card, side])

  return (
    <div
      onClick={() => setActiveSide(activeSide === 0 ? 1 : 0)}
      className={`h-[350px] cursor-pointer overflow-clip rounded-md lg:h-[500px]`}>
      <div className={`h-full w-full`}>
        {activeSide === 0 && (
          <div
            className={`flex h-full w-full flex-row items-center justify-center bg-light-blue p-6 text-center lg:text-2xl`}>
            <p className='!font-sans text-white'>{card[0]}</p>
          </div>
        )}
        {activeSide === 1 && (
          <div
            className={`flex h-full w-full flex-row items-center justify-center bg-[#0841d2] p-6 text-center lg:text-2xl`}>
            <p className='!font-sans text-white'>{card[1]}</p>
          </div>
        )}
      </div>
    </div>
  )
}

const TEXT_STYLES = '!text-sm md:!text-lg lg:!text-xl'

const CARD_DATA: Card[] = [
  ['estar', 'be'],
  ['seguir', 'to follow'],
  ['trabajar', 'to work']
]

export default function InteractiveDeck() {
  const {
    dontKnow,
    know,
    addToDontKnow,
    addToKnow,
    cardHistory,
    cards,
    setCards,
    allCards,
    setAllCards,
    isShuffled,
    setIsShuffled,
    addToCardHistory,
    shuffleDeck,
    unshuffleDeck,
    undo,
    side,
    toggleSide,
    restartDeck
  } = useStore()

  useEffect(() => {
    if (!cards && CARD_DATA) {
      setCards(CARD_DATA)
      setAllCards(CARD_DATA)
    }
  }, [])

  const isEndOfDeck = cards?.length === 0
  const currentCard = cards?.[0]

  const handleKnow = (card: Card) => {
    addToKnow(card)
    addToCardHistory(card)
  }

  const handleDontKnow = (card: Card) => {
    addToDontKnow(card)
    addToCardHistory(card)
  }

  const handleReviewDontKnow = () => {
    if (!dontKnow) return
    setCards(dontKnow)
    if (isShuffled) shuffleDeck()
    restartDeck()
  }

  const handleRestartDeck = () => {
    if (!allCards) return
    setCards(allCards)
    if (isShuffled) shuffleDeck()
    restartDeck()
  }

  const cardsSeen = (dontKnow?.length || 0) + (know?.length || 0) + 1
  const totalCards = (cards && cards.length + (dontKnow?.length || 0) + (know?.length || 0)) || 0
  const progress = `${cardsSeen}/${totalCards}`
  const progressPercentage = (cardsSeen / totalCards) * 100

  return (
    <div className='flex flex-col justify-center w-[300px] h-[778.5px] md:w-[700px] lg:w-[1000px] lg:h-[900px]'>
      {isEndOfDeck && (
        <div className='mt-8 flex max-w-[800px] flex-col self-center'>
          <p className='mb-8 text-center text-xl text-white md:text-2xl'>
            {dontKnow &&
              `Deck complete! Would you like to ${
                dontKnow.length > 0 ? "practice the ones you didn't get right or " : ''
              }restart?`}
          </p>
          <div className='flex flex-col lg:flex-row'>
            {dontKnow && dontKnow.length > 0 && (
              <div className='flex flex-1 flex-col'>
                <Button onClick={handleReviewDontKnow} className='mb-6 bg-flash-yellow lg:mr-4'>
                  Review Don&apos;t Know
                </Button>
              </div>
            )}
            <div className='flex flex-1 flex-col'>
              <Button onClick={handleRestartDeck} className='mb-6 bg-light-blue lg:ml-4'>
                Restart Deck
              </Button>
            </div>
          </div>
        </div>
      )}
      {!isEndOfDeck && (
        <>
          <div className='flex flex-col lg:w-[600px] lg:self-center'>
            <div className='flex flex-row items-start justify-between'>
              <Button
                onClick={() => {
                  isShuffled ? unshuffleDeck() : shuffleDeck()
                  setIsShuffled(!isShuffled)
                }}
                className='w-[145px] bg-light-blue md:w-[205px]'
                textStyles={TEXT_STYLES}>
                Shuffle is {!isShuffled ? 'OFF' : 'ON'}
              </Button>
              <Button onClick={toggleSide} className='w-[145px] bg-light-blue md:w-[205px]' textStyles={TEXT_STYLES}>
                Toggle Sides
              </Button>
            </div>
            <p className='counter my-3 self-center text-xl font-semibold text-black min-[390px]:my-6'>{progress}</p>
            <LinearProgress
              className='mb-6 rounded'
              variant='determinate'
              value={progressPercentage}
              sx={{ padding: '3px' }}
            />
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-5 lg:place-items-center'>
            <div className='flex flex-row items-center md:my-6 lg:col-span-1 lg:col-start-1 lg:m-0 lg:flex-col-reverse lg:align-middle'>
              <div className='rounded-full bg-red p-2 px-4 text-white'>{dontKnow?.length || 0}</div>
              <p className='ml-2 font-semibold text-red lg:ml-0 lg:mb-2'>{"Don't know"}</p>
            </div>
            <div className='flex flex-row-reverse items-center md:my-6 lg:col-span-1 lg:col-start-5 lg:m-0 lg:flex-col-reverse lg:align-middle'>
              <div className='rounded-full bg-green p-2 px-4 text-white'>{know?.length || 0}</div>
              <p className='mr-2 font-semibold text-green lg:mr-0 lg:mb-2'>Know</p>
            </div>

            <div className='study-cards col-span-2 mt-4 mb-6 lg:col-span-3 lg:col-start-2 lg:row-start-1 lg:w-[600px]'>
              {currentCard && <Card card={currentCard} side={side} />}
            </div>

            <div className='col-span-2 col-start-1 flex flex-col lg:col-span-3 lg:col-start-2 lg:w-[600px]'>
              <div className='mb-6 flex flex-row justify-center'>
                <Button
                  className='mr-2 flex-1 bg-red'
                  textStyles={TEXT_STYLES}
                  onClick={() => {
                    if (currentCard) handleDontKnow(currentCard)
                  }}>
                  {"Don't know"}
                </Button>
                <Button
                  className='ml-2 flex-1 bg-green'
                  textStyles={TEXT_STYLES}
                  onClick={() => {
                    if (currentCard) handleKnow(currentCard)
                  }}>
                  Know
                </Button>
              </div>
              <Button
                disabled={!cardHistory?.length}
                className='mb-6 bg-light-blue'
                textStyles={TEXT_STYLES}
                onClick={undo}
                icon={undoIcon}
                iconAlt='undo last card icon'>
                Undo
              </Button>
              <Button
                className='bg-light-blue'
                textStyles={TEXT_STYLES}
                onClick={handleRestartDeck}
                icon={restartIcon}
                iconAlt='restart deck icon'>
                Restart deck
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
