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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-700" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-extrabold text-slate-900">
                You're on the Beta List!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Thanks, <strong>{name.split(' ')[0]}</strong>. We sent a confirmation to{' '}
                <span className="font-semibold text-slate-900">{email}</span>. You will receive priority access as cohorts open.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-800" />
                <span>What happens next:</span>
              </div>
              <p>1. Access invitations are rolled out weekly in verified cohorts.</p>
              <p>2. You'll receive a direct link to create your authoritative living record.</p>
              <p>3. As a founding beta member, individual features remain free for life.</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          /* Registration Form */
          <div className="p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Founding Cohort Access</span>
              </div>
              <h2 className="text-2xl font-display font-extrabold text-slate-900">
                Register for PathPort Beta
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Maintain yourself once. Present yourself many ways. Experience the living professional record before public launch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Kyle Atkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-800 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="kyle@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-800 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Your Primary Field / Audience</label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-teal-800 outline-none transition-all appearance-none cursor-pointer"
                  >
                    {AUDIENCE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Submitting...' : 'Join Beta Priority Access'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Strict privacy. No spam. Unsubscribe at any time.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BetaRegistrationModal;
