import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Features", target: "features" },
    { name: "Case Studies", target: "features" },
    { name: "For Employers", target: "ecosystem" },
    { name: "For Certifying Bodies", target: "ecosystem" },
    { name: "Pricing", target: "pricing" }
  ];

  const handleNavClick = (targetId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Navigate to homepage first, then scroll
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, smooth scroll directly
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid: 3-column layout ensures nav links are mathematically centered in the middle */}
        <div className="grid grid-cols-12 items-center h-20">
          
          {/* Col 1: Logo (Left) */}
          <div className="col-span-6 md:col-span-3 flex items-center justify-start">
            <Link to="/" className="flex items-center gap-2">
              <Logo size={38} />
            </Link>
          </div>

          {/* Col 2: Nav Links (Centered) */}
          <nav className="hidden md:flex col-span-6 items-center justify-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link, idx) => (
              <a 
                key={idx}
                href={`/#${link.target}`}
                onClick={(e) => handleNavClick(link.target, e)}
                className="hover:text-teal-300 transition-colors py-1 relative group text-nowrap"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Col 3: Action Buttons (Right) */}
          <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-3">
            <a 
              href="https://app.getpathport.com/auth" 
              className="hidden sm:inline-flex text-sm font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-lg transition-colors"
            >
              Sign In
            </a>
            <a 
              href="https://app.getpathport.com/auth?signup=true" 
              className="hidden md:inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-xs sm:text-sm shadow-glowTeal hover:opacity-95 transition-all hover:scale-[1.02] border border-teal-400/30"
            >
              <span>Build PathPort</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-slate-800 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link, idx) => (
            <a 
              key={idx}
              href={`/#${link.target}`}
              onClick={(e) => handleNavClick(link.target, e)}
              className="block text-slate-300 hover:text-teal-300 font-medium py-2 border-b border-slate-800/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a 
              href="https://app.getpathport.com/auth" 
              className="w-full text-center py-2.5 text-slate-300 font-medium hover:text-white rounded-xl bg-slate-900 border border-slate-800"
            >
              Sign In
            </a>
            <a 
              href="https://app.getpathport.com/auth?signup=true" 
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-sm shadow-glowTeal"
            >
              Build Your PathPort Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
