import React, { useState } from 'react';
import {
  Compass,
  BookOpen,
  Award,
  Briefcase,
  Hammer,
  FileSpreadsheet,
  Users,
  CheckCircle2,
  ArrowRight,
  Target,
  FileSearch,
  Sparkles,
} from 'lucide-react';
import { APP_SIGN_UP_URL, getActiveTrialDays } from '../lib/modal-events';

interface PathAISectionProps {
  onOpenWaitlist?: (persona?: string) => void;
}

const TRAJECTORIES = [
  {
    id: 'nurse-to-np',
    category: 'Clinical Advancement',
    currentRole: 'BSN, RN — Adult ICU (4 Years, CCRN)',
    targetRole: 'Acute Care Nurse Practitioner (ACNP) / Clinical Educator',
    readinessSummary: 'Strong Clinical Foundation • 2 Academic & Preceptorship Steps Ahead',
    whatIfInsight:
      'Your 4,800 ICU hours and CCRN certification satisfy top-tier MSN/DNP admission prerequisites. Focus next on graduate pharmacology readiness and logging formal preceptorship hours.',
    pillars: [
      {
        pillar: 'Learn',
        icon: BookOpen,
        color: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
        recommendation: 'Graduate Pathophysiology & Advanced Pharmacology Bridge',
        rationale:
          'Prepares you for ACNP core curriculum and overlaps with future 25-hour APRN pharmacology renewal requirements.',
      },
      {
        pillar: 'Credential',
        icon: Award,
        color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
        recommendation: 'Maintain AACN CCRN + Add AHA ACLS Instructor Status',
        rationale:
          'Strengthens clinical faculty and DNP application packets while fulfilling teaching competency hours.',
      },
      {
        pillar: 'Experience',
        icon: Briefcase,
        color: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
        recommendation: 'Log 120 Hours as Primary ICU Residency Preceptor',
        rationale:
          'Directly satisfies ANCC Category 5 Preceptor Hours and demonstrates formal clinical supervision.',
      },
      {
        pillar: 'Build',
        icon: Hammer,
        color: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
        recommendation: 'Document Unit Ventilator Weaning QI Protocol in MyPortfolio',
        rationale:
          'Converts daily bedside quality work into a tangible Evidence-Based Practice (EBP) artifact.',
      },
      {
        pillar: 'Publish',
        icon: FileSpreadsheet,
        color: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
        recommendation: 'Submit Abstract Poster to AACN National Teaching Institute (NTI)',
        rationale:
          'Establishes peer-reviewed clinical scholarship ahead of graduate interviews.',
      },
      {
        pillar: 'Lead',
        icon: Users,
        color: 'text-teal-300 bg-teal-500/15 border-teal-500/30',
        recommendation: 'Co-Chair Hospital Critical Care Shared Governance Council',
        rationale:
          'Demonstrates systems-level clinical leadership across multidisciplinary teams.',
      },
    ],
  },
  {
    id: 'medic-to-chief',
    category: 'EMS & Operations Leadership',
    currentRole: 'Flight Paramedic (NRP, FP-C — 6 Years)',
    targetRole: 'EMS Clinical Director / Battalion Operations Chief',
    readinessSummary: 'Field Mastery Established • Add Administrative & QA Governance Evidence',
    whatIfInsight:
      'Your clinical and flight credentials are complete. Transitioning to Operations Chief requires documented QA/QI chart audit governance, budget stewardship, and incident command credentials.',
    pillars: [
      {
        pillar: 'Learn',
        icon: BookOpen,
        color: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
        recommendation: 'EMS Finance, Reimbursement & Municipal Budgeting Seminar',
        rationale:
          'Closes the gap between field clinical command and agency-level fiscal administration.',
      },
      {
        pillar: 'Credential',
        icon: Award,
        color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
        recommendation: 'FEMA NIMS ICS-300 / ICS-400 & NAEMT EMS Safety Officer',
        rationale:
          'Required command certifications for multi-agency incident management and director roles.',
      },
      {
        pillar: 'Experience',
        icon: Briefcase,
        color: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
        recommendation: 'Lead Monthly Medical Director Protocol & Chart Review Audits',
        rationale:
          'Provides verifiable clinical governance experience alongside agency medical direction.',
      },
      {
        pillar: 'Build',
        icon: Hammer,
        color: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
        recommendation: 'Publish Prehospital RSI First-Pass Success Dashboard Case Study',
        rationale:
          'Showcases data-driven clinical quality management inside your shareable MyPortfolio.',
      },
      {
        pillar: 'Publish',
        icon: FileSpreadsheet,
        color: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
        recommendation: 'Author Regional Trauma Hand-Off Standard Operating Procedure',
        rationale:
          'Demonstrates authorship of formal clinical policy across hospital and EMS interfaces.',
      },
      {
        pillar: 'Lead',
        icon: Users,
        color: 'text-teal-300 bg-teal-500/15 border-teal-500/30',
        recommendation: 'Direct New-Hire Paramedic Field Training Officer (FTO) Academy',
        rationale:
          'Proves workforce readiness leadership over 25+ field clinicians.',
      },
    ],
  },
  {
    id: 'pm-to-vp',
    category: 'Executive Program Leadership',
    currentRole: 'Senior Technical Project Manager (PMP, CSM)',
    targetRole: 'VP of Program Delivery / Enterprise PMO Director',
    readinessSummary: 'Delivery Execution Strong • Expand Portfolio Governance & Executive Artifacts',
    whatIfInsight:
      'Your PMP and sprint delivery history are strong. Executive PMO roles screen for multi-million-dollar portfolio governance, vendor risk frameworks, and cross-org transformation outcomes.',
    pillars: [
      {
        pillar: 'Learn',
        icon: BookOpen,
        color: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
        recommendation: 'Executive Capital Allocation & M&A Post-Merger Integration',
        rationale:
          'Fulfills PMI Business Acumen PDUs while building board-level financial fluency.',
      },
      {
        pillar: 'Credential',
        icon: Award,
        color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
        recommendation: 'PMI PfMP (Portfolio Management) or SAFe Release Train Engineer',
        rationale:
          'Signals readiness to govern multi-program portfolios rather than single workstreams.',
      },
      {
        pillar: 'Experience',
        icon: Briefcase,
        color: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
        recommendation: 'Own Quarterly Steering Committee & Vendor SLA Governance',
        rationale:
          'Documents executive stakeholder management and cross-department budget accountability.',
      },
      {
        pillar: 'Build',
        icon: Hammer,
        color: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
        recommendation: 'Package Enterprise Cloud Migration ROI Audit in MyPortfolio',
        rationale:
          'Gives executive recruiters concrete evidence of on-time, under-budget transformation.',
      },
      {
        pillar: 'Publish',
        icon: FileSpreadsheet,
        color: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
        recommendation: 'Publish PMO Risk Telemetry Template for PMI Chapter Congress',
        rationale:
          'Earns Giving Back PDUs and establishes external industry authority.',
      },
      {
        pillar: 'Lead',
        icon: Users,
        color: 'text-teal-300 bg-teal-500/15 border-teal-500/30',
        recommendation: 'Mentor 4 Junior Project Managers Through PMP Certification',
        rationale:
          'Proves talent development and organizational capability building.',
      },
    ],
  },
];

