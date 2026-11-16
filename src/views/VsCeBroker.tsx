import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Scale,
  Compass,
  FileText,
  Calculator,
  Mail,
} from 'lucide-react';
import { APP_SIGN_UP_URL, getActiveTrialDays } from '../lib/modal-events';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';

interface VsCeBrokerProps {
  onOpenWaitlist?: (persona?: string) => void;
}

export const CE_BROKER_FAQS = [
  {
    q: 'If my state board mandates CE Broker, why would I still use PathPort?',
    a: 'If your state board (such as Florida, Georgia, or Ohio) requires final license renewal reporting through CE Broker, you still keep your free state reporting account there. PathPort acts as your personal all-50-state record year-round—storing original SHA-256 PDFs, tracking national boards (ANCC, AACN, NREMT), building verifiable MyPortfolio links, and powering MyPath Career job matching.',
  },
  {
    q: 'Does PathPort charge extra just to see which CE hours I still need?',
    a: 'You can check all 50 state nursing board rules and national certification minimums for free anytime in our 50-State Renewal Calculator. Inside PathPort Essentials ($7.99/mo billed annually) and Pro ($14.99/mo billed annually), your full CE tracking, smart bucket suggestions, encrypted Document Vault, and MyPortfolio are included with a free trial.',
  },
  {
    q: 'Can PathPort track non-nursing credentials, personal IDs, and badges too?',
    a: 'Yes. Unlike state CE reporting portals, PathPort tracks multi-state licenses, NREMT NCCP buckets, PMI PDUs, Credly badges, clinical case studies, and even everyday personal IDs like Passports and Driver’s Licenses ($0 Free Forever).',
  },
  {
    q: 'How fast can I import existing CE certificates from CE Broker or email?',
    a: 'Drop up to 20 PDF certificates or wallet cards at once for OCR extraction, import your resume or LinkedIn PDF in 60 seconds, or forward course completion receipts straight to your personal @in.getpathport.com address.',
  },
];

const COMPARISON_ROWS = [
  {
    feature: 'Who the Platform Serves First',
    pathport: 'You (the individual professional, across every state and job)',
    cebroker: 'Participating state licensing boards (compliance reporting pipe)',
  },
  {
    feature: 'Setup, Badge Sync & CE Certificate Entry',
    pathport:
      '60s Resume/LinkedIn import, Credly/badge sync, bulk OCR & @in.getpathport.com email forwarding',
    cebroker: 'Manual course lookup or state-specific provider reporting',
  },
  {
    feature: 'Multi-State & NLC Compact Portability',
    pathport: 'All 50 US states + DC & national specialty boards in one workspace',
    cebroker: 'Restricted to participating state boards; siloed per state account',
  },
  {
    feature: 'National Specialty Certifications (ANCC, AACN, NREMT, PMP)',
    pathport: 'Built-in multi-category rules (Synergy CERPs, NCCP buckets, PDUs)',
    cebroker: 'Focused on state board CE minimums rather than national specialty portfolios',
  },
  {
    feature: 'Full Career Evidence (Projects, QI Case Studies, Degrees, Awards)',
    pathport: 'Complete 8-entity Living Record + SHA-256 Document Vault',
    cebroker: 'Continuing education contact hours only',
  },
  {
    feature: 'Shareable Public Portfolio & PDF Dossier (MyPortfolio)',
    pathport: '3 customizable themes (Modern, Executive, Minimal) + 1-click revocation',
    cebroker: 'Not available (no public portfolio or hiring presentation)',
  },
  {
    feature: 'Career Intelligence & Job Search (MyPath Career)',
    pathport: 'Credential-matched job search engine, job alignment audits & 6-pillar growth',
    cebroker: 'Recommends paid CE courses to finish your current state cycle',
  },
  {
    feature: 'Annual Cost for Full Capabilities',
    pathport: '$7.99/mo Essentials or $14.99/mo Pro (billed annually) + Free ID Tracker',
    cebroker: 'Up to $99.99/yr Concierge tier just for single-state CE management',
  },
];

