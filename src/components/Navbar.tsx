import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';
import { 
  Menu, X, ChevronDown, ArrowRight, Stethoscope, 
  Activity, Briefcase, GraduationCap, Building2, 
  Award, Sun, Moon 
} from 'lucide-react';
import { BetaRegistrationModal } from './BetaRegistrationModal';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const audienceLinks = [
    { name: 'Nurses & Healthcare', path: '/for/nurses', icon: Stethoscope, desc: 'Clinical quality & CE tracking' },
    { name: 'Paramedics & EMS', path: '/for/paramedics', icon: Activity, desc: 'NCCP recert & critical care' },
    { name: 'Project & Technical Leads', path: '/for/project-managers', icon: Briefcase, desc: 'Delivery case studies & 60 PDUs' },
    { name: 'Students & Early Career', path: '/for/students', icon: GraduationCap, desc: 'Capstone evidence & degrees' },
    { name: 'Enterprise & Teams', path: '/for/enterprise', icon: Building2, desc: 'Workforce compliance radar' },
    { name: 'Specialty Certification Boards', path: '/for/board-certifications', icon: Award, desc: 'Review queues & CE audits' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 transition-colors select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand Identity */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <Logo size={28} />
            </Link>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <a href="/#features" className="hover:text-teal-800 dark:hover:text-teal-400 transition-colors">
                The Living Record
              </a>
              
              <a href="/#why" className="hover:text-teal-800 dark:hover:text-teal-400 transition-colors">
                Beyond the Résumé
              </a>

              {/* Who It's For Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 hover:text-teal-800 dark:hover:text-teal-400 transition-colors cursor-pointer py-2"
                >
                  <span>Who It's For</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-teal-800 dark:text-teal-400' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                    <div className="space-y-1">
                      {audienceLinks.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 flex items-center justify-center shrink-0 group-hover:bg-teal-800 group-hover:text-white transition-colors">
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-teal-800 dark:group-hover:text-teal-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <a href="/#pricing" className="hover:text-teal-800 dark:hover:text-teal-400 transition-colors">
                Beta Access
              </a>
            </nav>

            {/* Right: CTA Actions & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Dark/Light Mode"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-700 text-white text-xs font-semibold shadow-2xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Register for Beta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger & Theme Toggle Button */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-4 pb-6 space-y-4 shadow-lg">
            <div className="space-y-1">
              <a
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                The Living Record
              </a>
              <a
                href="/#why"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Beyond the Résumé
              </a>
              <a
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Beta Access
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Who It's For
              </div>
              <div className="grid grid-cols-1 gap-1">
                {audienceLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBetaModalOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-teal-800 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Register for Beta Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Beta Registration Modal */}
      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        source="navbar_button"
      />
    </>
  );
};

export default Navbar;
