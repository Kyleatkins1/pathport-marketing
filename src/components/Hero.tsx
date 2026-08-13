import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandedQRCode } from './BrandedQRCode';
import { ArrowRight, ShieldCheck, QrCode, Award, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [activeBadgeIndex, setActiveBadgeIndex] = useState(0);

  const sampleBadges = [
    { title: "PMP® Project Management", issuer: "PMI", status: "Active", date: "Expires Oct 2027", color: "from-amber-500/20 to-amber-600/10 border-amber-500/40 text-amber-300" },
    { title: "Registered Nurse (RN)", issuer: "NYS Board of Nursing", status: "Active (CEU Compliant)", date: "License #592810", color: "from-teal-500/20 to-teal-600/10 border-teal-500/40 text-teal-300" },
    { title: "AWS Solutions Architect", issuer: "Amazon Web Services", status: "Verified", date: "Issued Jan 2025", color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/40 text-cyan-300" },
    { title: "NREMT Paramedic", issuer: "National Registry EMTs", status: "Active", date: "Recert 2026", color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 text-emerald-300" }
  ];

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-ambient-grid">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Messaging */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide shadow-glowTeal">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>THE UNIVERSAL CREDENTIAL PASSPORT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Every Certification, License & Achievement.{' '}
              <span className="text-gradient-teal block mt-2">One Powerful Passport.</span>
            </h1>

            {/* Subheadline emphasizing universal positioning */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Whether you hold a <span className="text-amber-300 font-semibold">single PMP certification</span> or manage <span className="text-teal-300 font-semibold">15 certifications and 3 state licenses</span>, PathPort consolidates your entire professional journey into one shareable, verifiable digital portfolio.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://app.getpathport.com/auth?signup=true"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-teal-500 to-primary-dark text-white font-semibold text-base shadow-glowTeal hover:scale-[1.02] transition-all border border-teal-400/40"
              >
                <span>Build Your PathPort — Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="#portfolio-demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card border border-slate-700 text-slate-200 font-medium text-base hover:bg-slate-800/80 hover:text-white transition-all"
              >
                <span>Explore Live Portfolio Demo</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust bullet features */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-primary-glow" />
                  <span>100% Free Vault</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Secure PDF & badge storage</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>State CEU Math</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Automated renewal rules</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Instant Verification</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Shareable URL & QR code</p>
              </div>
            </div>

          </div>

          {/* Right Column: Floating 3D Passport Card Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-secondary to-accent-cyan rounded-3xl blur-xl opacity-40 animate-pulse-slow pointer-events-none" />

              {/* Glass Passport Card */}
              <div className="relative glass-card rounded-2xl p-6 sm:p-8 border border-white/15 shadow-glass animate-float">
                
                {/* Passport Card Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 p-0.5 border border-teal-500/50 shadow-inner">
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-display font-bold text-teal-300 text-lg">
                        AC
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
                        Alex Chen, RN, PMP
                        <ShieldCheck className="w-4 h-4 text-teal-400" />
                      </h3>
                      <p className="text-xs text-slate-400">getpathport.com/p/alex-chen</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setQrModalOpen(true)}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-teal-300 transition-colors border border-slate-700 flex items-center gap-1.5 text-xs"
                    title="View QR Code"
                  >
                    <QrCode className="w-4 h-4" />
                    <span className="hidden sm:inline font-semibold text-xs">QR</span>
                  </button>
                </div>

                {/* Passport Verified Badges Stack */}
                <div className="py-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2">
                    <span>Active Credentials (4)</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Verified
                    </span>
                  </div>

                  {sampleBadges.map((badge, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveBadgeIndex(idx)}
                      className={`p-3.5 rounded-xl border bg-gradient-to-r ${badge.color} transition-all cursor-pointer flex items-center justify-between ${
                        activeBadgeIndex === idx ? 'scale-[1.02] shadow-lg border-opacity-100' : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700">
                          <Award className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{badge.title}</div>
                          <div className="text-xs text-slate-400">{badge.issuer}</div>
                        </div>
                      </div>
                      <div className="text-right text-xs">
                        <div className="font-medium text-emerald-400">{badge.status}</div>
                        <div className="text-slate-400 text-[11px]">{badge.date}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Passport Card Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>CEU Status: <strong className="text-teal-300 font-semibold">30 / 30 Hours Complete</strong></span>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">VALIDATED</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* QR Code Modal */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-card max-w-sm w-full rounded-2xl p-6 border border-slate-700 text-center relative shadow-2xl">
            <h4 className="font-display font-bold text-white text-lg mb-1">Alex Chen's PathPort</h4>
            <p className="text-xs text-slate-400 mb-4">Scan to view instant verified credentials</p>
            
            <div className="my-4 flex justify-center">
              <BrandedQRCode 
                value="https://pathport-marketing.pages.dev/p/alex-chen"
                size={190}
              />
            </div>

            <Link 
              to="/p/alex-chen" 
              className="text-sm font-semibold text-teal-300 hover:text-teal-200 hover:underline mb-4 inline-flex items-center justify-center gap-1.5"
            >
              <span>getpathport.com/p/alex-chen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button 
              onClick={() => setQrModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
