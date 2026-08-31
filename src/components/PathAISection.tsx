import React, { useState } from 'react';
import { 
  Bot, ArrowRight, Compass, Target, 
  TrendingUp, CheckCircle2, ShieldCheck,
  XCircle, UserCheck, Award, BookOpen, Hammer,
  FileCheck2, Briefcase, Lightbulb
} from 'lucide-react';
import { BetaRegistrationModal } from './BetaRegistrationModal';

export const PathAISection: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [activeScenario, setActiveScenario] = useState<'nurse_transition' | 'ems_leadership' | 'pm_pivot'>('nurse_transition');

  const scenarios = {
    nurse_transition: {
      title: "ICU Charge Nurse ➔ Clinical Informatics & Systems Specialist",
      badge: "Target: Healthcare Technology & Informatics",
      matchScore: "85% Prerequisites Met",
      genericAdvice: "Recommends 4 more critical care telemetry badges based solely on your RN license.",
      pathaiInsight: "Recognizes your 8 years of ICU charge leadership, EHR rollout committee work, and clinical protocol case studies. Understands you want to transition away from 12-hour floor shifts into health tech.",
      actionItems: [
        { pillar: "Experience", status: "complete", text: "8+ years inpatient clinical workflow & EHR protocol leadership" },
        { pillar: "Demonstrate", status: "complete", text: "Unit-wide sepsis protocol QI case study with measured outcome data" },
        { pillar: "Learn", status: "gap", text: "Complete 15 CPHIMS-accredited health data standards (FHIR) CE hours" },
        { pillar: "Reflect", status: "gap", text: "Publish 'Clinical Systems & Patient Safety' leadership narrative" }
      ],
      aiQuote: "“You don't need another generic bedside certification. Your charge leadership and EHR committee work already prove your clinical credibility. Adding 15 accredited CE hours in health data interoperability and publishing your sepsis protocol case study positions you directly for informatics roles.”"
    },
    ems_leadership: {
      title: "Critical Care Paramedic ➔ EMS Operations & Clinical Educator",
      badge: "Target: Clinical Education & QA Leadership",
      matchScore: "90% Prerequisites Met",
      genericAdvice: "Recommends repeating standard CPR/airway refreshers without recognizing clinical leadership.",
      pathaiInsight: "Evaluates your 10 years of high-acuity 911 calls, field training officer (FTO) records, and QA protocol audits. Focuses on your goal to step into an agency-wide clinical director role.",
      actionItems: [
        { pillar: "Earn", status: "complete", text: "Active NREMT Paramedic, FP-C, and ACLS/PALS Instructor credentials" },
        { pillar: "Build", status: "complete", text: "Standardized pre-hospital mechanical ventilation training curriculum" },
        { pillar: "Learn", status: "gap", text: "Log 10 hours in EMS quality management & clinical audit methods" },
        { pillar: "Demonstrate", status: "gap", text: "Package protocol training outcomes into a verified case study" }
      ],
      aiQuote: "“You satisfy all field clinical prerequisites. Rather than stacking redundant basic certs, PathAI maps your remaining hours to state-accredited EMS educator modules and packages your protocol curriculum into a verified case study.”"
    },
    pm_pivot: {
      title: "Senior Technical Project Manager ➔ Director of Technical Programs",
      badge: "Target: Executive Program Governance",
      matchScore: "92% Prerequisites Met",
      genericAdvice: "Recommends entry-level coding badges because you managed software engineers.",
      pathaiInsight: "Understands that you excel at cross-functional delivery, risk management, and budget governance, not writing code. Targets director-level program governance.",
      actionItems: [
        { pillar: "Earn", status: "complete", text: "PMP® credential and 8+ years leading distributed systems delivery" },
        { pillar: "Demonstrate", status: "complete", text: "Zero-downtime multi-region database migration case study" },
        { pillar: "Learn", status: "gap", text: "Log 12 PDUs in organizational strategy & executive stakeholder alignment" },
        { pillar: "Reflect", status: "gap", text: "Document executive stakeholder governance and vendor negotiation framework" }
      ],
      aiQuote: "“Your technical delivery proof is rock solid. To move into director-level governance, highlight executive stakeholder management, vendor negotiation, and team scaling in your portfolio.”"
    }
  };

  const pillars = [
    {
      name: "1. Earn",
      category: "Credentials & Accreditations",
      icon: Award,
      description: "Formal licenses, board certifications, and recognized accreditations (e.g. State RN/NP, NREMT, PMP, AWS).",
      example: "State Board License or Specialty Board Exam"
    },
    {
      name: "2. Learn",
      category: "CEUs & Accredited Courses",
      icon: BookOpen,
      description: "Mandatory continuing education units, contact hours, and accredited coursework tailored to state requirements.",
      example: "15 CPHIMS CE Hours or Florida Law Category A"
    },
    {
      name: "3. Build",
      category: "Applied Deliverables & Toolkits",
      icon: Hammer,
      description: "Hands-on protocols, simulation checklists, clinical training curriculums, and production software repositories.",
      example: "Ventilation Protocol or Simulation Toolkit"
    },
    {
      name: "4. Demonstrate",
      category: "Structured Case Studies",
      icon: FileCheck2,
      description: "Turning real work into verifiable Challenge-Approach-Outcome proof with measurable metrics and artifact links.",
      example: "Hospital Sepsis QI Protocol Case Study"
    },
    {
      name: "5. Experience",
      category: "Operational Roles & Rotations",
      icon: Briefcase,
      description: "Direct clinical exposure, committee leadership, preceptorships, and supervisory tenure in the field.",
      example: "8+ Years ICU Charge & EHR Committee Lead"
    },
    {
      name: "6. Reflect",
      category: "Leadership Philosophy Narratives",
      icon: Lightbulb,
      description: "Structured professional narratives that explain how you make decisions, lead teams, and debrief critical events.",
      example: "Psychological Safety in Debriefing Narrative"
    }
  ];

  const current = scenarios[activeScenario];

  return (
    <section id="path-ai" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-semibold shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" aria-hidden="true" />
            <span>PathAI • Grounded Career Advisor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Most tools suggest certs based on your last badge.{' '}
            <span className="text-teal-800 dark:text-teal-400 block mt-1">PathAI advises your actual career journey.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Generic platforms treat you like a keyword tag. If you earned a telemetry badge, they recommend more telemetry—even if your goal is hospital system design or clinical leadership. <strong>PathAI</strong> analyzes your complete record across 6 distinct action pillars to map real, targeted next steps.
          </p>
        </div>

        {/* Interactive Scenario Explorer */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Scenario Selector Tabs (ARIA Tablist) */}
          <div 
            role="tablist"
            aria-label="PathAI Career Guidance Scenarios"
            className="flex flex-wrap justify-center gap-2.5"
          >
            <button
              id="pathai-tab-nurse"
              role="tab"
              aria-selected={activeScenario === 'nurse_transition'}
              aria-controls="pathai-diagnostic-panel"
              onClick={() => setActiveScenario('nurse_transition')}
              className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                activeScenario === 'nurse_transition'
                  ? 'bg-teal-800 text-white border-teal-800 shadow-xs scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Career Pivot (Bedside ➔ Informatics)</span>
            </button>

            <button
              id="pathai-tab-ems"
              role="tab"
              aria-selected={activeScenario === 'ems_leadership'}
              aria-controls="pathai-diagnostic-panel"
              onClick={() => setActiveScenario('ems_leadership')}
              className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                activeScenario === 'ems_leadership'
                  ? 'bg-teal-800 text-white border-teal-800 shadow-xs scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Clinical Leadership (Field ➔ QA Director)</span>
            </button>

            <button
              id="pathai-tab-pm"
              role="tab"
              aria-selected={activeScenario === 'pm_pivot'}
              aria-controls="pathai-diagnostic-panel"
              onClick={() => setActiveScenario('pm_pivot')}
              className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                activeScenario === 'pm_pivot'
                  ? 'bg-teal-800 text-white border-teal-800 shadow-xs scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Target className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Executive Advancement (PM ➔ Director)</span>
            </button>
          </div>

          {/* PathAI Interactive Diagnostic Card (ARIA Tabpanel) */}
          <div 
            id="pathai-diagnostic-panel"
            role="tabpanel"
            aria-labelledby={`pathai-tab-${activeScenario === 'nurse_transition' ? 'nurse' : activeScenario === 'ems_leadership' ? 'ems' : 'pm'}`}
            className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-10 border-2 border-teal-800/80 dark:border-teal-500 shadow-lg space-y-7 transition-colors focus:outline-none"
            tabIndex={0}
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {current.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {current.matchScore}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  {current.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Bot className="w-4 h-4 text-teal-800 dark:text-teal-400" aria-hidden="true" />
                <span>Personalized Career Analysis</span>
              </div>
            </div>

            {/* Contrast Callout: Generic Algorithm vs PathAI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 dark:text-rose-300">
                  <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" aria-hidden="true" />
                  <span>Generic Credential Platforms</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {current.genericAdvice}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/80 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900 dark:text-teal-300">
                  <UserCheck className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" aria-hidden="true" />
                  <span>PathAI Whole-Journey Intelligence</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {current.pathaiInsight}
                </p>
              </div>
            </div>

            {/* AI Reasoning Callout */}
            <div className="p-5 rounded-2xl bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-800/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-900 dark:text-teal-300">
                <ShieldCheck className="w-4 h-4 text-teal-700 dark:text-teal-400" aria-hidden="true" />
                <span>Targeted Growth Rationale</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                {current.aiQuote}
              </p>
            </div>

            {/* Actionable Roadmap Grid with Pillar Badges */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Targeted Career Action Plan (by Action Pillar)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.actionItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border text-xs flex items-start gap-3 transition-colors ${
                      item.status === 'complete'
                        ? 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                        : 'bg-emerald-50/60 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 font-semibold'
                    }`}
                  >
                    {item.status === 'complete' ? (
                      <CheckCircle2 className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <Target className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <div className="space-y-1">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-700/80 text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                        Pillar: {item.pillar}
                      </span>
                      <div>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                PathAI is completely confidential. Your career goals and transition queries are never shared with your current employer.
              </div>
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Try PathAI in Free Beta</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* The 6 Action Pillars Breakdown Grid */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              The 6 Action Pillars of PathPort
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Career growth is multidimensional. PathAI evaluates your evidence and guides your next steps across six balanced pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="card-surface-white p-6 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-lg border border-teal-200 dark:border-teal-800">
                      {pillar.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {pillar.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                    <strong className="text-slate-700 dark:text-slate-300">Example: </strong>
                    {pillar.example}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        source="path_ai_section"
      />
    </section>
  );
};

export default PathAISection;
