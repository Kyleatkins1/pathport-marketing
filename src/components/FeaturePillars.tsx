import { Briefcase, Award, Compass, CheckCircle2, Sparkles, Layers, XCircle } from 'lucide-react';

export const FeaturePillars: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header: The Things a Résumé Leaves Behind */}
        <div id="why" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE EVIDENCE GAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            The things a résumé leaves behind.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A static PDF résumé reduces years of problem-solving, clinical interventions, system architectures, and continuing education into flat bullet points. PathPort gives you a living record that proves what you can do.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Column 1: The Static Flat Résumé */}
          <div className="bg-slate-50/90 rounded-3xl p-7 sm:p-8 border border-slate-200 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="font-display font-bold text-base text-slate-700">
                The Static Flat Résumé
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                Legacy Model
              </span>
            </div>

            <ul className="space-y-4 text-xs text-slate-600">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Drops Crucial Context:</strong>
                  <span>Forces multi-month clinical rollouts and technical projects into 2 brief bullet points.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Unverified Initialisms:</strong>
                  <span>Lists acronyms (e.g. CCRN® or PMP®) with zero proof of the actual capabilities behind them.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Version Chaos:</strong>
                  <span>Requires saving 5 different PDF versions for different target jobs that quickly become stale.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Manual CE Tracking:</strong>
                  <span>Leaves you scrambling across 4 different state licensing portals weeks before expiration.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: The PathPort Living Record */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-teal-800 shadow-md space-y-5 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-800" />
                <span>The PathPort Living Record</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                Living Standard
              </span>
            </div>

            <ul className="space-y-4 text-xs text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Structured Case Studies:</strong>
                  <span>Capture Challenge, Context, Approach, Measurable Outcomes, and attached media proof.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">6-Level Provenance:</strong>
                  <span>Transparent authentication badges (Issuer Verified, Provider Reported) third parties trust.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Tailored Portfolio Lenses:</strong>
                  <span>Maintain once, present many ways with custom `/p/:slug` links that update in real time.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Deterministic Renewal Engine:</strong>
                  <span>Automated multi-topic category audit calculations so you never miss a renewal deadline.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Deep Dive Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {/* Pillar 1: Tangible Case Studies */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:border-slate-300 transition-all">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900">
                Structured Case Studies
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Document real-world complexity that doesn't fit on a page: Challenge, Context, Approach, and Measurable Outcomes.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 text-[10px] font-bold text-teal-800 tracking-wider uppercase">
              EVIDENCE ENGINE
            </div>
          </div>

          {/* Pillar 2: Tailored Portfolios */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:border-slate-300 transition-all">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900">
                Tailored Portfolios
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Maintain yourself once, present yourself many ways. Create custom public or unlisted views linking directly to your verified items.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 text-[10px] font-bold text-teal-800 tracking-wider uppercase">
              PORTFOLIO LENS
            </div>
          </div>

          {/* Pillar 3: Verified Credentials & CE */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:border-slate-300 transition-all">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900">
                CE & Provenance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consolidate licenses, board certifications, and continuing education. Track mandatory categories with 6-level provenance verification.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 text-[10px] font-bold text-teal-800 tracking-wider uppercase">
              RENEWAL ENGINE
            </div>
          </div>

          {/* Pillar 4: Deterministic Path Advisor */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:border-slate-300 transition-all">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900">
                Path Career Advisor
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No generic summaries. Exact capability gap math comparing your complete record against prerequisite requirements for target roles.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 text-[10px] font-bold text-teal-800 tracking-wider uppercase">
              PATH NAVIGATOR
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturePillars;
