import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Lock, ShieldCheck, Database, KeyRound, Server } from 'lucide-react';

export const SecurityWhitepaper: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-slate-200 pb-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <Lock className="w-4 h-4 text-emerald-700" />
              SECURITY ARCHITECTURE
            </span>
            <h1 className="text-4xl font-display font-extrabold text-slate-900">Security & Data Protection Overview</h1>
            <p className="text-slate-500 text-xs font-medium">Veritas Technology Solutions, LLC • PathPort Architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
              <Database className="w-8 h-8 text-teal-800 mb-1" />
              <h3 className="font-display font-bold text-slate-900 text-base">AES-256 Storage Encryption</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                All uploaded PDF certificates, license images, and document assertions are encrypted at rest using industry-standard AES-256 encryption.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
              <KeyRound className="w-8 h-8 text-teal-800 mb-1" />
              <h3 className="font-display font-bold text-slate-900 text-base">Row Level Security (RLS)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                PostgreSQL database rules enforce zero-trust access control. Users only access their own authenticated records, and employers only access scoped, consent-mediated credentials.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
              <Server className="w-8 h-8 text-teal-800 mb-1" />
              <h3 className="font-display font-bold text-slate-900 text-base">TLS 1.3 Transport Security</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                All network communication between client applications, web portals, and API endpoints is encrypted via TLS 1.3.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
              <ShieldCheck className="w-8 h-8 text-teal-800 mb-1" />
              <h3 className="font-display font-bold text-slate-900 text-base">Zero Data Selling Commitment</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Veritas Technology Solutions, LLC never sells or shares your personal credential records or portfolio items with third-party advertisers or brokers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
            <h2 className="text-base sm:text-lg font-display font-bold text-slate-900">Security Vulnerability Reporting</h2>
            <p>
              If you discover a potential security vulnerability in PathPort, please report it immediately to{' '}
              <a href="mailto:security@veritastech.io" className="text-teal-800 hover:underline font-semibold">
                security@veritastech.io
              </a>
              . We operate a responsible disclosure policy and review reports promptly.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityWhitepaper;
