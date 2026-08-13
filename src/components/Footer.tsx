import React from 'react';
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
            <p className="text-xs text-slate-500 font-mono">
              © {new Date().getFullYear()} PathPort by Veritas Technologies. All rights reserved.
            </p>
          </div>

          {/* Col 3: Product */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#vault" className="hover:text-primary-glow transition-colors">Credential Vault</a></li>
              <li><a href="#ceu-engine" className="hover:text-primary-glow transition-colors">CEU Renewal Engine</a></li>
              <li><a href="#features" className="hover:text-primary-glow transition-colors">AI Resume Parser</a></li>
              <li><a href="#portfolio-demo" className="hover:text-primary-glow transition-colors">Digital Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-primary-glow transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Col 4: Integrations */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Integrations</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">Credly & Open Badges</span></li>
              <li><span className="text-slate-400">PMI® Project Management</span></li>
              <li><span className="text-slate-400">NYS & State Nursing Boards</span></li>
              <li><span className="text-slate-400">NREMT & Paramedics</span></li>
              <li><span className="text-slate-400">AWS & Cloud Certs</span></li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Company & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://veritastech.io" target="_blank" rel="noreferrer" className="hover:text-primary-glow transition-colors">Veritas Technologies</a></li>
              <li><a href="mailto:support@pathport.app" className="hover:text-primary-glow transition-colors">Support & Security</a></li>
              <li><a href="https://app.pathport.app/privacy" className="hover:text-primary-glow transition-colors">Privacy Policy</a></li>
              <li><a href="https://app.pathport.app/terms" className="hover:text-primary-glow transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>Designed for security, compliance, and career growth.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
