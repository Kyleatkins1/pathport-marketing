import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  FileCheck,
  MapPin,
  Sparkles,
  Award,
  Search,
  Mail,
} from 'lucide-react';
import {
  STATE_RENEWAL_DATA,
  NATIONAL_CREDENTIAL_RULES,
  type StateRenewalRule,
  type NationalCredentialRule,
} from '../data/stateRenewalData';
import { triggerLeadModal } from '../lib/modal-events';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';

interface RenewalCalculatorProps {
  onOpenWaitlist?: (persona?: string) => void;
  initialStateCode?: string;
}

export const RenewalCalculator: React.FC<RenewalCalculatorProps> = ({
  onOpenWaitlist,
  initialStateCode = 'FL',
}) => {
  const [mode, setMode] = useState<'state' | 'national'>('state');
  const [selectedStateCode, setSelectedStateCode] = useState(
    initialStateCode.toUpperCase() || 'FL'
  );
  const [selectedCredCode, setSelectedCredCode] = useState(
    NATIONAL_CREDENTIAL_RULES[0].code
  );
  const [searchQuery, setSearchQuery] = useState('');

  const activeState: StateRenewalRule = useMemo(
    () =>
      STATE_RENEWAL_DATA.find((s) => s.code === selectedStateCode) ||
      STATE_RENEWAL_DATA.find((s) => s.code === 'FL')!,
    [selectedStateCode]
  );

  const activeCred: NationalCredentialRule = useMemo(
    () =>
      NATIONAL_CREDENTIAL_RULES.find((c) => c.code === selectedCredCode) ||
      NATIONAL_CREDENTIAL_RULES[0],
    [selectedCredCode]
  );

  const filteredStates = useMemo(() => {
    if (!searchQuery.trim()) return STATE_RENEWAL_DATA;
    const q = searchQuery.toLowerCase().trim();
    return STATE_RENEWAL_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        s.boardName.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const mandatoryHoursSum = activeState.mandatoryTopics.reduce((acc, t) => acc + t.hours, 0);
  const generalHours = Math.max(0, activeState.totalHours - mandatoryHoursSum);

  const handleTrackStateCTA = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist('Registered Nurse (RN / APRN / Travel)');
    } else {
      triggerLeadModal({
        intent: 'individual',
        persona: 'Registered Nurse (RN / APRN / Travel)',
        primaryState: activeState.code,
        source: `50-State Renewal Calculator (${activeState.name})`,
      });
    }
  };

  const handleTrackCredCTA = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist(activeCred.domain);
    } else {
      triggerLeadModal({
        intent: 'individual',
        persona: activeCred.name,
        source: `National Recertification Calculator (${activeCred.code})`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar onOpenWaitlist={onOpenWaitlist} />
      <main id="main-content" className="pb-20">
      {/* Hero Banner */}
      <section className="bg-[#0B132B] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Free Interactive Tool • All 50 States + DC & National Specialty Boards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight text-white">
            {initialStateCode ? (
              <>
                {activeState.name} ({activeState.code}) Nursing License &{' '}
                <span className="text-[#2DD4BF]">CEU Renewal Calculator</span>
              </>
            ) : (
              <>
                50-State License &{' '}
                <span className="text-[#2DD4BF]">Board Renewal Calculator</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Look up your exact contact hour minimums, NLC compact status, and state-mandated
            sub-topics across all 50 US states and national certifying boards (ANCC, AACN, NREMT,
            PMI, ISC2, CompTIA).
          </p>

          {/* Mode Toggle: 50 State Boards vs National Certifying Boards */}
          <div className="pt-2 inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              type="button"
              onClick={() => setMode('state')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                mode === 'state'
                  ? 'bg-[#2DD4BF] text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>All 50 State Nursing Boards</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('national')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                mode === 'national'
                  ? 'bg-[#2DD4BF] text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>National Certifications (ANCC, NREMT, PMP)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Calculator Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8">
          {mode === 'state' ? (
            <>
              {/* State Selector & Search */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-slate-100 items-end">
                <div className="md:col-span-6">
                  <label
                    htmlFor="state-select"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2"
                  >
                    Select State or Jurisdiction (All 50 States + DC)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#0D5F57] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="state-select"
                      value={selectedStateCode}
                      onChange={(e) => setSelectedStateCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15"
                    >
                      {STATE_RENEWAL_DATA.map((st) => (
                        <option key={st.code} value={st.code}>
                          {st.name} ({st.code}) — {st.boardName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-2.5">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                      activeState.compact
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {activeState.compact
                      ? '✓ NLC Multi-State Compact Member'
                      : 'Single-State License (Non-Compact)'}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-teal-50 text-[#0D5F57] border border-teal-200 text-xs font-semibold">
                    Renews Every {activeState.cycleYears}{' '}
                    {activeState.cycleYears === 1 ? 'Year' : 'Years'}
                  </span>
                </div>
              </div>

              {/* Quick Summary Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Standard RN CE Hours
                  </div>
                  <div className="text-3xl font-extrabold font-display text-slate-900 mt-1">
                    {activeState.totalHours > 0
                      ? `${activeState.totalHours} Contact Hrs`
                      : 'Competency / Practice'}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Per {activeState.cycleYears}-year renewal cycle
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    State-Mandated Topic Hours
                  </div>
                  <div className="text-3xl font-extrabold font-display text-amber-900 mt-1">
                    {mandatoryHoursSum} Hours
                  </div>
                  <div className="text-xs text-amber-800/80 mt-1">
                    Across {activeState.mandatoryTopics.length} specific state rule(s)
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    General Elective CE Hours
                  </div>
                  <div className="text-3xl font-extrabold font-display text-emerald-900 mt-1">
                    {activeState.totalHours > 0 ? `${generalHours} Hours` : 'Flexible Pathway'}
                  </div>
                  <div className="text-xs text-emerald-800/80 mt-1">
                    Board-approved clinical or specialty courses
                  </div>
                </div>
              </div>

              {/* Mandatory Topics Breakdown */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#0D5F57]" />
                  <span>{activeState.boardName} — Mandatory Topic & Competency Breakdown</span>
                </h2>

                {activeState.mandatoryTopics.length > 0 ? (
                  <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
                    {activeState.mandatoryTopics.map((topic, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0" />
                          <span className="text-sm font-bold text-slate-900">{topic.title}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {topic.frequency}
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-900 text-xs font-bold">
                            {topic.hours} {topic.hours === 1 ? 'hr' : 'hrs'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600">
                    {activeState.totalHours > 0
                      ? `All ${activeState.totalHours} contact hours in ${activeState.name} may be completed in general board-approved continuing nursing education topics.`
                      : `${activeState.name} evaluates RN renewal via active practice hours, national certification, or reflective competency pathways rather than fixed topic mandates.`}
                  </div>
                )}

                <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/80 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#0D5F57] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>{activeState.name} Board & APRN Rule Note:</strong> {activeState.notes}
                  </p>
                </div>
              </div>

              {/* High-Converting Contextual CTA Box */}
              <div className="mt-8 p-6 rounded-2xl bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2DD4BF]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pre-Configured for {activeState.name}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Save this {activeState.name} renewal checklist to your PathPort
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    Upload your existing CE certificates or forward completion receipts to{' '}
                    <code className="text-xs font-mono text-teal-300">
                      ce-you@in.getpathport.com
                    </code>
                    . PathPort smart-suggests matching {activeState.boardName} requirement buckets so
                    you can confirm attribution and alerts you at 90, 60, and 30 days.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleTrackStateCTA}
                  className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#2DD4BF] hover:bg-teal-300 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md"
                >
                  <span>Track My {activeState.code} License Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* National Certifications Mode */
            <>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-slate-100 items-end">
                <div className="md:col-span-7">
                  <label
                    htmlFor="cred-select"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2"
                  >
                    Select National Certification or Board Exam
                  </label>
                  <div className="relative">
                    <Award className="w-4 h-4 text-[#0D5F57] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="cred-select"
                      value={selectedCredCode}
                      onChange={(e) => setSelectedCredCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15"
                    >
                      {NATIONAL_CREDENTIAL_RULES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name} — {c.issuer}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-wrap items-center md:justify-end gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                    {activeCred.domain}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-teal-50 text-[#0D5F57] border border-teal-200 text-xs font-semibold">
                    {activeCred.cycleMonths / 12}-Year Cycle ({activeCred.cycleMonths} Months)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total Recertification Target
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 mt-1">
                    {activeCred.totalUnits} {activeCred.unitLabel}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Issuing Body: {activeCred.issuer}</div>
                </div>

                <div className="p-5 rounded-xl bg-teal-50/60 border border-teal-200/80 flex flex-col justify-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0D5F57] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Built-In PathPort Rule Engine</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                    {activeCred.notes}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-slate-900 font-display">
                  Required Category & Pathway Breakdown
                </h2>
                <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
                  {activeCred.breakdown.map((b, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#0D5F57] shrink-0" />
                        <span className="text-sm font-bold text-slate-900">{b.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-900 text-xs font-bold">
                          {b.value}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            b.mandatory
                              ? 'bg-emerald-50 text-emerald-800'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {b.mandatory ? 'Mandatory' : 'Optional / Cap'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Automate your {activeCred.name} renewal in PathPort
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    PathPort tracks your category minimums alongside your state licenses so a single
                    course can credit both your state board and national recertification.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleTrackCredCTA}
                  className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#2DD4BF] hover:bg-teal-300 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md"
                >
                  <span>Start Free 30-Day Pro Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Browse All 50 States + DC Directory (Programmatic Internal Linking for SEO) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                Browse Nursing CEU & License Renewal Guides by State
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Select any state below to open its dedicated renewal breakdown, or compare{' '}
                <Link to="/vs/ce-broker" className="text-[#0D5F57] font-semibold hover:underline">
                  PathPort vs. CE Broker
                </Link>
                .
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter states (e.g., Texas, NY)..."
                aria-label="Filter states"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0D5F57]"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {filteredStates.map((st) => (
              <Link
                key={st.code}
                to={`/tools/renewal-calculator/${st.slug}`}
                onClick={() => {
                  setMode('state');
                  setSelectedStateCode(st.code);
                }}
                className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                  st.code === selectedStateCode
                    ? 'bg-teal-50/80 border-[#0D5F57] text-[#0D5F57]'
                    : 'bg-slate-50/60 hover:bg-white border-slate-200/80 text-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="min-w-0 pr-1">
                  <div className="text-xs font-bold truncate">
                    {st.name} ({st.code})
                  </div>
                  <div className="text-xs text-slate-500">
                    {st.totalHours > 0 ? `${st.totalHours} hrs / ${st.cycleYears}y` : `Competency / ${st.cycleYears}y`}
                  </div>
                </div>
                {st.compact && (
                  <span
                    title="NLC Compact State"
                    className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0"
                  >
                    NLC
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0D5F57]" />
              Synced with PathPort’s canonical 50-state & national recertification rule library
            </span>
            <Link to="/for/nurses" className="font-semibold text-[#0D5F57] hover:underline">
              Explore PathPort for Nurses →
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

export default RenewalCalculator;
