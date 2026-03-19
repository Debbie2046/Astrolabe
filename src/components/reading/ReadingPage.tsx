'use client';

import { useState, useEffect } from 'react';
import { useReadingStore } from '@/stores/readingStore';
import { generateFullReading } from '@/lib/readingEngine';
import GlassButton from '@/components/common/GlassButton';
import GlassCard from '@/components/common/GlassCard';
import MysticBackground from '@/components/common/MysticBackground';

export default function ReadingPage() {
  const { 
    drawnCards, 
    question, 
    questionType, 
    selectedSpread,
    setStep,
    resetSession 
  } = useReadingStore();
  
  const [revealedCount, setRevealedCount] = useState(0);
  const [showReading, setShowReading] = useState(false);

  const reading = questionType 
    ? generateFullReading(drawnCards, question, questionType)
    : null;

  // 翻牌动画
  useEffect(() => {
    if (revealedCount < drawnCards.length) {
      const timer = setTimeout(() => {
        setRevealedCount(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else if (revealedCount === drawnCards.length && drawnCards.length > 0) {
      setTimeout(() => setShowReading(true), 500);
    }
  }, [revealedCount, drawnCards.length]);

  const handleStartOver = () => {
    resetSession();
    setStep('home');
  };

  if (!reading || !selectedSpread) {
    return (
      <MysticBackground>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-white">加载中...</p>
        </div>
      </MysticBackground>
    );
  }

  return (
    <MysticBackground>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">塔罗解读</h2>
            <p className="text-purple-200/60">针对你的问题：「{question}」</p>
          </div>

          {/* 牌面展示 */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {drawnCards.map((drawnCard, index) => {
              const isRevealed = index < revealedCount;
              const isReversed = drawnCard.orientation === 'reversed';
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ${
                    isRevealed ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div
                    className={`w-28 h-44 rounded-xl p-2 ${
                      isReversed ? 'bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border-purple-400/40' : 'bg-gradient-to-br from-amber-900/40 to-yellow-900/40 border-yellow-400/40'
                    } border shadow-xl`}
                    style={{
                      transform: isReversed ? 'rotate(180deg)' : 'none',
                    }}
                  >
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <p className="text-white font-bold text-sm mb-1" style={{ transform: isReversed ? 'rotate(180deg)' : 'none' }}>
                        {drawnCard.card.name}
                      </p>
                      <p className="text-purple-300/60 text-xs" style={{ transform: isReversed ? 'rotate(180deg)' : 'none' }}>
                        {drawnCard.positionName}
                      </p>
                      <span className="text-xs text-white/40 mt-1" style={{ transform: isReversed ? 'rotate(180deg)' : 'none' }}>
                        {isReversed ? '逆位' : '正位'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 详细解读 */}
          {showReading && (
            <div className="space-y-6 animate-fade-in">
              {/* 元素分析 */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">🔥 元素能量分析</h3>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {(['fire', 'water', 'air', 'earth'] as const).map((element) => {
                    const count = reading.elementAnalysis[element];
                    const labels = { fire: '🔥 火', water: '💧 水', air: '💨 风', earth: '🌍 土' };
                    return (
                      <div key={element} className="text-center">
                        <p className="text-white/60 text-sm">{labels[element]}</p>
                        <p className="text-2xl font-bold text-white">{count}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-purple-200/70">{reading.elementAnalysis.interpretation}</p>
              </GlassCard>

              {/* 单牌解读 */}
              {reading.cardReadings.map((cr, index) => (
                <GlassCard key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-24 rounded-lg flex items-center justify-center ${
                      cr.orientation === 'reversed' ? 'bg-purple-900/40' : 'bg-amber-900/30'
                    }`}>
                      <span className="text-white text-sm">{cr.card.name}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {cr.positionName} · {cr.orientation === 'upright' ? '正位' : '逆位'}
                      </h4>
                      <p className="text-purple-200/70">{cr.reading}</p>
                      <div className="flex gap-2 mt-2">
                        {cr.card.keywords.map((kw, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-purple-500/20 rounded text-purple-300">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}

              {/* 综合解读 */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">✨ 综合预言</h3>
                <div className="prose prose-invert">
                  {reading.overallReading.split('\n\n').map((para, i) => (
                    <p key={i} className="text-purple-200/70 mb-4">{para}</p>
                  ))}
                </div>
              </GlassCard>

              {/* 行动建议 */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">🌟 行动指引</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-purple-300/60 text-sm">行动建议</p>
                    <p className="text-white">{reading.guidance.action}</p>
                  </div>
                  <div>
                    <p className="text-purple-300/60 text-sm">注意事项</p>
                    <p className="text-white">{reading.guidance.caution}</p>
                  </div>
                  <div>
                    <p className="text-purple-300/60 text-sm">有利时机</p>
                    <p className="text-white">{reading.guidance.timing}</p>
                  </div>
                </div>
              </GlassCard>

              {/* 操作按钮 */}
              <div className="flex justify-center gap-4 pt-4">
                <GlassButton variant="secondary" onClick={handleStartOver}>
                  重新开始
                </GlassButton>
                <GlassButton onClick={() => setStep('question')}>
                  再问一个问题
                </GlassButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </MysticBackground>
  );
}