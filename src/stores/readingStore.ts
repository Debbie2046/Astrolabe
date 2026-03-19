import { create } from 'zustand';
import { ReadingSession, Spread, DrawnCard, TarotCard, QuestionType } from '@/types';
import { shuffleDeck } from '@/data/tarotCards';

interface ReadingStore extends ReadingSession {
  deck: TarotCard[];
  
  // Actions
  setStep: (step: ReadingSession['step']) => void;
  setQuestion: (question: string) => void;
  setQuestionType: (type: QuestionType) => void;
  setSpread: (spread: Spread) => void;
  selectCard: (cardIndex: number) => void;
  resetSelection: () => void;
  revealCards: () => void;
  resetSession: () => void;
  initDeck: () => void;
}

const initialState: ReadingSession = {
  step: 'home',
  question: '',
  questionType: null,
  selectedSpread: null,
  drawnCards: [],
  selectedCardIndices: []
};

export const useReadingStore = create<ReadingStore>((set, get) => ({
  ...initialState,
  deck: [],

  setStep: (step) => set({ step }),
  
  setQuestion: (question) => set({ question }),
  
  setQuestionType: (questionType) => set({ questionType }),
  
  setSpread: (selectedSpread) => {
    set({ selectedSpread, selectedCardIndices: [] });
  },

  initDeck: () => {
    const shuffledDeck = shuffleDeck();
    set({ deck: shuffledDeck, selectedCardIndices: [] });
  },

  selectCard: (cardIndex) => {
    const { selectedCardIndices, selectedSpread } = get();
    if (!selectedSpread) return;

    const maxCards = selectedSpread.cardCount;
    
    if (selectedCardIndices.includes(cardIndex)) {
      // Deselect
      set({ 
        selectedCardIndices: selectedCardIndices.filter(i => i !== cardIndex) 
      });
    } else if (selectedCardIndices.length < maxCards) {
      // Select
      set({ 
        selectedCardIndices: [...selectedCardIndices, cardIndex] 
      });
    }
  },

  revealCards: () => {
    const { deck, selectedCardIndices, selectedSpread } = get();
    if (!selectedSpread || selectedCardIndices.length === 0) return;

    const drawnCards: DrawnCard[] = selectedCardIndices.map((deckIndex, posIndex) => {
      const card = deck[deckIndex];
      const position = selectedSpread.positions[posIndex];
      const orientation = Math.random() > 0.5 ? 'upright' : 'reversed';
      
      return {
        card,
        orientation,
        position: position.position,
        positionName: position.name
      };
    });

    set({ drawnCards, step: 'reveal' });
  },

  resetSelection: () => set({ selectedCardIndices: [] }),

  resetSession: () => set({ 
    ...initialState, 
    deck: [],
    selectedCardIndices: []
  }),
}));