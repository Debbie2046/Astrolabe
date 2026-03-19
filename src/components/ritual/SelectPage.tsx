'use client';

import { useReadingStore } from '@/stores/readingStore';
import GlassButton from '@/components/common/GlassButton';
import MysticBackground from '@/components/common/MysticBackground';

export default function SelectPage() {
  const { 
    deck, 
    selectedSpread, 
    selectedCardIndices, 
    selectCard, 
    revealCards 
  } = useReadingStore();

  const cardsNeeded = selectedSpread?.cardCount || 0;
  const selectedCount = selectedCardIndices.length;
  const isComplete = selectedCount === cardsNeeded;

  return (
    <MysticBackground>
      <div className="min-h-screen py-12 px-4">
        <div className="text-center mb-8">
          <p className="text-purple-300/60 mb-2">✧ 第三步 ✧</p>
          <h2 className="text-2xl font-bold text-white mb-2">选牌仪式</h2>
          <p className="text-purple-200/60">
            请凭直觉选择 <span className="text-purple-300 font-bold">{cardsNeeded}</span> 张牌
          </p>
          <p className="text-purple-300/40 text-sm mt-2">
            已选择：{selectedCount} / {cardsNeeded}
          </p>
        </div>

        {/* 扇形展开的牌 */}
        <div className="relative flex justify-center items-end px-4 mb-8" style={{ height: '400px' }}>
          <div className="relative" style={{ width: '100%', maxWidth: '900px' }}>
            {deck.map((_, index) => {
              const isSelected = selectedCardIndices.includes(index);
              const totalCards = 78;
              const angle = ((index - totalCards / 2) / totalCards) * 120;
              const radius = 350;
              const x = Math.sin(angle * Math.PI / 180) * radius;
              const y = Math.cos(angle * Math.PI / 180) * radius - 200;
              
              return (
                <button
                  key={index}
                  onClick={() => selectCard(index)}
                  className={`absolute w-16 h-24 rounded-lg transition-all duration-300 ${
                    isSelected 
                      ? 'ring-2 ring-purple-400 bg-purple-500/30 -translate-y-8' 
                      : 'bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border border-purple-400/20 hover:-translate-y-4'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `${y}px`,
                    transform: `rotate(${angle * 0.3}deg) ${isSelected ? 'translateY(-2rem)' : ''}`,
                    zIndex: isSelected ? 100 : 1,
                  }}
                >
                  <div className="absolute inset-2 border border-purple-400/30 rounded flex items-center justify-center">
                    <span className="text-purple-300/40 text-lg">✧</span>
                  </div>
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {selectedCardIndices.indexOf(index) + 1}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 确认按钮 */}
        <div className="text-center">
          <GlassButton 
            onClick={revealCards} 
            disabled={!isComplete}
            size="lg"
          >
            {isComplete ? '翻开命运之牌' : `还需选择 ${cardsNeeded - selectedCount} 张`}
          </GlassButton>
        </div>
      </div>
    </MysticBackground>
  );
}