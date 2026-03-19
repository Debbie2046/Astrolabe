'use client';

import { ReactNode } from 'react';

interface MysticBackgroundProps {
  children: ReactNode;
}

export default function MysticBackground({ children }: MysticBackgroundProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* 星空背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 星星 */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 2 + 2 + 's',
            }}
          />
        ))}
        {/* 光晕 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* 内容 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}