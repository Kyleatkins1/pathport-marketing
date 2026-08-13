import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does PathPort verify state licenses and professional certifications?",
      answer: "PathPort connects directly to state licensing board registries, Credly API endpoints, and 1EdTech Open Badges 2.0/3.0 assertions. Our AI OCR parser also reads official PDF certificates and issue timestamps to generate verifiable digital assertions that third parties can verify without logins."
    },
    {
      question: "What happens if I change employers or state licensing boards?",
      answer: "Your PathPort Passport belongs to you, not your employer. You maintain full access to your universal vault forever. If you move states or switch health systems, simply update your state board preference in the CEU engine to re-calculate state-specific contact hour requirements automatically."
    },
    {
      question: "How is my personal document data encrypted and protected?",
      answer: "All certificates, licenses, and resume documents stored in PathPort are encrypted using AES-256 at rest and TLS 1.3 in transit. PathPort operates under strict Row Level Security (RLS) policies. Veritas Technology Solutions, LLC never sells or monetizes your personal credential data."
    },
    {
      question: "Is the $49/yr Founding Member price really locked for 2 years?",
      answer: "Yes! For the first 500 professionals who join PathPort, your Pro Passport rate is locked at $49/year (normally $79/year) for 2 full years. You get unlimited credential storage, full CEU tracking engines, AI resume parsing, and custom URL slugs."
    },
    {
      question: "Are college students eligible for free access?",
      answer: "Absolutely. Students with an active `.edu` email address receive 100% free access to PathPort Pro for as long as they are enrolled, allowing them to build an impressive digital achievement portfolio before graduation."
    },
    {
      question: "Can I export my digital portfolio for hardcopy or PDF job applications?",
      answer: "Yes. In addition to your custom web URL (`getpathport.com/p/yourname`) and high-resolution QR code, PathPort allows one-click export of your verified credential timeline into a clean PDF portfolio."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-950/80 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-500/30">
            <HelpCircle className="w-4 h-4 text-teal-300" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Everything You Need to Know</h2>
          <p className="text-slate-400 text-base">
            Have questions about how PathPort protects your credentials or calculates CEUs? We've got answers.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="font-bold text-white text-base sm:text-lg group-hover:text-teal-300 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-teal-300 bg-teal-500/10 border-teal-500/30' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
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
