import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../config/images';

export default function FloatingActions() {
  const whatsappNumber = '919495353533';
  const whatsappMessage = encodeURIComponent('Hello Green Ray Solar Solutions! I would like to inquire about a solar rooftop system and Free Energy Audit.');

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Action */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300 no-underline font-bold text-xs sm:text-sm group"
        aria-label="Chat with Green Ray Solar on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Phone Call Action (Mobile optimized) */}
      <a
        href={`tel:${COMPANY_INFO.phones[0]}`}
        className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-forest-900 text-gold-400 shadow-xl border border-gold-500/30 hover:bg-forest-800 transition-all no-underline"
        aria-label="Call Green Ray Solar Solutions"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
