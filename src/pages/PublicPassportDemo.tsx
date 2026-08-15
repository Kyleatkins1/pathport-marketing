import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Award, ShieldCheck, QrCode, MapPin, 
  ArrowRight, FileText, Presentation, Sun, Moon 
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { BrandedQRCode } from '../components/BrandedQRCode';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { useTheme } from '../context/ThemeContext';

interface CredentialItem {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  id: string;
  verified: boolean;
  provenance: string;
  skills: string[];
}

interface ProjectItem {
  title: string;
  category: string;
  certAttached: string;
  challenge: string;
  approach: string;
  outcome: string;
}

interface PublicationItem {
  title: string;
  conference: string;
  year: string;
  type: string;
}

interface PersonaProfile {
  id: string;
  name: string;
  title: string;
  handle: string;
  avatar: string;
  location: string;
  verifiedCount: number;
  ceusCompleted: string;
  verifiedSince: string;
  bio: string;
  credentials: CredentialItem[];
  projects: ProjectItem[];
  posters?: PublicationItem[];
}

const profilesData: Record<string, PersonaProfile> = {
  'sarah-jenkins': {
    id: 'sarah-jenkins',
    name: "Sarah Jenkins, BSN, RN",
    title: "Critical Care Charge Nurse & Clinical Preceptor",
    handle: "sarah-jenkins-rn",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    location: "New York, NY",
    verifiedCount: 3,
    ceusCompleted: "36 / 36 Contact Hours Complete",
    verifiedSince: "August 2020",
    bio: "Critical Care Registered Nurse with 8 years in Level 1 Trauma ICU. Certified Preceptor for graduate nurse residency. Focused on sepsis screening protocols and bedside hemodynamic monitoring.",
    credentials: [
      {
        title: "Registered Nurse (RN) License",
        issuer: "NYS Office of the Professions",
        issueDate: "Jul 2018",
        expiryDate: "Jul 2026",
        id: "NY-RN-784019",
        verified: true,
        provenance: "Issuer Verified",
        skills: ["ICU Resuscitation", "Infection Control", "Hemodynamic Monitoring"]
      },
      {
        title: "CCRN® — Critical Care Registered Nurse",
        issuer: "AACN Certification Corporation",
        issueDate: "Oct 2020",
        expiryDate: "Oct 2026",
        id: "AACN-CCRN-9921",
        verified: true,
        provenance: "Issuer Verified",
        skills: ["Mechanical Ventilation", "VAD Support", "CRRT Management"]
      },
      {
        title: "ACLS / PALS Provider",
        issuer: "American Heart Association",
        issueDate: "Feb 2024",
        expiryDate: "Feb 2026",
        id: "AHA-ACLS-8812",
        verified: true,
        provenance: "Provider Reported",
        skills: ["Advanced Cardiac Life Support", "Pediatric Resuscitation"]
      }
    ],
    projects: [
      {
        title: "Telemetry Unit Sepsis Early-Warning Protocol",
        category: "Clinical Quality Improvement",
        certAttached: "CCRN® & NYS RN",
        challenge: "Standardize rapid sepsis screening across a 48-bed step-down telemetry unit to avoid ICU bounce-backs.",
        approach: "Co-authored nursing bedside screening protocol and led simulation training for 60 staff nurses.",
        outcome: "Reduced mean time to ICU transfer by 42 minutes across 180 patient admissions."
      }
    ],
    posters: [
      {
        title: "Preceptor Best Practices in Trauma ICU Units",
        conference: "AACN National Teaching Institute",
        year: "2024",
        type: "Clinical Poster"
      },
      {
        title: "Bedside Sepsis Screening & Early Escalation Protocols",
        conference: "Emergency Nurses Association (ENA)",
        year: "2023",
        type: "Invited Speaker"
      }
    ]
  },
  'elena-rodriguez': {
    id: 'elena-rodriguez',
    name: "Elena Rodriguez, NRP, FP-C",
    title: "Critical Care Flight Paramedic & Clinical Educator",
    handle: "elena-flight-lead",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    location: "Denver, CO",
    verifiedCount: 3,
    ceusCompleted: "60 / 60 NREMT NCCP Hours Complete",
    verifiedSince: "January 2021",
    bio: "Critical care rotary transport clinician with 10 years pre-hospital experience. Specializing in high-altitude neonatal transport, invasive hemodynamic lines, and pre-hospital RSI.",
    credentials: [
      {
        title: "National Registry Paramedic (NRP)",
        issuer: "National Registry of EMTs (NREMT)",
        issueDate: "Mar 2016",
        expiryDate: "Mar 2026",
        id: "NREMT-NP948102",
        verified: true,
        provenance: "Issuer Verified",
        skills: ["Rapid Sequence Intubation", "12-Lead ECG", "Pre-Hospital Trauma"]
      },
      {
        title: "Certified Flight Paramedic (FP-C)",
        issuer: "IBSC Board of Specialty",
        issueDate: "Nov 2019",
        expiryDate: "Nov 2027",
        id: "IBSC-FP2918",
        verified: true,
        provenance: "Issuer Verified",
        skills: ["Aero-Medical Physiology", "Ventilator Transport", "Arterial Lines"]
      },
      {
        title: "Critical Care Transport (CCT)",
        issuer: "University Medical Center",
        issueDate: "Jun 2023",
        expiryDate: "Jun 2026",
        id: "UMC-CCT-109",
        verified: true,
        provenance: "Provider Reported",
        skills: ["Blood Product Infusions", "IABP Balloon Pump"]
      }
    ],
    projects: [
      {
        title: "High-Altitude Pre-Hospital RSI Ventilator Protocol",
        category: "Critical Care Transport",
        certAttached: "FP-C & NREMT Paramedic",
        challenge: "Mitigate barometric pressure drops during high-altitude helicopter evacuations in respiratory failure patients.",
        approach: "Implemented dynamic PEEP titration algorithms and Hamilton-T1 preset profiles for flight crews.",
        outcome: "Maintained 100% SpO2 stability and 0% extubation failures across 64 high-acuity flight missions."
      }
    ],
    posters: [
      {
        title: "Ventilator Synchrony in High-Altitude Rotary Aircraft",
        conference: "Air Medical Transport Conference (AMTC)",
        year: "2024",
        type: "Scientific Presentation"
      },
      {
        title: "Pre-Hospital RSI in Pediatric Flight Transport",
        conference: "Critical Care Transport Medicine Conference",
        year: "2023",
        type: "Keynote Workshop"
      }
    ]
  },
  'marcus-vance': {
    id: 'marcus-vance',
    name: "Marcus Vance, PMP®, CSM",
    title: "Senior Technical Program Manager & Solutions Architect",
    handle: "marcus-vance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    location: "Austin, TX",
    verifiedCount: 3,
    ceusCompleted: "60 / 60 PMI PDUs (Current Cycle)",
    verifiedSince: "June 2019",
    bio: "Technical Program Director leading distributed systems, cloud migrations, and high-velocity engineering organizations. Certified Project Management Professional and AWS Solutions Architect.",
    credentials: [
      {
        title: "PMP® — Project Management Professional",
        issuer: "Project Management Institute (PMI)",
        issueDate: "May 2018",
        expiryDate: "May 2027",
        id: "PMI-2948190",
        verified: true,
        provenance: "Issuer Verified",
        skills: ["Agile Governance", "Budget Optimization", "Risk Management"]
      },
      {
        title: "AWS Certified Solutions Architect — Professional",
        issuer: "Amazon Web Services (AWS)",
        issueDate: "Aug 2021",
        expiryDate: "Aug 2027",
        id: "AWS-PSA-88192",
        verified: true,
        provenance: "Issuer Verified",
        skills: ["Multi-Region VPC", "Distributed Databases", "Kubernetes (EKS)"]
      },
      {
        title: "Certified ScrumMaster (CSM)",
        issuer: "Scrum Alliance",
        issueDate: "Jan 2020",
        expiryDate: "Jan 2026",
        id: "CSM-994821",
        verified: true,
        provenance: "Provider Reported",
        skills: ["Sprint Planning", "Release Velocity", "Cross-Functional Leadership"]
      }
    ],
    projects: [
      {
        title: "Zero-Downtime Multi-Region Database Sharding",
        category: "Cloud Engineering & Delivery",
        certAttached: "PMP® & AWS Solutions Architect",
        challenge: "Migrate 45M user records from single-region legacy database to active-active PostgreSQL cluster with zero outage window.",
        approach: "Led cross-functional team of 14 engineers using CRDT replication and phased dual-write shadow deployments.",
        outcome: "Completed migration across 4 global regions with 0 seconds of user downtime and 35% reduced latency."
      }
    ],
    posters: [
      {
        title: "Engineering Governance in Distributed Cloud Systems",
        conference: "DevOps World 2024",
        year: "2024",
        type: "Architecture Talk"
      },
      {
        title: "Zero-Downtime Database Migrations at Enterprise Scale",
        conference: "AWS Summit Austin",
        year: "2023",
        type: "Technical Session"
      }
    ]
  },
  'david-kim': {
    id: 'david-kim',
    name: "David Kim, MS",
    title: "Bioengineering Research Fellow & Capstone Lead",
    handle: "david-kim-bio",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    location: "Baltimore, MD",
    verifiedCount: 2,
    ceusCompleted: "Active Academic Record",
    verifiedSince: "September 2022",
    bio: "Biomedical engineering graduate with published peer-reviewed research in microfluidic biosensors, clinical trial protocols, and wearable medical diagnostics.",
    credentials: [
      {
        title: "M.S. in Biomedical Engineering",
        issuer: "Johns Hopkins University",
        issueDate: "May 2024",
        expiryDate: "Lifetime",
        id: "JHU-MS-2024",
        verified: true,
        provenance: "Issuer Verified",
        skills: ["Microfluidics", "Biosensor Design", "Statistical Analysis"]
      },
      {
        title: "Good Clinical Practice (GCP) Certification",
        issuer: "CITI Program",
        issueDate: "Sep 2023",
        expiryDate: "Sep 2026",
        id: "CITI-GCP-8841",
        verified: true,
        provenance: "Issuer Verified",
        skills: ["Clinical Protocols", "IRB Compliance", "Human Subject Safety"]
      }
    ],
    projects: [
      {
        title: "Point-of-Care Microfluidic Biosensor Validation",
        category: "Biomedical Engineering",
        certAttached: "M.S. Biomedical Engineering",
        challenge: "Engineer a low-cost microfluidic cartridge to detect sepsis protein biomarkers within 15 minutes of fingerstick blood draw.",
        approach: "Fabricated PDMS micro-channels and integrated optical fluorescence detection module with Arduino telemetry.",
        outcome: "Achieved 98.4% diagnostic sensitivity in preclinical blood plasma assay trials."
      }
    ],
    posters: [
      {
        title: "Microfluidic Plasma Fractionation in Diagnostics",
        conference: "Biomedical Engineering Society (BMES)",
        year: "2024",
        type: "Peer-Reviewed Paper"
      },
      {
        title: "Point-of-Care Sepsis Biomarker Detection Sensors",
        conference: "IEEE Engineering in Medicine and Biology (EMBC)",
        year: "2024",
        type: "Conference Presentation"
      }
    ]
  }
};

