import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Loader2,
  Building2,
  Award,
  UserCheck,
} from 'lucide-react';
import { submitToLoopsWaitlist, type SignupIntent } from '../services/loops';
import { OPEN_MODAL_EVENT, type OpenModalDetail } from '../lib/modal-events';

interface BetaRegistrationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultPersona?: string;
  defaultIntent?: SignupIntent;
}

const INDIVIDUAL_PERSONAS = [
  'Project & Program Manager (PMP / Agile)',
  'Cloud, Cyber & Technical Specialist',
  'Registered Nurse (RN / APRN / Travel)',
  'EMS, Aviation & Public Safety (NRP / FAA / EMT)',
  'Trades, Engineering, Finance & Legal',
  'Student / Resident / New Graduate',
  'Personal Identity Documents Only (Free — DL, Passport, IDs)',
  'Other Credentialed Professional',
];

const WORKPLACE_SIZES = [
  'Under 50 credentialed staff',
  '50 – 250 credentialed staff',
  '250 – 1,000 credentialed staff',
  '1,000+ credentialed staff',
];

const WORKPLACE_NEEDS = [
  'Collect & verify employee credentials without endless emails',
  'Automated compliance intelligence & 90/60/30-day expiration alerts',
  'Assigning CEUs & training credits directly to event attendees',
  'Onboarding & role-based credential checklists',
];

const CERTIFY_VOLUMES = [
  'Under 1,000 active certificants',
  '1,000 – 10,000 active certificants',
  '10,000 – 50,000 active certificants',
  '50,000+ active certificants',
];

const CERTIFY_NEEDS = [
  'End-to-end credentialing (applications, docs, payments & recertification)',
  'Official test platform & partner exam result integration',
  'Issuing credentials through PathPort & any badge provider (Credly, etc.)',
  'Multi-pathway recertification & CEU rule engines',
];

