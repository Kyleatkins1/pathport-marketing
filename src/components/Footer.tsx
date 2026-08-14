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
              PathPort is the universal professional identity platform. Maintain yourself once, present yourself many ways with structured case studies, tailored portfolios, and automated credential renewals.
            </p>
            <p className="text-xs text-slate-500 font-sans">
              PathPort is a product of <a href="https://veritastech.io" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">Veritas Technology Solutions, LLC</a>. © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Col 3: Ecosystem Portals */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Ecosystem Portals</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://app.getpathport.com" className="hover:text-teal-300 transition-colors">Individual App (app.getpathport.com)</a></li>
              <li><a href="https://teams.getpathport.com" className="hover:text-teal-300 transition-colors">PathPort Teams (teams.getpathport.com)</a></li>
              <li><a href="https://certify.getpathport.com" className="hover:text-teal-300 transition-colors">PathPort Certify (certify.getpathport.com)</a></li>
              <li><Link to="/for/nurses" className="hover:text-teal-300 transition-colors">For Nurses & Healthcare</Link></li>
              <li><Link to="/for/paramedics" className="hover:text-teal-300 transition-colors">For Paramedics & EMS</Link></li>
              <li><Link to="/for/project-managers" className="hover:text-teal-300 transition-colors">For Engineers & PMs</Link></li>
            </ul>
          </div>

          {/* Col 4: Platform Features */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/#features" className="hover:text-teal-300 transition-colors">Structured Case Studies</a></li>
              <li><a href="/#features" className="hover:text-teal-300 transition-colors">Tailored Portfolios</a></li>
              <li><a href="/#features" className="hover:text-teal-300 transition-colors">Universal CEU Renewal Engine</a></li>
              <li><a href="/#features" className="hover:text-teal-300 transition-colors">Deterministic Path Advisor</a></li>
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
              <li><Link to="/security" className="hover:text-teal-300 transition-colors">Security & RLS Overview</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>Built with enterprise security, RLS privacy firewalls, and 6-level provenance.</p>
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
