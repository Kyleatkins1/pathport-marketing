import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 40, showText = true, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-Res Logo Mark from Stitch */}
      <img 
        src="/logo.png" 
        alt="PathPort Shield Logo" 
        style={{ height: size, width: showText ? 'auto' : size }}
        className="object-contain drop-shadow-[0_0_15px_rgba(45,212,191,0.4)] hover:scale-105 transition-transform"
      />
    </div>
  );
};
