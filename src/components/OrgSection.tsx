import React from 'react';
import {
  Building2,
  Award,
  CheckCircle2,
  ArrowRight,
  Lock,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { triggerLeadModal } from '../lib/modal-events';

interface OrgSectionProps {
  onOpenWaitlist?: (persona?: string) => void;
}

export const OrgSection: React.FC<OrgSectionProps> = ({ onOpenWaitlist }) => {
  const handleWorkplaceCTA = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist('PathPort Workplace');
    } else {
      triggerLeadModal({
        intent: 'workplace',
        persona: 'Workplace / Operations Leader',
        source: 'Homepage — Organizations Section (Workplace)',
      });
    }
  };

  const handleCertifyCTA = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist('PathPort Certify');
    } else {
      triggerLeadModal({
        intent: 'certify',
        persona: 'Certification Board / Issuer',
        source: 'Homepage — Organizations Section (Certify)',
      });
    }
  };

  return (
    <section
      id="organizations"
      className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-[#0D5F57]" />
            <span>For Any Workforce & Credentialing Organization • Launching 2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Collect workforce credentials & run full certification programs—without endless emails
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            PathPort is built for every industry. In 2027, <strong>PathPort Workplace</strong> and{' '}
            <strong>PathPort Certify</strong> connect employers, training providers, and certifying
            bodies directly to the individual records professionals already own.
          </p>
        </div>

        {/* 2-Card Ecosystem Bridge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: PathPort Workplace (2027) */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-[#0D5F57] text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>PathPort Workplace</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                  Launching 2027 • Pilot Cohort Open
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Collect & verify credentials across any workforce—without chasing emails
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Built for any workforce that has to obtain and track employee credentials—across
                technology, construction, aviation, logistics, education, healthcare, and field
                operations. Simply log in, select what you need, and send it to your employee.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>Select what you need & send:</strong> Request required licenses, safety
                    cards, background checks, or certifications in seconds—no lost email threads.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>Free employee profile & instant sharing:</strong> Employees create a
                    free PathPort profile, upload their required documents once, and share them
                    instantly.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>Automated compliance intelligence:</strong> System intelligence monitors
                    expirations and role requirements at 90/60/30 days so everyone stays compliant.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>Assign CEUs to attendees:</strong> Issue and assign continuing education
                    credits or internal training hours directly to attendees’ PathPort records.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleWorkplaceCTA}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0D5F57] hover:bg-[#094842] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join 2027 Workplace Pilot List</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/for/enterprise"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm text-center transition-colors"
              >
                Explore Workplace Architecture
              </Link>
            </div>
          </div>

          {/* Card 2: PathPort Certify (2027) */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>PathPort Certify</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                  Launching 2027 • Issuer Cohort Open
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 font-display">
                End-to-end credentialing: applications, testing, badge issuance & recertification
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Complete credential management for certifying bodies, professional associations, and
                training organizations across any industry—from initial candidate application to
                ongoing recertification.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>Candidate applications, docs & payments:</strong> Allow candidates to
                    apply for a credential, submit required documents, and track payments in one
                    portal.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>Official test platform & partner sync:</strong> Track exam results from
                    official test platforms—or use one of our testing partners to streamline the
                    assessment experience.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>Issue through any badge provider:</strong> Issue credentials from
                    PathPort Certify with{' '}
                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-[#0D5F57] font-mono text-xs font-semibold border border-emerald-200/80">
                      Issuer-Verified
                    </span>{' '}
                    provenance and syndicate through Credly, Accredible, Badgr, or Open Badges.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0 mt-0.5" />
                  <span>
                    <strong>Manage recertifications in PathPort:</strong> Automate multi-year
                    recertification cycles, CEU/PDU rule engines, and audit review queues directly
                    in the platform.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleCertifyCTA}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request 2027 Certify Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/for/board-certifications"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm text-center transition-colors"
              >
                Explore Certify Architecture
              </Link>
            </div>
          </div>
        </div>

        {/* Consent & Privacy Invariant Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#0D5F57] shrink-0" />
            <span>
              <strong>Governing Privacy Invariant:</strong> Organizations and certifying bodies
              never own duplicate employee records or receive access to unshared personal items.
            </span>
          </div>
          <Link
            to="/security"
            className="inline-flex items-center gap-1 font-semibold text-[#0D5F57] hover:underline shrink-0"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Read Provenance & Consent Spec</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
