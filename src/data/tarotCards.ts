import { TarotCard, ArcanaType } from '@/types';

// 大阿卡纳 22张
const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: '愚者',
    nameEn: 'The Fool',
    arcana: 'major',
    number: 0,
    element: 'air',
    keywords: ['新开始', '冒险', '天真', '自由'],
    uprightMeaning: '新的旅程即将开始，保持开放的心态，相信宇宙的安排',
    reversedMeaning: '鲁莽行事，缺乏计划，需要更多的谨慎',
    description: '愚者代表着无限的可能性和新开始的勇气'
  },
  {
    id: 1,
    name: '魔术师',
    nameEn: 'The Magician',
    arcana: 'major',
    number: 1,
    element: 'air',
    keywords: ['创造力', '意志力', '技能', '开始'],
    uprightMeaning: '你拥有实现目标所需的一切资源，相信自己的能力',
    reversedMeaning: '天赋被浪费，需要找到正确的方向',
    description: '魔术师象征着将想法转化为现实的能力'
  },
  {
    id: 2,
    name: '女祭司',
    nameEn: 'The High Priestess',
    arcana: 'major',
    number: 2,
    element: 'water',
    keywords: ['直觉', '神秘', '潜意识', '内在智慧'],
    uprightMeaning: '倾听内心的声音，答案就在你的潜意识中',
    reversedMeaning: '忽视直觉，被表象所迷惑',
    description: '女祭司守护着神秘之门，揭示隐藏的真相'
  },
  {
    id: 3,
    name: '女皇',
    nameEn: 'The Empress',
    arcana: 'major',
    number: 3,
    element: 'earth',
    keywords: ['丰饶', '母性', '创造', '自然'],
    uprightMeaning: '创造与成长的力量正在孕育，享受生活的美好',
    reversedMeaning: '创意受阻，需要重新连接内在的女性能量',
    description: '女皇代表着大地的丰饶和生命的创造力'
  },
  {
    id: 4,
    name: '皇帝',
    nameEn: 'The Emperor',
    arcana: 'major',
    number: 4,
    element: 'fire',
    keywords: ['权威', '结构', '控制', '父性'],
    uprightMeaning: '是时候建立秩序，承担领导责任',
    reversedMeaning: '过度控制，或缺乏自律',
    description: '皇帝象征着秩序、权威和保护的力量'
  },
  {
    id: 5,
    name: '教皇',
    nameEn: 'The Hierophant',
    arcana: 'major',
    number: 5,
    element: 'earth',
    keywords: ['传统', '信仰', '教育', '精神指引'],
    uprightMeaning: '寻求精神上的指引，遵循内心的道德准则',
    reversedMeaning: '打破传统，寻找自己的道路',
    description: '教皇连接世俗与神圣，传递古老的智慧'
  },
  {
    id: 6,
    name: '恋人',
    nameEn: 'The Lovers',
    arcana: 'major',
    number: 6,
    element: 'air',
    keywords: ['爱情', '选择', '和谐', '价值观'],
    uprightMeaning: '重要的选择出现在面前，倾听内心的声音',
    reversedMeaning: '价值观冲突，关系中的不和谐',
    description: '恋人代表着爱与选择的力量'
  },
  {
    id: 7,
    name: '战车',
    nameEn: 'The Chariot',
    arcana: 'major',
    number: 7,
    element: 'water',
    keywords: ['意志', '决心', '胜利', '控制'],
    uprightMeaning: '坚定的意志将带领你冲破障碍，取得胜利',
    reversedMeaning: '失去方向，内心冲突',
    description: '战车象征着通过决心和意志力获得胜利'
  },
  {
    id: 8,
    name: '力量',
    nameEn: 'Strength',
    arcana: 'major',
    number: 8,
    element: 'fire',
    keywords: ['勇气', '耐心', '内在力量', '慈悲'],
    uprightMeaning: '真正的力量来自内心的平静与坚定，温柔地相信自己',
    reversedMeaning: '自我怀疑，缺乏信心',
    description: '力量牌揭示了内在的勇气和温柔的力量'
  },
  {
    id: 9,
    name: '隐士',
    nameEn: 'The Hermit',
    arcana: 'major',
    number: 9,
    element: 'earth',
    keywords: ['内省', '孤独', '智慧', '指引'],
    uprightMeaning: '独处时刻带来深刻的洞见，向内寻找答案',
    reversedMeaning: '过度隔离，拒绝帮助',
    description: '隐士照亮内在之路，指引灵魂的探索'
  },
  {
    id: 10,
    name: '命运之轮',
    nameEn: 'Wheel of Fortune',
    arcana: 'major',
    number: 10,
    element: 'fire',
    keywords: ['命运', '转折', '循环', '机遇'],
    uprightMeaning: '命运之轮转动，变化即将到来，抓住机遇',
    reversedMeaning: '运势低落，但这是暂时的',
    description: '命运之轮象征生命的循环和宇宙的法则'
  },
  {
    id: 11,
    name: '正义',
    nameEn: 'Justice',
    arcana: 'major',
    number: 11,
    element: 'air',
    keywords: ['公正', '真相', '因果', '平衡'],
    uprightMeaning: '公正将得到伸张，诚实地面对自己',
    reversedMeaning: '不公正，逃避责任',
    description: '正义手持天平，维护宇宙的平衡'
  },
  {
    id: 12,
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    arcana: 'major',
    number: 12,
    element: 'water',
    keywords: ['牺牲', '等待', '新视角', '放下'],
    uprightMeaning: '暂时的停滞带来新的视角，放下执念',
    reversedMeaning: '无谓的牺牲，拒绝放手',
    description: '倒吊人通过牺牲获得更高层面的洞见'
  },
  {
    id: 13,
    name: '死神',
    nameEn: 'Death',
    arcana: 'major',
    number: 13,
    element: 'water',
    keywords: ['结束', '转化', '重生', '放下'],
    uprightMeaning: '旧的篇章即将结束，新的开始正在孕育',
    reversedMeaning: '抗拒改变，无法放手',
    description: '死神不是终结，而是转化与重生的象征'
  },
  {
    id: 14,
    name: '节制',
    nameEn: 'Temperance',
    arcana: 'major',
    number: 14,
    element: 'fire',
    keywords: ['平衡', '耐心', '和谐', '适度'],
    uprightMeaning: '保持耐心，在极端之间找到平衡点',
    reversedMeaning: '失去平衡，过度或不足',
    description: '节制天使调和对立，创造和谐'
  },
  {
    id: 15,
    name: '恶魔',
    nameEn: 'The Devil',
    arcana: 'major',
    number: 15,
    element: 'earth',
    keywords: ['束缚', '诱惑', '物质', '阴影'],
    uprightMeaning: '面对内心的恐惧与执念，认识到束缚来自自己',
    reversedMeaning: '挣脱枷锁，重获自由',
    description: '恶魔揭示我们被困住的领域，但钥匙就在手中'
  },
  {
    id: 16,
    name: '塔',
    nameEn: 'The Tower',
    arcana: 'major',
    number: 16,
    element: 'fire',
    keywords: ['突变', '觉醒', '毁灭', '重建'],
    uprightMeaning: '虚假的结构正在崩塌，这是为了重建更坚实的基础',
    reversedMeaning: '抗拒改变，延迟必然的变革',
    description: '塔的闪电带来觉醒，摧毁虚假让真实显现'
  },
  {
    id: 17,
    name: '星星',
    nameEn: 'The Star',
    arcana: 'major',
    number: 17,
    element: 'air',
    keywords: ['希望', '灵感', '治愈', '信念'],
    uprightMeaning: '黑暗终将过去，希望的光芒正在照耀你',
    reversedMeaning: '失去希望，但光芒仍在',
    description: '星星是风雨后的希望之光，带来治愈与灵感'
  },
  {
    id: 18,
    name: '月亮',
    nameEn: 'The Moon',
    arcana: 'major',
    number: 18,
    element: 'water',
    keywords: ['幻觉', '潜意识', '恐惧', '直觉'],
    uprightMeaning: '事情并非表象所见，倾听潜意识的信息',
    reversedMeaning: '恐惧被释放，真相显现',
    description: '月亮照亮黑夜，揭示隐藏的真相与恐惧'
  },
  {
    id: 19,
    name: '太阳',
    nameEn: 'The Sun',
    arcana: 'major',
    number: 19,
    element: 'fire',
    keywords: ['成功', '喜悦', '活力', '光明'],
    uprightMeaning: '光明正在照耀，成功与喜悦即将到来',
    reversedMeaning: '暂时的阴霾，但阳光依然存在',
    description: '太阳是塔罗中最积极的牌，象征纯粹的光明'
  },
  {
    id: 20,
    name: '审判',
    nameEn: 'Judgement',
    arcana: 'major',
    number: 20,
    element: 'fire',
    keywords: ['重生', '觉醒', '召唤', '反省'],
    uprightMeaning: '灵魂的召唤正在响起，是时候觉醒和重生',
    reversedMeaning: '忽视内心的召唤，拒绝改变',
    description: '审判天使吹响号角，召唤灵魂的觉醒'
  },
  {
    id: 21,
    name: '世界',
    nameEn: 'The World',
    arcana: 'major',
    number: 21,
    element: 'earth',
    keywords: ['完成', '整合', '成就', '圆满'],
    uprightMeaning: '一个完整的循环即将完成，庆祝你的成就',
    reversedMeaning: '接近完成但还需努力',
    description: '世界代表旅程的终点与新的开始'
  }
];