export const PathAISection: React.FC<PathAISectionProps> = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = TRAJECTORIES[selectedIdx];
  const trialDays = getActiveTrialDays();

  return (
    <section
      id="mypath"
      className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>MyPath • Career Intelligence, Role Audits & Opportunity Pursuit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-tight text-white">
            See where your experience qualifies you to go next—and{' '}
            <span className="text-[#2DD4BF]">how to get there.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Because PathPort holds your real credentials, clinical or project hours, education, and
            case studies, <strong>MyPath</strong> evaluates your whole journey—mapping concrete next
            steps across 6 career pillars, running <strong>What-If Role Audits</strong>, and
            helping you tailor applications from verified evidence.
          </p>
        </div>

        {/* 3 MyPath Capabilities Ribbon */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-500/15 text-teal-300 shrink-0 mt-0.5">
              <Compass className="w-4.5 h-4.5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">6-Pillar Career Roadmap</div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Actionable steps across <em>Learn, Credential, Experience, Build, Publish,</em> and{' '}
                <em>Lead</em>—calibrated to your actual record.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-500/15 text-teal-300 shrink-0 mt-0.5">
              <FileSearch className="w-4.5 h-4.5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">What-If Role Audits</div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Paste a target role or specialty description to see which requirements your record
                already satisfies and what gaps remain.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-500/15 text-teal-300 shrink-0 mt-0.5">
              <Target className="w-4.5 h-4.5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Application & Interview Studio</div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Assemble role-specific submission manifests and STAR interview stories backed by
                your real projects and credentials.
              </p>
            </div>
          </div>
        </div>

        {/* Trajectory Selector Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {TRAJECTORIES.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelectedIdx(i)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedIdx === i
                  ? 'bg-[#2DD4BF] text-slate-950 shadow-lg shadow-teal-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              {t.category}
            </button>
          ))}
        </div>

        {/* Active Trajectory Synthesis Panel */}
        <div className="mt-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          {/* Top Summary Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Current Record Baseline → Target Horizon
              </div>
              <div className="text-lg sm:text-xl font-bold font-display text-white flex flex-wrap items-center gap-2">
                <span>{active.currentRole}</span>
                <ArrowRight className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span className="text-[#2DD4BF]">{active.targetRole}</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-500/15 border border-teal-400/30 text-teal-200 text-xs font-semibold self-start lg:self-auto">
              <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
              <span>{active.readinessSummary}</span>
            </div>
          </div>

          {/* Grounded What-If Audit Callout */}
          <div className="my-5 p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">MyPath Readiness Synthesis: </strong>
              {active.whatIfInsight}
            </p>
          </div>

          {/* 6 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {active.pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.pillar}
                  className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${item.color}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {item.pillar} Pillar
                      </span>
                      <span className="text-xs text-slate-400 font-mono">MyPath</span>
                    </div>
                    <h3 className="text-base font-bold text-white font-display leading-snug">
                      {item.recommendation}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{item.rationale}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white">MyPath</strong> is included in PathPort Pro—and
              unlocked during your free {trialDays}-day trial.
            </p>
            <a
              href={APP_SIGN_UP_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2DD4BF] hover:bg-teal-300 text-slate-950 font-bold text-sm transition-colors shrink-0"
            >
              <span>Unlock MyPath in Your {trialDays}-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
