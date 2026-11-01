import React from 'react';
import {
  FileText,
  Linkedin,
  Award,
  Mail,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
  Share2,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react';
import { triggerLeadModal } from '../lib/modal-events';

interface ImportShowcaseProps {
  onOpenWaitlist?: (persona?: string) => void;
}

const INTAKE_CHANNELS = [
  {
    icon: FileText,
    title: 'Existing Resume or CV',
    detail: 'Drop in a PDF or Word document. PathPort extracts work history, degrees, and listed credentials into staged cards.',
    badge: 'PDF / DOCX',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Profile PDF',
    detail: 'Export your LinkedIn profile to PDF and drop it in to populate roles, dates, education, and accomplishments.',
    badge: '1-Click Export',
  },
  {
    icon: BadgeCheck,
    title: 'Credly, Accredible & Digital Badges',
    detail: 'Paste a badge URL or your full Credly earner profile (credly.com/users/you/badges), Accredible, Badgr/Canvas, or Coursera link to pull verified badges in bulk.',
    badge: 'Open Badges / URL',
  },
  {
    icon: Award,
    title: 'Bulk CE & License Certificates',
    detail: 'Upload a folder of PDFs or photos of wallet cards (RN, BLS, ACLS, NREMT, PMP). OCR reads hours, dates, and issuers.',
    badge: 'Multi-File OCR',
  },
  {
    icon: Mail,
    title: 'Forward Emails to @in.getpathport.com',
    detail: 'Finished a CE course on your phone? Forward the receipt to ce-yourid@in.getpathport.com and PathPort files it automatically.',
    badge: 'Email-to-Vault',
  },
];

export const ImportShowcase: React.FC<ImportShowcaseProps> = ({ onOpenWaitlist }) => {
  const handleCTA = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist();
    } else {
      triggerLeadModal({ intent: 'individual', source: 'Homepage — How It Works Import Section' });
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0D5F57] mb-2">
            How PathPort Works • Zero Blank-Page Data Entry
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Bring what you already have. PathPort organizes the rest.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            You shouldn’t have to retype ten years of licenses, CE certificates, and jobs by hand.
            Start from the files and emails you already have—then review what belongs in your record.
          </p>
        </div>

        {/* 3-Stage Progression: Import -> Review -> Your PathPort */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Stage 1: Multi-Channel Intake (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0D5F57] text-white text-xs font-bold">
                  Step 1 • Bring Your Files
                </span>
                <span className="text-xs font-semibold text-slate-500">~60 seconds</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                Drop in files, paste badge URLs, or forward an email
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Combine multiple sources at once. PathPort deduplicates overlapping entries across
                your resume, LinkedIn export, Credly/Open Badges profile, and uploaded certificates
                (plus ORCID, PubMed, DOI, and GitHub for publications and projects).
              </p>

              <div className="space-y-3">
                {INTAKE_CHANNELS.map((ch) => {
                  const Icon = ch.icon;
                  return (
                    <div
                      key={ch.title}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#0D5F57] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-900">{ch.title}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold shrink-0">
                            {ch.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{ch.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stage 2: Staged Review & Reconciliation (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-900 text-white p-6 sm:p-7 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold">
                  Step 2 • Review & Confirm
                </span>
                <SlidersHorizontal className="w-4 h-4 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Nothing enters your record without your say-so
              </h3>
              <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                PathPort stages every extracted item so you can edit dates, verify license numbers,
                and confirm suggested requirement attributions before anything is committed.
              </p>

              {/* Simulated Staged Review Tray */}
              <div className="space-y-2.5 bg-slate-950/70 rounded-xl p-4 border border-slate-800 overflow-hidden">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Staged From 4 Sources (12 Items Found)
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-bold text-white leading-snug">
                      Registered Nurse (RN) — Compact
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-semibold shrink-0">
                      Document-Supported
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed break-words [overflow-wrap:anywhere]">
                    Matched: Resume + FL_RN_License.pdf
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-bold text-white leading-snug">
                      PMI PMP® & AWS Solutions Architect
                    </div>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold shrink-0">
                      Credly Badge Sync
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed break-words [overflow-wrap:anywhere]">
                    Imported via credly.com/users/earner/badges
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-bold text-white leading-snug">
                      AACN CCRN (Adult) Certification
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-semibold shrink-0">
                      Document-Supported
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed break-words [overflow-wrap:anywhere]">
                    Matched: CCRN_WalletCard.pdf (100 CERPs rule)
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-bold text-white leading-snug">
                      Prevention of Medical Errors (2.0 CEUs)
                    </div>
                    <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-xs font-semibold shrink-0">
                      Suggested: FL RN
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed break-words [overflow-wrap:anywhere]">
                    Ingested via ce-sjenkins@in.getpathport.com • Confirm bucket
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Every uploaded PDF is SHA-256 hashed in your private Vault.</span>
            </div>
          </div>

          {/* Stage 3: Use Your PathPort Everywhere (3 cols) */}
          <div className="lg:col-span-3 rounded-2xl bg-gradient-to-b from-emerald-50/70 to-white border border-emerald-200/80 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#0D5F57] text-xs font-bold">
                  Step 3 • Put It to Work
                </span>
                <Share2 className="w-4 h-4 text-[#0D5F57]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                One record powers your whole career
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Once confirmed, your PathPort record stays alive—tracking renewals, generating
                tailored portfolios, and mapping your next move.
              </p>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>50-State & Board Renewal Tracking:</strong> Smart-suggests matching
                    requirement buckets so you can confirm attribution across multiple credentials
                    with 90/60/30-day alerts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>MyPortfolio Share Links:</strong> Publish permissioned web portfolios or
                    PDF dossiers backed by original certificates.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>MyPath Career Intelligence:</strong> Run What-If Role Audits and build
                    targeted applications from your verified history.
                  </span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleCTA}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-[#0D5F57] hover:bg-[#094842] text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start With Your Existing Files</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
