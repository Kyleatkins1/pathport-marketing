import React from 'react';

interface LogoProps {
  size?: number;
  variant?: 'dark' | 'light' | 'auto';
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 28, 
  variant = 'auto', 
  className = "",
  showText = true
}) => {
  const isLight = variant === 'light';
  const logoSrc = isLight ? '/logo-white.png' : '/logo.png';

  const getColors = () => {
    if (variant === 'light') {
      return { text: 'text-white', teal: 'text-teal-400' };
    }
    if (variant === 'dark') {
      return { text: 'text-slate-900', teal: 'text-teal-800' };
    }
    // auto: adapts seamlessly to light / dark background classes
    return { 
      text: 'text-slate-900 dark:text-white', 
      teal: 'text-teal-800 dark:text-teal-400' 
    };
  };

  const colors = getColors();

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img 
        src={logoSrc} 
        alt="PathPort Emblem" 
        style={{ height: size, width: 'auto' }}
        className="object-contain shrink-0"
      />
      {showText && (
        <span className={`font-display font-black text-xl tracking-tight leading-none ${colors.text}`}>
          Path<span className={colors.teal}>Port</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
