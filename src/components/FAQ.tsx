import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    q: 'Is PathPort only for healthcare, or can anyone track credentials and identity documents?',
    a: 'PathPort is built for everyone—if you have a credential, you can track it. Whether you hold tech and cloud certifications (AWS, CompTIA, ISC2), project management credentials (PMP, CSM), aviation or trade licenses, education certificates, or clinical boards, PathPort tracks them in one place. PathPort also includes a free Personal Identity Documents tier so anyone can track everyday IDs—like a Driver’s License, Passport, or Global Entry—for free.',
  },
  {
    q: 'Do I have to type all of my past licenses, jobs, digital badges, and CE certificates by hand?',
    a: 'No. During setup, you can drop in your existing resume/CV (PDF or DOCX), a LinkedIn profile PDF export, or a batch of CE certificate PDFs and wallet card photos. You can also paste badge URLs or your entire earner profile link from Credly (credly.com/users/you/badges), Accredible (credential.net), Badgr/Canvas, Coursera, or Open Badges—and forward completion emails directly to your personal @in.getpathport.com address. PathPort extracts and deduplicates everything into a staged review tray so you can confirm each item before it enters your record.',
  },
  {
    q: 'How is PathPort different from CE Broker or my employer’s HR portal?',
    a: 'CE Broker is a state compliance reporting tool built for participating state boards, and employer HR portals belong to your company. The day you move states or change employers, your history is either locked behind an old login or limited to a single board. PathPort is owned by you for life, tracks renewals across all 50 states and national boards (PMI, CompTIA, ISC2, ANCC, AACN, NREMT), and includes MyPortfolio and MyPath.',
  },
  {
    q: 'What is the difference between the Free Personal Identity Tracker, Essentials, and Pro?',
    a: 'Our Personal Identity Documents tier ($0 Free Forever) is built specifically for people who only want to track everyday identity documents—like a Driver’s License, Passport, Global Entry / TSA PreCheck, or Vehicle Registration—so they never forget a renewal. PathPort Essentials ($9.99/mo or $7.99/mo billed annually) gives you the complete 8-Entity Living Record, 60-second multi-source & Credly import, @in.getpathport.com email forwarding, 50-state and board renewal tracking, your private SHA-256 Document Vault, and 1 public MyPortfolio link. PathPort Pro ($19.99/mo or $14.99/mo billed annually) adds MyPath Career Intelligence—including 6-pillar career roadmaps, What-If Role Audits, Application & Interview Studio, and unlimited custom MyPortfolio views.',
  },
  {
    q: 'How do PathPort Workplace and PathPort Certify work (Launching 2027)?',
    a: 'PathPort Workplace is built for any workforce that needs to obtain and verify employee credentials without sending countless emails: simply log in, select what you need, and send the request to the employee—they can create a free PathPort profile, upload their required docs, and share them instantly while system intelligence keeps everyone compliant (plus you can assign CEUs directly to training attendees). PathPort Certify is end-to-end credential management for certifying bodies across any industry: candidates apply for a credential, submit documents, and track payments; you track exam results from official test platforms (or use our testing partners to streamline the experience), issue credentials through any badge provider, and manage recertifications directly within PathPort.',
  },
  {
    q: 'How does PathPort handle verification, document provenance, and privacy?',
    a: 'All uploaded files live in a private, encrypted user storage container by default—nothing is visible externally unless you explicitly share it. Every item carries a transparent provenance status: Self-Reported, Document-Supported (backed by a SHA-256 hashed certificate in your private Vault), Provider-Reported, or Issuer-Verified.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#0D5F57] text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Clear answers on setup, ownership, and pricing
          </h2>
        </div>

        <div className="space-y-3">
          {HOMEPAGE_FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="text-base font-bold text-slate-900 font-display">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0D5F57]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
