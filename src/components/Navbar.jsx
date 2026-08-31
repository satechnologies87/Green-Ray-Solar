import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Sun, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../config/images';

export default function Navbar({ activePage, setActivePage, onOpenAuditModal, isOnamBannerVisible }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'photos', label: 'Photos' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 transition-all duration-300 ${
          isOnamBannerVisible ? 'top-24 sm:top-16' : 'top-0'
        } ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm py-3 border-b border-forest-900/10'
            : 'bg-cream-50/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left group bg-transparent border-none cursor-pointer"
            aria-label="Green Ray Solar Solutions Home"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-forest-950 font-display uppercase">
                GREEN RAY
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500 inline-block shadow-sm group-hover:scale-125 transition-transform duration-300"></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg cursor-pointer bg-transparent border-none ${
                    isActive
                      ? 'text-forest-950 font-bold'
                      : 'text-charcoal-700 hover:text-forest-950 hover:bg-forest-900/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-3.5 h-0.5 bg-forest-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAuditModal}
              className="btn-forest text-xs sm:text-sm font-bold shadow-sm flex items-center gap-2"
            >
              <span>Get a Free Energy Audit</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAuditModal}
              className="sm:hidden px-3 py-1.5 text-xs font-bold bg-forest-900 text-cream-50 rounded-full flex items-center gap-1"
            >
              <span>Free Audit</span>
              <ArrowRight className="w-3 h-3 text-gold-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-forest-950 hover:bg-forest-900/10 transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-40 lg:hidden bg-forest-950/98 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn transition-all duration-300 ${isOnamBannerVisible ? 'pt-44' : 'pt-20'}`}>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-xl font-bold py-3 px-4 rounded-xl transition-all cursor-pointer border-none ${
                    isActive
                      ? 'bg-gold-500 text-forest-950 pl-6'
                      : 'text-cream-100 hover:text-gold-400 hover:bg-forest-900/50 bg-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-forest-800/80 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="btn-primary w-full py-3.5 text-base justify-center font-bold"
            >
              <span>Book My Free Energy Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between text-xs text-cream-200/80 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="flex items-center gap-1.5 text-gold-400 font-semibold no-underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>
              <span className="text-cream-300/60">•</span>
              <span>{COMPANY_INFO.address.split(',')[0]}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