// 权杖牌组（火元素）14张
const wands: TarotCard[] = [
  {
    id: 22, name: '权杖一', nameEn: 'Ace of Wands', arcana: 'wands', number: 1, element: 'fire',
    keywords: ['创意', '灵感', '新开始', '潜能'],
    uprightMeaning: '新的创意火花正在点燃，抓住这个灵感',
    reversedMeaning: '创意受阻，延迟的新开始',
    description: '权杖一代表着创意的火种和无限潜能'
  },
  {
    id: 23, name: '权杖二', nameEn: 'Two of Wands', arcana: 'wands', number: 2, element: 'fire',
    keywords: ['计划', '决定', '进展', '发现'],
    uprightMeaning: '站在十字路口，是时候做出重要的决定',
    reversedMeaning: '害怕改变，停留在舒适区',
    description: '权杖二象征着面对选择时的深思熟虑'
  },
  {
    id: 24, name: '权杖三', nameEn: 'Three of Wands', arcana: 'wands', number: 3, element: 'fire',
    keywords: ['扩展', '远见', '探索', '机会'],
    uprightMeaning: '你的计划正在展开，更广阔的视野在等待你',
    reversedMeaning: '进展受阻，需要重新评估',
    description: '权杖三代表着远见卓识和成功的扩展'
  },
  {
    id: 25, name: '权杖四', nameEn: 'Four of Wands', arcana: 'wands', number: 4, element: 'fire',
    keywords: ['庆祝', '和谐', '家', '稳定'],
    uprightMeaning: '值得庆祝的时刻，享受成果与和谐',
    reversedMeaning: '缺乏稳定，家庭或社区的困扰',
    description: '权杖四象征着欢庆和稳固的基础'
  },
  {
    id: 26, name: '权杖五', nameEn: 'Five of Wands', arcana: 'wands', number: 5, element: 'fire',
    keywords: ['冲突', '竞争', '挑战', '分歧'],
    uprightMeaning: '竞争与冲突正在考验你，保持冷静',
    reversedMeaning: '避免冲突，或内部斗争',
    description: '权杖五揭示了竞争和意见分歧的局面'
  },
  {
    id: 27, name: '权杖六', nameEn: 'Six of Wands', arcana: 'wands', number: 6, element: 'fire',
    keywords: ['胜利', '荣誉', '认可', '成功'],
    uprightMeaning: '你的努力得到认可，享受胜利的荣耀',
    reversedMeaning: '骄傲自大，或缺乏认可',
    description: '权杖六象征着公开的胜利和荣誉'
  },
  {
    id: 28, name: '权杖七', nameEn: 'Seven of Wands', arcana: 'wands', number: 7, element: 'fire',
    keywords: ['防御', '坚持', '挑战', '勇气'],
    uprightMeaning: '坚持你的立场，勇气将带领你度过难关',
    reversedMeaning: '放弃立场，感到不堪重负',
    description: '权杖七代表着为信念而战的勇气'
  },
  {
    id: 29, name: '权杖八', nameEn: 'Eight of Wands', arcana: 'wands', number: 8, element: 'fire',
    keywords: ['速度', '行动', '进展', '旅行'],
    uprightMeaning: '事情正在快速发展，行动的时刻已到',
    reversedMeaning: '延误，等待时机',
    description: '权杖八象征着快速的行动和进展'
  },
  {
    id: 30, name: '权杖九', nameEn: 'Nine of Wands', arcana: 'wands', number: 9, element: 'fire',
    keywords: ['坚韧', '勇气', '坚持', '警惕'],
    uprightMeaning: '你已经历许多，但仍有力量继续坚持',
    reversedMeaning: '精疲力竭，失去斗志',
    description: '权杖九代表着不屈不挠的坚韧精神'
  },
  {
    id: 31, name: '权杖十', nameEn: 'Ten of Wands', arcana: 'wands', number: 10, element: 'fire',
    keywords: ['负担', '责任', '压力', '坚持'],
    uprightMeaning: '责任重大，但这是你自己选择的道路',
    reversedMeaning: '卸下重担，学会委托',
    description: '权杖十提醒我们承担过多时需要学会放下'
  },
  {
    id: 32, name: '权杖侍从', nameEn: 'Page of Wands', arcana: 'wands', number: 11, element: 'fire',
    keywords: ['探索', '热情', '发现', '消息'],
    uprightMeaning: '新奇的灵感正在萌芽，保持热情探索',
    reversedMeaning: '缺乏方向，或坏消息',
    description: '权杖侍从带来探索的热情和新的可能'
  },
  {
    id: 33, name: '权杖骑士', nameEn: 'Knight of Wands', arcana: 'wands', number: 12, element: 'fire',
    keywords: ['行动', '冒险', '冲动', '激情'],
    uprightMeaning: '充满激情的行动者，勇敢追求目标',
    reversedMeaning: '鲁莽行事，或失去热情',
    description: '权杖骑士代表着充满激情和冒险精神'
  },
  {
    id: 34, name: '权杖王后', nameEn: 'Queen of Wands', arcana: 'wands', number: 13, element: 'fire',
    keywords: ['自信', '热情', '独立', '魅力'],
    uprightMeaning: '内在的自信和魅力正在闪耀，相信自己的力量',
    reversedMeaning: '失去自信，或过度强势',
    description: '权杖王后是热情与自信的化身'
  },
  {
    id: 35, name: '权杖国王', nameEn: 'King of Wands', arcana: 'wands', number: 14, element: 'fire',
    keywords: ['领导', '愿景', '企业家', '魅力'],
    uprightMeaning: '以愿景和热情领导他人，实现雄心壮志',
    reversedMeaning: '独断专行，或失去方向',
    description: '权杖国王代表着具有远见的领导者'
  }
];

