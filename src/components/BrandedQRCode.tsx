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
  fgColor = "#2DD4BF", // Electric Teal
  bgColor = "#0F172A", // Deep Slate
  showLogo = true
}) => {
  return (
    <div className="inline-block p-3 rounded-2xl bg-slate-900 border border-teal-500/30 shadow-glowTeal relative group">
      <QRCodeSVG
        value={value}
        size={size}
        bgColor={bgColor}
        fgColor={fgColor}
        level="H" // High error correction level permits logo excavation
        imageSettings={showLogo ? {
          src: "/logo.png",
          height: Math.round(size * 0.22),
          width: Math.round(size * 0.22),
          excavate: true,
        } : undefined}
      />
    </div>
  );
};
