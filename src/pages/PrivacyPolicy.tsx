import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ShieldCheck } from 'lucide-react';

import { SEO } from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO 
        title="PathPort — Privacy Policy & Zero Data Selling Commitment"
        description="PathPort Privacy Policy. Individual record sovereignty, privacy-by-default architecture, scoped employer consent, and zero data selling commitment."
      />
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              VERITAS TECHNOLOGY SOLUTIONS, LLC
            </span>
            <h1 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Last Updated: August 14, 2026</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">1. Introduction & Individual Sovereignty</h2>
              <p>
                PathPort is owned and operated by <strong>Veritas Technology Solutions, LLC</strong>. We operate on a strict privacy-by-default architecture: you own your identity, credentials, case studies, continuing education history, and tailored portfolios.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
              <p>To provide universal credential passport and living record features, we collect:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Account Information:</strong> Name, professional email address, state license numbers, and profile settings.</li>
                <li><strong>Credential Documents & Metadata:</strong> PDF certificates, badge assertions, license issue and expiration dates, and CE contact hours.</li>
                <li><strong>Case Studies & Projects:</strong> Context, challenges, approaches, and evidence media that you intentionally author.</li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">3. Zero Data Selling Guarantee</h2>
              <p>
                <strong>Veritas Technology Solutions, LLC never sells, rents, or monetizes your personal credential data, uploaded case studies, or portfolio items to third-party data brokers or advertisers.</strong>
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">4. Privacy-by-Default & Scoped Consent</h2>
              <p>
                All new user artifacts, portfolios, case studies, and projects default to <strong>private or unlisted</strong>. Employers (via PathPort Teams) only receive scoped, consent-mediated visibility into credentials strictly required for active workforce compliance.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">5. Data Encryption & RLS Security</h2>
              <p>
                All uploaded documents and database records are encrypted using AES-256 at rest and TLS 1.3 in transit. Our infrastructure enforces PostgreSQL Row Level Security (RLS) policies at the database layer.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">6. Contact & Privacy Inquiries</h2>
              <p>
                If you have questions about this policy or wish to request data export or deletion under GDPR / CCPA, contact our Data Protection Officer at{' '}
                <a href="mailto:privacy@getpathport.com" className="text-teal-800 dark:text-teal-400 font-semibold underline">
                  privacy@getpathport.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
