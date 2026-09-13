import React, { useState } from 'react';
import { Check, ShieldCheck, Building2, Award, User, ArrowRight, Layers } from 'lucide-react';
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
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>14-Day Pro Trial Included • No Card Required</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            Predictable, Sovereign Plans
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Every new individual account receives 14 days of full PathPort Pro. Pick the tier that matches your career momentum.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: Essentials */}
          <div className="card-surface-white p-7 border border-slate-200/90 dark:border-slate-700/80 rounded-3xl shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Header Row */}
              <div className="flex items-center justify-between h-6">
                <div className="flex items-center gap-1.5 text-teal-800 dark:text-teal-400 font-bold text-xs">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Essentials</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase">
                  Stay Ready
                </span>
              </div>

              {/* Price & Subtitle Row (Fixed Height for Alignment) */}
              <div className="min-h-[64px] flex flex-col justify-center">
                <div className="text-3xl font-display font-black text-slate-900 dark:text-white leading-none">
                  $9.99<span className="text-sm font-normal text-slate-500">/mo</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">$99.99 billed annually (save 17%)</div>
              </div>

              {/* Description (Fixed Height for Alignment) */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[48px]">
                Maintain your complete sovereign professional record, evidence vault, and renewal readiness.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-700 min-h-[160px]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>MyRecord credentials, education & experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>CE / PDU tracking & renewal reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Document Vault & sovereign data export</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>1 active verified portfolio link (/p/)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenModal('Other Professional')}
              className="w-full min-h-[44px] py-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* Card 2: Pro Tier */}
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-7 border-2 border-teal-800 dark:border-teal-400 shadow-md flex flex-col justify-between space-y-6 relative">
            <div className="space-y-4">
              {/* Category Header Row */}
              <div className="flex items-center justify-between h-6">
                <div className="flex items-center gap-1.5 text-teal-800 dark:text-teal-400 font-bold text-xs">
                  <Layers className="w-4 h-4" aria-hidden="true" />
                  <span>PathPort Pro</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800 uppercase">
                  Move Forward
                </span>
              </div>

              {/* Price & Subtitle Row (Fixed Height for Alignment) */}
              <div className="min-h-[64px] flex flex-col justify-center">
                <div className="text-3xl font-display font-black text-slate-900 dark:text-white leading-none">
                  $19.99<span className="text-sm font-normal text-slate-500">/mo</span>
                </div>
                <div className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold mt-1.5">
                  $199.99 billed annually (save 17%)
                </div>
              </div>

              {/* Description (Fixed Height for Alignment) */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[48px]">
                Everything in Essentials plus AI career intelligence, Story Bank, and unlimited portfolios.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-700 min-h-[160px]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Everything in Essentials</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>MyPath 6-pillar career growth advisor</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Targeted opportunity fit & gap analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Tailored résumés, cover letters & Story Bank</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Unlimited tailored portfolios with view analytics</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenModal('Other Professional')}
              className="w-full min-h-[44px] py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Start 14-Day Pro Trial</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* Card 3: Teams */}
          <div className="card-surface-white p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Header Row */}
              <div className="flex items-center justify-between h-6">
                <div className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400 font-bold text-xs">
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>PathPort Teams</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-[10px] font-bold border border-indigo-200 dark:border-indigo-800 uppercase">
                  Workforce
                </span>
              </div>

              {/* Price & Subtitle Row (Fixed Height for Alignment) */}
              <div className="min-h-[64px] flex flex-col justify-center">
                <div className="text-3xl font-display font-black text-slate-900 dark:text-white leading-none">Pilot Program</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">Employer Workforce Compliance</div>
              </div>

              {/* Description (Fixed Height for Alignment) */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[48px]">
                Scoped workforce roster compliance, license expiration tracking, and consent-mediated reviews.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-700 min-h-[160px]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Workforce compliance tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Upcoming expiration alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Privacy-preserving offboarding</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenModal('Employer / Workforce Compliance')}
              className="w-full min-h-[44px] py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-900 dark:text-indigo-300 font-semibold text-xs border border-indigo-200 dark:border-indigo-800 transition-colors cursor-pointer flex items-center justify-center"
            >
              Request Teams Access
            </button>
          </div>

          {/* Card 4: Certify */}
          <div className="card-surface-white p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Header Row */}
              <div className="flex items-center justify-between h-6">
                <div className="flex items-center gap-1.5 text-teal-800 dark:text-teal-400 font-bold text-xs">
                  <Award className="w-4 h-4" aria-hidden="true" />
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
                CE review queues, multi-year certification cycle governance, and verified credential issuance.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-700 min-h-[160px]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Reviewer submission queue</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Cycle rule & topic governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Source-verified digital badges</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenModal('Certification Board / Issuer')}
              className="w-full min-h-[44px] py-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-900 dark:text-teal-300 font-semibold text-xs border border-teal-200 dark:border-teal-800 transition-colors cursor-pointer flex items-center justify-center"
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
