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
      answer: "A résumé is a list of unverified claims that goes stale immediately. PathPort is a permanent record of your real career artifacts: verified state licenses, accredited CE hours, project case studies with attachments, and transcripts. Instead of emailing five PDFs, you share a single tailored link."
    },
    {
      question: "What does 'Own your journey. Shape what’s next.' mean?",
      answer: "'Own your journey' means you hold sovereign ownership over your permanent professional record — your credentials, degrees, case studies, continuing education, and career artifacts live in one place, controlled solely by you. 'Shape what’s next' means using that living evidence to actively advance: MyPath career intelligence assesses credential gaps, recommends strategic next steps, prepares interview-ready stories, and generates tailored portfolio links without duplicate data entry."
    },
    {
      question: "Who owns my data if my employer uses PathPort?",
      answer: "You do. PathPort enforces strict individual sovereignty. Employers connect through scoped permissions to view only the specific licenses and compliance items required for your current role. If you change jobs, their access ends immediately and your record stays with you."
    },
    {
      question: "How does credential verification work?",
      answer: "Every license and certification displays an objective provenance badge: Document Supported, State Registry Checked, or Issuer Verified. Viewers can inspect verification timestamps without having to create an account or log in."
    },
    {
      question: "Is there a free version of PathPort, and how do trials work?",
      answer: "To guarantee 100% individual sovereignty, zero data selling, and zero advertising, PathPort does not offer an ad-supported or data-brokered free tier. Instead, every standard account receives a 14-day free trial of PathPort Pro with no payment info required. Founding members who join our waitlist before our Fall 2026 launch receive an exclusive 30-day free trial of Pro. After your trial, you can choose between Essentials ($9.99/mo or $8.33/mo billed annually) or Pro ($19.99/mo or $16.66/mo billed annually), and your records always remain 100% exportable and owned by you."
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
            <span>Frequently Asked Questions</span>
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
            const questionId = `faq-question-${idx}`;
            const answerId = `faq-answer-${idx}`;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:focus-visible:ring-teal-400 group cursor-pointer min-h-[44px]"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-teal-800 dark:group-hover:text-teal-400 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-teal-50 dark:group-hover:bg-teal-950/60 group-hover:text-teal-800 dark:group-hover:text-teal-300 transition-all shrink-0 ${
                      isOpen ? 'rotate-180 bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3 animate-in fade-in duration-150"
                  >
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
