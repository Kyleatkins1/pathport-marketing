import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Stethoscope,
  Flame,
  Briefcase,
  GraduationCap,
  Building2,
  Award,
  Calculator,
  Scale,
  LogIn,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { triggerLeadModal } from '../lib/modal-events';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenWaitlist?: (persona?: string) => void;
}

const APP_SIGN_IN_URL = 'https://app.getpathport.com/auth';

const NAV_LINKS = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'MyPortfolio', href: '/#myportfolio' },
  { label: 'MyPath', href: '/#mypath' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'For Organizations', href: '/#organizations' },
];

const AUDIENCE_LINKS = [
  {
    label: 'For Nurses (RN / APRN)',
    sub: '50-state CEU tracking, NLC compact & ANCC/AACN renewals',
    href: '/for/nurses',
    icon: Stethoscope,
    color: 'text-[#0D5F57] bg-teal-50',
  },
  {
    label: 'For EMS & Paramedics',
    sub: 'NREMT 60-hr NCCP bucket tracking & state reciprocity',
    href: '/for/paramedics',
    icon: Flame,
    color: 'text-orange-600 bg-orange-50',
  },
  {
    label: 'For Project Managers',
    sub: 'PMI Talent Triangle PDUs & verified delivery portfolios',
    href: '/for/project-managers',
    icon: Briefcase,
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    label: 'For Students & Graduates',
    sub: 'Keep clinical rotations, capstones & certs after graduation',
    href: '/for/students',
    icon: GraduationCap,
    color: 'text-purple-600 bg-purple-50',
  },
  {
    label: 'PathPort Workplace (2027)',
    sub: 'Permissioned workforce compliance & readiness',
    href: '/for/enterprise',
    icon: Building2,
    color: 'text-slate-700 bg-slate-100',
  },
  {
    label: 'PathPort Certify (2027)',
    sub: 'Credentialing body & certifying board operations',
    href: '/for/board-certifications',
    icon: Award,
    color: 'text-amber-700 bg-amber-50',
  },
];

const TOOL_LINKS = [
  {
    label: '50-State License & Board Renewal Calculator',
    sub: 'Instant CEU & mandatory topic lookup for all 50 states + national boards',
    href: '/tools/renewal-calculator',
    icon: Calculator,
  },
  {
    label: 'PathPort vs. CE Broker',
    sub: 'See how an individual-owned career record compares to state reporting silos',
    href: '/vs/ce-broker',
    icon: Scale,
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleOpenCTA = (persona?: string) => {
    if (onOpenWaitlist) {
      onOpenWaitlist(persona);
    } else {
      triggerLeadModal(persona);
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/90 dark:border-slate-800 transition-all duration-300 ${
        scrolled ? 'shadow-sm py-3' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <Logo size={30} />
        </Link>

        {/* Desktop Nav (`VER-240` Launch Hierarchy) */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#0D5F57] dark:hover:text-teal-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Solutions & Free Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#0D5F57] dark:hover:text-teal-400 transition-colors py-1 cursor-pointer"
            >
              <span>Solutions & Tools</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180 text-[#0D5F57] dark:text-teal-400' : ''
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full right-0 pt-2 w-[540px] z-50">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
                    By Profession & Ecosystem
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 mb-3">
                    {AUDIENCE_LINKS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${item.color}`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#0D5F57] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-slate-500 leading-snug mt-0.5">
                              {item.sub}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="border-t border-slate-100 pt-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-1.5">
                      Free Tools & Comparisons
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {TOOL_LINKS.map((tool) => {
                        const Icon = tool.icon;
                        return (
                          <Link
                            key={tool.href}
                            to={tool.href}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50/60 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0D5F57] flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#0D5F57]">
                                {tool.label}
                              </div>
                              <div className="text-xs text-slate-500">{tool.sub}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions: Sign In + Get Started (`VER-240`) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={APP_SIGN_IN_URL}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0D5F57] dark:hover:text-teal-400 hover:bg-slate-100/80 dark:hover:bg-slate-800 transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </a>
          <button
            type="button"
            onClick={() => handleOpenCTA()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0D5F57] hover:bg-[#094842] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-2 text-base font-semibold text-slate-800 hover:text-[#0D5F57]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
              Solutions & Free Tools
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {AUDIENCE_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50"
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.sub}</div>
                    </div>
                  </Link>
                );
              })}
              {TOOL_LINKS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50/50 hover:bg-emerald-50"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#0D5F57] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{tool.label}</div>
                      <div className="text-xs text-slate-500">{tool.sub}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={APP_SIGN_IN_URL}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In to PathPort</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenCTA();
              }}
              className="w-full py-3 px-4 rounded-xl text-center font-semibold text-white bg-[#0D5F57] hover:bg-[#094842] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