// 圣杯牌组（水元素）14张
const cups: TarotCard[] = [
  {
    id: 36, name: '圣杯一', nameEn: 'Ace of Cups', arcana: 'cups', number: 1, element: 'water',
    keywords: ['爱', '情感', '直觉', '灵性'],
    uprightMeaning: '爱的能量正在流动，新的情感开始',
    reversedMeaning: '情感阻塞，或失去爱的能力',
    description: '圣杯一代表着纯粹的爱和情感的流动'
  },
  {
    id: 37, name: '圣杯二', nameEn: 'Two of Cups', arcana: 'cups', number: 2, element: 'water',
    keywords: ['连接', '伙伴', '和谐', '吸引'],
    uprightMeaning: '真诚的连接正在形成，关系中的和谐',
    reversedMeaning: '关系失衡，或分离',
    description: '圣杯二象征着两颗心的真诚连接'
  },
  {
    id: 38, name: '圣杯三', nameEn: 'Three of Cups', arcana: 'cups', number: 3, element: 'water',
    keywords: ['友谊', '庆祝', '社区', '欢乐'],
    uprightMeaning: '与朋友分享欢乐，珍惜友情的美好',
    reversedMeaning: '社交过度，或疏远朋友',
    description: '圣杯三代表着友谊和社区的欢庆'
  },
  {
    id: 39, name: '圣杯四', nameEn: 'Four of Cups', arcana: 'cups', number: 4, element: 'water',
    keywords: ['冷漠', '冥想', '忽视', '不满'],
    uprightMeaning: '对外在的机会视而不见，需要重新审视',
    reversedMeaning: '新的意识，打破冷漠',
    description: '圣杯四提醒我们不要忽视身边的机会'
  },
  {
    id: 40, name: '圣杯五', nameEn: 'Five of Cups', arcana: 'cups', number: 5, element: 'water',
    keywords: ['失落', '悲伤', '遗憾', '接受'],
    uprightMeaning: '不要只看到失去的，还有留下的值得珍惜',
    reversedMeaning: '接受失去，向前看',
    description: '圣杯五教导我们从失落中看到希望'
  },
  {
    id: 41, name: '圣杯六', nameEn: 'Six of Cups', arcana: 'cups', number: 6, element: 'water',
    keywords: ['怀旧', '童年', '纯真', '回忆'],
    uprightMeaning: '美好的回忆带来温暖，但也要活在当下',
    reversedMeaning: '沉溺过去，或与过去和解',
    description: '圣杯六代表着纯真的回忆和怀旧之情'
  },
  {
    id: 42, name: '圣杯七', nameEn: 'Seven of Cups', arcana: 'cups', number: 7, element: 'water',
    keywords: ['幻想', '选择', '幻觉', '想象'],
    uprightMeaning: '众多选择让人迷惑，需要分辨真实与幻想',
    reversedMeaning: '做出选择，或面对现实',
    description: '圣杯七提醒我们在众多可能性中做出清醒选择'
  },
  {
    id: 43, name: '圣杯八', nameEn: 'Eight of Cups', arcana: 'cups', number: 8, element: 'water',
    keywords: ['离开', '放弃', '寻找', '转变'],
    uprightMeaning: '离开不再滋养你的事物，寻找更深的意义',
    reversedMeaning: '逃避，或拒绝前行',
    description: '圣杯八代表着寻找内心真正渴望的勇气'
  },
  {
    id: 44, name: '圣杯九', nameEn: 'Nine of Cups', arcana: 'cups', number: 9, element: 'water',
    keywords: ['满足', '愿望', '感恩', '幸福'],
    uprightMeaning: '愿望正在实现，享受内心的满足感',
    reversedMeaning: '不满足，或物质主义',
    description: '圣杯九被称为"愿望牌"，代表满足和幸福'
  },
  {
    id: 45, name: '圣杯十', nameEn: 'Ten of Cups', arcana: 'cups', number: 10, element: 'water',
    keywords: ['家庭', '和谐', '幸福', '圆满'],
    uprightMeaning: '情感生活的圆满，家庭的幸福和谐',
    reversedMeaning: '家庭问题，或破裂的关系',
    description: '圣杯十代表着家庭的幸福和情感的圆满'
  },
  {
    id: 46, name: '圣杯侍从', nameEn: 'Page of Cups', arcana: 'cups', number: 11, element: 'water',
    keywords: ['创意', '直觉', '消息', '敏感'],
    uprightMeaning: '情感的觉醒，或来自内心的灵感',
    reversedMeaning: '情感不成熟，或拒绝感受',
    description: '圣杯侍从带来情感的敏锐和创意灵感'
  },
  {
    id: 47, name: '圣杯骑士', nameEn: 'Knight of Cups', arcana: 'cups', number: 12, element: 'water',
    keywords: ['浪漫', '魅力', '理想主义', '追求'],
    uprightMeaning: '浪漫的追求者，跟随内心的指引',
    reversedMeaning: '不切实际，或情绪化',
    description: '圣杯骑士是浪漫与理想主义的追求者'
  },
  {
    id: 48, name: '圣杯王后', nameEn: 'Queen of Cups', arcana: 'cups', number: 13, element: 'water',
    keywords: ['同情', '直觉', '情感', '滋养'],
    uprightMeaning: '深刻的直觉和同情心，倾听内心',
    reversedMeaning: '情感依赖，或过度敏感',
    description: '圣杯王后是直觉与情感的化身'
  },
  {
    id: 49, name: '圣杯国王', nameEn: 'King of Cups', arcana: 'cups', number: 14, element: 'water',
    keywords: ['平衡', '外交', '冷静', '智慧'],
    uprightMeaning: '情感的掌控者，平衡理性与感性',
    reversedMeaning: '情感压抑，或情绪化',
    description: '圣杯国王代表着情感的成熟与平衡'
  }
];

