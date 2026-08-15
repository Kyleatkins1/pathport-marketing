import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/90 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs select-none transition-colors">
      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Thesis (span 4) */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <Logo size={28} />
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
              PathPort is the individual's portable, sovereign living identity and evidence record. Maintain yourself once, present yourself many ways with tailored portfolios, structured case studies, and automated renewals.
            </p>
            <div className="space-y-2 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-medium text-emerald-800 dark:text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Privacy-by-Default Architecture</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-teal-800 dark:text-teal-400">
                <Lock className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400 shrink-0" />
                <span>Scoped Consent & 6-Level Provenance</span>
              </div>
            </div>
          </div>

          {/* Col 2: For Individuals (span 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              For Individuals
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/for/nurses" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Nurses & Healthcare</Link></li>
              <li><Link to="/for/paramedics" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Paramedics & EMS</Link></li>
              <li><Link to="/for/project-managers" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Project & Technical Leads</Link></li>
              <li><Link to="/for/students" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Students & Early Career</Link></li>
              <li><a href="/#features" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Structured Case Studies</a></li>
              <li><a href="/#features" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">CE Renewal Engine</a></li>
            </ul>
          </div>

          {/* Col 3: For Organizations & Boards (span 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              For Organizations & Boards
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/for/enterprise" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Workforce Teams & Radar</Link></li>
              <li><Link to="/for/board-certifications" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Certification Boards</Link></li>
              <li><a href="/#portfolios" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Tailored Portfolio Views</a></li>
              <li><a href="/#features" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Deterministic Path Scoring</a></li>
              <li><Link to="/p/sarah-jenkins-rn" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Live Verified Portfolio Demo</Link></li>
            </ul>
          </div>

          {/* Col 4: Trust & Legal (span 2) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Security Whitepaper</Link></li>
              <li><a href="/#pricing" className="text-slate-600 dark:text-slate-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">Beta Tiers & Pricing</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Audiences, VTS Copyright & System Status */}
      <div className="border-t border-slate-100 dark:border-slate-800/80 py-6 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 dark:text-slate-400 gap-4">
          {/* VTS Attribution & Copyright */}
          <div className="flex items-center gap-1.5 flex-wrap text-center md:text-left">
            <span>A product of</span>
            <a 
              href="https://veritastech.io" 
              target="_blank" 
              rel="noreferrer" 
              className="text-teal-800 dark:text-teal-400 font-semibold hover:underline"
            >
              Veritas Technology Solutions, LLC
            </a>
            <span>• Delaware, USA • © {new Date().getFullYear()} All rights reserved.</span>
          </div>

          {/* Audience Pillars Bar */}
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider flex-wrap justify-center">
            <span>For Individuals</span>
            <span>•</span>
            <span>For Organizations</span>
            <span>•</span>
            <span>For Credentialing Bodies</span>
            <span>•</span>
            <span className="text-teal-800 dark:text-teal-400">For Everyone</span>
          </div>

          {/* Operational Status */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-600 dark:text-slate-300 font-medium">Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
