import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowRight, ShieldCheck, Award, Clock } from 'lucide-react';

export const NursesFunnel: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Tag */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              NURSING & HEALTHCARE CREDENTIAL VAULT
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Automated State CEU Tracking for <span className="text-gradient-teal">Registered Nurses & NPs</span>
            </h1>

            <p className="text-slate-300 text-lg">
              Never panic before a license renewal again. PathPort automatically tracks state-by-state Nursing Board requirements, CEU contact hours, and mandatory courses in one encrypted location.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.getpathport.com/auth?signup=true&profession=nurse" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-base shadow-glowTeal hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Start Free Nursing Vault</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Key Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">State-by-State CEU Rules Engine</h3>
              <p className="text-slate-300 text-sm">
                Customized for state boards (NY, FL, CA, TX, OH, etc.). Automatically calculates mandatory infection control, pharmacotherapeutics, and general contact hours.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AHA & Specialty Cert Vault</h3>
              <p className="text-slate-300 text-sm">
                Store BLS, ACLS, PALS, CCRN®, CEN®, and PCCN® certificates safely. Receive automated email reminders 90, 60, and 30 days before expiration.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Travel Nurse & Multi-State Share</h3>
              <p className="text-slate-300 text-sm">
                Generate an instant verified digital portfolio link (`getpathport.com/p/yourname`) and QR code to send travel agencies and hospital credentialing specialists.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="glass-card rounded-3xl p-10 text-center border border-teal-500/30 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 shadow-glowTeal">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Join Thousands of Nurses Streamlining Renewals</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">Free forever for basic credential storage and digital portfolio sharing.</p>
            <a 
              href="https://app.getpathport.com/auth?signup=true"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-sm shadow-glowTeal hover:scale-105 transition-all"
            >
              <span>Build Your Free Nursing Passport</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
