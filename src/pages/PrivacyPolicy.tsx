import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b border-slate-800 pb-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <ShieldCheck className="w-4 h-4 text-teal-300" />
              VERITAS TECHNOLOGY SOLUTIONS, LLC
            </span>
            <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
            <p className="text-slate-400 text-sm">Last Updated: August 13, 2026</p>
          </div>

          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">1. Introduction & Ownership</h2>
              <p>
                PathPort ("Service", "Application", or "Platform") is owned and operated by <strong>Veritas Technology Solutions, LLC</strong> ("Company", "we", "us", or "our"), located at <a href="https://veritastech.io" target="_blank" rel="noreferrer" className="text-teal-300 hover:underline">veritastech.io</a>. We are committed to protecting the privacy, security, and integrity of your professional credential data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
              <p>To provide universal credential passport features, we collect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Account Information:</strong> Name, professional email address, state license numbers, and profile settings.</li>
                <li><strong>Credential Documents & Metadata:</strong> PDF certificates, badge assertions (Credly/Open Badges), license issue and expiration dates, and CEU contact hours.</li>
                <li><strong>Usage & Device Data:</strong> Mobile device identifiers, IP addresses, browser types, and app interaction logs necessary for security auditing.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">3. Zero Data Selling Guarantee</h2>
              <p>
                <strong>Veritas Technology Solutions, LLC never sells, rents, or monetizes your personal credential data or uploaded PDF documents to third-party data brokers or advertisers.</strong> Your credential vault belongs entirely to you.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Data Encryption & Storage Security</h2>
              <p>
                All uploaded documents and database records are encrypted using AES-256 at rest and TLS 1.3 in transit. Our infrastructure enforces PostgreSQL Row Level Security (RLS) policies ensuring that only authorized users or designated organization administrators can view your files.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. Mobile Application Permissions</h2>
              <p>
                When using PathPort mobile applications (iOS / Android), the app may request permissions for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Camera Access:</strong> To scan physical certificates, licenses, and QR codes via OCR parsing.</li>
                <li><strong>Push Notifications:</strong> To deliver 90/60/30-day license expiration alerts and CEU renewal reminders.</li>
                <li><strong>Local File Storage:</strong> To support offline document viewing and secure local passport caching.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">6. Your Rights & Data Deletion</h2>
              <p>
                You retain full control over your data. You may export your complete credential vault or delete your account at any time. Account deletion permanently removes all stored certificates and metadata from our active databases within 30 days.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-800">
              <h2 className="text-xl font-bold text-white">7. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy, please contact our privacy compliance team at <a href="mailto:privacy@veritastech.io" className="text-teal-300 hover:underline">privacy@veritastech.io</a> or visit <a href="https://veritastech.io" target="_blank" rel="noreferrer" className="text-teal-300 hover:underline">veritastech.io</a>.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
