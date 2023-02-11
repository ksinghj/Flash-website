import { create } from 'zustand'
import _ from 'lodash'

export type Card = [string, string]

export interface StudyState {
  cards: Card[] | null
  know: Card[] | null
  dontKnow: Card[] | null
  setCards: (cards: Card[]) => void
  addToKnow: (card: Card) => void
  addToDontKnow: (card: Card) => void
  undo: () => void
  cardHistory: Card[]
  knowHistory: string[] // 'know' | 'dontKnow'
  addToCardHistory: (card: Card) => void
  side: 0 | 1 // preferred to boolean so can access card[side]
  toggleSide: () => void
  restartDeck: () => void
  shuffleDeck: () => void
  unshuffleDeck: () => void
  allCards: Card[] | null
  setAllCards: (allCards: Card[]) => void
  isShuffled: boolean
  setIsShuffled: (isShuffled: boolean) => void
}

const useStudyStore = create<StudyState>()((set, get) => ({
  cards: null,
  know: null,
  dontKnow: null,
  setCards: (cards: Card[]) => set({ cards }),
  addToKnow: (card: Card) => {
    const knowState = get().know || []
    set({ know: [...knowState, card] })
    set({ knowHistory: [...get().knowHistory, 'know'] })
    const cardsFirstRemoved = get()?.cards?.slice(1)
    set({ cards: cardsFirstRemoved })
  },
  addToDontKnow: (card: Card) => {
    const dontKnowState = get().dontKnow || []
    set({ dontKnow: [...dontKnowState, card] })
    set({ knowHistory: [...get().knowHistory, 'dontKnow'] })
    const cardsFirstRemoved = get()?.cards?.slice(1)
    set({ cards: cardsFirstRemoved })
  },
  undo: () => {
    if (get()?.cardHistory.length > 0) {
      const cardHistory = get()?.cardHistory.slice(0, -1)
      const lastSeenCard = get()?.cardHistory.splice(-1)
      const cardsState = get()?.cards
      set({ cardHistory })
      set({ cards: [...lastSeenCard, ...(cardsState || [])] })
      // remove from know/dontKnow
      const lastAdded = get().knowHistory[get().knowHistory.length - 1]
      if (lastAdded === 'know' || lastAdded === 'dontKnow') {
        if (lastAdded === 'know') {
          const knowLastRemoved = get().know?.slice(0, -1)
          set({ know: knowLastRemoved })
        }
        if (lastAdded === 'dontKnow') {
          const dontKnowLastRemoved = get()?.dontKnow?.slice(0, -1)
          set({ dontKnow: dontKnowLastRemoved })
        }
        const knowHistoryLastRemoved = get().knowHistory.slice(0, -1)
        set({ knowHistory: knowHistoryLastRemoved })
      }
    } else return
  },
  cardHistory: [],
  knowHistory: [],
  addToCardHistory: (card: Card) => {
    const cardHistoryState = get().cardHistory
    set({ cardHistory: [...cardHistoryState, card] })
  },
  side: 0,
  toggleSide: () => set({ side: get().side === 0 ? 1 : 0 }),
  restartDeck: () => {
    set({ know: null })
    set({ dontKnow: null })
    set({ cardHistory: [] })
    set({ knowHistory: [] })
  },
  shuffleDeck: () => {
    if (!get()?.cards || !get()?.allCards) return
    set({ cardHistory: [] })
    const shuffled = get()
      ?.cards?.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    set({ cards: shuffled })
  },
  unshuffleDeck: () => {
    if (!get()?.cards || !get()?.allCards) return
    set({ cardHistory: [] })
    const unshuffled: Card[] = []
    // create temp cards, if there is a match,
    // remove from temp arr and push to unshuffled
    // this way we avoid duplicating cards (allCards may contain duplicate cards)
    get().allCards?.forEach(card => {
      const tempCards = get().cards
      tempCards?.forEach((c, index) => {
        if (_.isEqual(card, c)) {
          unshuffled.push(c)
          // remove the match so it can't be matched again
          // in the case of allCards containing duplicates
          tempCards.splice(index, 1)
        }
      })
    })
    set({ cards: unshuffled })
  },
  allCards: null,
  setAllCards: (allCards: Card[]) => set({ allCards }),
  isShuffled: false,
  setIsShuffled: (isShuffled: boolean) => set({ isShuffled })
}))

export default useStudyStore
