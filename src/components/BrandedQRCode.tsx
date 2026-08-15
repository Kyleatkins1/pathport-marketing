import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface BrandedQRCodeProps {
  value: string;
  size?: number;
  fgColor?: string;
  bgColor?: string;
  showLogo?: boolean;
}

export const BrandedQRCode: React.FC<BrandedQRCodeProps> = ({
  value,
  size = 200,
  fgColor = "#0F172A", // Deep Slate
  bgColor = "#FFFFFF", // Clean Background
  showLogo = true
}) => {
  const logoSize = Math.round(size * 0.20);
  const badgeSize = logoSize + 14;

  return (
    <div className="inline-block p-4 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
      <div className="relative flex items-center justify-center">
        <QRCodeSVG
          value={value}
          size={size}
          bgColor={bgColor}
          fgColor={fgColor}
          level="H" // High error correction level (30%) permits center badge overlay
        />
        {showLogo && (
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-md border border-slate-200/90 flex items-center justify-center p-1.5 pointer-events-none"
            style={{ width: badgeSize, height: badgeSize }}
          >
            <img 
              src="/logo.png" 
              alt="PathPort" 
              style={{ width: logoSize, height: logoSize }}
              className="object-contain" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandedQRCode;
