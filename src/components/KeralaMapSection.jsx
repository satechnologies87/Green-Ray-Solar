import React, { useState } from 'react';
import { MapPin, Sun, CheckCircle2, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO, REAL_PROJECTS } from '../config/images';

export default function KeralaMapSection({ onOpenAuditModal, onSelectProject }) {
  const [activeDistrict, setActiveDistrict] = useState('Kottayam (HQ)');

  const districts = [
    { name: 'Kottayam (HQ)', hub: 'Ettumanoor Headquarters', sampleProject: REAL_PROJECTS[0] },
    { name: 'Ernakulam', hub: 'Central Kerala Coverage', sampleProject: REAL_PROJECTS[1] },
    { name: 'Thiruvananthapuram', hub: 'South Kerala Operations', sampleProject: REAL_PROJECTS[2] },
    { name: 'Thrissur', hub: 'Cultural Capital Installations', sampleProject: REAL_PROJECTS[3] },
    { name: 'Alappuzha', hub: 'Coastal & Residential Solar', sampleProject: REAL_PROJECTS[4] },
    { name: 'Kozhikode', hub: 'North Kerala Service Network', sampleProject: REAL_PROJECTS[5] }
  ];

  const currentDistrict = districts.find((d) => d.name === activeDistrict) || districts[0];

  return (
    <section className="py-20 bg-cream-100 border-t border-forest-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="section-tag">
            <MapPin className="w-4 h-4 text-forest-800" />
            <span>Statewide Installation Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight leading-tight">
            Solar across Kerala.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 mt-3 font-medium">
            From One Corner of Kerala to Another — We Bring Solar Energy Closer to You.
          </p>
        </div>

        {/* Map & Regional Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: District Tabs & Hubs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-forest-900 block mb-2">
                Select a Region / Service Zone
              </span>
              {districts.map((d) => {
                const isSelected = activeDistrict === d.name;
                return (
                  <button
                    key={d.name}
                    onClick={() => setActiveDistrict(d.name)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-forest-900 text-cream-50 border-forest-900 shadow-md translate-x-1'
                        : 'bg-cream-50 text-charcoal-800 border-forest-900/10 hover:border-forest-900/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isSelected ? 'bg-gold-500 text-forest-950' : 'bg-forest-900/10 text-forest-900'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-display">{d.name}</h4>
                        <span className={`text-xs block ${isSelected ? 'text-cream-200/80' : 'text-charcoal-600'}`}>
                          {d.hub}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-gold-400' : 'text-charcoal-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="p-5 rounded-2xl bg-forest-900/5 border border-forest-900/10 mt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-forest-950 mb-1">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <span>Headquartered in Ettumanoor, Kottayam</span>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Dedicated on-site technical inspection, rapid local response, and full KSEB paperwork coordination statewide.
              </p>
            </div>
          </div>

          {/* Right: Regional Highlight Card with Real Installation */}
          <div className="lg:col-span-7 bg-cream-50 rounded-3xl p-6 sm:p-8 border border-forest-900/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-forest-900/10 mb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-600">
                    Active Regional Coverage
                  </span>
                  <h3 className="text-2xl font-bold text-forest-950 font-display">
                    {currentDistrict.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-forest-900/10 text-forest-900">
                  Statewide Service
                </span>
              </div>

              {/* Real Project Spotlight */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-forest-950 group">
                <img
                  src={currentDistrict.sampleProject.src}
                  alt={currentDistrict.sampleProject.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400">
                    Real Green Ray Project
                  </span>
                  <h4 className="text-lg font-bold text-cream-50 font-display">
                    {currentDistrict.sampleProject.title}
                  </h4>
                  <p className="text-xs text-cream-200/80 line-clamp-1 mt-1">
                    {currentDistrict.sampleProject.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-cream-100 border border-forest-900/5">
                  <span className="text-charcoal-600 block text-[10px] uppercase">Service Type</span>
                  <strong className="text-forest-950 font-bold">Rooftop & Commercial</strong>
                </div>
                <div className="p-3 rounded-xl bg-cream-100 border border-forest-900/5">
                  <span className="text-charcoal-600 block text-[10px] uppercase">Net Metering</span>
                  <strong className="text-forest-950 font-bold">Full KSEB Support</strong>
                </div>
                <div className="p-3 rounded-xl bg-cream-100 border border-forest-900/5 col-span-2 sm:col-span-1">
                  <span className="text-charcoal-600 block text-[10px] uppercase">Warranty</span>
                  <strong className="text-forest-950 font-bold">Lifetime AMC</strong>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-forest-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="text-xs font-bold text-forest-900 flex items-center gap-1.5 no-underline"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call Local Representative: {COMPANY_INFO.phones[0]}</span>
              </a>
              <button
                onClick={onOpenAuditModal}
                className="btn-forest w-full sm:w-auto text-xs py-2.5 px-5 font-bold"
              >
                <span>Book Site Audit in {currentDistrict.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
