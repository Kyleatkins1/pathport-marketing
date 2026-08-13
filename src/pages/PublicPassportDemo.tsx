import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { BrandedQRCode } from '../components/BrandedQRCode';
import { 
  ShieldCheck, Award, Calendar, QrCode, ExternalLink, 
  Presentation, FileCode, ArrowRight, Sparkles, Building2, MapPin
} from 'lucide-react';

interface PassportProfile {
  name: string;
  title: string;
  handle: string;
  avatar: string;
  location: string;
  verifiedCount: number;
  ceusCompleted: string;
  verifiedSince: string;
  bio: string;
  credentials: {
    title: string;
    issuer: string;
    issueDate: string;
    expiryDate: string;
    id: string;
    verified: boolean;
    status: 'ACTIVE' | 'CURRENT';
    skills: string[];
  }[];
  projects: {
    title: string;
    category: string;
    certAttached: string;
    description: string;
    linkText: string;
  }[];
  posters: {
    title: string;
    conference: string;
    year: string;
    type: string;
  }[];
}

const profilesData: Record<string, PassportProfile> = {
  'alex-chen': {
    name: "Alex Chen",
    title: "Senior Cloud Architect & PMP®",
    handle: "alex-chen",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    location: "San Francisco, CA",
    verifiedCount: 7,
    ceusCompleted: "30 / 30 Hours Complete",
    verifiedSince: "March 2022",
    bio: "Multi-certified Enterprise Cloud Architect specializing in AWS multi-region infrastructure, Kubernetes migration, and Agile project governance.",
    credentials: [
      {
        title: "PMP® - Project Management Professional",
        issuer: "Project Management Institute (PMI)",
        issueDate: "Jan 2021",
        expiryDate: "Jan 2027",
        id: "PMI-2940185",
        verified: true,
        status: "ACTIVE",
        skills: ["Agile Governance", "Risk Management", "Budgeting ($5M+)"]
      },
      {
        title: "AWS Certified Solutions Architect – Professional",
        issuer: "Amazon Web Services",
        issueDate: "Nov 2022",
        expiryDate: "Nov 2025",
        id: "AWS-PSA-99214",
        verified: true,
        status: "ACTIVE",
        skills: ["Multi-Region VPC", "Serverless Architecture", "IAM Governance"]
      },
      {
        title: "Certified Kubernetes Administrator (CKA)",
        issuer: "Linux Foundation / CNCF",
        issueDate: "Aug 2023",
        expiryDate: "Aug 2026",
        id: "LF-CKA-88102",
        verified: true,
        status: "ACTIVE",
        skills: ["Kubernetes", "Helm", "Cluster Security"]
      }
    ],
    projects: [
      {
        title: "Healthcare Cloud Migration ($12M Project)",
        category: "Enterprise Infrastructure",
        certAttached: "PMP® & AWS Solutions Architect",
        description: "Led 14-engineer team migrating legacy EHR systems to multi-region AWS setup with zero downtime.",
        linkText: "View Migration Case Study"
      },
      {
        title: "Zero-Trust IAM Policy Engine",
        category: "Security & Governance",
        certAttached: "AWS Certified Solutions Architect",
        description: "Architected automated role-based access control engine enforcing SOC2 and HIPAA compliance.",
        linkText: "View Security Architecture"
      }
    ],
    posters: [
      {
        title: "Kubernetes Multi-Region Resilience at Scale",
        conference: "AWS re:Invent 2024",
        year: "2024",
        type: "Keynote Presentation"
      },
      {
        title: "Agile Risk Management in Cloud Transformation",
        conference: "Global PMI Symposium",
        year: "2023",
        type: "Research Poster"
      }
    ]
  },
  'marcus-vance': {
    name: "Marcus Vance",
    title: "Lead Technical Project Manager",
    handle: "marcus-vance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    location: "Austin, TX",
    verifiedCount: 5,
    ceusCompleted: "60 / 60 PDUs Complete",
    verifiedSince: "June 2021",
    bio: "Certified PMP® and CSM® with 10+ years leading fintech software delivery and cross-functional engineering pods.",
    credentials: [
      {
        title: "PMP® - Project Management Professional",
        issuer: "Project Management Institute (PMI)",
        issueDate: "May 2019",
        expiryDate: "May 2025",
        id: "PMI-1882041",
        verified: true,
        status: "ACTIVE",
        skills: ["PDU Cycle Management", "Scrum at Scale", "Fintech Compliance"]
      },
      {
        title: "Certified ScrumMaster® (CSM)",
        issuer: "Scrum Alliance",
        issueDate: "Feb 2020",
        expiryDate: "Feb 2026",
        id: "SA-CSM-40192",
        verified: true,
        status: "ACTIVE",
        skills: ["Sprint Planning", "Retrospectives", "Jira Architecture"]
      }
    ],
    projects: [
      {
        title: "Real-Time Payment Processing Pipeline",
        category: "Fintech Platform",
        certAttached: "PMP® & CSM®",
        description: "Managed 3-pod team delivering PCI-DSS compliant payment processing engine handling $40M daily volume.",
        linkText: "View Platform Overview"
      }
    ],
    posters: [
      {
        title: "Scaling Agile in FinTech Environments",
        conference: "Agile Alliance 2024",
        year: "2024",
        type: "Panel Presentation"
      }
    ]
  },
  'sarah-jenkins': {
    name: "Sarah Jenkins",
    title: "ICU Charge Nurse, BSN, RN, CCRN®",
    handle: "sarah-jenkins",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    location: "New York, NY",
    verifiedCount: 6,
    ceusCompleted: "24 / 24 Board CEUs Complete",
    verifiedSince: "August 2020",
    bio: "Board-certified Critical Care Registered Nurse with 8 years in Level 1 Trauma ICU. State licensed in NY and FL.",
    credentials: [
      {
        title: "Registered Nurse (RN) - New York State Board",
        issuer: "NYS Office of the Professions",
        issueDate: "Jul 2018",
        expiryDate: "Jul 2026",
        id: "NY-RN-784019",
        verified: true,
        status: "ACTIVE",
        skills: ["ICU Care", "Infection Control", "Hemodynamic Monitoring"]
      },
      {
        title: "CCRN® - Critical Care Registered Nurse",
        issuer: "AACN Certification Corporation",
        issueDate: "Oct 2020",
        expiryDate: "Oct 2026",
        id: "AACN-CCRN-9921",
        verified: true,
        status: "ACTIVE",
        skills: ["Ventilator Management", "VAD Support", "CRRT"]
      },
      {
        title: "Advanced Cardiovascular Life Support (ACLS)",
        issuer: "American Heart Association",
        issueDate: "Jan 2024",
        expiryDate: "Jan 2026",
        id: "AHA-ACLS-55102",
        verified: true,
        status: "ACTIVE",
        skills: ["Cardiac Arrest Protocols", "ECG Analysis"]
      }
    ],
    projects: [
      {
        title: "Sepsis Early Warning System Protocol",
        category: "Clinical Quality Improvement",
        certAttached: "CCRN® & NYS RN",
        description: "Co-authored hospital-wide ICU sepsis protocol reducing onset-to-treatment time by 38%.",
        linkText: "View Clinical Case Study"
      }
    ],
    posters: [
      {
        title: "Reducing CAUTI Rates in High-Acuity ICU Units",
        conference: "AACN National Teaching Institute",
        year: "2024",
        type: "Research Poster"
      }
    ]
  },
  'david-kim': {
    name: "David Kim",
    title: "Senior DevOps & Security Lead",
    handle: "david-kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    location: "Seattle, WA",
    verifiedCount: 8,
    ceusCompleted: "45 / 45 CPE Credits Complete",
    verifiedSince: "January 2021",
    bio: "DevOps Lead specializing in automated CI/CD security pipelines, Terraform IaC, and Kubernetes security hardening.",
    credentials: [
      {
        title: "Certified Information Systems Security Professional (CISSP)",
        issuer: "(ISC)²",
        issueDate: "Apr 2021",
        expiryDate: "Apr 2027",
        id: "ISC2-CISSP-9018",
        verified: true,
        status: "ACTIVE",
        skills: ["Security Architecture", "Cryptography", "Identity Management"]
      },
      {
        title: "AWS Certified Security – Specialty",
        issuer: "Amazon Web Services",
        issueDate: "Dec 2022",
        expiryDate: "Dec 2025",
        id: "AWS-SEC-33291",
        verified: true,
        status: "ACTIVE",
        skills: ["KMS Encryption", "GuardDuty", "WAF Security"]
      }
    ],
    projects: [
      {
        title: "Automated DevSecOps Pipeline Integration",
        category: "Cloud Security",
        certAttached: "CISSP & AWS Security Specialty",
        description: "Implemented static code security analysis and automated container vulnerability scanning in GitHub Actions.",
        linkText: "View Pipeline Spec"
      }
    ],
    posters: [
      {
        title: "Zero-Trust Infrastructure Code Hardening",
        conference: "KubeCon North America",
        year: "2024",
        type: "Technical Presentation"
      }
    ]
  }
};

