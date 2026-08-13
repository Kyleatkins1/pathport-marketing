import { Database, Share2, Cpu, CheckCircle, Presentation } from 'lucide-react';

export const FeaturePillars: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-ambient-grid scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Built For Modern Professionals</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Four Pillars of Your Professional Passport
          </p>
          <p className="text-slate-400 text-base sm:text-lg">
            Stop juggling 10 different logins, lost cert PDFs, and forgotten research. PathPort unifies your credentials, CEUs, project proof, and posters in one location.
          </p>
        </div>

        {/* 4 Cards Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Pillar 1: Vault & CEU Engine */}
          <div id="vault" className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between scroll-mt-28">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Universal Vault & CEU Engine</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Consolidate PMP, AWS, Nursing, EMT, Board Certs, and Trades credentials into one encrypted vault. Track state CEU hours automatically so you never panic before a renewal.
              </p>
              
              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>State requirement rules engine & CEU math</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Proactive expiration alerts & countdowns</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Multi-license support (1 to 20+ certs)</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-teal-400 flex items-center justify-between">
              <span>SECURITY & COMPLIANCE</span>
              <span>AES-256 ENCRYPTED</span>
            </div>
          </div>

          {/* Pillar 2: AI Parser */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Resume & Certificate Parser</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Stop typing data manually. Drop any PDF resume, state license, or certificate image — our parser extracts issuer names, issue/expiration dates, and skills into structured milestones.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instant PDF & image OCR extraction</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Auto-generates verified career timeline</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Converts resumes to digital portfolios</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-amber-400 flex items-center justify-between">
              <span>PARSING ENGINE</span>
              <span>INSTANT EXTRACT</span>
            </div>
          </div>

          {/* Pillar 3: Project Proof & Conference Posters */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Presentation className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Project Proof & Research Posters</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Certifications alone look generic on paper. Link real-world projects, clinical case studies, code repos, and conference posters directly to your certs to prove your real-world impact.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Attach projects & whitepapers to certs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Conference poster & keynote gallery</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Reinforces credentials with hard proof</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-purple-400 flex items-center justify-between">
              <span>PROJECT PROOF</span>
              <span>POSTER GALLERY</span>
            </div>
          </div>

          {/* Pillar 4: Verifiable Digital Portfolio */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 glass-card-hover relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Share2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Tailored Digital Portfolios</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Create custom profile links (`getpathport.com/p/yourname`) tailored for specific job applications, speaking pitches, or admissions. Employers verify credentials instantly without logins.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Tailor portfolios like custom resumes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom URL & instant QR code sharing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Granular privacy & document visibility</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-sans font-semibold tracking-wider text-cyan-400 flex items-center justify-between">
              <span>EMPLOYER SHARING</span>
              <span>VERIFIED LINK</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
