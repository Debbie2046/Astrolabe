import { Spread, QuestionType } from '@/types';

export const spreads: Spread[] = [
  {
    id: 'single',
    name: '单张指引',
    cardCount: 1,
    difficulty: 1,
    description: '适合日常指引或快速决策',
    suitableFor: ['love', 'career', 'study', 'wealth', 'health', 'relationship'],
    positions: [
      { position: 1, name: '指引', meaning: '当下的指引与启示' }
    ]
  },
  {
    id: 'time-flow',
    name: '时间流',
    cardCount: 3,
    difficulty: 2,
    description: '过去、现在、未来的发展趋势',
    suitableFor: ['love', 'career', 'study', 'health', 'relationship'],
    positions: [
      { position: 1, name: '过去', meaning: '过去的经历和影响' },
      { position: 2, name: '现在', meaning: '当下的状态和挑战' },
      { position: 3, name: '未来', meaning: '可能的发展方向' }
    ]
  },
  {
    id: 'relationship',
    name: '关系牌阵',
    cardCount: 5,
    difficulty: 3,
    description: '深入分析人际关系和感情问题',
    suitableFor: ['love', 'relationship'],
    positions: [
      { position: 1, name: '你的状态', meaning: '你在关系中的状态' },
      { position: 2, name: '对方的状态', meaning: '对方在关系中的状态' },
      { position: 3, name: '关系现状', meaning: '当前关系的本质' },
      { position: 4, name: '挑战', meaning: '关系面临的主要挑战' },
      { position: 5, name: '建议', meaning: '改善关系的方向' }
    ]
  },
  {
    id: 'celtic-cross',
    name: '凯尔特十字',
    cardCount: 10,
    difficulty: 5,
    description: '全面的深度分析，适合复杂问题',
    suitableFor: ['career', 'wealth'],
    positions: [
      { position: 1, name: '现状', meaning: '问题当前的核心状况' },
      { position: 2, name: '挑战', meaning: '面临的主要挑战或障碍' },
      { position: 3, name: '根基', meaning: '问题的根源或基础' },
      { position: 4, name: '过去', meaning: '近期发生的影响' },
      { position: 5, name: '意识目标', meaning: '你想要达到的目标' },
      { position: 6, name: '潜意识', meaning: '内心深处的真实想法' },
      { position: 7, name: '建议', meaning: '应该采取的行动' },
      { position: 8, name: '外部影响', meaning: '环境和他人的影响' },
      { position: 9, name: '希望与恐惧', meaning: '内心的期待与担忧' },
      { position: 10, name: '结果', meaning: '可能的结果' }
    ]
  }
];

export const getSpreadById = (id: string): Spread | undefined => {
  return spreads.find(spread => spread.id === id);
};

export const getRecommendedSpreads = (questionType: QuestionType): Spread[] => {
  const recommendations: Record<QuestionType, string[]> = {
    love: ['relationship', 'time-flow', 'single'],
    career: ['time-flow', 'celtic-cross', 'single'],
    study: ['time-flow', 'single'],
    wealth: ['celtic-cross', 'time-flow'],
    health: ['single', 'time-flow'],
    relationship: ['relationship', 'time-flow']
  };

  const order = recommendations[questionType] || ['single', 'time-flow'];
  return order.map(id => getSpreadById(id)).filter((s): s is Spread => s !== undefined);
};