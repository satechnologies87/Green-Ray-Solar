import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Sun, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../config/images';

export default function Footer({ setActivePage, onOpenAuditModal }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-cream-100 pt-16 pb-12 border-t border-forest-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-forest-900/80">
          
          {/* Col 1: Brand & Positioning */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-extrabold tracking-tight text-cream-50 font-display uppercase">
                GREEN RAY
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500 inline-block shadow-sm"></span>
            </div>
            <p className="text-sm text-cream-200/80 leading-relaxed">
              {COMPANY_INFO.statement}
            </p>
            <p className="text-xs text-cream-300/60 leading-relaxed">
              Reliable rooftop and commercial solar engineering for homes, villas, and businesses across Kerala. From site audit to KSEB net metering and lifetime AMC support.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 cursor-pointer bg-transparent border-none p-0 transition-colors"
              >
                <span>Request a Free Energy Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Company Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-5 font-display">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Projects & Installations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Solar FAQ & KSEB Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Solar Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-5 font-display">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Residential Solar Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Commercial Solar Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  On-Grid Solar with Net Metering
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Off-Grid Standalone Power
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="text-cream-200/80 hover:text-gold-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Hybrid Solar Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Kerala Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-5 font-display">
              Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="flex items-center gap-2.5 text-cream-100 hover:text-gold-400 transition-colors no-underline font-medium"
              >
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phones[1]}`}
                className="flex items-center gap-2.5 text-cream-100 hover:text-gold-400 transition-colors no-underline font-medium"
              >
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{COMPANY_INFO.phones[1]}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-cream-200/80 hover:text-gold-400 transition-colors no-underline text-xs break-all"
              >
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-cream-200/80 text-xs leading-relaxed pt-1">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/50">
          <p>© 2026 Green Ray Solar Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Ettumanoor, Kottayam, Kerala</span>
            <span>•</span>
            <span>100+ Completed Projects</span>
            <span>•</span>
            <span>Lifetime AMC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
