import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { SEO } from '../../../components/SEO';
import { BetaRegistrationModal } from '../../../components/BetaRegistrationModal';
import { 
  Check, X, ShieldCheck, ArrowRight, Award, 
  FileCheck2, ChevronDown, ChevronUp, Globe2
} from 'lucide-react';

interface ComparisonItem {
  feature: string;
  pathport: string | boolean;
  ceBroker: string | boolean;
  highlight?: boolean;
  note?: string;
}

export const VsCeBroker: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const comparisonRows: ComparisonItem[] = [
    {
      feature: "Individual Record Sovereignty",
      pathport: "100% owned by the clinician",
      ceBroker: "Tied to state board contracts",
      highlight: true,
      note: "Your PathPort record stays with you forever, regardless of where you move or work."
    },
    {
      feature: "Multi-State & Compact License Tracking",
      pathport: "All 50 states + Compact rules",
      ceBroker: "Select board states only",
      highlight: true,
      note: "Track CE requirements across Florida, California, Texas, and eNLC compact states in one dashboard."
    },
    {
      feature: "Structured Case Studies & Work Proof",
      pathport: "Built-in Challenge-Action-Metric builder",
      ceBroker: false,
      highlight: true,
      note: "Prove clinical leadership and quality improvement initiatives beyond just contact hours."
    },
    {
      feature: "Tailored Shareable Portfolios (/p/ links)",
      pathport: "Dynamic permissioned links",
      ceBroker: false,
      highlight: true,
      note: "Share clean, verified evidence dossiers with hiring managers and credentialing committees."
    },
    {
      feature: "Cross-Disciplinary Record Keeping",
      pathport: "Nursing, EMS, Health Tech, Leadership",
      ceBroker: "Healthcare CE only",
      note: "Manage university degrees, board certifications, publications, and technical projects alongside CEUs."
    },
    {
      feature: "Privacy Firewalls for Employers",
      pathport: "Scoped consent grants only",
      ceBroker: "Direct hospital integrations",
      note: "Employers see only the credentials required for your role—never your entire private career history."
    },
    {
      feature: "Document Vault & PDF Certificate Storage",
      pathport: "Encrypted AES-256 vault included",
      ceBroker: "Limited on free tier",
      note: "Keep your original diploma scans, ACLS cards, and CE certificates permanently organized."
    },
    {
      feature: "Trial & Professional Subscription",
      pathport: "30-Day Pro Trial for Founding Cohort (No Card Required)",
      ceBroker: "Limited basic / $39.99–$99/yr Pro",
      highlight: true,
      note: "Founding members receive 30 days of full Pro. Standard accounts include a 14-day Pro trial with transparent pricing from $8.33/mo."
    }
  ];

  const faqs = [
    {
      question: "How is PathPort different from CE Broker?",
      answer: "CE Broker was built primarily as a compliance clearinghouse for participating state licensing boards. PathPort is a living, sovereign professional record and evidence passport. In addition to tracking multi-state CE contact hours and renewal deadlines, PathPort turns your clinical competencies, quality committee projects, and certifications into structured case studies and tailored portfolio links you can share with employers, credentialing committees, and academic programs."
    },
    {
      question: "Can I use PathPort if my state licensing board uses CE Broker?",
      answer: "Yes. You can manage your complete repository of CE certificates, transcripts, and expiration deadlines inside PathPort. When it is time to report to your state board, your hours, course providers, and certificate PDFs are already categorized and ready for instant export or copy-paste verification."
    },
    {
      question: "What happens to my PathPort record if I switch hospitals or move states?",
      answer: "Nothing. You own your canonical PathPort record independently. Unlike employer-managed credential databases (e.g. EverCheck or hospital intranets) or single-state reporting silos, your PathPort account travels with you across health systems, multi-state compacts, and career pivots."
    },
    {
      question: "Will I ever be locked out of accessing my certificates?",
      answer: "No. You own your canonical records, uploaded certificates, and case study exports. Even if your subscription lapses, you can always securely export and download your full documentation with zero hostage data."
    },
    {
      question: "How does PathPort handle privacy when sharing credentials with employers?",
      answer: "PathPort operates on a strict privacy-by-default architecture. When an employer requests workforce compliance verification (PathPort Workplace), you grant a scoped consent grant that only reveals whether your required licenses and certifications are active. Employers cannot inspect your private career notes, unshared projects, or unrelated credentials."
    }
  ];

  // Inject FAQPage and SoftwareApplication JSON-LD Schema for Google Rich Results
  useEffect(() => {
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(faqSchema);

    const appSchema = document.createElement('script');
    appSchema.type = 'application/ld+json';
    appSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "PathPort",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Mobile",
      "url": "https://getpathport.com/vs/ce-broker",
      "description": "The sovereign professional record, multi-state CE tracker, and living evidence portfolio for healthcare and technical leaders.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    });
    document.head.appendChild(appSchema);

    return () => {
      if (document.head.contains(faqSchema)) document.head.removeChild(faqSchema);
      if (document.head.contains(appSchema)) document.head.removeChild(appSchema);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort vs. CE Broker — The Modern CE & Evidence Passport Alternative"
        description="Looking for a CE Broker alternative? Compare PathPort's sovereign professional record, multi-state CE tracking, structured case studies, and tailored portfolios."
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="py-16 md:py-24 space-y-20 focus:outline-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <Award className="w-4 h-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
              <span>Platform Comparison</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              A Sovereign Evidence Passport.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">Not a State Reporting Silo.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              CE Broker was built to submit hours to state boards. PathPort is built for your entire career: multi-state CE tracking, structured case studies, living portfolios, and individual record ownership.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Early Access Waitlist</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <Link
                to="/tools/renewal-calculator"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Try State CEU Calculator</span>
              </Link>
            </div>
          </div>

          {/* Side-by-Side Comparison Matrix */}
          <div className="space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Feature Breakdown: PathPort vs. CE Broker
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                A straightforward, factual comparison of capabilities and ownership.
              </p>
            </div>

            <div className="card-surface-white overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold">
                      <th className="p-4 sm:p-5 w-5/12">Capability / Workflow</th>
                      <th className="p-4 sm:p-5 w-4/12 bg-teal-50/60 dark:bg-teal-950/40 text-teal-950 dark:text-teal-200 font-bold border-x border-teal-200/60 dark:border-teal-800/60">
                        PathPort
                      </th>
                      <th className="p-4 sm:p-5 w-3/12 text-slate-600 dark:text-slate-400 font-medium">
                        CE Broker
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                    {comparisonRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={row.highlight ? "bg-teal-50/20 dark:bg-teal-950/10" : "hover:bg-slate-50/50 dark:hover:bg-slate-800/40"}
                      >
                        <td className="p-4 sm:p-5 space-y-1">
                          <div className="font-bold text-slate-900 dark:text-white">{row.feature}</div>
                          {row.note && (
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                              {row.note}
                            </div>
                          )}
                        </td>

                        <td className="p-4 sm:p-5 bg-teal-50/40 dark:bg-teal-950/20 border-x border-teal-200/50 dark:border-teal-800/50">
                          {typeof row.pathport === "boolean" ? (
                            row.pathport ? (
                              <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-bold text-xs">
                                <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                                <span>Included</span>
                              </div>
                            ) : (
                              <X className="w-4 h-4 text-slate-400 dark:text-slate-600" aria-hidden="true" />
                            )
                          ) : (
                            <div className="flex items-center gap-1.5 text-teal-900 dark:text-teal-200 font-bold text-xs">
                              <Check className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" aria-hidden="true" />
                              <span>{row.pathport}</span>
                            </div>
                          )}
                        </td>

                        <td className="p-4 sm:p-5">
                          {typeof row.ceBroker === "boolean" ? (
                            row.ceBroker ? (
                              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 text-xs">
                                <Check className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
                                <span>Yes</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs">
                                <X className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                                <span>Not available</span>
                              </div>
                            )
                          ) : (
                            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                              {row.ceBroker}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3 Key Pillar Deep Dives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-surface-white p-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Individual Ownership</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Your credentials and continuing education belong to you. PathPort is not tied to a single hospital employer or a single state contract.
              </p>
            </div>

            <div className="card-surface-white p-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Structured Case Studies</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                CE certificates only prove you attended a course. PathPort lets you document hospital quality rollouts, clinical protocols, and measurable impact.
              </p>
            </div>

            <div className="card-surface-white p-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Living Share Portfolios</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Generate clean, passwordless verified links (`/p/your-name`) tailored for faculty promotions, travel nurse interviews, or executive committees.
              </p>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Common questions about migrating your record and managing multi-state licenses.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="card-surface-white rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-semibold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                      )}
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${idx}`}
                        role="region"
                        className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Conversion Card */}
          <div className="card-surface-tinted p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white">
              Ready for a portable professional record?
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              Consolidate your licenses, continuing education certificates, and clinical case studies into one living record you own forever.
            </p>
            <button
              onClick={() => setIsBetaModalOpen(true)}
              className="min-h-[48px] px-8 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Join Early Access Waitlist</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

        </div>
      </main>

      <Footer />

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        defaultAudience="Licensed Professional"
        source="vs_ce_broker"
      />
    </div>
  );
};

export default VsCeBroker;
