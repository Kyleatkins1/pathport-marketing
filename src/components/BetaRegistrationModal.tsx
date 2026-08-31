import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, User, Briefcase, AlertCircle, RefreshCw } from 'lucide-react';
import { registerForBeta } from '../services/loops';

interface BetaRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAudience?: string;
  source?: string;
}

const AUDIENCE_OPTIONS = [
  'Paramedic / Emergency Services',
  'Nurse / Healthcare Professional',
  'Project Manager / PMO',
  'Student / Early Career',
  'Engineering & Technology Leader',
  'Employer / Workforce Compliance',
  'Certification Board / Issuer',
  'Other Professional',
];

type ModalStatus = 'idle' | 'submitting' | 'success' | 'error';

export const BetaRegistrationModal: React.FC<BetaRegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultAudience = 'Other Professional',
  source = 'marketing_site',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState(defaultAudience);
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  // Capture previous focus and trap focus inside modal
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      // Focus first input
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleReset();
          return;
        }

        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus('submitting');
    setErrorMessage('');
    try {
      const res = await registerForBeta({
        name,
        email,
        audience,
        source,
      });
      if (res && res.success === false) {
        throw new Error('Registration unsuccessful');
      }
      setStatus('success');
    } catch (err: any) {
      console.error('Beta registration error:', err);
      setStatus('error');
      setErrorMessage('We couldn’t complete your registration. Please try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
    setName('');
    setEmail('');
    onClose();
    // Restore focus
    previouslyFocusedElementRef.current?.focus();
  };

  const handleRetry = () => {
    setStatus('idle');
    setErrorMessage('');
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 50);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="beta-modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-lg w-full overflow-hidden relative"
      >
        {/* Close Button with min 44px tap target */}
        <button
          onClick={handleReset}
          aria-label="Close Registration Dialog"
          className="absolute top-4 right-4 w-11 h-11 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {status === 'success' ? (
          /* Success Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-5" aria-live="polite">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 id="beta-modal-title" className="text-2xl font-display font-black text-slate-900 dark:text-white">
                You’re on the Beta List
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
                Thanks, <strong>{name.split(' ')[0]}</strong>. We sent a confirmation to{' '}
                <span className="font-semibold text-slate-900 dark:text-white">{email}</span>. We’ll email you as beta access expands.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 text-left space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-800 dark:text-teal-400" aria-hidden="true" />
                <span>What happens next:</span>
              </div>
              <p>1. You’re reserved on the beta waitlist.</p>
              <p>2. We’ll email you an invitation to set up your living professional record.</p>
              <p>3. Your feedback will help guide upcoming capabilities and tools.</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full min-h-[44px] py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-teal-800 dark:hover:bg-teal-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center"
            >
              Done
            </button>
          </div>
        ) : status === 'error' ? (
          /* Real Error State */
          <div className="p-8 sm:p-10 text-center space-y-5" aria-live="assertive">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 flex items-center justify-center mx-auto shadow-xs">
              <AlertCircle className="w-8 h-8 text-rose-600 dark:text-rose-400" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 id="beta-modal-title" className="text-2xl font-display font-black text-slate-900 dark:text-white">
                Registration Incomplete
              </h3>
              <p id="beta-error-desc" className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
                {errorMessage || 'We couldn’t complete your registration. Please try again.'}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleRetry}
                className="flex-1 min-h-[44px] py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Try Again</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="min-h-[44px] px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form (idle & submitting) */
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Beta Access</span>
              </div>
              <h3 id="beta-modal-title" className="text-2xl font-display font-black text-slate-900 dark:text-white tracking-tight">
                Join the Living Identity Beta
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Register to establish your portable record, keep credentials and continuing education organized for renewal, and present tailored portfolios.
              </p>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="beta-user-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <input
                    ref={nameInputRef}
                    id="beta-user-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white dark:focus:bg-slate-800 transition-all min-h-[44px]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="beta-user-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address <span className="text-rose-500" aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <input
                    id="beta-user-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white dark:focus:bg-slate-800 transition-all min-h-[44px]"
                  />
                </div>
              </div>

              {/* Primary Discipline / Track */}
              <div>
                <label htmlFor="beta-user-audience" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Primary Discipline / Role
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Briefcase className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <select
                    id="beta-user-audience"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white dark:focus:bg-slate-800 transition-all cursor-pointer min-h-[44px]"
                  >
                    {AUDIENCE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="dark:bg-slate-900 text-slate-900 dark:text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              We respect your privacy. No spam, ever. Your information is strictly used to communicate about beta access.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full min-h-[44px] py-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {status === 'submitting' ? (
                <span>Registering...</span>
              ) : (
                <>
                  <span>Request Priority Access</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BetaRegistrationModal;
