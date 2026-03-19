'use client';

import { useReadingStore } from '@/stores/readingStore';
import GlassButton from '@/components/common/GlassButton';
import MysticBackground from '@/components/common/MysticBackground';

export default function HomePage() {
  const setStep = useReadingStore((state) => state.setStep);

  return (
    <MysticBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo 区域 */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 mb-4 tracking-wider">
              神秘塔罗
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl -z-10" />
          </div>
          <p className="text-purple-200/60 text-xl tracking-widest">命 运 之 门</p>
        </div>

        {/* 装饰符号 */}
        <div className="mb-12">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-spin-slow" />
            <div className="absolute inset-2 border border-blue-400/20 rounded-full" />
            <div className="absolute inset-4 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl">✧</span>
            </div>
          </div>
        </div>

        {/* 开始按钮 */}
        <GlassButton 
          size="lg" 
          onClick={() => setStep('question')}
          className="group"
        >
          <span className="flex items-center gap-3">
            开启命运之旅
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </GlassButton>

        {/* 底部装饰文字 */}
        <p className="absolute bottom-8 text-purple-300/40 text-sm">
          星辰正在倾听你的心声...
        </p>
      </div>
    </MysticBackground>
  );
}