export const PublicPassportDemo: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [qrModalOpen, setQrModalOpen] = useState(false);

  // Fallback to Alex Chen if slug not found
  const profileKey = (slug && profilesData[slug]) ? slug : 'alex-chen';
  const profile = profilesData[profileKey];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-300">
      
      {/* Top Banner (Verified PathPort Header) */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo size={32} />
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              VERIFIED PATHPORT PASSPORT
            </span>

            <button 
              onClick={() => setQrModalOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center gap-2 transition-colors"
            >
              <QrCode className="w-4 h-4 text-teal-400" />
              <span>QR Code</span>
            </button>

            <a 
              href="https://app.getpathport.com/auth?signup=true" 
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold shadow-glowTeal hover:scale-105 transition-all hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Build Yours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Profile Passport Layout */}
      <main className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Profile Card Header */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative z-10">
            <div className="flex items-center gap-5">
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="w-20 h-20 rounded-2xl object-cover border-2 border-teal-500/50 shadow-glowTeal"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">{profile.name}</h1>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    Verified User
                  </span>
                </div>
                <p className="text-slate-300 font-medium text-sm">{profile.title}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {profile.location}</span>
                  <span>•</span>
                  <span>Member since {profile.verifiedSince}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 text-xs space-y-2 shrink-0">
              <div className="text-slate-400 flex items-center justify-between gap-6">
                <span>Verified Credentials:</span>
                <strong className="text-white font-bold">{profile.verifiedCount} Active</strong>
              </div>
              <div className="text-slate-400 flex items-center justify-between gap-6">
                <span>CEU Status:</span>
                <strong className="text-teal-300 font-semibold">{profile.ceusCompleted}</strong>
              </div>
              <div className="text-slate-400 flex items-center justify-between gap-6">
                <span>Passport Slug:</span>
                <strong className="text-teal-300 font-mono">getpathport.com/p/{profile.handle}</strong>
              </div>
            </div>
          </div>

          <p className="mt-6 pt-6 border-t border-slate-800/80 text-slate-300 text-sm leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* Section 1: Active Verified Credentials */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-400" />
              <span>Active Verified Credentials ({profile.credentials.length})</span>
            </h2>
            <span className="text-xs text-teal-400 font-semibold bg-teal-500/10 border border-teal-500/30 px-3 py-1 rounded-full">
              AES-256 Encrypted Storage
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {profile.credentials.map((cred, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-teal-500/40 transition-all bg-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                    <h3 className="font-bold text-white text-lg">{cred.title}</h3>
                  </div>
                  <p className="text-slate-400 text-xs flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Issued by <strong>{cred.issuer}</strong></span>
                    <span>•</span>
                    <span className="font-mono text-slate-400">ID: {cred.id}</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cred.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px] border border-slate-700 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0 space-y-1">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-500/10 border border-teal-500/30 px-3 py-1 rounded-lg">
                    VERIFIED & CURRENT
                  </span>
                  <p className="text-xs text-slate-400 flex items-center justify-start sm:justify-end gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    Valid thru {cred.expiryDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Project Proof & Real-World Attachments */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileCode className="w-5 h-5 text-amber-400" />
            <span>Project Proof & Credential Attachments ({profile.projects.length})</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.projects.map((proj, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3 bg-slate-900/40">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium">
                    {proj.category}
                  </span>
                  <span className="text-slate-400 text-[11px]">Attached to: <strong>{proj.certAttached}</strong></span>
                </div>
                <h3 className="font-bold text-white text-base">{proj.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{proj.description}</p>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-teal-300 font-semibold">
                  <span>{proj.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Conference Posters & Keynote Gallery */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Presentation className="w-5 h-5 text-purple-400" />
            <span>Conference Posters & Presentations ({profile.posters.length})</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.posters.map((poster, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-purple-500/30 space-y-2 bg-gradient-to-r from-slate-900 via-slate-950 to-purple-950/20">
                <span className="px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-semibold">
                  {poster.type} • {poster.year}
                </span>
                <h3 className="font-bold text-white text-base pt-1">{poster.title}</h3>
                <p className="text-slate-400 text-xs">Presented at: <strong>{poster.conference}</strong></p>
              </div>
            ))}
          </div>
        </div>

        {/* Claim Your PathPort CTA Banner */}
        <div className="glass-card rounded-3xl p-8 text-center border border-teal-500/30 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 shadow-glowTeal space-y-4">
          <Sparkles className="w-8 h-8 text-teal-300 mx-auto" />
          <h3 className="text-2xl font-extrabold text-white">Create Your Own Free Verified PathPort</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Consolidate your certifications, state licenses, project proof, and posters into one shareable passport like {profile.name}.
          </p>
          <a 
            href="https://app.getpathport.com/auth?signup=true"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-sm shadow-glowTeal hover:scale-105 transition-all"
          >
            <span>Claim Your Free PathPort Passport</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </main>

      {/* QR Code Modal */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-card max-w-sm w-full rounded-2xl p-6 border border-slate-700 text-center relative shadow-2xl">
            <h4 className="font-bold text-white text-lg mb-1">{profile.name}'s PathPort</h4>
            <p className="text-xs text-slate-400 mb-4">Scan to view instant verified credentials</p>
            
            <div className="my-4 flex justify-center">
              <BrandedQRCode 
                value={`https://pathport-marketing.pages.dev/p/${profile.handle}`}
                size={190}
              />
            </div>

            <p className="text-sm font-semibold text-teal-300 mb-4">getpathport.com/p/{profile.handle}</p>

            <button 
              onClick={() => setQrModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-700"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>PathPort verified public passport view. Powered by Veritas Technology Solutions, LLC.</p>
      </footer>
    </div>
  );
};
