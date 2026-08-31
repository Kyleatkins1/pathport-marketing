import React, { useState, useEffect } from 'react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { SEO } from '../../../components/SEO';
import { BetaRegistrationModal } from '../../../components/BetaRegistrationModal';
import { 
  Calculator, CheckCircle2, AlertCircle, ArrowRight, Copy, Check 
} from 'lucide-react';

interface StateRule {
  state: string;
  code: string;
  isCompact: boolean;
  cycleYears: number;
  totalHours: number;
  mandatoryTopics: { topic: string; hours: string; frequency: string }[];
  boardName: string;
  specialNotes: string;
}

const STATE_RULES: Record<string, StateRule> = {
  FL: {
    state: "Florida",
    code: "FL",
    isCompact: true,
    cycleYears: 2,
    totalHours: 24,
    boardName: "Florida Board of Nursing (FBON)",
    mandatoryTopics: [
      { topic: "Medical Errors Prevention", hours: "2 hrs", frequency: "Every 2 years" },
      { topic: "Florida Laws & Rules", hours: "2 hrs", frequency: "Every 2 years" },
      { topic: "Human Trafficking", hours: "2 hrs", frequency: "Every 2 years" },
      { topic: "Recognizing Impairment in the Workplace", hours: "2 hrs", frequency: "Every 4 years" },
      { topic: "HIV/AIDS Update", hours: "1 hr", frequency: "First renewal only" }
    ],
    specialNotes: "Florida requires all CE to be reported prior to license renewal. PathPort keeps all your certificates pre-sorted with provider numbers for zero-friction submission."
  },
  CA: {
    state: "California",
    code: "CA",
    isCompact: false,
    cycleYears: 2,
    totalHours: 30,
    boardName: "California Board of Registered Nursing (BRN)",
    mandatoryTopics: [
      { topic: "Implicit Bias in Healthcare", hours: "1 direct course", frequency: "First renewal / within 2 years" },
      { topic: "Direct Patient Care Relevant Topics", hours: "29 hrs", frequency: "Every 2 years" }
    ],
    specialNotes: "California is non-compact. Courses must be taken through BRN-approved continuing education providers (CEP numbers)."
  },
  TX: {
    state: "Texas",
    code: "TX",
    isCompact: true,
    cycleYears: 2,
    totalHours: 20,
    boardName: "Texas Board of Nursing (BON)",
    mandatoryTopics: [
      { topic: "Nursing Jurisprudence & Ethics", hours: "2 hrs", frequency: "Every 3rd 2-year cycle" },
      { topic: "Human Trafficking Prevention", hours: "1 approved course", frequency: "Every 2 years" },
      { topic: "Targeted Clinical Specialty Hours", hours: "18 hrs", frequency: "Every 2 years" }
    ],
    specialNotes: "Texas eNLC multi-state compact member. CE must be in the nurse's targeted area of clinical practice."
  },
  OH: {
    state: "Ohio",
    code: "OH",
    isCompact: true,
    cycleYears: 2,
    totalHours: 24,
    boardName: "Ohio Board of Nursing (OBN)",
    mandatoryTopics: [
      { topic: "Category A: Ohio Nursing Law & Rules", hours: "1 hr", frequency: "Every 2 years" },
      { topic: "General Clinical Contact Hours", hours: "23 hrs", frequency: "Every 2 years" }
    ],
    specialNotes: "At least 1 contact hour must be explicitly approved as Category A (OBN Law and Administrative Rules)."
  },
  GA: {
    state: "Georgia",
    code: "GA",
    isCompact: true,
    cycleYears: 2,
    totalHours: 30,
    boardName: "Georgia Board of Nursing",
    mandatoryTopics: [
      { topic: "Continuing Education or Specialty Certification", hours: "30 hrs", frequency: "Every 2 years" }
    ],
    specialNotes: "Georgia allows nurses to satisfy renewal via 30 contact hours, national board certification, or 500 active practice hours."
  },
  NY: {
    state: "New York",
    code: "NY",
    isCompact: false,
    cycleYears: 3,
    totalHours: 0,
    boardName: "New York State Education Dept (NYSED)",
    mandatoryTopics: [
      { topic: "Infection Control & Barrier Precautions", hours: "Approved Course", frequency: "Every 4 years" },
      { topic: "Child Abuse Identification & Reporting", hours: "Approved Course", frequency: "One-time requirement" }
    ],
    specialNotes: "New York does not have a general contact hour minimum for RNs, but mandates approved Infection Control and Child Abuse coursework."
  },
  PA: {
    state: "Pennsylvania",
    code: "PA",
    isCompact: true,
    cycleYears: 2,
    totalHours: 30,
    boardName: "Pennsylvania State Board of Nursing",
    mandatoryTopics: [
      { topic: "Child Abuse Recognition & Reporting", hours: "2 hrs (3 hrs for initial)", frequency: "Every 2 years" },
      { topic: "General Continuing Education", hours: "28 hrs", frequency: "Every 2 years" }
    ],
    specialNotes: "Child Abuse hours must be transmitted directly by an approved Pennsylvania Department of Human Services provider."
  }
};

