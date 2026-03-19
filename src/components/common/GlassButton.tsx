'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function GlassButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}: GlassButtonProps) {
  const baseStyles = 'relative overflow-hidden rounded-xl font-medium transition-all duration-300 backdrop-blur-md';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/30 text-white hover:from-purple-500/50 hover:to-blue-500/50 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/25',
    secondary: 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30',
    ghost: 'bg-transparent text-purple-200 hover:text-white hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
    </button>
  );
}