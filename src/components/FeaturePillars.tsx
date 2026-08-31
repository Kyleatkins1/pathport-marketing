import React from 'react';
import { Briefcase, Award, Compass, CheckCircle2, Layers, XCircle, FileCheck } from 'lucide-react';

export const FeaturePillars: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div id="why" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
            <FileCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>The Evidence Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            Where traditional résumés fall short.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            A standard résumé reduces complex clinical protocols, architecture migrations, and team leadership to two-line bullet points. PathPort provides a structured home for the actual proof behind your career.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix (NarcTrack White & Tinted Surfaces) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Column 1: The Static Flat Résumé */}
          <div className="card-surface-white p-7 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="font-display font-bold text-base text-slate-700 dark:text-slate-200">
                Traditional 1-Page Résumé
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold">
                Fragile Format
              </span>
            </div>

            <ul className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Drops Project Depth:</strong>
                  <span>Compresses multi-month clinical rollouts and technical builds into brief, unverified lines.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Unverified Claims:</strong>
                  <span>Lists license numbers and acronyms without active links to state licensing registries.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Version Sprawl:</strong>
                  <span>Requires creating separate PDF versions for every application that quickly go out of sync.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Lost Renewal Deadlines:</strong>
                  <span>Leaves CE certificates scattered across email downloads until an audit or renewal deadline hits.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: The PathPort Living Record */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 border-2 border-teal-800 dark:border-teal-400 shadow-md space-y-5 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400" aria-hidden="true" />
                <span>The PathPort Evidence Record</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                Permanent Standard
              </span>
            </div>

            <ul className="space-y-4 text-xs text-slate-700 dark:text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Detailed Case Studies:</strong>
                  <span>Capture challenge, approach, decision logic, and measurable outcomes with direct artifact links.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Official Source Verification:</strong>
                  <span>Badges showing state board registry status and accredited institution proof.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Tailored Portfolio Views:</strong>
                  <span>Publish targeted `/p/:slug` links for specific jobs without duplicating or re-entering data.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Continuous Renewal Tracking:</strong>
                  <span>Log required CE hours by board category with 30/60/90-day expiration reminders.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Deep Dive Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {/* Pillar 1: Tangible Case Studies */}
          <div id="case-studies" className="card-surface-white p-7 flex flex-col justify-between space-y-6 hover:border-teal-700 dark:hover:border-teal-500 transition-all scroll-mt-24">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                Case Study Studio
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Turn unlisted projects into tangible proof: problem context, technical methodology, and measurable business results.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] font-bold text-teal-800 dark:text-teal-400 tracking-wider">
              Work Artifacts
            </div>
          </div>

          {/* Pillar 2: Tailored Portfolios */}
          <div className="card-surface-white p-7 flex flex-col justify-between space-y-6 hover:border-teal-700 dark:hover:border-teal-500 transition-all">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                Tailored Portfolios
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Maintain your record in one place. Generate tailored public or unlisted views for specific jobs or committees.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] font-bold text-teal-800 dark:text-teal-400 tracking-wider">
              Scoped Sharing
            </div>
          </div>

          {/* Pillar 3: Verified Credentials & CE */}
          <div id="renewals" className="card-surface-white p-7 flex flex-col justify-between space-y-6 hover:border-teal-700 dark:hover:border-teal-500 transition-all scroll-mt-24">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                Licenses & CE Vault
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Track board licenses and continuing education hours by category. Get calendar alerts before credentials lapse.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] font-bold text-teal-800 dark:text-teal-400 tracking-wider">
              Renewal Compliance
            </div>
          </div>

          {/* Pillar 4: Path Career Advisor */}
          <div className="card-surface-white p-7 flex flex-col justify-between space-y-6 hover:border-teal-700 dark:hover:border-teal-500 transition-all">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                Path Advisor
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Compare your current credentials and experience against target role requirements to spot practical next steps.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] font-bold text-teal-800 dark:text-teal-400 tracking-wider">
              Skill Gap Analysis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePillars;
