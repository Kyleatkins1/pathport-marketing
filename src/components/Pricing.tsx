import { Check, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative bg-slate-950/90 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Transparent Pricing</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Simple Plans for Individuals & Organizations
          </p>
          <p className="text-slate-400 text-base">
            Start for free with your personal vault, upgrade for automated CEU renewal tracking and AI parsing.
          </p>
        </div>

        {/* Pricing 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Free Vault */}
          <div className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Free Vault</h3>
              <p className="text-xs text-slate-400 mb-6">Perfect for consolidating your certifications and sharing a portfolio.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 text-sm font-medium"> / forever</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Unlimited Credential Cards</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Encrypted PDF & Image Vault</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Verifiable Digital Portfolio Link</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Instant QR Code Generation</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://app.getpathport.com/auth?signup=true"
              className="w-full py-3 rounded-xl glass-card border border-slate-700 text-center font-medium text-slate-200 hover:text-white hover:border-slate-600 transition-all block"
            >
              Get Started Free
            </a>
          </div>

          {/* Pro Passport - Highlighted */}
          <div className="glass-card rounded-2xl p-8 border-2 border-teal-500 relative flex flex-col justify-between shadow-glowTeal bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MOST POPULAR</span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Pro Passport</h3>
              <p className="text-xs text-slate-400 mb-6">For professionals with active CEU requirements & state licenses.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$8</span>
                <span className="text-slate-400 text-sm font-medium"> / month</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-200 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span className="font-semibold text-white">Everything in Free, plus:</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>State CEU Renewal Math Engine</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Proactive Expiration Email Alerts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>AI Resume & Certificate Parser</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Custom URL (`getpathport.com/p/yourname`)</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://app.getpathport.com/auth?signup=true&plan=pro"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-center font-bold text-white shadow-glowTeal hover:scale-[1.02] transition-all block border border-teal-400/40"
            >
              Start 14-Day Free Pro Trial
            </a>
          </div>

          {/* Enterprise Org */}
          <div className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Org</h3>
              <p className="text-xs text-slate-400 mb-6">For teams, hospitals, and orgs tracking employee compliance.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$29</span>
                <span className="text-slate-400 text-sm font-medium"> / month base</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Workforce Compliance Roster</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Automated Employee Expiration Alerts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Accrediting Board Export Reports</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Bulk Verification & Admin Control</span>
                </li>
              </ul>
            </div>

            <a 
              href="mailto:enterprise@getpathport.com"
              className="w-full py-3 rounded-xl glass-card border border-slate-700 text-center font-medium text-slate-200 hover:text-white hover:border-slate-600 transition-all block"
            >
              Contact Sales
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
