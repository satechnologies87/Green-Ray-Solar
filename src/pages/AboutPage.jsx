import React from 'react';
import { Sun, Check, ArrowRight, ShieldCheck, Award, Heart, Leaf, Users, Clock } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import { FOUNDERS, IMAGE_SLOTS, PROMISES, COMPANY_INFO } from '../config/images';

export default function AboutPage({ onOpenAuditModal, setActivePage }) {
  const milestones = [
    { date: 'OCT 2025', title: 'We Started Our Journey', desc: 'Green Ray Solar Solutions was established in Ettumanoor, Kottayam with a mission to make dependable clean energy accessible across Kerala.' },
    { date: 'MILESTONE', title: '100+ Projects Completed', desc: 'Rapidly delivered over 100 on-grid and commercial solar installations, saving households thousands of units in KSEB electricity consumption.' },
    { date: 'ONGOING', title: 'Growing Customer Trust', desc: 'Expanding dedicated lifetime AMC maintenance coverage and engineering support statewide across all 14 districts.' },
    { date: 'AHEAD', title: 'Our Journey Continues', desc: 'Engineering next-generation hybrid solar architectures and high-yield commercial installations for Kerala.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream-100 pt-24 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-forest-950 text-cream-50 py-16 lg:py-20 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-extrabold uppercase tracking-widest">
              <Sun className="w-3.5 h-3.5 text-gold-400" />
              <span>About Green Ray</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-cream-50 leading-tight">
              Our journey toward a cleaner future.
            </h1>
            <p className="text-base sm:text-lg text-cream-200/80 leading-relaxed">
              Green Ray Solar Solutions was established in October 2025 with a vision to make reliable, efficient and sustainable solar energy solutions accessible to homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Milestones & Story Timeline */}
      <section className="py-20 bg-cream-50 border-b border-forest-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="section-tag"><span>Milestones</span></div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-950 font-display tracking-tight">
                A young firm, moving fast.
              </h2>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Established in October 2025, Green Ray has already completed 100+ solar projects — a milestone that reflects the trust customers have placed in the team.
              </p>
              <div className="p-4 rounded-2xl bg-cream-100 border border-forest-900/10 mt-4">
                <span className="text-xs font-bold text-forest-950 block">Corporate Office:</span>
                <span className="text-xs text-charcoal-700">{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100 border border-forest-900/5 editorial-card">
                  <div className="w-3 h-3 rounded-full bg-gold-500 shrink-0 mt-1.5 shadow-sm"></div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-600 block">
                      {m.date}
                    </span>
                    <h3 className="text-base font-bold text-forest-950 font-display mt-0.5">
                      {m.title}
                    </h3>
                    <p className="text-xs text-charcoal-700 mt-1 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Leadership Profiles (Alternating Layout) */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="section-tag"><span>Our Leadership Team</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight">
              Meet the people behind Green Ray.
            </h2>
            <p className="text-base text-charcoal-700 mt-2">
              Driven by engineering excellence, ethical customer relations, and meticulous execution.
            </p>
          </div>

          <div className="space-y-16">
            {FOUNDERS.map((founder, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={founder.slot}
                  className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-forest-900/10 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Portrait Image (Alternating Left/Right) */}
                    <div className={'lg:col-span-5 ' + (isEven ? 'order-1 lg:order-2' : 'order-1')}>
                      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto bg-forest-950 shadow-md">
                        {founder.hasRealPhoto && founder.src ? (
                          <ImageSlot
                            src={founder.src}
                            alt={founder.alt}
                            aspectRatio="aspect-[3/4]"
                            className="w-full h-full"
                            imageClassName="object-cover object-top"
                          />
                        ) : (
                          <div 
                            className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
                            style={{ background: 'linear-gradient(155deg, #184c3c 0%, #0d2822 100%)' }}
                          >
                            <div className="w-28 h-28 rounded-2xl bg-cream-100/10 border border-gold-500/30 flex items-center justify-center mb-4">
                              <span className="text-5xl font-extrabold text-cream-100 font-display">
                                {founder.initials}
                              </span>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                              Leadership Profile
                            </span>
                          </div>
                        )}
                        <div className="absolute top-3.5 right-3.5">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest-950/80 text-cream-100 backdrop-blur-md">
                            {founder.hasRealPhoto ? 'Verified Portrait' : 'Founding Leader'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bio Info (Alternating Right/Left) */}
                    <div className={'lg:col-span-7 space-y-4 ' + (isEven ? 'order-2 lg:order-1' : 'order-2')}>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-1">
                          {founder.role}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 font-display tracking-tight">
                          {founder.name}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                        {founder.bio}
                      </p>

                      <div className="p-4 rounded-2xl bg-cream-100 border border-forest-900/5 text-xs text-forest-950 space-y-1">
                        <span className="font-bold block">Company Focus:</span>
                        <span className="text-charcoal-700">Sustainable renewable deployment, KSEB integration and long-term customer trust across Kerala.</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Our Promise (7 Visual Commitments) */}
      <section className="py-20 bg-cream-50 border-t border-forest-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="section-tag"><span>Our Promise</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight leading-tight">
              Quality Solar Solutions. Honest Service. Long-Term Support.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROMISES.map((promise, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-cream-100 border border-forest-900/5 flex items-start gap-3 editorial-card"
              >
                <div className="w-6 h-6 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 font-bold text-xs font-mono">
                  {'0' + (pIdx + 1)}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-forest-950">
                  {promise}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-3xl bg-forest-950 text-cream-50 flex flex-col sm:flex-row items-center justify-between gap-6 border border-forest-800">
            <div>
              <h3 className="text-xl font-bold font-display text-cream-50">Speak directly with our engineering team</h3>
              <p className="text-xs text-cream-200/80 mt-1">Get authentic, transparent guidance without sales pressure.</p>
            </div>
            <button onClick={onOpenAuditModal} className="btn-primary text-xs sm:text-sm font-bold shrink-0">
              <span>Book a Free Energy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
