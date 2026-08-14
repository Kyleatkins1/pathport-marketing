import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandedQRCode } from './BrandedQRCode';
import { ArrowRight, ShieldCheck, QrCode, Award, CheckCircle2, Sparkles, ExternalLink, Briefcase, Compass, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'case_study' | 'credentials' | 'portfolios'>('case_study');

  const sampleBadges = [
    { title: "NREMT Paramedic", issuer: "National Registry EMTs", status: "Issuer-Verified", date: "Recert 2026", color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 text-emerald-300" },
    { title: "Registered Nurse (RN)", issuer: "NYS Board of Nursing", status: "Active (CEU Compliant)", date: "License #592810", color: "from-teal-500/20 to-teal-600/10 border-teal-500/40 text-teal-300" },
    { title: "AWS Solutions Architect", issuer: "Amazon Web Services", status: "Imported (Credly)", date: "Issued Jan 2025", color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/40 text-cyan-300" },
    { title: "PMP® Project Management", issuer: "PMI", status: "Active", date: "Expires Oct 2027", color: "from-amber-500/20 to-amber-600/10 border-amber-500/40 text-amber-300" }
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
              <span>YOUR CAREER IS BIGGER THAN A RÉSUMÉ</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Maintain Yourself Once.{' '}
              <span className="text-gradient-teal block mt-2">Present Yourself Many Ways.</span>
            </h1>

            {/* Subheadline emphasizing complete record, case studies & portfolios */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              PathPort is your persistent, portable professional identity. Turn unlisted projects into rich case studies, build tailored portfolios for every target role, and automate continuing education renewals with verified 6-level provenance.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://app.getpathport.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-teal-500 to-primary-dark text-white font-semibold text-base shadow-glowTeal hover:scale-[1.02] transition-all border border-teal-400/40"
              >
                <span>Launch Your Identity — Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="#ecosystem"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card border border-slate-700 text-slate-200 font-medium text-base hover:bg-slate-800/80 hover:text-white transition-all"
              >
                <span>Explore App, Teams & Certify</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust bullet features */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-primary-glow" />
                  <span>Rich Case Studies</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Challenge, Approach & Evidence</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Tailored Portfolios</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Dynamic object-reference links</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Verified Provenance</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">6-level trust authentication</p>
              </div>
            </div>

          </div>

          {/* Right Column: Floating 3D Passport / Portfolio Card Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-secondary to-accent-cyan rounded-3xl blur-xl opacity-40 animate-pulse-slow pointer-events-none" />

              {/* Glass Passport Card */}
              <div className="relative glass-card rounded-2xl p-6 sm:p-8 border border-white/15 shadow-glass animate-float">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 p-0.5 border border-teal-500/50 shadow-inner">
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-display font-bold text-teal-300 text-lg">
                        AC
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
                        Alex Chen
                        <ShieldCheck className="w-4 h-4 text-teal-400" />
                      </h3>
                      <p className="text-xs text-slate-400">Junior Full-Stack Engineer & NRP</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setQrModalOpen(true)}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-teal-300 transition-colors border border-slate-700 flex items-center gap-1.5 text-xs"
                    title="View QR Code"
                  >
                    <QrCode className="w-4 h-4" />
                    <span className="hidden sm:inline font-semibold text-xs">Share</span>
                  </button>
                </div>

                {/* Interactive Mode Tabs */}
                <div className="flex gap-2 pt-4 pb-2 border-b border-slate-800/80">
                  <button
                    onClick={() => setActiveTab('case_study')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      activeTab === 'case_study' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    Case Study
                  </button>
                  <button
                    onClick={() => setActiveTab('credentials')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      activeTab === 'credentials' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    Credentials
                  </button>
                  <button
                    onClick={() => setActiveTab('portfolios')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      activeTab === 'portfolios' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    Portfolios (2)
                  </button>
                </div>

                {/* Tab Content */}
                <div className="py-4 min-h-[220px]">
                  {activeTab === 'case_study' && (
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">FEATURED CASE STUDY</span>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Evidenced</span>
                      </div>
                      <h4 className="font-bold text-white text-sm">Hot Wheels Virtual Garage & Telemetry</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        <strong className="text-slate-100">Challenge:</strong> Low-latency 3D rendering and state synchronization across 10k collector models.
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        <strong className="text-slate-100">Outcome:</strong> Sub-16ms frame render times with zero state drift on edge workers.
                      </p>
                    </div>
                  )}

                  {activeTab === 'credentials' && (
                    <div className="space-y-2.5">
                      {sampleBadges.slice(0, 3).map((badge, idx) => (
                        <div key={idx} className={`p-3 rounded-xl border bg-gradient-to-r ${badge.color} flex items-center justify-between`}>
                          <div>
                            <div className="font-semibold text-white text-xs">{badge.title}</div>
                            <div className="text-[11px] text-slate-400">{badge.issuer}</div>
                          </div>
                          <div className="text-right text-[11px]">
                            <div className="font-medium text-emerald-400">{badge.status}</div>
                            <div className="text-slate-400 text-[10px]">{badge.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'portfolios' && (
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-slate-950/80 border border-teal-500/30 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white text-xs">Full-Stack Tech Portfolio</div>
                          <div className="text-[11px] text-slate-400">Target: Junior Software Engineer</div>
                        </div>
                        <span className="text-xs font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">Public (/p/alex-dev)</span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white text-xs">Clinical Leadership Portfolio</div>
                          <div className="text-[11px] text-slate-400">Target: Flight Paramedic Position</div>
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Unlisted (/p/alex-flight)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Passport Card Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-teal-300">
                    <Compass className="w-3.5 h-3.5" />
                    Path Goal: <strong>Junior Full-Stack</strong>
                  </span>
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">SYNCED</span>
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
            <p className="text-xs text-slate-400 mb-4">Scan to view instant verified portfolio</p>
            
            <div className="my-4 flex justify-center">
              <BrandedQRCode 
                value="https://app.getpathport.com/p/alex-chen"
                size={190}
              />
            </div>

            <Link 
              to="/p/alex-chen" 
              className="text-sm font-semibold text-teal-300 hover:text-teal-200 hover:underline mb-4 inline-flex items-center justify-center gap-1.5"
            >
              <span>app.getpathport.com/p/alex-chen</span>
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
