import React, { useState } from 'react';
import { Sun, Plus, Minus, ArrowRight, HelpCircle, Phone, ShieldCheck } from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../config/images';

export default function FAQPage({ onOpenAuditModal, setActivePage }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-forest-950 text-cream-50 py-16 lg:py-20 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-extrabold uppercase tracking-widest">
              <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
              <span>Questions & Answers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-cream-50 leading-tight">
              Frequently asked solar questions.
            </h1>
            <p className="text-base sm:text-lg text-cream-200/80 leading-relaxed">
              Clear, transparent answers regarding solar costs, KSEB net metering, roof fitting, maintenance and subsidies in Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={'bg-cream-50 rounded-2xl border transition-all duration-300 overflow-hidden ' + (
                  isOpen ? 'border-forest-900/30 shadow-md' : 'border-forest-900/10'
                )}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer bg-transparent border-none"
                >
                  <span className="text-base sm:text-lg font-bold text-forest-950 font-display">
                    {faq.question}
                  </span>
                  <div className={'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ' + (
                    isOpen ? 'bg-forest-900 text-gold-400' : 'bg-forest-900/5 text-forest-900'
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed border-t border-forest-900/5 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-8 rounded-3xl bg-forest-900 text-cream-50 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-forest-800">
          <div>
            <h3 className="text-xl font-bold font-display text-cream-50">Have a specific question about your roof?</h3>
            <p className="text-xs text-cream-200/80 mt-1">Our technical team will provide honest evaluation without obligation.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={'tel:' + COMPANY_INFO.phones[0]}
              className="btn-primary text-xs font-bold no-underline"
            >
              <Phone className="w-3.5 h-3.5 mr-1 inline" />
              <span>Call {COMPANY_INFO.phones[0]}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
