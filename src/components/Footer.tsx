import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B132B] text-slate-400 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-slate-800/80">
          {/* Brand Column (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src="/logo-white.png"
                alt="PathPort Logo"
                width="32"
                height="32"
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Path<span className="text-[#2DD4BF]">Port</span>
              </span>
            </Link>
            <p className="text-sm font-semibold text-teal-300">
              Own your journey. Shape what’s next.
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The private, portable credential and career record built for every industry. Maintain
              your record once—use it throughout your career.
            </p>
            <div className="pt-1">
              <a
                href="mailto:hello@getpathport.com"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#2DD4BF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span>hello@getpathport.com</span>
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/#how-it-works" className="hover:text-[#2DD4BF] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#myportfolio" className="hover:text-[#2DD4BF] transition-colors">
                  MyPortfolio
                </a>
              </li>
              <li>
                <a href="/#mypath" className="hover:text-[#2DD4BF] transition-colors">
                  MyPath
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-[#2DD4BF] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://app.getpathport.com/auth"
                  className="hover:text-[#2DD4BF] transition-colors font-semibold text-slate-300"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/for/project-managers" className="hover:text-[#2DD4BF] transition-colors">
                  Project & Tech Leaders
                </Link>
              </li>
              <li>
                <Link to="/for/nurses" className="hover:text-[#2DD4BF] transition-colors">
                  Nurses & Healthcare
                </Link>
              </li>
              <li>
                <Link to="/for/paramedics" className="hover:text-[#2DD4BF] transition-colors">
                  EMS & Aviation
                </Link>
              </li>
              <li>
                <Link to="/for/students" className="hover:text-[#2DD4BF] transition-colors">
                  Students & Graduates
                </Link>
              </li>
              <li>
                <Link to="/for/enterprise" className="hover:text-[#2DD4BF] transition-colors">
                  PathPort Workplace (2027)
                </Link>
              </li>
              <li>
                <Link
                  to="/for/board-certifications"
                  className="hover:text-[#2DD4BF] transition-colors"
                >
                  PathPort Certify (2027)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              Resources & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/tools/renewal-calculator"
                  className="hover:text-[#2DD4BF] transition-colors"
                >
                  50-State Renewal Calculator
                </Link>
              </li>
              <li>
                <Link to="/vs/ce-broker" className="hover:text-[#2DD4BF] transition-colors">
                  PathPort vs. CE Broker
                </Link>
              </li>
              <li>
                <Link to="/p/sarah-jenkins-rn" className="hover:text-[#2DD4BF] transition-colors">
                  Sample MyPortfolio
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-[#2DD4BF] transition-colors">
                  Security & Provenance
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#2DD4BF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#2DD4BF] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()}{' '}
            <a
              href="https://veritastech.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#2DD4BF] underline underline-offset-2 transition-colors"
            >
              Veritas Technology Solutions, LLC
            </a>
            . All rights reserved.
          </p>
          <p>Individual-owned credentials and career records across every industry.</p>
        </div>
      </div>
    </footer>
  );
};
