import React, { useState } from 'react';
import {
  FileText,
  Award,
  Briefcase,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Palette,
  Lock,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SHOWCASES = [
  {
    role: 'Clinical & Healthcare (RN / APRN)',
    demoSlug: 'sarah-jenkins-rn',
    headline: 'Pair active multi-state licenses with clinical QI outcomes',
    themeLabel: 'Modern Clinical Theme',
    summary:
      'Instead of listing "Charge Nurse, 2022–2026" on a plain resume, share a permissioned MyPortfolio view linking your active compact RN license, AACN CCRN certification, and de-identified quality improvement protocols.',
    artifacts: [
      {
        type: 'Quality Improvement Case Study',
        title: 'ICU Sepsis Early-Recognition Bundle',
        metric: '22% faster antibiotic initiation across 1,400 admissions',
        badge: 'Document-Supported (PDF)',
      },
      {
        type: 'Preceptorship & Teaching',
        title: 'Critical Care New-Grad Residency Preceptor',
        metric: '420 precepted clinical hours • 6 RN cohorts onboarded',
        badge: 'Document-Supported',
      },
      {
        type: 'Credential & Renewal Packet',
        title: 'FL Compact RN + CA RN + CCRN + ACLS/BLS',
        metric: '100% renewal compliance • Original certificates attached',
        badge: 'SHA-256 Vault Backed',
      },
    ],
  },
  {
    role: 'Project & Technical Leadership (PMP)',
    demoSlug: 'elena-rodriguez-pmp',
    headline: 'Connect your PMP and cloud certifications to shipped systems',
    themeLabel: 'Executive Dark Theme',
    summary:
      'Hiring managers and enterprise clients want proof of delivery. Link your PMI PMP and cloud credentials directly to architecture diagrams, post-mortems, and budget delivery summaries.',
    artifacts: [
      {
        type: 'Program Delivery Case Study',
        title: 'Multi-Region Core Banking Cloud Migration',
        metric: '$14.2M budget • Zero unplanned downtime across 18 months',
        badge: 'Architecture Deck Linked',
      },
      {
        type: 'Published Framework',
        title: 'Enterprise AI Governance & Risk Controls Playbook',
        metric: 'Adopted across 11 engineering squads (240 engineers)',
        badge: 'Publication Attached',
      },
      {
        type: 'Verified Certifications',
        title: 'PMI PMP (60/60 PDUs) • AWS Solutions Architect • CSM',
        metric: 'Active standing • Direct certificate verification',
        badge: 'Document-Supported',
      },
    ],
  },
  {
    role: 'Students, Residents & New Graduates',
    demoSlug: 'david-kim-bsn',
    headline: 'Turn clinical rotations and capstones into first-job proof',
    themeLabel: 'Minimal Academic Theme',
    summary:
      'New graduates often look identical on paper. Stand out to residency directors and hiring managers by presenting your capstone research, clinical rotation hours, and faculty evaluations in a clean link.',
    artifacts: [
      {
        type: 'Senior Practicum Log',
        title: 'Level-1 Trauma Emergency Department Practicum',
        metric: '180 direct patient care hours • Preceptor evaluation attached',
        badge: 'Document-Supported',
      },
      {
        type: 'Honors Capstone Poster',
        title: 'Reducing Pediatric Discharge Medication Errors',
        metric: '1st Place — Spring Undergraduate Research Symposium',
        badge: 'Poster PDF Attached',
      },
      {
        type: 'Licensure & Readiness',
        title: 'BSN Conferred • NCLEX-RN Scheduled • AHA BLS & ACLS',
        metric: 'Ready for immediate hospital residency onboarding',
        badge: 'SHA-256 Vault Backed',
      },
    ],
  },
];

export const PortfolioShowcase: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const current = SHOWCASES[selected];

  return (
    <section
      id="myportfolio"
      className="py-20 lg:py-28 bg-white border-t border-slate-200/70 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>MyPortfolio • Permissioned Professional Views</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
              Curate verifiable portfolios for every audience—from one record.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              With <strong>MyPortfolio</strong>, you never rebuild your profile from scratch. Select
              which credentials, projects, case studies, and publications to include, pick a visual
              theme (<strong>Modern</strong>, <strong>Executive</strong>, or{' '}
              <strong>Minimal</strong>), and share a live link or formatted PDF dossier.
            </p>

            {/* Persona Selector Buttons */}
            <div className="space-y-2 pt-1">
              {SHOWCASES.map((item, idx) => (
                <button
                  key={item.role}
                  type="button"
                  onClick={() => setSelected(idx)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    selected === idx
                      ? 'bg-[#0D5F57] text-white border-[#0D5F57] shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <span className="text-sm font-semibold block">{item.role}</span>
                    <span
                      className={`text-xs ${
                        selected === idx ? 'text-teal-200' : 'text-slate-500'
                      }`}
                    >
                      {item.themeLabel}
                    </span>
                  </div>
                  <ExternalLink
                    className={`w-4 h-4 ${selected === idx ? 'text-teal-200' : 'text-slate-400'}`}
                  />
                </button>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#0D5F57] shrink-0" />
                <span>3 Built-In Presentation Themes</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#0D5F57] shrink-0" />
                <span>1-Click Link Revocation</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D5F57]">
                    MyPortfolio • {current.themeLabel}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-display mt-1">
                    {current.headline}
                  </h3>
                </div>
                <Link
                  to={`/p/${current.demoSlug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#0D5F57] hover:bg-teal-50 hover:border-teal-200 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D5F57]" />
                  <span>Open Live Sample</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{current.summary}</p>

              <div className="mt-6 space-y-3">
                {current.artifacts.map((art, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#0D5F57] flex items-center justify-center shrink-0 mt-0.5">
                        {i === 0 ? (
                          <Briefcase className="w-4.5 h-4.5" />
                        ) : i === 1 ? (
                          <BookOpen className="w-4.5 h-4.5" />
                        ) : (
                          <FileText className="w-4.5 h-4.5" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {art.type}
                        </div>
                        <div className="text-sm font-bold text-slate-900 mt-0.5">{art.title}</div>
                        <div className="text-xs text-slate-600 mt-0.5">{art.metric}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-[#0D5F57] border border-emerald-200/60 text-xs font-semibold self-start sm:self-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {art.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                <span>
                  Exportable as a live share URL or formatted PDF dossier (Curriculum Vitae /
                  Speaker One-Sheet)
                </span>
                <Link
                  to={`/p/${current.demoSlug}`}
                  className="font-semibold text-[#0D5F57] hover:underline inline-flex items-center gap-1"
                >
                  <span>Inspect full sample portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