const slugAliases: Record<string, string> = {
  'sarah-jenkins-rn': 'sarah-jenkins',
  'nurse-multi': 'sarah-jenkins',
  'elena-flight-lead': 'elena-rodriguez',
  'paramedic-cct': 'elena-rodriguez',
  'marcus-vance': 'marcus-vance',
  'pmp-single': 'marcus-vance',
  'david-kim-bio': 'david-kim',
  'student-research': 'david-kim',
  'alex-chen': 'marcus-vance'
};

import { SEO } from '../components/SEO';

export const PublicPassportDemo: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  const normalizedSlug = slug ? (slugAliases[slug] || slug) : 'sarah-jenkins';
  const profileKey = profilesData[normalizedSlug] ? normalizedSlug : 'sarah-jenkins';
  const profile = profilesData[profileKey];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": profile.name,
      "jobTitle": profile.title,
      "image": profile.avatar,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": profile.location
      },
      "description": profile.bio,
      "hasCredential": profile.credentials.map(c => ({
        "@type": "EducationalOccupationalCredential",
        "name": c.title,
        "credentialCategory": c.provenance,
        "recognizedBy": {
          "@type": "Organization",
          "name": c.issuer
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors">
      <SEO
        title={`${profile.name} — Verified PathPort Record & Portfolio`}
        description={`${profile.title} in ${profile.location}. ${profile.bio}`}
        image={profile.avatar}
        type="profile"
        jsonLd={personJsonLd}
      />
      {/* Top Banner - identical styling to main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 transition-colors select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <Logo size={28} />
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              SIMULATED DEMO PROFILE
            </span>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            <button 
              onClick={() => setQrModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5 text-teal-800 dark:text-teal-400" />
              <span>QR Code</span>
            </button>

            <button 
              onClick={() => setIsBetaModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-700 text-white text-xs font-semibold shadow-2xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Build Yours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Sub-Header: Persona Switcher Bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-3 px-4 transition-colors">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 overflow-x-auto">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 hidden sm:inline">
            Sample Living Portfolios:
          </span>
          <div className="flex items-center gap-2">
            {Object.values(profilesData).map((p) => {
              const isCurrent = p.id === profileKey;
              return (
                <button
                  key={p.id}
                  onClick={() => navigate(`/p/${p.handle}`)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isCurrent
                      ? 'bg-teal-800 text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>{p.name.split(',')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Profile Layout */}
      <main className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Profile Card Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6 transition-colors">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-5">
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="w-20 h-20 rounded-2xl object-cover border-2 border-teal-800 dark:border-teal-400 shadow-xs"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{profile.name}</h1>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    Verified User
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-sm">{profile.title}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 pt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {profile.location}</span>
                  <span>•</span>
                  <span>Member since {profile.verifiedSince}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5 shrink-0">
              <div className="text-slate-600 dark:text-slate-300 flex items-center justify-between gap-6">
                <span>Verified Credentials:</span>
                <strong className="text-slate-900 dark:text-white font-bold">{profile.verifiedCount} Active</strong>
              </div>
              <div className="text-slate-600 dark:text-slate-300 flex items-center justify-between gap-6">
                <span>CE Renewal Status:</span>
                <strong className="text-teal-800 dark:text-teal-400 font-semibold">{profile.ceusCompleted}</strong>
              </div>
              <div className="text-slate-600 dark:text-slate-300 flex items-center justify-between gap-6">
                <span>Live Portfolio Link:</span>
                <strong className="text-teal-800 dark:text-teal-400 font-mono">getpathport.com/p/{profile.handle}</strong>
              </div>
            </div>
          </div>

          <p className="pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* Credentials Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-800 dark:text-teal-400" />
              <span>Verified Credentials & Licenses</span>
            </h2>
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              Source Verified (Demo)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profile.credentials.map((cred, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 flex flex-col justify-between transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                      {cred.provenance}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">#{cred.id}</span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">{cred.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{cred.issuer}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Issued: {cred.issueDate}</span>
                  <span className="font-semibold text-teal-800 dark:text-teal-400">Expires: {cred.expiryDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Presentation className="w-5 h-5 text-teal-800 dark:text-teal-400" />
            <span>Structured Case Studies</span>
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {profile.projects.map((proj, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">{proj.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800">
                      {proj.category}
                    </span>
                    <span className="text-xs text-teal-800 dark:text-teal-300 font-semibold bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                      Backed by: {proj.certAttached}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">Challenge & Context:</strong>
                    <span>{proj.challenge}</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">Approach Applied:</strong>
                    <span>{proj.approach}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80 text-xs text-emerald-900 dark:text-emerald-300 font-medium">
                  <strong>Measurable Outcome:</strong> {proj.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications & Speaking Engagements Section */}
        {profile.posters && profile.posters.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-800 dark:text-teal-400" />
              <span>Publications & Speaking Engagements</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.posters.map((poster, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5 transition-colors"
                >
                  <span className="text-[10px] font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider">
                    {poster.type}
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {poster.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {poster.conference} • {poster.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* QR Modal */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-sm w-full text-center space-y-4 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Scan Verified Record</h3>
            <div className="flex justify-center py-2 bg-white rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-inner">
              <BrandedQRCode 
                value={`https://getpathport.com/p/${profile.handle}`} 
                size={200}
                showLogo={true}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">getpathport.com/p/{profile.handle}</p>
            <button
              onClick={() => setQrModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Beta Modal */}
      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        source="public_portfolio_demo"
      />

      <Footer />
    </div>
  );
};

export default PublicPassportDemo;
