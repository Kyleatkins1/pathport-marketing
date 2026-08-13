import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1 & 2: Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <Logo size={36} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              PathPort is the universal credential passport. Consolidate certifications, track CEU state renewals, and showcase verified digital portfolios across any industry.
            </p>
            <p className="text-xs text-slate-500 font-sans">
              PathPort is a product of <a href="https://veritastech.io" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">Veritas Technology Solutions, LLC</a>. © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Col 3: Solutions by Profession */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Funnels by Profession</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/for/nurses" className="hover:text-teal-300 transition-colors">Nurses & Healthcare</Link></li>
              <li><Link to="/for/paramedics" className="hover:text-teal-300 transition-colors">Paramedics & EMS</Link></li>
              <li><Link to="/for/project-managers" className="hover:text-teal-300 transition-colors">Project Managers & Tech</Link></li>
              <li><Link to="/for/board-certifications" className="hover:text-teal-300 transition-colors">Board Certifications</Link></li>
              <li><Link to="/for/students" className="hover:text-teal-300 transition-colors">Students (.edu Free)</Link></li>
              <li><Link to="/for/enterprise" className="hover:text-teal-300 transition-colors">For Organizations</Link></li>
            </ul>
          </div>

          {/* Col 4: Platform Features */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/#vault" className="hover:text-teal-300 transition-colors">Credential Vault</a></li>
              <li><a href="/#ceu-engine" className="hover:text-teal-300 transition-colors">CEU Renewal Engine</a></li>
              <li><a href="/#features" className="hover:text-teal-300 transition-colors">AI Resume & Cert Parser</a></li>
              <li><a href="/#features" className="hover:text-teal-300 transition-colors">Posters & Project Proof</a></li>
              <li><a href="/#pricing" className="hover:text-teal-300 transition-colors">Pricing & Founding Offer</a></li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Company & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://veritastech.io" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition-colors">Veritas Tech Solutions</a></li>
              <li><Link to="/privacy" className="hover:text-teal-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-teal-300 transition-colors">Terms of Service & Mobile TOS</Link></li>
              <li><Link to="/security" className="hover:text-teal-300 transition-colors">Security Overview</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>Designed for security, compliance, and career growth.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-sans font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