export const RenewalCalculator: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('FL');
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentRule = STATE_RULES[selectedState] || STATE_RULES.FL;
  const generalHours = Math.max(
    0,
    currentRule.totalHours - currentRule.mandatoryTopics.reduce((acc, curr) => {
      const parsed = parseInt(curr.hours, 10);
      return acc + (isNaN(parsed) ? 0 : parsed);
    }, 0)
  );

  const handleCopy = () => {
    const text = `State CE Requirements for ${currentRule.state} (${currentRule.boardName}):
• Cycle: Every ${currentRule.cycleYears} years
• Total Required Hours: ${currentRule.totalHours} contact hours
• Mandatory Topics:
${currentRule.mandatoryTopics.map(m => `  - ${m.topic}: ${m.hours} (${m.frequency})`).join('\n')}
• Note: ${currentRule.specialNotes}
Tracked with PathPort (https://getpathport.com)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    const calcSchema = document.createElement('script');
    calcSchema.type = 'application/ld+json';
    calcSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "PathPort CEU & License Renewal Requirement Calculator",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "url": "https://getpathport.com/tools/renewal-calculator",
      "description": "Free interactive CEU and state nursing board license renewal calculator. Computes mandatory contact hours, topic mandates, and compact state rules.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    });
    document.head.appendChild(calcSchema);

    return () => {
      if (document.head.contains(calcSchema)) document.head.removeChild(calcSchema);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="Free CEU & License Renewal Calculator — State Nursing & Clinical Requirements"
        description="Calculate state-by-state nursing CE contact hours, mandatory topic rules (Medical Errors, Implicit Bias, Laws & Rules), and eNLC compact status in one place."
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="py-16 md:py-24 space-y-20 focus:outline-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <Calculator className="w-4 h-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
              <span>Interactive Utility Tool</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              State CEU & License Renewal Calculator
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Select your state license to instantly see your renewal cycle length, required contact hours, and mandatory topic breakdowns.
            </p>
          </div>

          {/* Interactive Calculator Container */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* State Picker */}
            <div className="card-surface-white p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <label htmlFor="state-select" className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                    Select Your State License
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Calculates board-mandated hours & topic restrictions
                  </p>
                </div>

                <div className="w-full sm:w-64">
                  <select
                    id="state-select"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-400 cursor-pointer"
                  >
                    <option value="FL">Florida (FBON / 24 hrs)</option>
                    <option value="CA">California (BRN / 30 hrs)</option>
                    <option value="TX">Texas (BON / 20 hrs)</option>
                    <option value="OH">Ohio (OBN / 24 hrs)</option>
                    <option value="GA">Georgia (GBON / 30 hrs)</option>
                    <option value="PA">Pennsylvania (30 hrs)</option>
                    <option value="NY">New York (Mandated Topics)</option>
                  </select>
                </div>
              </div>

              {/* State Summary Dashboard */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xl font-display font-extrabold text-slate-900 dark:text-white">
                        {currentRule.state}
                      </span>
                      {currentRule.isCompact ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800 uppercase">
                          eNLC Compact Member
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold border border-slate-200 dark:border-slate-700 uppercase">
                          Single-State License
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Governing Body: {currentRule.boardName}
                    </p>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                        <span className="text-emerald-600">Copied Summary</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                        <span>Copy Requirements</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 3 Metric Stat Callouts */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60 space-y-1">
                    <div className="text-[11px] font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wider">
                      Total Required Hours
                    </div>
                    <div className="text-2xl font-display font-black text-teal-950 dark:text-white">
                      {currentRule.totalHours > 0 ? `${currentRule.totalHours} Hours` : "Topic Mandates"}
                    </div>
                    <div className="text-[10px] text-teal-800 dark:text-teal-400">
                      Per {currentRule.cycleYears}-year renewal cycle
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                    <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Mandatory Topics
                    </div>
                    <div className="text-2xl font-display font-black text-slate-900 dark:text-white">
                      {currentRule.mandatoryTopics.length} Specific Rules
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Must be explicitly satisfied
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                    <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      General Electives
                    </div>
                    <div className="text-2xl font-display font-black text-slate-900 dark:text-white">
                      {generalHours > 0 ? `${generalHours} Hours` : "As Approved"}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      In relevant clinical practice
                    </div>
                  </div>
                </div>

                {/* Mandatory Topics List */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Required Specific Topic Breakdown
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                    {currentRule.mandatoryTopics.map((item, idx) => (
                      <div key={idx} className="p-3.5 sm:p-4 bg-white dark:bg-slate-900 flex items-start justify-between gap-4 text-xs">
                        <div className="space-y-0.5">
                          <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0" aria-hidden="true" />
                            <span>{item.topic}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 pl-5.5">
                            Frequency: {item.frequency}
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-300 font-bold text-xs shrink-0 border border-teal-200 dark:border-teal-800">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Board Guidance */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Board Rule Note: </strong>
                    {currentRule.specialNotes}
                  </div>
                </div>
              </div>
            </div>

            {/* PathPort Proactivity CTA */}
            <div className="card-surface-tinted p-7 sm:p-9 text-center space-y-5">
              <div className="max-w-2xl mx-auto space-y-2">
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                  Never calculate hours manually again.
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  PathPort automatically maps your uploaded CE certificates against your state board's exact topic buckets and tracks your 30/60/90-day renewal radar.
                </p>
              </div>

              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="min-h-[48px] px-7 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Track My Licenses with Beta</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        defaultAudience="Other Professional"
        source="renewal_calculator"
      />
    </div>
  );
};

export default RenewalCalculator;
