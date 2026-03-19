import { DrawnCard, ElementAnalysis, Guidance, QuestionType } from '@/types';

// 元素关键词映射
const elementKeywords: Record<string, string[]> = {
  fire: ['行动', '激情', '创造', '勇气', '热情'],
  water: ['情感', '直觉', '关系', '感受', '内心'],
  air: ['思维', '沟通', '真相', '理性', '智慧'],
  earth: ['物质', '现实', '稳定', '实际', '安全']
};

// 元素解读模板
const elementInterpretations: Record<string, string> = {
  fire: '火元素主导，宇宙提示你需要主动出击，相信直觉，用热情点燃行动。',
  water: '水元素主导，倾听内心的声音，关注感受与情感的流动。',
  air: '风元素主导，理性分析当下，寻求真相与智慧。',
  earth: '土元素主导，脚踏实地，关注实际的行动和稳定的基础。'
};

// 问题类型解读模板
const questionTypeGuidance: Record<QuestionType, { action: string; caution: string; timing: string }> = {
  love: {
    action: '在感情中保持真诚，勇敢表达自己的心意。',
    caution: '不要因为恐惧而封闭心扉，也不要过度期待。',
    timing: '当下是培养感情的好时机，保持开放的心态。'
  },
  career: {
    action: '专注于你的目标，用行动证明自己的价值。',
    caution: '避免冲动决策，重要决定需要深思熟虑。',
    timing: '机会正在接近，做好准备迎接新的挑战。'
  },
  study: {
    action: '保持专注和耐心，持续的学习将带来进步。',
    caution: '不要急于求成，扎实的基础更为重要。',
    timing: '这是积累知识和提升自我的好时期。'
  },
  wealth: {
    action: '审慎管理资源，寻找稳定的增长方式。',
    caution: '避免冲动消费和高风险投资。',
    timing: '财运需要耐心经营，稳中求进是上策。'
  },
  health: {
    action: '关注身心平衡，适当休息和运动。',
    caution: '不要忽视身体的信号，及时调整。',
    timing: '疗愈需要时间，给自己足够的耐心。'
  },
  relationship: {
    action: '真诚沟通是改善关系的关键。',
    caution: '避免指责和抱怨，理解对方的立场。',
    timing: '关系的发展需要双方的努力和耐心。'
  }
};

// 分析元素分布
export const analyzeElements = (drawnCards: DrawnCard[]): ElementAnalysis => {
  const counts = { fire: 0, water: 0, air: 0, earth: 0 };
  
  drawnCards.forEach(({ card }) => {
    if (card.element) {
      counts[card.element]++;
    }
  });

  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  const maxElement = Object.entries(counts)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])[0];

  return {
    ...counts,
    dominant: maxElement ? maxElement[0] as ElementAnalysis['dominant'] : null,
    interpretation: maxElement 
      ? elementInterpretations[maxElement[0]] 
      : '元素分布均衡，各方面能量协调发展。'
  };
};

// 生成单牌解读
export const generateCardReading = (
  card: DrawnCard['card'], 
  orientation: DrawnCard['orientation'],
  positionName: string,
  questionType: QuestionType
): string => {
  const meaning = orientation === 'upright' 
    ? card.uprightMeaning 
    : card.reversedMeaning;
  
  const orientationText = orientation === 'upright' ? '正位' : '逆位';
  
  return `${positionName}位置的${card.name}（${orientationText}）：${meaning}`;
};

// 生成综合解读
export const generateOverallReading = (
  drawnCards: DrawnCard[],
  question: string,
  questionType: QuestionType
): string => {
  const positionReadings = drawnCards.map(({ card, orientation, positionName }) => {
    const meaning = orientation === 'upright' ? card.uprightMeaning : card.reversedMeaning;
    return `**${positionName}**：${card.name}带来的是——${meaning}`;
  }).join('\n\n');

  const firstCard = drawnCards[0];
  const lastCard = drawnCards[drawnCards.length - 1];
  
  const summary = drawnCards.length > 1 
    ? `从${firstCard.card.name}到${lastCard.card.name}，牌面揭示了一条清晰的路径。`
    : `${firstCard.card.name}是宇宙给你的指引。`;

  return `针对你关于"${question}"的困惑，塔罗牌给出了这样的启示：\n\n${summary}\n\n${positionReadings}`;
};

// 生成行动建议
export const generateGuidance = (
  drawnCards: DrawnCard[],
  questionType: QuestionType
): Guidance => {
  const baseGuidance = questionTypeGuidance[questionType];
  
  // 根据牌面调整建议
  const hasMajorArcana = drawnCards.some(d => d.card.arcana === 'major');
  const hasReversed = drawnCards.some(d => d.orientation === 'reversed');
  
  let action = baseGuidance.action;
  let caution = baseGuidance.caution;
  let timing = baseGuidance.timing;

  if (hasMajorArcana) {
    action = '这是一个重要的转折点。' + action;
  }

  if (hasReversed) {
    caution = '注意潜在的阻碍，' + caution.toLowerCase();
  }

  return { action, caution, timing };
};

// 完整解读生成
export const generateFullReading = (
  drawnCards: DrawnCard[],
  question: string,
  questionType: QuestionType
) => {
  const elementAnalysis = analyzeElements(drawnCards);
  const overallReading = generateOverallReading(drawnCards, question, questionType);
  const guidance = generateGuidance(drawnCards, questionType);

  const cardReadings = drawnCards.map(({ card, orientation, positionName }) => ({
    card,
    orientation,
    positionName,
    reading: generateCardReading(card, orientation, positionName, questionType)
  }));

  return {
    cardReadings,
    elementAnalysis,
    overallReading,
    guidance
  };
};