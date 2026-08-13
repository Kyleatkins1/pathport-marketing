import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Lock, ShieldCheck, Database, KeyRound, Server } from 'lucide-react';

export const SecurityWhitepaper: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b border-slate-800 pb-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/30">
              <Lock className="w-4 h-4 text-cyan-300" />
              ENTERPRISE SECURITY & ENCRYPTION
            </span>
            <h1 className="text-4xl font-extrabold text-white">Security & Data Protection Overview</h1>
            <p className="text-slate-400 text-sm">Veritas Technology Solutions, LLC • PathPort Platform Security</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="glass-card rounded-2xl p-6 border border-teal-500/30">
              <Database className="w-8 h-8 text-teal-400 mb-3" />
              <h3 className="font-bold text-white text-lg mb-1">AES-256 Storage Encryption</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                All uploaded PDF certificates, license images, and document assertions are encrypted at rest using industry-standard AES-256 algorithm.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-amber-500/30">
              <KeyRound className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="font-bold text-white text-lg mb-1">Row Level Security (RLS)</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                PostgreSQL database rules enforce zero-trust access control. Users only access their own authenticated vault records.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-purple-500/30">
              <Server className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-bold text-white text-lg mb-1">TLS 1.3 Transport Security</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                All network communication between mobile applications, web portals, and API endpoints is encrypted via TLS 1.3.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-cyan-500/30">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-lg mb-1">Zero Data Selling Commitment</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Veritas Technology Solutions, LLC never sells or shares your personal credential records with third-party advertisers or brokers.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white">Security Vulnerability Reporting</h2>
            <p>
              If you discover a potential security vulnerability in PathPort, please report it immediately to <a href="mailto:security@veritastech.io" className="text-teal-300 hover:underline font-semibold">security@veritastech.io</a>. We operate a responsible disclosure policy and review reports promptly.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
