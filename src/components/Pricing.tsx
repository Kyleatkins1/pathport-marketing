import React, { useState } from 'react';
import { Check, Sparkles, Flame, GraduationCap, Building2 } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative bg-slate-950/90 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Launch Banner */}
        <div className="mb-12 max-w-3xl mx-auto p-4 rounded-2xl glass-card border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-teal-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-glowGold">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
              <Flame className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">Founding Member Launch Special</span>
              <span className="text-xs text-slate-300">Lock in Pro for just <strong className="text-amber-300 font-semibold">$49/year</strong> for 2 full years (First 500 signups).</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <GraduationCap className="w-3.5 h-3.5" />
              Free for .edu Students
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Transparent Pricing</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Simple Plans for Individuals & Organizations
          </p>
          <p className="text-slate-400 text-base">
            Start for free with your personal vault, upgrade for automated state CEU renewal tracking and AI parsing.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-slate-800 p-1 relative border border-slate-700 transition-colors focus:outline-none"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-md transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/40">
                Save ~20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Free Vault */}
          <div className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Free Vault</h3>
              <p className="text-xs text-slate-400 mb-6">High-schoolers, casual users, and initial trials.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 text-sm font-medium"> / forever</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Up to 10 Credentials & Certificates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Encrypted PDF & Image Vault</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>1 Verifiable Digital Portfolio</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Basic Expiration Reminders</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Instant QR Code Sharing</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://app.getpathport.com/auth?signup=true"
              className="w-full py-3.5 rounded-xl glass-card border border-slate-700 text-center font-medium text-slate-200 hover:text-white hover:border-slate-600 transition-all block"
            >
              Get Started Free
            </a>
          </div>

          {/* Pro Passport - Highlighted */}
          <div className="glass-card rounded-2xl p-8 border-2 border-teal-500 relative flex flex-col justify-between shadow-glowTeal bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-teal-500 to-secondary text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MOST POPULAR FOR INDIVIDUALS</span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Pro Passport</h3>
              <p className="text-xs text-slate-400 mb-6">For working nurses, EMTs, power users, and certified professionals.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">
                  {isAnnual ? '$79' : '$8'}
                </span>
                <span className="text-slate-400 text-sm font-medium">
                  {isAnnual ? ' / year (~$6.58/mo)' : ' / month'}
                </span>
              </div>

              <ul className="space-y-3 text-sm text-slate-200 mb-8">
                <li className="flex items-center gap-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Everything in Free, plus:</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span className="font-semibold text-teal-200">Unlimited Credentials Stored</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Full State CEU Compliance & Math Engine</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Smart Expiration Reminders (90/60/30 days)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Credly & Open Badges Auto-Import</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>AI Resume & Certificate PDF Parser</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Custom URL (`getpathport.com/p/yourname`)</span>
                </li>
              </ul>
            </div>

            <a 
              href={`https://app.getpathport.com/auth?signup=true&plan=${isAnnual ? 'pro_annual' : 'pro_monthly'}`}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-center font-bold text-white shadow-glowTeal hover:scale-[1.02] transition-all block border border-teal-400/40"
            >
              Start 14-Day Free Pro Trial
            </a>
          </div>

          {/* Teams / Org */}
          <div className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Teams / Org</h3>
                <Building2 className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-xs text-slate-400 mb-6">Clinics, fire/EMS depts, schools, and training programs.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$5</span>
                <span className="text-slate-400 text-sm font-medium"> / user / mo</span>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">Billed annually • 5-seat min ($300/yr floor)</p>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Everything in Pro per member</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Org-Wide Compliance Admin Dashboard</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Automated Workforce Lapse Alerts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Role-Based Requirement Templates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Accrediting Board Export Reports</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Bulk Member Verification & Priority Support</span>
                </li>
              </ul>
            </div>

            <a 
              href="mailto:enterprise@getpathport.com?subject=PathPort%20Org%20Inquiry"
              className="w-full py-3.5 rounded-xl glass-card border border-slate-700 text-center font-medium text-slate-200 hover:text-white hover:border-slate-600 transition-all block"
            >
              Contact Sales / Request Demo
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