export const VsCeBroker: React.FC<VsCeBrokerProps> = ({ onOpenWaitlist }) => {
  const trialDays = getActiveTrialDays();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar onOpenWaitlist={onOpenWaitlist} />
      <main id="main-content" className="pb-20">
        {/* Hero Section */}
        <section className="bg-[#0B132B] text-white py-20 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>
                CE Broker Alternative • Individual Career Vault vs. State Reporting Portal
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.1] text-white">
              A CE Broker alternative built for your{' '}
              <span className="text-[#2DD4BF]">
                entire 50-state career, not one state board.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              <strong>TL;DR:</strong> CE Broker is built as a compliance reporting pipe for
              participating state boards. PathPort belongs to <strong>you</strong>—storing every
              certificate in an encrypted vault across all 50 states, tracking national boards
              (ANCC, AACN, NREMT), publishing verifiable MyPortfolio links, and matching live jobs
              in MyPath Career.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <a
                href={APP_SIGN_UP_URL}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#2DD4BF] hover:bg-teal-300 text-slate-950 font-bold text-base transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Start Free {trialDays}-Day PathPort Pro Trial</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
              <Link
                to="/tools/renewal-calculator/"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-base transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-4.5 h-4.5 text-[#2DD4BF]" />
                <span>Open 50-State Renewal Calculator</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Head-to-Head Comparison Matrix */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white p-5 sm:px-8 border-b border-slate-800 text-xs font-bold uppercase tracking-wider">
              <div className="md:col-span-4">Capability & Ownership</div>
              <div className="md:col-span-4 text-[#2DD4BF] mt-2 md:mt-0">
                PathPort (Individual-Owned Platform)
              </div>
              <div className="md:col-span-4 text-slate-400 mt-1 md:mt-0">
                CE Broker (State Compliance Pipe)
              </div>
            </div>

            <div className="divide-y divide-slate-200/80">
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-5 sm:px-8 gap-4 items-center hover:bg-slate-50/70 transition-colors"
                >
                  <div className="md:col-span-4 font-display font-bold text-slate-900 text-sm">
                    {row.feature}
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium bg-emerald-50/50 p-3 rounded-xl border border-emerald-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                    <span>{row.pathport}</span>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 p-3">
                    <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{row.cebroker}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Deep-Dive Reasons Clinicians Use PathPort */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Why nurses and paramedics keep their primary record in PathPort
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Even if your state board requires you to report final hours through a state portal at
              renewal time, PathPort is where you organize, prove, and advance your career
              year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-2xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-[#0D5F57] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                1. Forward CE receipts straight from your email
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instead of logging into a state portal every time you finish a 1-hour webinar,
                simply forward the completion email to{' '}
                <code className="text-xs font-mono bg-slate-100 px-1 py-0.5 rounded">
                  ce-you@in.getpathport.com
                </code>
                . PathPort extracts the certificate, computes a SHA-256 hash, and smart-suggests
                matching requirement buckets so you can attribute one course across both your state
                license and national board certifications.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-2xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#0D5F57] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                2. Share verifiable MyPortfolio links with recruiters
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                State reporting tools can’t help you land a travel contract, magnet hospital role,
                or clinical educator promotion. With <strong>MyPortfolio</strong>, you can share a
                clean verification link pairing your active licenses with clinical QI projects and
                preceptor logs.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-2xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                3. Plan your next move with MyPath
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Considering CRNA, FNP, Flight Paramedic, or Clinical Director?{' '}
                <strong>MyPath</strong> audits your current hours, credentials, and degrees against
                your target role so you know exactly what prerequisites remain.
              </p>
            </div>
          </div>
        </section>

        {/* Honest Fit + Top State Guides + FAQ */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 space-y-3">
              <h2 className="text-xl font-bold font-display text-slate-900">
                When to keep CE Broker
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you practice in a state where the Board of Nursing or EMS agency mandates CE
                Broker for direct provider reporting at renewal time (such as Florida, Georgia, or
                Ohio), keep your free CE Broker account for statutory submission.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200/80 p-7 space-y-3">
              <h2 className="text-xl font-bold font-display text-slate-900">
                Why clinicians run their record on PathPort
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Hold a multi-state compact RN plus California, ANCC/AACN boards, AHA cards, or want
                encrypted document storage, verifiable MyPortfolio links, and MyPath Career job
                matching? PathPort keeps your lifetime record portable across every state and job.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-lg font-bold font-display text-slate-900">
                Check State Renewal Requirements Free (No Paywall)
              </h2>
              <Link
                to="/tools/renewal-calculator/"
                className="text-xs font-bold text-[#0D5F57] hover:underline"
              >
                View all 50 states + national boards →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
              {[
                { name: 'Florida (FL)', slug: 'florida' },
                { name: 'Texas (TX)', slug: 'texas' },
                { name: 'California (CA)', slug: 'california' },
                { name: 'Georgia (GA)', slug: 'georgia' },
                { name: 'Ohio (OH)', slug: 'ohio' },
                { name: 'New York (NY)', slug: 'new-york' },
                { name: 'Pennsylvania (PA)', slug: 'pennsylvania' },
                { name: 'Illinois (IL)', slug: 'illinois' },
                { name: 'North Carolina (NC)', slug: 'north-carolina' },
                { name: 'NREMT NRP', slug: 'nremt-paramedic' },
              ].map((st) => (
                <Link
                  key={st.slug}
                  to={`/tools/renewal-calculator/${st.slug}/`}
                  className="px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 text-xs font-bold text-slate-800 hover:text-[#0D5F57] transition-colors"
                >
                  {st.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 space-y-5">
            <h2 className="text-xl font-bold font-display text-slate-900">
              CE Broker Alternative FAQ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CE_BROKER_FAQS.map((item) => (
                <div key={item.q} className="space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-900">{item.q}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="rounded-2xl bg-gradient-to-r from-[#0D5F57] to-teal-800 text-white p-8 sm:p-10 text-center space-y-5 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-teal-100 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Own your journey. Shape what’s next.</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              Build your PathPort in 60 seconds
            </h2>
            <p className="text-sm sm:text-base text-teal-100 max-w-xl mx-auto">
              Drop in your existing resume or CE certificates and try {trialDays} days of
              PathPort Pro free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <a
                href={APP_SIGN_UP_URL}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#0D5F57] hover:bg-teal-50 font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Claim {trialDays}-Day Free Pro Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/p/sarah-jenkins-rn/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-teal-900/50 hover:bg-teal-900/70 text-white border border-teal-400/30 font-semibold text-sm transition-colors"
              >
                Inspect Sample RN MyPortfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BetaRegistrationModal />
    </div>
  );
};

export default VsCeBroker;
