// 塔罗牌类型定义

export type ArcanaType = 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';

export type Element = 'fire' | 'water' | 'air' | 'earth';

export type Orientation = 'upright' | 'reversed';

export type QuestionType = 'love' | 'career' | 'study' | 'wealth' | 'health' | 'relationship';

export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  arcana: ArcanaType;
  number: number;
  element?: Element;
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  description: string;
}

export interface DrawnCard {
  card: TarotCard;
  orientation: Orientation;
  position: number;
  positionName: string;
}

export interface SpreadPosition {
  position: number;
  name: string;
  meaning: string;
}

export interface Spread {
  id: string;
  name: string;
  cardCount: number;
  difficulty: number;
  description: string;
  suitableFor: QuestionType[];
  positions: SpreadPosition[];
}

export interface ElementAnalysis {
  fire: number;
  water: number;
  air: number;
  earth: number;
  dominant: Element | null;
  interpretation: string;
}

export interface Guidance {
  action: string;
  caution: string;
  timing: string;
}

export interface ReadingSession {
  step: 'home' | 'question' | 'spread' | 'shuffle' | 'select' | 'reveal' | 'reading';
  question: string;
  questionType: QuestionType | null;
  selectedSpread: Spread | null;
  drawnCards: DrawnCard[];
  selectedCardIndices: number[];
}