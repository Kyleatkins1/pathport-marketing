import React, { useState } from 'react';
import { Check, Sparkles, Building2, Award, User, ArrowRight } from 'lucide-react';
import { BetaRegistrationModal } from './BetaRegistrationModal';

export const Pricing: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState('Other Professional');

  const handleOpenModal = (aud: string) => {
    setSelectedAudience(aud);
    setIsBetaModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white dark:bg-slate-900 relative scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>BETA PHASE ACCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            Transparent, Simple Beta Access
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            PathPort is currently rolling out in founding cohorts. Individuals join for free with lifetime grandfathered access.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: Individual Beta */}
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-7 border-2 border-teal-800 dark:border-teal-400 shadow-md flex flex-col justify-between space-y-6 relative">
            <div className="space-y-4">
              {/* Category Header Row */}
              <div className="flex items-center justify-between h-6">
                <div className="flex items-center gap-1.5 text-teal-800 dark:text-teal-400 font-bold text-xs">
                  <User className="w-4 h-4" />
                  <span>Individual Professional</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800 uppercase">
                  Beta Access
                </span>
              </div>

              {/* Price & Subtitle Row (Fixed Height for Alignment) */}
              <div className="min-h-[64px] flex flex-col justify-center">
                <div className="text-3xl font-display font-black text-slate-900 dark:text-white leading-none">Free</div>
                <div className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold mt-1.5">Free for lifetime of Beta Cohort</div>
              </div>

              {/* Description (Fixed Height for Alignment) */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[48px]">
                Everything you need to maintain your living professional record and generate tailored portfolio links.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-700 min-h-[160px]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Unlimited credentials & CE logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Structured Case Study builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Tailored Portfolios (/p/ links)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Path Career Advisor matching</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenModal('Other Professional')}
              className="w-full py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Register for Beta Access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Pro Tier */}
          <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Header Row */}
              <div className="flex items-center justify-between h-6">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-bold text-xs">
                  <Sparkles className="w-4 h-4 text-teal-800 dark:text-teal-400" />
                  <span>PathPort Pro</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase">
                  Upcoming
                </span>
              </div>

              {/* Price & Subtitle Row (Fixed Height for Alignment) */}
              <div className="min-h-[64px] flex flex-col justify-center">
                <div className="text-3xl font-display font-black text-slate-900 dark:text-white leading-none">Coming Soon</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">Launch details forthcoming</div>
              </div>

              {/* Description (Fixed Height for Alignment) */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[48px]">
                Advanced AI capabilities, verified custom domains for portfolios, and multi-state automated CE synchronization.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-700 min-h-[160px]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Custom portfolio domains</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>AI resume & document OCR</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Advanced portfolio view analytics</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenModal('Other Professional')}
              className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
            >
              Notify on Pro Launch
            </button>
          </div>

          {/* Card 3: Teams */}
          <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Header Row */}
              <div className="flex items-center justify-between h-6">
                <div className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400 font-bold text-xs">
                  <Building2 className="w-4 h-4" />
                  <span>PathPort Teams</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-[10px] font-bold border border-indigo-200 dark:border-indigo-800 uppercase">
                  Workforce
                </span>
              </div>

              {/* Price & Subtitle Row (Fixed Height for Alignment) */}
              <div className="min-h-[64px] flex flex-col justify-center">
                <div className="text-3xl font-display font-black text-slate-900 dark:text-white leading-none">Design Partner</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">Employer Workforce Compliance</div>
              </div>

              {/* Description (Fixed Height for Alignment) */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[48px]">
                Scoped workforce roster compliance, license expiration radar, and consent-mediated audits.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-700 min-h-[160px]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Workforce compliance radar</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Automated deficiency alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Privacy-preserving offboarding</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenModal('Employer / Workforce Compliance')}
              className="w-full py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-900 dark:text-indigo-300 font-semibold text-xs border border-indigo-200 dark:border-indigo-800 transition-colors cursor-pointer"
            >
              Request Teams Access
            </button>
          </div>

          {/* Card 4: Certify */}
          <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Header Row */}
              <div className="flex items-center justify-between h-6">
                <div className="flex items-center gap-1.5 text-teal-800 dark:text-teal-400 font-bold text-xs">
                  <Award className="w-4 h-4" />
                  <span>PathPort Certify</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-[10px] font-bold border border-teal-200 dark:border-teal-800 uppercase">
                  Issuers
                </span>
              </div>

              {/* Price & Subtitle Row (Fixed Height for Alignment) */}
              <div className="min-h-[64px] flex flex-col justify-center">
                <div className="text-3xl font-display font-black text-slate-900 dark:text-white leading-none">Design Partner</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">Issuing Authorities & Programs</div>
              </div>

              {/* Description (Fixed Height for Alignment) */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[48px]">
                CE review queues, multi-year certification cycle governance, and authoritative credential issuance.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-700 min-h-[160px]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Reviewer submission queue</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Cycle rule & topic governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Authoritative cryptographic badges</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenModal('Certification Board / Issuer')}
              className="w-full py-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-900 dark:text-teal-300 font-semibold text-xs border border-teal-200 dark:border-teal-800 transition-colors cursor-pointer"
            >
              Talk With Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        defaultAudience={selectedAudience}
        source="pricing_table"
      />
    </section>
  );
};

export default Pricing;
