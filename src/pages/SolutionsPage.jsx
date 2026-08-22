import React from 'react';
import { Sun, Check, ArrowRight } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import { SOLAR_SOLUTIONS } from '../config/images';

export default function SolutionsPage({ onOpenAuditModal, setActivePage }) {
  return (
    <div className="flex flex-col min-h-screen bg-cream-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-forest-950 text-cream-50 py-16 lg:py-20 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-extrabold uppercase tracking-widest">
              <Sun className="w-3.5 h-3.5 text-gold-400" />
              <span>Engineered Solar Systems</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-cream-50 leading-tight">
              Solar solutions built around your energy needs.
            </h1>
            <p className="text-base sm:text-lg text-cream-200/80 leading-relaxed">
              From homes and businesses to on-grid, off-grid and hybrid architectures designed for Kerala's specific climate and roof layouts.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Alternating Solution Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {SOLAR_SOLUTIONS.map((sol, index) => {
          const isEven = index % 2 === 1;
          return (
            <section
              key={sol.id}
              id={sol.id}
              className="bg-cream-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-forest-900/10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Image (Alternating Left/Right) */}
                <div className={'lg:col-span-6 ' + (isEven ? 'order-1 lg:order-2' : 'order-1')}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest-950 shadow-md">
                    <ImageSlot
                      src={sol.imageSlot.src}
                      alt={sol.imageSlot.alt}
                      aspectRatio="aspect-[4/3]"
                      className="w-full h-full"
                      imageClassName="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-forest-950/85 text-gold-400 backdrop-blur-md">
                        {'0' + (index + 1) + ' — ' + sol.id.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content (Alternating Right/Left) */}
                <div className={'lg:col-span-6 space-y-6 ' + (isEven ? 'order-2 lg:order-1' : 'order-2')}>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 block mb-1">
                      {sol.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-950 font-display tracking-tight">
                      {sol.name}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-cream-100 border border-forest-900/5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest-900 block mb-1">
                      Ideal Applications:
                    </span>
                    <span className="text-xs text-charcoal-800 font-medium">
                      {sol.idealFor}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-forest-950 mb-3">
                      Key Engineering Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {sol.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-forest-950">
                          <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={onOpenAuditModal}
                      className="btn-forest text-xs sm:text-sm font-bold justify-center"
                    >
                      <span>Get a Quote for {sol.name.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setActivePage('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-full text-xs font-bold text-forest-900 bg-forest-900/5 hover:bg-forest-900/10 transition-colors border border-forest-900/10 cursor-pointer"
                    >
                      Ask a Technical Question
                    </button>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
}
