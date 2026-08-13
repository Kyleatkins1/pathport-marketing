import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Flame, ShieldCheck, ArrowRight, Clock, Award } from 'lucide-react';

export const ParamedicsFunnel: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/30">
              <Flame className="w-4 h-4 text-amber-400" />
              EMS & FIREFIGHTER CREDENTIAL VAULT
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              NREMT & EMS Recertification Tracking for <span className="text-gradient-gold">Paramedics & EMTs</span>
            </h1>

            <p className="text-slate-300 text-lg">
              Track NCCP National, State, and Local EMS recertification hours, ACLS/PALS, EVOC, and OSHA certifications with automated expiration alerts.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.getpathport.com/auth?signup=true&profession=ems" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-amber-600 text-white font-bold text-base shadow-glowGold hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Start Free EMS Vault</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">NREMT NCCP Recert Model</h3>
              <p className="text-slate-300 text-sm">
                Track National (30 hrs), State/Local (15 hrs), and Individual (15 hrs) continuing education requirements seamlessly.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AHA & Specialty Card Storage</h3>
              <p className="text-slate-300 text-sm">
                Upload eCards and cert PDFs for ACLS, PALS, BLS, PHTLS, ITLS, HazMat, and State EMS Cards.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Medical Director QR Sharing</h3>
              <p className="text-slate-300 text-sm">
                Show your digital QR code to EMS supervisors and medical directors for instant credential verification during annual reviews.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
