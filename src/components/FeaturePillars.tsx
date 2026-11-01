import React from 'react';
import {
  ShieldCheck,
  Clock,
  FolderLock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Mail,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturePillars: React.FC = () => {
  return (
    <section id="living-record" className="py-20 lg:py-28 bg-slate-50/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#0D5F57] text-xs font-semibold">
            <span>The Living Record • Maintain Once, Use Everywhere</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Why professionals outgrow static resumes and state reporting portals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A two-page PDF can’t hold your CE certificates, clinical logs, or project outcomes—and
            state reporting portals lock your history inside a single board. PathPort keeps your
            complete career record organized in one private workspace you own.
          </p>
        </div>

        {/* Before vs. After Comparison */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before: Fragmented Status Quo */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                The Fragmented Status Quo
              </span>
              <span className="px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-semibold">
                Scattered & Manual
              </span>
            </div>
            <ul className="mt-5 space-y-3.5">
              {[
                'Four different versions of your resume saved across laptops and Google Drive',
                'CEU certificates buried in email attachments when a state board audit arrives',
                'Single-state portals (like CE Broker) that don’t travel when you move or take a compact assignment',
                'Employer LMS transcripts and university `.edu` accounts that disappear the day you change jobs',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After: The PathPort Living Record */}
          <div className="rounded-2xl bg-[#0B132B] text-white border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-52 h-52 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-sm font-bold text-teal-300 uppercase tracking-wider">
                Your PathPort Living Record
              </span>
              <span className="px-2.5 py-1 rounded-md bg-teal-500/20 text-teal-200 text-xs font-semibold border border-teal-500/30">
                Portable & Verifiable
              </span>
            </div>
            <ul className="mt-5 space-y-3.5 relative z-10">
              {[
                'One structured record spanning Credentials, CE/PD, Education, Experience, Projects, Case Studies, Publications, and Awards',
                'Import digital badges in 1 click from Credly earner profiles, Accredible (credential.net), Badgr/Canvas, Coursera, and Open Badges',
                'Forward CE receipts straight from your inbox to ce-yourid@in.getpathport.com for automatic filing',
                'Built-in 50-state and national board renewal rules (ANCC, AACN, NREMT, PMI, CompTIA, ISC2)',
                'Share permissioned MyPortfolio views or download audit-ready PDF dossiers in one click',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3 Core Record Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-slate-200/80 p-7 shadow-2xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-[#0D5F57] mb-5">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              50-State & National Board Renewal Engine
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              PathPort smart-suggests which state board and national requirement buckets your
              completed courses satisfy—such as Florida Medical Errors, NREMT’s 30/15/15 NCCP
              buckets, and PMI Talent Triangle PDUs—letting you confirm attribution across multiple
              credentials with automatic surplus hour rollup.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0D5F57]">
              <Link to="/tools/renewal-calculator" className="hover:underline flex items-center gap-1">
                <span>Try the 50-State Renewal Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/80 p-7 shadow-2xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0D5F57] mb-5">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Email-to-Vault Ingress (@in.getpathport.com)
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Every PathPort account includes dedicated routing addresses (
              <code className="text-xs font-mono bg-slate-100 px-1 py-0.5 rounded">
                ce-you@in.getpathport.com
              </code>
              ). Forward course completion emails from your phone and PathPort strips email noise,
              computes a SHA-256 hash, and files the PDF in your Vault.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0D5F57]">
              <span>Automatic attachment extraction & hashing</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/80 p-7 shadow-2xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-700 mb-5">
              <FolderLock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Clear Provenance & Private-by-Default Vault
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Everything you upload is private by default inside your encrypted user container.
              PathPort clearly labels whether an item is <strong>Self-Reported</strong>,{' '}
              <strong>Document-Supported</strong>, or <strong>Issuer-Verified</strong> so reviewers
              can trust what you share.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800">
              <Link to="/security" className="hover:underline flex items-center gap-1">
                <span>Read the Security & Provenance Whitepaper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
