'use client';

import { useEffect, useState } from 'react';
import { useReadingStore } from '@/stores/readingStore';
import MysticBackground from '@/components/common/MysticBackground';

export default function ShufflePage() {
  const { setStep, initDeck } = useReadingStore();
  const [shuffling, setShuffling] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    initDeck();
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShuffling(false);
            setStep('select');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [initDeck, setStep]);

  const handleSkip = () => {
    setProgress(100);
    setTimeout(() => {
      setShuffling(false);
      setStep('select');
    }, 300);
  };

  return (
    <MysticBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-8">洗牌仪式</h2>
          
          {/* 牌堆动画 */}
          <div className="relative w-64 h-80 mx-auto mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-40 h-56 rounded-xl bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border border-purple-400/20 shadow-xl ${
                  shuffling ? 'animate-shuffle' : ''
                }`}
                style={{
                  left: `${120 + i * 2}px`,
                  top: `${i * 4}px`,
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${(i - 2) * 5}deg)`,
                }}
              >
                <div className="absolute inset-4 border border-purple-400/30 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-purple-300/40 text-4xl">✧</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-purple-200/60 mb-4">命运之牌正在为你洗牌...</p>

          {/* 进度条 */}
          <div className="w-64 mx-auto mb-6">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-purple-300/40 text-sm mt-2">{progress}%</p>
          </div>

          {/* 跳过按钮 */}
          {shuffling && (
            <button
              onClick={handleSkip}
              className="text-purple-300/40 text-sm hover:text-purple-300/60 transition-colors"
            >
              跳过动画
            </button>
          )}
        </div>
      </div>
    </MysticBackground>
  );
}