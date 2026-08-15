import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Mail, User, Briefcase } from 'lucide-react';
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

export const BetaRegistrationModal: React.FC<BetaRegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultAudience = 'Other Professional',
  source = 'marketing_site',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState(defaultAudience);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setLoading(true);
    try {
      await registerForBeta({
        name,
        email,
        audience,
        source,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-lg w-full overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white">
                You're on the Beta List!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
                Thanks, <strong>{name.split(' ')[0]}</strong>. We sent a confirmation to{' '}
                <span className="font-semibold text-slate-900 dark:text-white">{email}</span>. You will receive priority access as cohorts open.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 text-left space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-800 dark:text-teal-400" />
                <span>What happens next:</span>
              </div>
              <p>1. Access invitations are rolled out weekly in verified cohorts.</p>
              <p>2. You'll receive a direct link to create your authoritative living record.</p>
              <p>3. As a founding beta member, individual features remain free for life.</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-teal-800 dark:hover:bg-teal-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs"
            >
              Done
            </button>
          </div>
        ) : (
          /* Registration Form */
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FOUNDING COHORT</span>
              </div>
              <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white tracking-tight">
                Join the Living Identity Beta
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Register to establish your portable record, automate CE tracking, and present tailored portfolios.
              </p>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white dark:focus:bg-slate-800 transition-all"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Work or Professional Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@hospital.org"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white dark:focus:bg-slate-800 transition-all"
                  />
                </div>
              </div>

              {/* Primary Discipline / Track */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Primary Discipline / Role
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white dark:focus:bg-slate-800 transition-all cursor-pointer"
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
              We respect your privacy. No spam, ever. Your information is strictly used to provision your beta workspace.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Registering...</span>
              ) : (
                <>
                  <span>Request Priority Access</span>
                  <ArrowRight className="w-4 h-4" />
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
