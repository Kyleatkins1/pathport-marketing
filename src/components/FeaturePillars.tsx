import React from 'react';
import { Share2, Compass, CheckCircle, Briefcase, Award } from 'lucide-react';

export const FeaturePillars: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-ambient-grid scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Built For Modern Professionals</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Four Pillars of the PathPort Platform
          </p>
          <p className="text-slate-400 text-base sm:text-lg">
            Stop losing accomplishments in forgotten résumés or juggling disconnected credential platforms. PathPort unifies your identity, evidence, portfolios, and career trajectory into one portable platform.
          </p>
        </div>

        {/* 4 Cards Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Pillar 1: Professional Record & Case Studies */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between scroll-mt-28">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Structured Case Studies</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Capture the high-impact projects that would never fit on a 1-page résumé. Document the Challenge, Context, Role, Approach, Media Evidence, Outcome, and Reflections.
              </p>
              
              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Multi-section narrative framework</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Attach code repos, PDFs & media</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Link demonstrated capabilities</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-teal-400 flex items-center justify-between">
              <span>EVIDENCE ENGINE</span>
              <span>BEYOND RÉSUMÉS</span>
            </div>
          </div>

          {/* Pillar 2: Dynamic Reusable Portfolios */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Share2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Tailored Portfolios</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Maintain yourself once, present yourself many ways. Create multiple public or unlisted portfolio links referencing your underlying record without copy-pasting.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Object-referenced composition</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Public, unlisted & private access</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dynamic social OpenGraph cards</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-amber-400 flex items-center justify-between">
              <span>PORTFOLIO BUILDER</span>
              <span>ONE RECORD, MANY VIEWS</span>
            </div>
          </div>

          {/* Pillar 3: Universal Credential & CEU Engine */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Universal CEU & Renewals</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Consolidate state licenses and board certifications. Track category hour minimums automatically with 6-level provenance verification so you never miss a renewal deadline.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated CEU deficiency math</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>90/60/30-day proactive alerts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>6-Level Trust Provenance badges</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-emerald-400 flex items-center justify-between">
              <span>RENEWAL ENGINE</span>
              <span>ZERO LAPSED LICENSES</span>
            </div>
          </div>

          {/* Pillar 4: Path Career Engine */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Deterministic Path Advisor</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Set a target role and let PathPort evaluate your current record. Receive grounded recommendations across Learn, Earn, Build, and Experience with transparent rationales.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Role capability gap evaluation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Evidence-building recommendations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>100% transparent explanation logic</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-cyan-400 flex items-center justify-between">
              <span>PATH GUIDANCE</span>
              <span>FACT-GROUNDED ACTIONS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
