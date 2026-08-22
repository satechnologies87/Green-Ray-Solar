import React from 'react';
import { X } from 'lucide-react';

const PookalamSVG = () => (
  <svg className="w-20 h-20 text-gold-400 animate-spin-slow opacity-15" viewBox="0 0 100 100" fill="currentColor">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
    {Array.from({ length: 8 }).map((_, i) => (
      <path
        key={i}
        d="M 50 50 Q 35 25 50 10 Q 65 25 50 50"
        transform={`rotate(${i * 45} 50 50)`}
      />
    ))}
    {Array.from({ length: 8 }).map((_, i) => (
      <path
        key={i}
        d="M 50 50 Q 42 32 50 20 Q 58 32 50 50"
        transform={`rotate(${i * 45 + 22.5} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="8" className="text-amber-500" />
  </svg>
);

export default function OnamBanner({ onClose }) {
  return (
    <div className="fixed top-0 inset-x-0 h-24 sm:h-16 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 border-b-2 border-gold-400 z-50 overflow-hidden flex items-center shadow-lg animate-fadeIn">
      {/* Decorative flower background left */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
        <PookalamSVG />
      </div>
      {/* Decorative flower background right */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-center">
        <PookalamSVG />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
          {/* Maveli Avatar */}
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full blur opacity-75 animate-pulse"></div>
            <img
              src="/images/maveli.png"
              alt="Maveli"
              className="relative w-12 h-12 sm:w-11 sm:h-11 rounded-full border border-gold-400 object-cover bg-cream-50 shadow-inner"
            />
          </div>

          {/* Greeting Text */}
          <div className="flex flex-col text-left justify-center min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm sm:text-base font-extrabold text-gold-400 tracking-wide font-display">
                ഹൃദയം നിറഞ്ഞ ഓണാശംസകൾ! 🌼🌿
              </span>
              <span className="hidden sm:inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
                Celebrate onam with green ray solar
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-cream-100 font-medium leading-normal line-clamp-2 sm:line-clamp-1 mt-0.5">
              ഐശ്വര്യവും സമൃദ്ധിയും സന്തോഷവും നിറഞ്ഞ ഒരു പൊന്നോണം നിങ്ങൾക്കും കുടുംബത്തിനും ആശംസിക്കുന്നു.
            </p>
          </div>
        </div>

        {/* Action buttons (Close) */}
        <button
          onClick={onClose}
          className="p-1.5 sm:p-2 rounded-lg text-cream-300 hover:text-white hover:bg-forest-900/50 transition-colors border-none bg-transparent cursor-pointer flex-shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-5 h-5 sm:w-4.5 sm:h-4.5" />
        </button>
      </div>
    </div>
  );
}
