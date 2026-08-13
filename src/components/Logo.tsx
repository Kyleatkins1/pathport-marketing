import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 32, showText = true, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(13,148,136,0.5)]">
          <rect width="100" height="100" rx="24" className="fill-slate-900 stroke-slate-800" strokeWidth="2"/>
          <path 
            d="M50 15 L78 28 V52 C78 70 66 84 50 90 C34 84 22 70 22 52 V28 L50 15 Z" 
            className="fill-slate-950 stroke-primary" 
            strokeWidth="4"
          />
          <path 
            d="M34 62 C40 58 45 44 50 36 C55 44 60 58 66 62" 
            className="stroke-secondary" 
            strokeWidth="5" 
            strokeLinecap="round"
          />
          <circle cx="50" cy="35" r="5" className="fill-primary-glow animate-pulse" />
        </svg>
      </div>
      {showText && (
        <span className="font-display font-bold text-xl tracking-tight text-white">
          Path<span className="text-primary-glow">Port</span>
        </span>
      )}
    </div>
  );
};
