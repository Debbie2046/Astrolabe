'use client';

import { ReactNode, HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '',
  hover = false,
  ...props
}: GlassCardProps) {
  return (
    <div 
      className={`
        relative rounded-2xl 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        shadow-xl shadow-purple-900/20
        ${hover ? 'hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}