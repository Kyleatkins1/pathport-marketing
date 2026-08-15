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
      question: "How does PathPort differ from a PDF résumé or LinkedIn profile?",
      answer: "A résumé is a 1-page summary of claims. PathPort is your persistent, authoritative living record. It stores the full evidence behind your accomplishments — rich case studies (with Challenge, Approach, and Measurable Outcomes), verified credentials, continuing education history, and dynamic portfolios tailored for each audience with zero data duplication."
    },
    {
      question: "What does 'Maintain Once, Present Many Ways' mean?",
      answer: "You never need to rebuild your portfolio from scratch. Your credentials, case studies, and experiences live in your core record once. When you create a tailored view for an executive role, client proposal, or new opportunity, it references those items live without duplicate data. If you update an item in your record, all active portfolio views reflect the update immediately."
    },
    {
      question: "How does PathPort protect individual privacy?",
      answer: "PathPort is built on a strict privacy-by-default architecture. All new case studies, credentials, and portfolios default to private or unlisted. Employers (via PathPort Teams) only receive scoped, consent-mediated visibility into credentials strictly required for compliance. When you offboard from a company, employer access is revoked while your personal record remains yours."
    },
    {
      question: "How does PathPort verify credentials and evidence?",
      answer: "Every credential and piece of evidence displays clear verification badges (such as self-reported, document-supported, provider-reported, or issuer-verified) so viewers and employers know exactly where the item came from without login friction."
    },
    {
      question: "What happens during the Beta Phase?",
      answer: "Founding members who register for the Beta get priority access to create their living record, build tailored portfolios, and test new capabilities as beta access expands."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Learn how PathPort safeguards your evidence, organizes renewals, and powers living portfolios.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-teal-800 dark:group-hover:text-teal-400 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-teal-50 dark:group-hover:bg-teal-950/60 group-hover:text-teal-800 dark:group-hover:text-teal-300 transition-all ${
                      isOpen ? 'rotate-180 bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3 animate-in fade-in duration-150">
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

export default FAQ;
