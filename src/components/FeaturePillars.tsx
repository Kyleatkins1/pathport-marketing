import { Database, Share2, Cpu, CheckCircle } from 'lucide-react';

export const FeaturePillars: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-ambient-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Built For Modern Professionals</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Three Pillars of Your Professional Passport
          </p>
          <p className="text-slate-400 text-base sm:text-lg">
            No matter if you have 1 certification or 20 licenses across multiple states, PathPort handles organization, compliance, and sharing in one place.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Vault & CEU Engine */}
          <div id="vault" className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">1. Universal Vault & CEU Engine</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Consolidate PMP, AWS, Nursing, EMT, Trades, and academic credentials into one encrypted vault. Track state-by-state CEU hours automatically so you never panic before a renewal.
              </p>
              
              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>State requirement rules engine & CEU math</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Proactive expiration alerts & countdowns</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Multi-license support (1 to 20+ certs)</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-teal-400 flex items-center justify-between">
              <span>SECURITY & COMPLIANCE</span>
              <span>AES-256 ENCRYPTED</span>
            </div>
          </div>

          {/* Pillar 2: AI Parser */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">2. AI Resume & Certificate Parser</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Stop typing data manually. Drop any PDF resume, state license, or certificate image — our parser extracts issuer names, issue/expiration dates, and skills into structured milestones.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instant PDF & image OCR extraction</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Auto-generates verified career timeline</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Converts resumes to digital portfolios</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-amber-400 flex items-center justify-between">
              <span>PARSING ENGINE</span>
              <span>INSTANT EXTRACT</span>
            </div>
          </div>

          {/* Pillar 3: Verifiable Digital Portfolio */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Share2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">3. Verifiable Digital Portfolio</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Share a clean, modern digital portfolio link (`getpathport.com/p/yourname`) with recruiters, admissions boards, or clients. Employers can verify credentials instantly without logins.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom URL & instant QR code sharing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Granular privacy & document visibility</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>PDF portfolio & resume export</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-cyan-400 flex items-center justify-between">
              <span>EMPLOYER SHARING</span>
              <span>VERIFIED LINK</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
