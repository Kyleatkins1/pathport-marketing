import React from 'react';
import { Briefcase, Award, Compass, CheckCircle2, Sparkles, Layers, XCircle } from 'lucide-react';

export const FeaturePillars: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header: The Things a Résumé Leaves Behind */}
        <div id="why" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE EVIDENCE GAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            The things a résumé leaves behind.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            A résumé compresses years of projects, research, leadership, creative work, accomplishments, learning, and problem-solving into a handful of bullet points. PathPort gives you a living record that proves what you can do.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Column 1: The Static Flat Résumé */}
          <div className="bg-slate-50/90 dark:bg-slate-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200 dark:border-slate-700/80 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
              <span className="font-display font-bold text-base text-slate-700 dark:text-slate-200">
                The Static Flat Résumé
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold">
                Legacy Model
              </span>
            </div>

            <ul className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Drops Crucial Context:</strong>
                  <span>Forces multi-month initiatives, engineering projects, and research into 2 brief bullet points.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Unverified Initialisms:</strong>
                  <span>Lists acronyms (e.g. CCRN® or PMP®) with zero proof of the actual capabilities behind them.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Version Chaos:</strong>
                  <span>Requires saving 5 different PDF versions for different target roles that quickly become stale.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Manual CE Tracking:</strong>
                  <span>Leaves you scrambling across disparate portals weeks before renewal deadlines.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: The PathPort Living Record */}
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-7 sm:p-8 border-2 border-teal-800 dark:border-teal-500 shadow-md space-y-5 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
              <span className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-800 dark:text-teal-400" />
                <span>The PathPort Living Record</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                Living Standard
              </span>
            </div>

            <ul className="space-y-4 text-xs text-slate-700 dark:text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Structured Case Studies:</strong>
                  <span>Capture Challenge, Context, Approach, Measurable Outcomes, and attached media proof.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Source Provenance:</strong>
                  <span>Transparent authentication badges (Issuer Verified, Provider Reported) so viewers know where evidence came from.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Tailored Portfolios:</strong>
                  <span>Build once, share many ways with custom `/p/:slug` views that update when your living record does.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Renewal Organization:</strong>
                  <span>Organize requirements and hours by category so you know what you still need before renewal.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Deep Dive Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {/* Pillar 1: Tangible Case Studies */}
          <div id="case-studies" className="bg-slate-50 dark:bg-slate-800/70 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-700/80 flex flex-col justify-between space-y-6 hover:border-teal-700 dark:hover:border-teal-500 transition-all scroll-mt-24">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                Structured Case Studies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Document real-world complexity that doesn't fit on a page: Challenge, Context, Approach, and Measurable Outcomes.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-[10px] font-bold text-teal-800 dark:text-teal-400 tracking-wider uppercase">
              VERIFIED EVIDENCE
            </div>
          </div>

          {/* Pillar 2: Tailored Portfolios */}
          <div className="bg-slate-50 dark:bg-slate-800/70 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-700/80 flex flex-col justify-between space-y-6 hover:border-teal-700 dark:hover:border-teal-500 transition-all">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                Tailored Portfolios
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Maintain yourself once, present yourself many ways. Create custom public or unlisted views linking directly to your verified items.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-[10px] font-bold text-teal-800 dark:text-teal-400 tracking-wider uppercase">
              TAILORED VIEWS
            </div>
          </div>

          {/* Pillar 3: Verified Credentials & CE */}
          <div id="renewals" className="bg-slate-50 dark:bg-slate-800/70 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-700/80 flex flex-col justify-between space-y-6 hover:border-teal-700 dark:hover:border-teal-500 transition-all scroll-mt-24">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                CE & Credentials
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Consolidate licenses, certifications, and continuing education. Track mandatory categories with clear source verification.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-[10px] font-bold text-teal-800 dark:text-teal-400 tracking-wider uppercase">
              RENEWAL TRACKING
            </div>
          </div>

          {/* Pillar 4: Path Career Advisor */}
          <div className="bg-slate-50 dark:bg-slate-800/70 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-700/80 flex flex-col justify-between space-y-6 hover:border-teal-700 dark:hover:border-teal-500 transition-all">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                Path Career Advisor
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                See useful next steps and requirement comparisons based on your actual record, case studies, and career goals.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-[10px] font-bold text-teal-800 dark:text-teal-400 tracking-wider uppercase">
              CAREER GUIDANCE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePillars;
