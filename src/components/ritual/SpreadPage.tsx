'use client';

import { useReadingStore } from '@/stores/readingStore';
import { getRecommendedSpreads } from '@/data/spreads';
import GlassButton from '@/components/common/GlassButton';
import GlassCard from '@/components/common/GlassCard';
import MysticBackground from '@/components/common/MysticBackground';

export default function SpreadPage() {
  const { questionType, selectedSpread, setSpread, setStep, initDeck } = useReadingStore();

  const recommendedSpreads = questionType ? getRecommendedSpreads(questionType) : [];

  const handleSelect = (spreadId: string) => {
    const spread = recommendedSpreads.find(s => s.id === spreadId);
    if (spread) {
      setSpread(spread);
    }
  };

  const handleNext = () => {
    if (selectedSpread) {
      initDeck();
      setStep('shuffle');
    }
  };

  return (
    <MysticBackground>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-12">
            <p className="text-purple-300/60 mb-4">✧ 第二步 ✧</p>
            <h2 className="text-3xl font-bold text-white mb-2">选择牌阵</h2>
            <p className="text-purple-200/60">根据你的问题，推荐以下牌阵</p>
          </div>

          {/* 牌阵选择 */}
          <div className="space-y-4 mb-8">
            {recommendedSpreads.map((spread, index) => (
              <GlassCard
                key={spread.id}
                hover
                className={`p-6 ${
                  selectedSpread?.id === spread.id ? 'ring-2 ring-purple-400/50 bg-purple-500/20' : ''
                }`}
                onClick={() => handleSelect(spread.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-purple-300/60 text-sm">推荐 #{index + 1}</span>
                      <span className="text-yellow-300/80 text-sm">
                        {'★'.repeat(spread.difficulty)}{'☆'.repeat(5 - spread.difficulty)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{spread.name}</h3>
                    <p className="text-purple-200/60 text-sm mb-3">{spread.description}</p>
                    <div className="flex items-center gap-4 text-sm text-purple-300/50">
                      <span>🎴 {spread.cardCount}张牌</span>
                      <span>📊 难度 {spread.difficulty}/5</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    {selectedSpread?.id === spread.id && (
                      <span className="text-purple-400 text-2xl">✓</span>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* 牌阵位置预览 */}
          {selectedSpread && (
            <GlassCard className="p-6 mb-8">
              <h4 className="text-lg font-bold text-white mb-4">牌位说明</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedSpread.positions.map((pos) => (
                  <div key={pos.position} className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">{pos.position}.</span>
                    <div>
                      <span className="text-white">{pos.name}</span>
                      <p className="text-purple-200/50 text-xs">{pos.meaning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          )}

          {/* 操作按钮 */}
          <div className="flex justify-between">
            <GlassButton variant="ghost" onClick={() => setStep('question')}>
              返回
            </GlassButton>
            <GlassButton onClick={handleNext} disabled={!selectedSpread}>
              开始洗牌
            </GlassButton>
          </div>
        </div>
      </div>
    </MysticBackground>
  );
}