// 宝剑牌组（风元素）14张
const swords: TarotCard[] = [
  {
    id: 50, name: '宝剑一', nameEn: 'Ace of Swords', arcana: 'swords', number: 1, element: 'air',
    keywords: ['清晰', '突破', '真相', '力量'],
    uprightMeaning: '思想的突破，真相即将显现',
    reversedMeaning: '混乱，或错过真相',
    description: '宝剑一代表着思想的清晰和真相的力量'
  },
  {
    id: 51, name: '宝剑二', nameEn: 'Two of Swords', arcana: 'swords', number: 2, element: 'air',
    keywords: ['僵局', '选择', '回避', '平衡'],
    uprightMeaning: '两难的局面需要勇气做出决定',
    reversedMeaning: '打破僵局，或被信息淹没',
    description: '宝剑二象征着需要做出选择的困境'
  },
  {
    id: 52, name: '宝剑三', nameEn: 'Three of Swords', arcana: 'swords', number: 3, element: 'air',
    keywords: ['心碎', '悲伤', '痛苦', '释放'],
    uprightMeaning: '痛苦带来成长，让悲伤流动',
    reversedMeaning: '疗愈开始，或拒绝释怀',
    description: '宝剑三揭示心灵的痛苦和必要的释放'
  },
  {
    id: 53, name: '宝剑四', nameEn: 'Four of Swords', arcana: 'swords', number: 4, element: 'air',
    keywords: ['休息', '恢复', '冥想', '平静'],
    uprightMeaning: '是时候休息和恢复了，暂时远离纷争',
    reversedMeaning: '恢复活力，或过度休息',
    description: '宝剑四提醒我们休息是必要的'
  },
  {
    id: 54, name: '宝剑五', nameEn: 'Five of Swords', arcana: 'swords', number: 5, element: 'air',
    keywords: ['冲突', '失败', '自私', '空胜利'],
    uprightMeaning: '胜利可能是空洞的，反思真正重要的是什么',
    reversedMeaning: '和解，或走出冲突',
    description: '宝剑五揭示了冲突和自私的代价'
  },
  {
    id: 55, name: '宝剑六', nameEn: 'Six of Swords', arcana: 'swords', number: 6, element: 'air',
    keywords: ['转变', '过渡', '离开', '平静'],
    uprightMeaning: '离开动荡的水域，向更平静的方向前进',
    reversedMeaning: '被困住，或抗拒改变',
    description: '宝剑六代表着从困境走向平静的过渡'
  },
  {
    id: 56, name: '宝剑七', nameEn: 'Seven of Swords', arcana: 'swords', number: 7, element: 'air',
    keywords: ['策略', '欺骗', '狡猾', '独自行动'],
    uprightMeaning: '需要运用策略，但要注意方式是否正当',
    reversedMeaning: '被揭穿，或改过自新',
    description: '宝剑七提醒我们策略与诚实之间的平衡'
  },
  {
    id: 57, name: '宝剑八', nameEn: 'Eight of Swords', arcana: 'swords', number: 8, element: 'air',
    keywords: ['困境', '自我限制', '受害者', '限制'],
    uprightMeaning: '困境多来自自己的思想，释放自己',
    reversedMeaning: '解脱，或自我解放',
    description: '宝剑八揭示我们如何被自己的思想所困'
  },
  {
    id: 58, name: '宝剑九', nameEn: 'Nine of Swords', arcana: 'swords', number: 9, element: 'air',
    keywords: ['焦虑', '噩梦', '恐惧', '担忧'],
    uprightMeaning: '恐惧在夜间放大，白天会看到希望',
    reversedMeaning: '克服恐惧，或走出黑暗',
    description: '宝剑九代表着内心的恐惧和焦虑'
  },
  {
    id: 59, name: '宝剑十', nameEn: 'Ten of Swords', arcana: 'swords', number: 10, element: 'air',
    keywords: ['结束', '失败', '痛苦', '重生'],
    uprightMeaning: '痛苦的结束，黎明即将到来',
    reversedMeaning: '恢复，或避免最坏结果',
    description: '宝剑十象征着彻底的结束和新生的可能'
  },
  {
    id: 60, name: '宝剑侍从', nameEn: 'Page of Swords', arcana: 'swords', number: 11, element: 'air',
    keywords: ['好奇', '消息', '机智', '观察'],
    uprightMeaning: '新的想法和信息正在到来，保持好奇',
    reversedMeaning: '八卦，或思维混乱',
    description: '宝剑侍从带来好奇和敏锐的观察力'
  },
  {
    id: 61, name: '宝剑骑士', nameEn: 'Knight of Swords', arcana: 'swords', number: 12, element: 'air',
    keywords: ['行动', '冲动', '野心', '直接'],
    uprightMeaning: '果断行动，直接追求目标',
    reversedMeaning: '鲁莽，或失去方向',
    description: '宝剑骑士代表着果断和直接的行动'
  },
  {
    id: 62, name: '宝剑王后', nameEn: 'Queen of Swords', arcana: 'swords', number: 13, element: 'air',
    keywords: ['独立', '清晰', '直接', '理性'],
    uprightMeaning: '以清晰和理性的思维面对问题',
    reversedMeaning: '冷酷，或过于批判',
    description: '宝剑王后是独立和理性思考的象征'
  },
  {
    id: 63, name: '宝剑国王', nameEn: 'King of Swords', arcana: 'swords', number: 14, element: 'air',
    keywords: ['权威', '真相', '标准', '智慧'],
    uprightMeaning: '以智慧和公正做出决定，坚守原则',
    reversedMeaning: '权力滥用，或冷漠',
    description: '宝剑国王代表着智慧和公正的权威'
  }
];

