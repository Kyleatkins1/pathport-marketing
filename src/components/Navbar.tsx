import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Logo size={38} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-primary-glow transition-colors">Features</a>
            <a href="#vault" className="hover:text-primary-glow transition-colors">Credential Vault</a>
            <a href="#ceu-engine" className="hover:text-primary-glow transition-colors">CEU Renewal Engine</a>
            <a href="#organizations" className="hover:text-primary-glow transition-colors">For Orgs</a>
            <a href="#pricing" className="hover:text-primary-glow transition-colors">Pricing</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://app.getpathport.com/auth" 
              className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              Sign In
            </a>
            <a 
              href="https://app.getpathport.com/auth?signup=true" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm shadow-glowTeal hover:opacity-95 transition-all hover:scale-[1.02] border border-teal-400/30"
            >
              <span>Build Your PathPort</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-slate-800 px-4 pt-4 pb-6 space-y-4">
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-primary-glow font-medium py-2"
          >
            Features
          </a>
          <a 
            href="#vault" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-primary-glow font-medium py-2"
          >
            Credential Vault
          </a>
          <a 
            href="#ceu-engine" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-primary-glow font-medium py-2"
          >
            CEU Renewal Engine
          </a>
          <a 
            href="#organizations" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-primary-glow font-medium py-2"
          >
            For Orgs
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-primary-glow font-medium py-2"
          >
            Pricing
          </a>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a 
              href="https://app.getpathport.com/auth" 
              className="w-full text-center py-2.5 text-slate-300 font-medium hover:text-white"
            >
              Sign In
            </a>
            <a 
              href="https://app.getpathport.com/auth?signup=true" 
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium shadow-glowTeal"
            >
              Build Your PathPort
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