export const BetaRegistrationModal: React.FC<BetaRegistrationModalProps> = ({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  defaultPersona = '',
  defaultIntent = 'individual',
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [intent, setIntent] = useState<SignupIntent>(defaultIntent);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [persona, setPersona] = useState(defaultPersona || INDIVIDUAL_PERSONAS[0]);
  const [organizationName, setOrganizationName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [organizationScale, setOrganizationScale] = useState(WORKPLACE_SIZES[1]);
  const [primaryNeed, setPrimaryNeed] = useState(WORKPLACE_NEEDS[0]);
  const [primaryState, setPrimaryState] = useState('');
  const [sourceLabel, setSourceLabel] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalOpen;

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalOpen(false);
    }
  };

  // Sync with external props when provided
  useEffect(() => {
    if (defaultPersona) {
      const lower = defaultPersona.toLowerCase();
      if (lower.includes('workplace') || lower.includes('enterprise') || lower.includes('hospital')) {
        setIntent('workplace');
        setOrganizationScale(WORKPLACE_SIZES[1]);
        setPrimaryNeed(WORKPLACE_NEEDS[0]);
      } else if (lower.includes('certify') || lower.includes('board') || lower.includes('issuer')) {
        setIntent('certify');
        setOrganizationScale(CERTIFY_VOLUMES[1]);
        setPrimaryNeed(CERTIFY_NEEDS[0]);
      } else {
        setIntent('individual');
        setPersona(defaultPersona);
      }
    }
    if (externalIsOpen) {
      setStatus('idle');
      setErrorMessage('');
    }
  }, [defaultPersona, externalIsOpen]);

  // Listen to global OPEN_MODAL_EVENT from any Astro page or React island
  useEffect(() => {
    const handleGlobalOpen = (event: Event) => {
      const customEvent = event as CustomEvent<OpenModalDetail>;
      const detail = customEvent.detail || {};
      const nextIntent: SignupIntent = detail.intent || 'individual';

      setIntent(nextIntent);
      setStatus('idle');
      setErrorMessage('');

      if (nextIntent === 'workplace') {
        setOrganizationScale(WORKPLACE_SIZES[1]);
        setPrimaryNeed(detail.primaryNeed || WORKPLACE_NEEDS[0]);
      } else if (nextIntent === 'certify') {
        setOrganizationScale(CERTIFY_VOLUMES[1]);
        setPrimaryNeed(detail.primaryNeed || CERTIFY_NEEDS[0]);
      } else {
        if (detail.persona) {
          setPersona(detail.persona);
        }
      }

      if (detail.primaryState) {
        setPrimaryState(detail.primaryState);
      }
      if (detail.source) {
        setSourceLabel(detail.source);
      }

      setInternalOpen(true);
    };

    window.addEventListener(OPEN_MODAL_EVENT, handleGlobalOpen);
    return () => window.removeEventListener(OPEN_MODAL_EVENT, handleGlobalOpen);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const switchIntentTab = (nextIntent: SignupIntent) => {
    setIntent(nextIntent);
    setErrorMessage('');
    if (nextIntent === 'workplace') {
      setOrganizationScale(WORKPLACE_SIZES[1]);
      setPrimaryNeed(WORKPLACE_NEEDS[0]);
    } else if (nextIntent === 'certify') {
      setOrganizationScale(CERTIFY_VOLUMES[1]);
      setPrimaryNeed(CERTIFY_NEEDS[0]);
    } else {
      setPersona(INDIVIDUAL_PERSONAS[0]);
    }
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if ((intent === 'workplace' || intent === 'certify') && !organizationName.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your organization or certifying body name.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const response = await submitToLoopsWaitlist({
      email,
      firstName,
      lastName,
      intent,
      persona:
        intent === 'workplace'
          ? 'Hospital / Workplace Leader'
          : intent === 'certify'
            ? 'Certification Board / Issuer'
            : persona,
      organizationName: intent !== 'individual' ? organizationName : undefined,
      jobTitle: intent !== 'individual' ? jobTitle : undefined,
      organizationScale: intent !== 'individual' ? organizationScale : undefined,
      primaryNeed: intent !== 'individual' ? primaryNeed : undefined,
      primaryState: primaryState || undefined,
      source: sourceLabel || undefined,
    });

    if (response.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(response.message);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pathport-lead-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Accent Banner */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0D5F57] via-teal-600 to-emerald-500 shrink-0" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 overflow-y-auto">
          {status === 'success' ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-[#0D5F57]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {intent === 'workplace'
                  ? 'Workplace 2027 Pilot Request Received'
                  : intent === 'certify'
                    ? 'Certify 2027 Issuer Request Received'
                    : "You're in the Founding Cohort"}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {intent === 'workplace' ? (
                  <>
                    We’ve recorded your <strong>PathPort Workplace (2027)</strong> pilot inquiry for{' '}
                    <span className="font-semibold text-slate-800">{organizationName}</span> and sent
                    an architecture overview to{' '}
                    <span className="font-semibold text-slate-800">{email}</span>.
                  </>
                ) : intent === 'certify' ? (
                  <>
                    We’ve recorded your <strong>PathPort Certify (2027)</strong> early-access request
                    for <span className="font-semibold text-slate-800">{organizationName}</span> and
                    sent program details to{' '}
                    <span className="font-semibold text-slate-800">{email}</span>.
                  </>
                ) : (
                  <>
                    We’ve reserved your <strong>30-day PathPort Pro trial</strong> for{' '}
                    <span className="font-semibold text-slate-800">{email}</span>. Check your inbox
                    for your onboarding details.
                  </>
                )}
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Return to PathPort
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Track Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/80 mb-5 mr-6">
                <button
                  type="button"
                  onClick={() => switchIntentTab('individual')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    intent === 'individual'
                      ? 'bg-white text-[#0D5F57] shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Individual</span>
                </button>
                <button
                  type="button"
                  onClick={() => switchIntentTab('workplace')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    intent === 'workplace'
                      ? 'bg-white text-[#0D5F57] shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Workplace ‘27</span>
                </button>
                <button
                  type="button"
                  onClick={() => switchIntentTab('certify')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    intent === 'certify'
                      ? 'bg-white text-[#0D5F57] shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span>Certify ‘27</span>
                </button>
              </div>

              {/* Dynamic Header by Intent */}
              {intent === 'individual' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0D5F57] text-xs font-semibold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Founding Cohort • 30-Day Pro Trial Included</span>
                  </div>
                  <h3
                    id="pathport-lead-modal-title"
                    className="text-2xl font-extrabold text-slate-900 font-display tracking-tight"
                  >
                    Build Your PathPort Record
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Import your existing resume, LinkedIn PDF, or CE certificates in 60 seconds.
                    Founding members receive a full{' '}
                    <span className="font-semibold text-slate-800">30-day trial of PathPort Pro</span>
                    {primaryState ? ` (pre-configured for ${primaryState} renewal rules)` : ''}.
                  </p>
                </>
              )}

              {intent === 'workplace' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#0D5F57] text-xs font-semibold mb-3">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>PathPort Workplace • Launching 2027</span>
                  </div>
                  <h3
                    id="pathport-lead-modal-title"
                    className="text-2xl font-extrabold text-slate-900 font-display tracking-tight"
                  >
                    Join the 2027 Workplace Pilot Cohort
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Connect to employee-owned PathPort records with explicit permission—eliminating
                    duplicate compliance spreadsheets and manual certificate chasing.
                  </p>
                </>
              )}

              {intent === 'certify' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#0D5F57] text-xs font-semibold mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>PathPort Certify • Launching 2027</span>
                  </div>
                  <h3
                    id="pathport-lead-modal-title"
                    className="text-2xl font-extrabold text-slate-900 font-display tracking-tight"
                  >
                    Request 2027 Issuer Early Access
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Modernize multi-pillar recertification, CEU audit workflows, and verifiable
                    credential issuance for your certifying board or association.
                  </p>
                </>
              )}

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="lead-first-name"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      id="lead-first-name"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Sarah"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-last-name"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="lead-last-name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lead-email"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    {intent === 'individual' ? 'Email Address *' : 'Work Email Address *'}
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      intent === 'individual' ? 'sarah.jenkins@email.com' : 'name@organization.org'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15 transition-all"
                  />
                </div>

                {intent === 'individual' ? (
                  <div>
                    <label
                      htmlFor="lead-persona"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Primary Discipline / Profession
                    </label>
                    <select
                      id="lead-persona"
                      value={persona}
                      onChange={(e) => setPersona(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15 transition-all"
                    >
                      {INDIVIDUAL_PERSONAS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="lead-org-name"
                          className="block text-xs font-bold text-slate-700 mb-1"
                        >
                          {intent === 'workplace'
                            ? 'Organization / Health System *'
                            : 'Board / Association Name *'}
                        </label>
                        <input
                          id="lead-org-name"
                          type="text"
                          required
                          value={organizationName}
                          onChange={(e) => setOrganizationName(e.target.value)}
                          placeholder={
                            intent === 'workplace'
                              ? 'Memorial Regional Health'
                              : 'National Specialty Board'
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lead-job-title"
                          className="block text-xs font-bold text-slate-700 mb-1"
                        >
                          Your Role / Title *
                        </label>
                        <input
                          id="lead-job-title"
                          type="text"
                          required
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          placeholder={
                            intent === 'workplace'
                              ? 'Director of Clinical Readiness'
                              : 'VP of Credentialing'
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="lead-scale"
                          className="block text-xs font-bold text-slate-700 mb-1"
                        >
                          {intent === 'workplace'
                            ? 'Credentialed Workforce Size'
                            : 'Active Certificant Population'}
                        </label>
                        <select
                          id="lead-scale"
                          value={organizationScale}
                          onChange={(e) => setOrganizationScale(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15 transition-all"
                        >
                          {(intent === 'workplace' ? WORKPLACE_SIZES : CERTIFY_VOLUMES).map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="lead-need"
                          className="block text-xs font-bold text-slate-700 mb-1"
                        >
                          Primary Focus Area
                        </label>
                        <select
                          id="lead-need"
                          value={primaryNeed}
                          onChange={(e) => setPrimaryNeed(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0D5F57] focus:ring-2 focus:ring-[#0D5F57]/15 transition-all"
                        >
                          {(intent === 'workplace' ? WORKPLACE_NEEDS : CERTIFY_NEEDS).map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {status === 'error' && (
                  <p className="text-xs text-rose-600 font-medium bg-rose-50 border border-rose-200 px-3 py-2 rounded-lg">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0D5F57] hover:bg-[#094842] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 mt-1"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : intent === 'workplace' ? (
                    <>
                      <span>Join 2027 Workplace Pilot List</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : intent === 'certify' ? (
                    <>
                      <span>Request 2027 Certify Early Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Reserve Founding Access & 30-Day Pro Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#0D5F57] shrink-0" />
                <span>
                  {intent === 'individual'
                    ? 'No credit card required to join • You own your data and can export anytime'
                    : 'Direct design-partner communication • Zero spam'}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
