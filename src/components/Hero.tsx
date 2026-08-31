import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink, Eye } from 'lucide-react';
import { BetaRegistrationModal } from './BetaRegistrationModal';

export const Hero: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'credentials' | 'case_study' | 'portfolios'>('credentials');

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-semibold shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
              <span>Early Access • Portable Professional Record</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Your career is more than bullet points on a résumé.{' '}
              <span className="text-teal-800 dark:text-teal-400 block mt-2">Store your proof once. Share tailored views anywhere.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              PathPort is your permanent evidence record. Keep state licenses, CE renewal hours, transcripts, and real project case studies organized in one place you own. Send a single clean link instead of emailing five separate PDFs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-3">
              <div>
                <button
                  onClick={() => setIsBetaModalOpen(true)}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <span>Get Early Access</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 text-center sm:text-left">
                  Invitations rolling out weekly to founding cohort
                </div>
              </div>

              <Link
                to="/for/nurses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm shadow-2xs transition-all focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <span>See Practitioner Examples</span>
                <ExternalLink className="w-4 h-4 text-slate-400" aria-hidden="true" />
              </Link>
            </div>

            {/* 3 Core Trust Guarantees (NarcTrack Metric Surfaces) */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-slate-200 dark:border-slate-800 text-left">
              <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                  <span>Verified Proof</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">State boards & official registries</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400" aria-hidden="true" />
                  <span>Real Case Studies</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Context, artifacts & metrics</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400" aria-hidden="true" />
                  <span>Tailored Portfolios</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Single source, multiple lenses</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Craft Live Interactive Evidence Card Preview (Sarah Jenkins Persona) */}
          <div className="lg:col-span-5 relative">
            <div className="card-surface-white p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xl relative space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-800 text-white font-bold flex items-center justify-center shadow-xs" aria-hidden="true">
                    SJ
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>Sarah Jenkins, BSN, RN</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" aria-label="Active status"></span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">ICU Charge Nurse & Clinical Preceptor</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                  Simulated Profile
                </span>
              </div>

              {/* Tab Selector (ARIA Tablist) */}
              <div 
                role="tablist"
                aria-label="Interactive demo record tabs"
                className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-[11px] font-semibold text-slate-600 dark:text-slate-300"
              >
                <button
                  id="hero-tab-creds"
                  role="tab"
                  aria-selected={activeTab === 'credentials'}
                  aria-controls="hero-tab-content"
                  onClick={() => setActiveTab('credentials')}
                  className={`flex-1 py-2 min-h-[44px] rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                    activeTab === 'credentials' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Credentials (8)
                </button>
                <button
                  id="hero-tab-studies"
                  role="tab"
                  aria-selected={activeTab === 'case_study'}
                  aria-controls="hero-tab-content"
                  onClick={() => setActiveTab('case_study')}
                  className={`flex-1 py-2 min-h-[44px] rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                    activeTab === 'case_study' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Case Studies (3)
                </button>
                <button
                  id="hero-tab-ports"
                  role="tab"
                  aria-selected={activeTab === 'portfolios'}
                  aria-controls="hero-tab-content"
                  onClick={() => setActiveTab('portfolios')}
                  className={`flex-1 py-2 min-h-[44px] rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                    activeTab === 'portfolios' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Portfolios (2)
                </button>
              </div>

              {/* Tab Content (ARIA Tabpanel) */}
              <div 
                id="hero-tab-content"
                role="tabpanel"
                aria-labelledby={`hero-tab-${activeTab === 'credentials' ? 'creds' : activeTab === 'case_study' ? 'studies' : 'ports'}`}
                className="min-h-[220px] focus:outline-none"
                tabIndex={0}
              >
                {activeTab === 'credentials' && (
                  <div className="space-y-2.5">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">Registered Nurse (RN) License</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                          Issuer Verified
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Example State Board of Nursing • Active • #RN784019</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">CCRN® — Critical Care Specialty</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                          Issuer Verified
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Specialty Certification Board • Recert 2026 • #CCRN-9921</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">ACLS / PALS Provider</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-[10px] font-bold border border-blue-200 dark:border-blue-800">
                          Provider Reported
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Accredited CE Provider • 24 Hours CE</p>
                    </div>
                  </div>
                )}

                {activeTab === 'case_study' && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 dark:text-white">Telemetry Unit Sepsis Protocol</span>
                      <span className="px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-[10px] font-bold border border-purple-200 dark:border-purple-800">
                        Clinical Case Study
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong>Challenge:</strong> Standardize rapid sepsis screening across a 48-bed step-down telemetry unit.
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong>Outcome:</strong> Reduced mean time to ICU transfer by 42 minutes across 180 patient admissions.
                    </p>
                  </div>
                )}

                {activeTab === 'portfolios' && (
                  <div className="space-y-2.5">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">Hospital Credentialing & Travel View</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                          <Eye className="w-3 h-3" aria-hidden="true" /> 38 views
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-teal-800 dark:text-teal-400">getpathport.com/p/sarah-jenkins-rn</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">Academic Preceptor & Faculty View</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                          <Eye className="w-3 h-3" aria-hidden="true" /> 19 views
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-teal-800 dark:text-teal-400">getpathport.com/p/sarah-preceptor</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-2">
                <button
                  onClick={() => setIsBetaModalOpen(true)}
                  className="w-full min-h-[44px] py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-teal-800 dark:hover:bg-teal-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Build Your Living Record</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        source="hero_cta"
      />
    </section>
  );
};

export default Hero;