// 星币牌组（土元素）14张
const pentacles: TarotCard[] = [
  {
    id: 64, name: '星币一', nameEn: 'Ace of Pentacles', arcana: 'pentacles', number: 1, element: 'earth',
    keywords: ['机会', '财富', '新开始', '实质'],
    uprightMeaning: '物质或财务的新机会正在呈现',
    reversedMeaning: '错失机会，或财务问题',
    description: '星币一代表着物质世界的新机会和潜能'
  },
  {
    id: 65, name: '星币二', nameEn: 'Two of Pentacles', arcana: 'pentacles', number: 2, element: 'earth',
    keywords: ['平衡', '适应', '灵活', '多变'],
    uprightMeaning: '需要在多个事务间保持平衡和灵活',
    reversedMeaning: '失去平衡，或财务压力',
    description: '星币二象征着生活中的平衡和灵活应变'
  },
  {
    id: 66, name: '星币三', nameEn: 'Three of Pentacles', arcana: 'pentacles', number: 3, element: 'earth',
    keywords: ['合作', '技能', '团队', '学习'],
    uprightMeaning: '与他人合作带来成功，继续学习提升',
    reversedMeaning: '缺乏团队精神，或技能不足',
    description: '星币三代表着团队合作和技能发展'
  },
  {
    id: 67, name: '星币四', nameEn: 'Four of Pentacles', arcana: 'pentacles', number: 4, element: 'earth',
    keywords: ['控制', '安全', '保守', '执着'],
    uprightMeaning: '对安全的需求，但不要过于执着',
    reversedMeaning: '放手，或过度挥霍',
    description: '星币四提醒我们在安全与自由间找平衡'
  },
  {
    id: 68, name: '星币五', nameEn: 'Five of Pentacles', arcana: 'pentacles', number: 5, element: 'earth',
    keywords: ['困难', '贫穷', '孤立', '失去'],
    uprightMeaning: '物质或精神上的困难是暂时的',
    reversedMeaning: '恢复，或接受帮助',
    description: '星币五揭示了困境，但也提醒希望存在'
  },
  {
    id: 69, name: '星币六', nameEn: 'Six of Pentacles', arcana: 'pentacles', number: 6, element: 'earth',
    keywords: ['慷慨', '分享', '给予', '接受'],
    uprightMeaning: '给予和接受的平衡，慷慨带来丰盛',
    reversedMeaning: '不平等，或自我牺牲',
    description: '星币六代表着慷慨和资源的平衡流动'
  },
  {
    id: 70, name: '星币七', nameEn: 'Seven of Pentacles', arcana: 'pentacles', number: 7, element: 'earth',
    keywords: ['耐心', '投资', '等待', '评估'],
    uprightMeaning: '付出需要时间收获，耐心等待',
    reversedMeaning: '缺乏耐心，或付出无果',
    description: '星币七提醒我们好结果需要时间'
  },
  {
    id: 71, name: '星币八', nameEn: 'Eight of Pentacles', arcana: 'pentacles', number: 8, element: 'earth',
    keywords: ['技能', '专注', '努力', '工匠'],
    uprightMeaning: '专注提升技能，努力终将带来成果',
    reversedMeaning: '缺乏专注，或技能停滞',
    description: '星币八代表着专注工作和技能精进'
  },
  {
    id: 72, name: '星币九', nameEn: 'Nine of Pentacles', arcana: 'pentacles', number: 9, element: 'earth',
    keywords: ['丰盛', '独立', '享受', '成就'],
    uprightMeaning: '享受劳动的成果，独立而丰盛',
    reversedMeaning: '过度工作，或财务不稳',
    description: '星币九象征着独立和物质上的丰盛'
  },
  {
    id: 73, name: '星币十', nameEn: 'Ten of Pentacles', arcana: 'pentacles', number: 10, element: 'earth',
    keywords: ['传承', '家族', '财富', '稳定'],
    uprightMeaning: '长期的稳定和丰盛，家族的支持',
    reversedMeaning: '家庭问题，或失去根基',
    description: '星币十代表着持久的丰盛和家族传承'
  },
  {
    id: 74, name: '星币侍从', nameEn: 'Page of Pentacles', arcana: 'pentacles', number: 11, element: 'earth',
    keywords: ['学习', '机会', '计划', '实际'],
    uprightMeaning: '新的学习或财务机会，务实规划',
    reversedMeaning: '缺乏计划，或错过机会',
    description: '星币侍从带来务实的学习和新机会'
  },
  {
    id: 75, name: '星币骑士', nameEn: 'Knight of Pentacles', arcana: 'pentacles', number: 12, element: 'earth',
    keywords: ['勤奋', '可靠', '常规', '耐心'],
    uprightMeaning: '踏实努力，稳步前进',
    reversedMeaning: '停滞不前，或过于保守',
    description: '星币骑士代表着勤奋和可靠的行动'
  },
  {
    id: 76, name: '星币王后', nameEn: 'Queen of Pentacles', arcana: 'pentacles', number: 13, element: 'earth',
    keywords: ['务实', '滋养', '安全', '舒适'],
    uprightMeaning: '创造舒适和安全感，滋养自己和他人',
    reversedMeaning: '过度物质，或忽视需求',
    description: '星币王后是务实和滋养的化身'
  },
  {
    id: 77, name: '星币国王', nameEn: 'King of Pentacles', arcana: 'pentacles', number: 14, element: 'earth',
    keywords: ['财富', '成功', '领导', '稳定'],
    uprightMeaning: '物质成功和稳定，智慧的财务管理',
    reversedMeaning: '贪婪，或财务问题',
    description: '星币国王代表着物质成功和稳定的领导力'
  }
];

export const tarotCards: TarotCard[] = [
  ...majorArcana,
  ...wands,
  ...cups,
  ...swords,
  ...pentacles
];

export const getCardById = (id: number): TarotCard | undefined => {
  return tarotCards.find(card => card.id === id);
};

export const getCardsByArcana = (arcana: ArcanaType): TarotCard[] => {
  return tarotCards.filter(card => card.arcana === arcana);
};

export const shuffleDeck = (): TarotCard[] => {
  const deck = [...tarotCards];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};