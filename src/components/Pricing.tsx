import React, { useState } from 'react';
import {
  Check,
  Building2,
  Award,
  ArrowRight,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';
import {
  APP_SIGN_UP_URL,
  getActiveTrialDays,
  isEarlyBirdPromoActive,
  triggerLeadModal,
} from '../lib/modal-events';

interface PricingProps {
  onOpenWaitlist?: (persona?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenWaitlist }) => {
  const [annual, setAnnual] = useState(true);
  const trialDays = getActiveTrialDays();
  const earlyBird = isEarlyBirdPromoActive();

  const handleOrgCTA = (intent: 'workplace' | 'certify') => {
    if (onOpenWaitlist) {
      onOpenWaitlist(intent === 'workplace' ? 'PathPort Workplace' : 'PathPort Certify');
    } else {
      triggerLeadModal({
        intent,
        source: `Pricing — ${intent === 'workplace' ? 'Workplace 2027' : 'Certify 2027'}`,
      });
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-white border-t border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#0D5F57] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {earlyBird
                ? 'Individual-Owned Pricing • Sign Up Through Nov 30 for 30 Days of Pro Free'
                : 'Individual-Owned Pricing • Start With a 14-Day Free Pro Trial'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Less than the cost of a single late-renewal penalty
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Because you pay for your own PathPort, your record belongs to you—never your employer,
            agency, or state reporting vendor. Every professional plan starts with a{' '}
            {earlyBird
              ? '30-day free Pro trial when you sign up through Nov 30 (14 days starting Dec 1).'
              : '14-day free Pro trial.'}
          </p>

          {/* Billing Toggle */}
          <div className="pt-3 inline-flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                !annual ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                annual ? 'bg-[#0D5F57] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                  annual ? 'bg-emerald-400/20 text-emerald-100' : 'bg-emerald-100 text-[#0D5F57]'
                }`}
              >
                Save 20%+
              </span>
            </button>
          </div>
        </div>

        {/* 2-Card Professional Plans Comparison */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Plan 1: PathPort Essentials */}
          <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  PathPort Essentials
                </h3>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-semibold">
                  Keep Your Record Current
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Everything you need to import your history, store evidence in your private Vault,
                and stay ahead of 50-state & board renewals across any industry.
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-display text-slate-900">
                  {annual ? '$7.99' : '$9.99'}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  / month {annual ? '(billed annually)' : ''}
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Included in Essentials
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {[
                    '60-second Import: Resume/CV, LinkedIn PDF, Credly & Digital Badges, and Bulk Certificates',
                    'Full 8-Entity Living Record (Credentials, CE, Education, Work, Projects, Publications)',
                    '50-State & National Board Renewal Tracking + 90/60/30-day alerts',
                    'Direct Email-to-Vault Forwarding (@in.getpathport.com)',
                    'Private SHA-256 Document Vault with instant data export',
                    '1 Shareable MyPortfolio public verification link & PDF export',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={APP_SIGN_UP_URL}
              className="mt-8 w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-semibold text-sm transition-colors text-center block"
            >
              Start With {trialDays}-Day Free Trial
            </a>
          </div>

          {/* Plan 2: PathPort Pro (Most Popular) */}
          <div className="rounded-2xl bg-[#0B132B] text-white border-2 border-[#0D5F57] p-7 sm:p-8 shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-[#2DD4BF] text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-sm">
              Most Popular • Full Career Intelligence
            </div>
            <div>
              <div className="flex items-center justify-between mt-1">
                <h3 className="text-xl font-bold text-white font-display">PathPort Pro</h3>
                <span className="px-2.5 py-1 rounded-md bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs font-semibold">
                  Shape What’s Next
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Includes everything in Essentials plus <strong>MyPath</strong> career intelligence,
                What-If Role Audits, Application Studio, and unlimited tailored portfolios.
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-display text-white">
                  {annual ? '$14.99' : '$19.99'}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  / month {annual ? '(billed annually)' : ''}
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">
                  Everything in Essentials, Plus:
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  {[
                    'MyPath 6-Pillar Career Roadmap & Readiness Synthesis',
                    'Unlimited What-If Role Audits against target job descriptions',
                    'Opportunity Pursuit, Application Studio & Interview STAR Studio',
                    'Unlimited custom MyPortfolio views (Modern, Executive & Minimal themes)',
                    'Custom portfolio slugs (/p/your-name) & Speaker One-Sheet PDF generator',
                    'Multi-state reciprocity & specialty stack readiness modeling',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={APP_SIGN_UP_URL}
              className="mt-8 w-full py-3.5 px-4 rounded-xl bg-[#2DD4BF] hover:bg-teal-300 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Claim {trialDays}-Day Free Pro Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Free Personal Identity Document Tracker Card */}
        <div className="mt-8 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-emerald-50/90 via-teal-50/60 to-white border border-emerald-200/90 p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0D5F57] text-white text-xs font-bold">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Personal Identity Documents</span>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-emerald-200 text-[#0D5F57] text-xs font-extrabold">
                  $0 • Free Forever
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Only need to track your Passport, Driver’s License, or Personal IDs?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                PathPort includes a dedicated free tier for everyday identity documents—so you never
                get caught with an expired Passport before a flight or a lapsed Driver’s License.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {[
                  'Driver’s License & REAL ID',
                  'Passports',
                  'Global Entry & TSA PreCheck',
                  'Vehicle Registration & Insurance',
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-emerald-200/80 text-slate-700 text-xs font-semibold"
                  >
                    <Check className="w-3.5 h-3.5 text-[#0D5F57]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={APP_SIGN_UP_URL}
                className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#0D5F57] hover:bg-[#094842] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Start Free Identity Tracker</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Split 2-Card Organization & Board Bridge (2027) */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: PathPort Workplace (2027) */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-[#0D5F57] text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>PathPort Workplace</span>
                </span>
                <span className="text-xs font-semibold text-slate-500">Launching 2027</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Collect workforce credentials without endless emails
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select what your workforce needs and send it to the employee. They create a free
                PathPort profile, upload their required docs, and share them instantly—while system
                intelligence keeps everyone compliant and lets you assign CEUs to attendees.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOrgCTA('workplace')}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#0D5F57]" />
              <span>Join Workplace 2027 Pilot</span>
              <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-400" />
            </button>
          </div>

          {/* Card 2: PathPort Certify (2027) */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>PathPort Certify</span>
                </span>
                <span className="text-xs font-semibold text-slate-500">Launching 2027</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                End-to-end credentialing for certifying bodies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Let candidates apply for a credential, submit documents, and track payments. Track
                exam results from official test platforms (or use our partners), issue credentials
                through any badge provider, and manage recertifications directly in PathPort.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOrgCTA('certify')}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#2DD4BF]" />
              <span>Request Certify 2027 Early Access</span>
              <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-400" />
            </button>
          </div>
        </div>

        {/* Trust Guarantee Bar */}
        <div className="mt-6 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0D5F57]" />
            Cancel or switch plans anytime in 1 click
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0D5F57]" />
            Your documents and record remain exportable even if your trial ends
          </span>
        </div>
      </div>
    </section>
  );
};
