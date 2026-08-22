import React from 'react';
import { 
  Sun, ArrowRight, ShieldCheck, CheckCircle2, TrendingDown, Zap, Wrench, 
  FileText, Sliders, ChevronRight, Phone, Award, Sparkles, Clock, Check
} from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import FounderCard from '../components/FounderCard';
import ProjectCard from '../components/ProjectCard';
import KeralaMapSection from '../components/KeralaMapSection';
import SolarCalculator from '../components/SolarCalculator';
import { 
  IMAGE_SLOTS, FOUNDERS, REAL_PROJECTS, CORE_BENEFITS, 
  SOLAR_SOLUTIONS, SOLAR_JOURNEY_STEPS, COMPANY_INFO 
} from '../config/images';

export default function HomePage({ setActivePage, onOpenAuditModal, onSelectProject }) {
  const homeBenefits = CORE_BENEFITS.slice(0, 6);
  const homeProjects = REAL_PROJECTS.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-cream-100">
      
      {/* 1. HERO */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-forest-950 text-cream-50">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-35 mix-blend-luminosity">
          <img src={IMAGE_SLOTS.hero.src} alt={IMAGE_SLOTS.hero.alt} className="w-full h-full object-cover animate-hero-zoom scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-transparent" />
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gold-500/10 filter blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-gold-500/30 text-gold-400 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span>Solar Solutions Across Kerala</span>
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-cream-50 leading-[1.08]">
                  Clean Energy. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-amber-200">Cleaner Future.</span>
                </h1>
                <div className="pt-2">
                  <svg width="220" height="8" viewBox="0 0 220 8" fill="none" className="text-gold-500">
                    <line x1="0" y1="4" x2="220" y2="4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="sunray-line" />
                  </svg>
                </div>
              </div>
              <p className="text-base sm:text-lg text-cream-200/90 max-w-2xl leading-relaxed">
                Reliable solar solutions for homes and businesses — from energy assessment and installation to KSEB support and long-term maintenance.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button onClick={onOpenAuditModal} className="btn-primary text-base font-bold shadow-lg">
                  <span>Get a Free Energy Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => { setActivePage('solutions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn-secondary text-base font-semibold">
                  <span>Explore Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="pt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-cream-300/80 font-medium">
                {['Residential', 'Commercial', 'On-Grid', 'Off-Grid', 'Hybrid'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-forest-900/60 border border-forest-800/80 backdrop-blur-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-gold-500/30 to-forest-800/30 backdrop-blur-md shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest-900">
                  <ImageSlot src={IMAGE_SLOTS.hero.src} alt={IMAGE_SLOTS.hero.alt} aspectRatio="aspect-[4/3]" priority={true} className="w-full h-full" imageClassName="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-4 left-4 z-20 bg-cream-50 text-forest-950 px-4 py-2.5 rounded-2xl shadow-xl border border-gold-500/30 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold"><Sun className="w-5 h-5" /></div>
                    <div><span className="text-xl font-extrabold font-display leading-none block text-forest-950">100+</span><span className="text-[10px] uppercase tracking-wider font-extrabold text-charcoal-600 block mt-0.5">Projects Completed</span></div>
                  </div>
                  <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gold-500 shadow-md animate-sun-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-cream-50 border-y border-forest-900/10 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-forest-900/10">
            <div className="pt-3 md:pt-0 md:px-4 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-forest-950 font-display block">100+</span>
              <span className="text-xs uppercase tracking-wider font-extrabold text-gold-600 block mt-1">Solar Projects Completed</span>
            </div>
            <div className="pt-3 md:pt-0 md:px-4 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-forest-950 font-display block">Kerala</span>
              <span className="text-xs uppercase tracking-wider font-extrabold text-forest-800 block mt-1">Statewide Service</span>
            </div>
            <div className="pt-3 md:pt-0 md:px-4 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-forest-950 font-display block">End-to-End</span>
              <span className="text-xs uppercase tracking-wider font-extrabold text-forest-800 block mt-1">Solar Support</span>
            </div>
            <div className="pt-3 md:pt-0 md:px-4 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-forest-950 font-display block">Lifetime AMC</span>
              <span className="text-xs uppercase tracking-wider font-extrabold text-gold-600 block mt-1">Maintenance Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="section-tag"><span>Core Benefits</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight leading-tight">
              Why homes and businesses choose solar.
            </h2>
            <p className="text-base text-charcoal-700 mt-3">
              Every Green Ray system is designed around real benefit — not just panels on a roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeBenefits.map((benefit) => (
              <div key={benefit.id} className="editorial-card bg-cream-50 rounded-2xl p-7 border border-forest-900/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-extrabold text-gold-600 block mb-3">{benefit.id}</span>
                  <h3 className="text-xl font-bold text-forest-950 font-display mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">{benefit.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-forest-900/5 flex items-center justify-between text-xs font-bold text-forest-900">
                  <span className="text-gold-600">{benefit.highlight}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-forest-900 hover:text-gold-600 transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              <span>View All 10 Solar Benefits on Services Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. SOLAR SOLUTIONS */}
      <section className="py-20 bg-cream-50 border-t border-forest-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="section-tag"><span>Solar Solutions</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight leading-tight">
              Solar solutions built around your energy needs.
            </h2>
            <p className="text-base text-charcoal-700 mt-3">From homes and businesses to on-grid, off-grid and hybrid systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLAR_SOLUTIONS.map((solution, idx) => (
              <div key={solution.id} className="editorial-card bg-cream-100 rounded-3xl overflow-hidden border border-forest-900/10 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
                    <ImageSlot src={solution.imageSlot.src} alt={solution.imageSlot.alt} aspectRatio="aspect-[16/10]" className="w-full h-full" imageClassName="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-forest-950/80 text-gold-400 backdrop-blur-md">
                        {'0' + (idx + 1) + ' — ' + solution.id}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-forest-950 font-display">{solution.name}</h3>
                    <p className="text-xs text-charcoal-700 mt-2.5 leading-relaxed">{solution.description}</p>
                    <ul className="mt-4 space-y-1.5 text-xs text-forest-950 font-medium">
                      {solution.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button onClick={() => { setActivePage('solutions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn-forest w-full text-xs py-2.5 justify-center font-bold">
                    <span>Explore {solution.name.split(' ')[0]} Solar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREE ENERGY AUDIT */}
      <section className="py-20 bg-forest-950 text-cream-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-forest-900 rounded-3xl p-8 sm:p-12 lg:p-16 border border-forest-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gold-500/15 filter blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="section-tag section-tag-gold"><Sparkles className="w-4 h-4" /><span>Free Energy Audit</span></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-cream-50 leading-tight">
                  Not sure how much solar you need? <br /><span className="text-gold-400">Start with a Free Energy Audit.</span>
                </h2>
                <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed max-w-xl">
                  Our certified solar engineers inspect your electricity consumption patterns, rooftop orientation, and structural conditions to design the exact system capacity tailored to your needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-forest-950/60 border border-forest-800">
                    <span className="text-xs font-extrabold text-gold-400 uppercase tracking-widest block mb-1">Step 1</span>
                    <strong className="text-sm text-cream-50 font-bold block">Electricity Usage</strong>
                    <span className="text-[11px] text-cream-300/70 block mt-1">Reviewing KSEB bills</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-forest-950/60 border border-forest-800">
                    <span className="text-xs font-extrabold text-gold-400 uppercase tracking-widest block mb-1">Step 2</span>
                    <strong className="text-sm text-cream-50 font-bold block">Site Assessment</strong>
                    <span className="text-[11px] text-cream-300/70 block mt-1">Shadow & space survey</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-forest-950/60 border border-forest-800">
                    <span className="text-xs font-extrabold text-gold-400 uppercase tracking-widest block mb-1">Step 3</span>
                    <strong className="text-sm text-cream-50 font-bold block">Recommended Solar</strong>
                    <span className="text-[11px] text-cream-300/70 block mt-1">Optimal ROI & capacity</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button onClick={onOpenAuditModal} className="btn-primary text-base font-bold shadow-xl">
                    <span>Book My Free Energy Audit</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest-950 border border-gold-500/20 shadow-2xl">
                  <ImageSlot src={IMAGE_SLOTS.siteAssessment.src} alt={IMAGE_SLOTS.siteAssessment.alt} aspectRatio="aspect-[4/3]" className="w-full h-full" imageClassName="object-cover" />
                  <div className="absolute bottom-3 inset-x-3 p-3 bg-forest-950/80 backdrop-blur-md rounded-xl text-xs text-cream-100 border border-cream-100/10">
                    Green Ray engineer conducting on-site rooftop audit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOLAR JOURNEY */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="section-tag"><Clock className="w-4 h-4" /><span>End-to-End Process</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight leading-tight">The complete solar journey.</h2>
            <p className="text-base text-charcoal-700 mt-3">We handle every step with precision — so you enjoy clean electricity without any hassle.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLAR_JOURNEY_STEPS.map((s, idx) => (
              <div key={s.step} className="bg-cream-50 rounded-2xl p-6 border border-forest-900/10 flex flex-col justify-between editorial-card">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-mono font-bold text-sm mb-4">{s.step}</div>
                  <h4 className="text-base font-bold text-forest-950 font-display mb-2">{s.title}</h4>
                  <p className="text-xs text-charcoal-700 leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-4 mt-3 border-t border-forest-900/5 text-[11px] font-bold text-forest-900">Step {idx + 1} of 7</div>
              </div>
            ))}
            <div className="bg-forest-900 text-cream-50 rounded-2xl p-6 border border-forest-800 flex flex-col justify-between shadow-md">
              <div>
                <Sun className="w-8 h-8 text-gold-400 mb-3" />
                <h4 className="text-lg font-bold font-display text-cream-50 mb-2">Ready to start?</h4>
                <p className="text-xs text-cream-200/80 leading-relaxed">Book your assessment today and start generating clean solar power in weeks.</p>
              </div>
              <button onClick={onOpenAuditModal} className="btn-primary w-full py-2.5 text-xs font-bold justify-center mt-4">
                <span>Request Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SITE ASSESSMENT */}
      <section className="py-20 bg-cream-50 border-t border-forest-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-forest-950 shadow-xl border border-forest-900/10">
                <ImageSlot src={IMAGE_SLOTS.siteAssessment.src} alt={IMAGE_SLOTS.siteAssessment.alt} aspectRatio="aspect-[4/3]" className="w-full h-full" imageClassName="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-forest-950/80 text-gold-400 backdrop-blur-md">Real Site Inspection</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="section-tag"><span>Precision Engineering</span></div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-950 font-display tracking-tight">Designed for your site.</h2>
              <p className="text-sm text-charcoal-700 leading-relaxed">No two rooftops in Kerala are identical. We evaluate every physical and electrical detail before recommending any panel configuration.</p>
              <div className="space-y-3 pt-2">
                {[
                  'Installation space & rooftop layout optimization',
                  'Sunlight availability & 3D shadow analysis',
                  'Structural conditions & roof load-bearing integrity',
                  'Electrical requirements & distribution panel testing',
                  'Site-specific factors (tree shadow, rainfall runoff, tile structure)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-cream-100 border border-forest-900/5">
                    <div className="w-5 h-5 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                    <span className="text-xs sm:text-sm font-semibold text-forest-950">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <button onClick={onOpenAuditModal} className="btn-forest text-xs sm:text-sm font-bold">
                  <span>Schedule Rooftop Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INSTALLATION */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="section-tag"><span>Technical Standard</span></div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-950 font-display tracking-tight">Built properly from the ground up.</h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">Professional installation and commissioning including mounting, panel installation, inverter connection, wiring, testing and system activation.</p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-cream-50 border border-forest-900/10">
                  <ShieldCheck className="w-6 h-6 text-gold-600 mb-2" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">Certified Cables & SPDs</h4>
                  <p className="text-xs text-charcoal-600">UV-resistant cabling and dual lightning arrestors.</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-50 border border-forest-900/10">
                  <Award className="w-6 h-6 text-gold-600 mb-2" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">Engineered Structures</h4>
                  <p className="text-xs text-charcoal-600">Galvanized and anodized aluminum mounts.</p>
                </div>
              </div>
              <div className="pt-2">
                <button onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn-forest text-xs sm:text-sm font-bold">
                  <span>Explore Installation Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-forest-950 shadow-xl border border-forest-900/10">
                <ImageSlot src={IMAGE_SLOTS.professionalInstallation.src} alt={IMAGE_SLOTS.professionalInstallation.alt} aspectRatio="aspect-[4/3]" className="w-full h-full" imageClassName="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-forest-950/80 text-gold-400 backdrop-blur-md">Real Green Ray Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. KSEB & AMC */}
      <section className="py-20 bg-cream-50 border-t border-forest-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest-950 shadow-md">
                <ImageSlot src={IMAGE_SLOTS.ksebDocumentation.src} alt={IMAGE_SLOTS.ksebDocumentation.alt} aspectRatio="aspect-[4/3]" className="w-full h-full" imageClassName="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="section-tag"><FileText className="w-4 h-4" /><span>Net Metering Assistance</span></div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 font-display">Solar without the paperwork headache.</h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">Green Ray assists customers with KSEB-related documentation and application procedures associated with solar installation. We handle application submission, feasibility clearance, meter testing and bi-directional meter synchronization.</p>
              <div className="pt-2">
                <button onClick={onOpenAuditModal} className="btn-forest text-xs font-bold">
                  <span>Get Installation Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-forest-900/10">
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <div className="section-tag"><Wrench className="w-4 h-4" /><span>Lifetime AMC & Maintenance</span></div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 font-display">We don't disappear after installation.</h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">Our relationship begins on the day of activation. We provide comprehensive lifetime AMC support to ensure optimal electricity generation year after year across Kerala.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-semibold text-forest-950">
                <span className="p-2.5 rounded-lg bg-cream-100 border border-forest-900/5">✓ System inspection</span>
                <span className="p-2.5 rounded-lg bg-cream-100 border border-forest-900/5">✓ Performance audit</span>
                <span className="p-2.5 rounded-lg bg-cream-100 border border-forest-900/5">✓ Basic troubleshooting</span>
                <span className="p-2.5 rounded-lg bg-cream-100 border border-forest-900/5">✓ Preventive upkeep</span>
                <span className="p-2.5 rounded-lg bg-cream-100 border border-forest-900/5">✓ Periodic checking</span>
                <span className="p-2.5 rounded-lg bg-cream-100 border border-forest-900/5">✓ Local Kerala support</span>
              </div>
              <div className="pt-3">
                <button onClick={onOpenAuditModal} className="btn-forest text-xs font-bold">
                  <span>Schedule Maintenance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest-950 shadow-md">
                <ImageSlot src={IMAGE_SLOTS.maintenanceAMC.src} alt={IMAGE_SLOTS.maintenanceAMC.alt} aspectRatio="aspect-[4/3]" className="w-full h-full" imageClassName="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REAL PROJECTS */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="section-tag"><span>Verified Installations</span></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight leading-tight">Solar systems we've built.</h2>
              <p className="text-base text-charcoal-700 mt-2">Explore Green Ray's growing portfolio of solar installations across Kerala.</p>
            </div>
            <button onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn-forest text-xs sm:text-sm font-bold shrink-0 self-start md:self-auto">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onOpenLightbox={onSelectProject} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. CALCULATOR */}
      <section className="py-16 bg-cream-50 border-t border-forest-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolarCalculator onOpenAuditModal={onOpenAuditModal} />
        </div>
      </section>

      {/* 12. KERALA */}
      <KeralaMapSection onOpenAuditModal={onOpenAuditModal} onSelectProject={onSelectProject} />

      {/* 13. TEAM */}
      <section className="py-20 bg-cream-50 border-t border-forest-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="section-tag"><span>Our Leadership Team</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-display tracking-tight leading-tight">Four People. One Vision.</h2>
            <p className="text-base text-charcoal-700 mt-3">Meet the people behind Green Ray Solar Solutions guiding Kerala towards reliable clean energy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDERS.map((founder) => (
              <FounderCard key={founder.slot} founder={founder} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-forest-900 hover:text-gold-600 transition-colors bg-transparent border-none cursor-pointer p-0">
              <span>Learn More About Our Journey & Leadership on About Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
