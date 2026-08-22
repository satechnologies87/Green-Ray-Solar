import React from 'react';
import { Sun, Check, ArrowRight, ShieldCheck, Wrench, FileText, Zap, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import SolarCalculator from '../components/SolarCalculator';
import { SOLAR_SERVICES, CORE_BENEFITS, COMPANY_INFO } from '../config/images';

export default function ServicesPage({ onOpenAuditModal, setActivePage }) {
  return (
    <div className="flex flex-col min-h-screen bg-cream-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-forest-950 text-cream-50 py-16 lg:py-20 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-extrabold uppercase tracking-widest">
              <Wrench className="w-3.5 h-3.5 text-gold-400" />
              <span>Full Lifecycle Solar Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-cream-50 leading-tight">
              Complete solar support. From assessment to after-sales care.
            </h1>
            <p className="text-base sm:text-lg text-cream-200/80 leading-relaxed">
              We take care of every technical phase so your transition to renewable solar energy in Kerala is seamless, durable, and highly cost-effective.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-12">
          <div className="section-tag"><span>Our Capabilities</span></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-950 font-display tracking-tight">
            Seven core service commitments.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLAR_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="editorial-card bg-cream-50 rounded-3xl overflow-hidden border border-forest-900/10 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
                  <ImageSlot
                    src={srv.imageSlot.src}
                    alt={srv.imageSlot.alt}
                    aspectRatio="aspect-[16/10]"
                    className="w-full h-full"
                    imageClassName="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="w-8 h-8 rounded-full bg-forest-950/85 backdrop-blur-md text-gold-400 flex items-center justify-center font-mono font-bold text-xs border border-gold-400/20">
                      {srv.number}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-600 block mb-1">
                    {srv.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-forest-950 font-display mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-charcoal-700 leading-relaxed mb-3">
                    {srv.description}
                  </p>
                  <p className="text-[11px] text-charcoal-600 leading-relaxed bg-cream-100 p-3 rounded-xl border border-forest-900/5">
                    {srv.details}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenAuditModal}
                  className="btn-forest w-full text-xs py-2.5 justify-center font-bold"
                >
                  <span>Book {srv.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full 10 Core Benefits Section */}
      <section className="bg-cream-50 py-20 border-y border-forest-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="section-tag"><span>Complete Value</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight">
              All 10 Core Benefits of Green Ray Solar.
            </h2>
            <p className="text-base text-charcoal-700 mt-3">
              Real economic, technical, and environmental advantages engineered into every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_BENEFITS.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-cream-100 rounded-2xl p-6 border border-forest-900/10 flex flex-col justify-between editorial-card"
              >
                <div>
                  <span className="text-xs font-mono font-extrabold text-gold-600 block mb-2">{benefit.id}</span>
                  <h3 className="text-lg font-bold text-forest-950 font-display mb-2">{benefit.title}</h3>
                  <p className="text-xs text-charcoal-700 leading-relaxed">{benefit.description}</p>
                </div>
                <div className="pt-4 mt-3 border-t border-forest-900/5 flex items-center justify-between text-xs font-bold text-forest-900">
                  <span className="text-gold-600">{benefit.highlight}</span>
                  <CheckCircle2 className="w-4 h-4 text-forest-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Calculator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolarCalculator onOpenAuditModal={onOpenAuditModal} />
        </div>
      </section>

    </div>
  );
}
