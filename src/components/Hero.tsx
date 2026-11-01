import React, { useState } from 'react';
import {
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  Share2,
  Compass,
  Upload,
  Mail,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { triggerLeadModal } from '../lib/modal-events';

interface HeroProps {
  onOpenWaitlist?: (persona?: string) => void;
}

const PERSONAS = [
  {
    id: 'tech',
    label: 'Tech, PM & Business',
    name: 'Elena Rodriguez, PMP, CSM',
    role: 'Principal Technical Program Manager',
    myPathGoal: 'Target Next Step: VP of Program Delivery & Operations',
    myPathStatus: '60/60 PMI PDUs Complete • 4 Executive Case Studies Linked',
    demoSlug: 'elena-rodriguez-pmp',
    credentials: [
      {
        title: 'Project Management Professional (PMP)',
        issuer: 'Project Management Institute (PMI) • Credly Sync',
        status: '60 / 60 Talent Triangle PDUs Complete',
        provenance: 'Document-Supported',
        color: 'emerald',
      },
      {
        title: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services • Credly Sync',
        status: 'Active • Linked to 3 Cloud Migration Architectures',
        provenance: 'Document-Supported',
        color: 'teal',
      },
    ],
    portfolioHighlight:
      'Zero-Downtime Core Banking Cloud Migration ($14M Budget • Architecture Deck Attached)',
  },
  {
    id: 'healthcare',
    label: 'Healthcare & Nursing',
    name: 'Sarah Jenkins, BSN, RN, CCRN',
    role: 'Critical Care Travel Nurse • NLC Compact + CA',
    myPathGoal: 'Target Next Step: Acute Care Nurse Practitioner (ACNP)',
    myPathStatus: 'Strong Foundation • 2 Clinical Prerequisites to Complete',
    demoSlug: 'sarah-jenkins-rn',
    credentials: [
      {
        title: 'Registered Nurse (RN) — Multi-State Compact',
        issuer: 'Florida Board of Nursing • NLC',
        status: 'Active • 24/24 CEUs Logged',
        provenance: 'Document-Supported',
        color: 'emerald',
      },
      {
        title: 'CCRN (Adult) — Critical Care RN',
        issuer: 'AACN Certification Corporation',
        status: '82 / 100 Synergy CERPs • 432 Clinical Hrs Met',
        provenance: 'Document-Supported',
        color: 'teal',
      },
    ],
    portfolioHighlight:
      'ICU Sepsis Protocol Redesign — 22% faster antibiotic initiation (PDF Case Study Attached)',
  },
  {
    id: 'ems',
    label: 'Aviation, EMS & Trades',
    name: 'Marcus Vance, NRP, FP-C',
    role: 'Flight Operations Lead & Field Training Officer',
    myPathGoal: 'Target Next Step: Regional Operations Chief',
    myPathStatus: 'NCCP On Track • Leadership & Safety Portfolio Ready',
    demoSlug: 'marcus-vance-nrp',
    credentials: [
      {
        title: 'NREMT Paramedic (NRP) — 60-Hr NCCP',
        issuer: 'National Registry of EMTs',
        status: '30 Nat / 15 State / 15 Ind Hrs Complete',
        provenance: 'Document-Supported',
        color: 'emerald',
      },
      {
        title: 'US Passport, REAL ID & FAA Medical Certificate',
        issuer: 'Identity & Vital Documents Tracker (Free)',
        status: 'Active • 180/90/30-Day Renewal Reminders Armed',
        provenance: 'Document-Supported',
        color: 'teal',
      },
    ],
    portfolioHighlight:
      'Regional Safety & Operations Audit — 98.2% Compliance Across 410 Missions',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = PERSONAS[activeTab];

  const handleOpenCTA = (persona?: string) => {
    if (onOpenWaitlist) {
      onOpenWaitlist(persona);
    } else {
      triggerLeadModal({ intent: 'individual', persona, source: 'Homepage Hero' });
    }
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/70">
      {/* Subtle Background Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-gradient-to-tr from-teal-500/10 via-emerald-400/10 to-sky-400/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#0D5F57] text-xs font-semibold shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0D5F57]" />
              <span>If you have a credential, you can track it • Built for every industry</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold font-display tracking-tight text-slate-900 leading-[1.08]">
              Your entire credential & career record,{' '}
              <span className="gradient-text">built in 60 seconds</span> and owned for life.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Track every license, digital badge, and continuing education hour in one private
              record—across tech, project management, aviation, trades, healthcare, or everyday
              identity documents like your <strong className="text-slate-900 font-semibold">Passport and Driver’s License</strong>.
              Import your resume and <strong className="text-slate-900 font-semibold">Credly</strong> badges in one step, share verifiable{' '}
              <strong className="text-slate-900 font-semibold">MyPortfolio</strong> links, and map
              your next move with <strong className="text-slate-900 font-semibold">MyPath</strong>.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => handleOpenCTA(current.label)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#0D5F57] hover:bg-[#094842] shadow-lg shadow-teal-900/15 hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <span>Start Free 30-Day Pro Trial</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all duration-200"
              >
                <span>See How 60s Import Works</span>
              </a>
            </div>

            {/* Fast Intake & Sovereignty Proof Bar */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white/90 border border-slate-200/80 rounded-lg px-3 py-2">
                <Upload className="w-4 h-4 text-[#0D5F57] shrink-0" />
                <span>Resume, LinkedIn & Credly Import</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white/90 border border-slate-200/80 rounded-lg px-3 py-2">
                <Mail className="w-4 h-4 text-[#0D5F57] shrink-0" />
                <span>Forward CE Receipts via Email</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white/90 border border-slate-200/80 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0" />
                <span>50 States + National Boards</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive PathPort Record Preview */}
          <div className="lg:col-span-6">
            {/* Discipline Switcher Tabs */}
            <div className="flex items-center justify-center lg:justify-end gap-1.5 mb-3">
              {PERSONAS.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === idx
                      ? 'bg-[#0D5F57] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Glass Card Preview */}
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/10 overflow-hidden">
              {/* Top Window Bar */}
              <div className="bg-[#0B132B] px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-mono text-slate-300">
                    getpathport.com/p/{current.demoSlug}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-300 text-xs font-medium border border-teal-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Sample PathPort Record
                </span>
              </div>

              {/* Profile Header */}
              <div className="p-5 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 font-display">
                      {current.name}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">{current.role}</p>
                  </div>
                  <Link
                    to={`/p/${current.demoSlug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-[#0D5F57] text-xs font-semibold border border-teal-200/60 self-start sm:self-auto transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Open Sample MyPortfolio</span>
                  </Link>
                </div>

                {/* Active Credentials List */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <span>Credentials & Renewal Rules</span>
                    <span>Evidence Provenance</span>
                  </div>
                  {current.credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <FileCheck2 className="w-4 h-4 text-[#0D5F57] shrink-0" />
                          {cred.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{cred.issuer}</div>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-100/80 text-emerald-900 text-xs font-semibold">
                          {cred.status}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {cred.provenance} (SHA-256 PDF)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* MyPortfolio Evidence Callout */}
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/70 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0 mt-0.5">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                      MyPortfolio • Linked Project Evidence
                    </div>
                    <div className="text-xs font-medium text-slate-800 mt-0.5">
                      {current.portfolioHighlight}
                    </div>
                  </div>
                </div>

                {/* MyPath Career Intelligence Callout */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#0B132B] to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-500/20 text-teal-300 shrink-0 mt-0.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                        MyPath • Career Intelligence & Role Audit
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        {current.myPathGoal}
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">{current.myPathStatus}</div>
                    </div>
                  </div>
                  <a
                    href="#mypath"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-teal-200 border border-white/15 shrink-0 text-center transition-colors"
                  >
                    Explore MyPath
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
