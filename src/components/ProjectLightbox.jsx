import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Sun } from 'lucide-react';
import ImageSlot from './ImageSlot';

export default function ProjectLightbox({ project, allProjects, onClose, onNavigate }) {
  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(prevProject);
      if (e.key === 'ArrowRight') onNavigate(nextProject);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, prevProject, nextProject, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-forest-950/95 backdrop-blur-xl animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-forest-900/80 text-cream-100 hover:bg-gold-500 hover:text-forest-950 transition-colors border border-cream-100/10 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(prevProject);
        }}
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-forest-900/80 text-cream-100 hover:bg-gold-500 hover:text-forest-950 transition-all border border-cream-100/10 cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(nextProject);
        }}
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-forest-900/80 text-cream-100 hover:bg-gold-500 hover:text-forest-950 transition-all border border-cream-100/10 cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Dialog Card */}
      <div 
        className="relative z-10 max-w-5xl w-full bg-cream-50 rounded-3xl overflow-hidden shadow-2xl border border-forest-800/40 flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left / Top: Real Project Image */}
        <div className="lg:w-3/5 bg-forest-950 relative flex items-center justify-center min-h-[280px] sm:min-h-[400px]">
          <img
            src={project.src}
            alt={project.alt}
            className="w-full h-full max-h-[55vh] lg:max-h-[80vh] object-contain"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-900/90 text-gold-400 border border-gold-400/20 backdrop-blur-md">
              {project.category} Solar System
            </span>
          </div>
        </div>

        {/* Right / Bottom: Verified Metadata */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-cream-50">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-gold-500"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-forest-900">
                Verified Installation
              </span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-forest-950 font-display tracking-tight leading-snug">
              {project.title}
            </h3>

            <div className="my-5 p-4 rounded-xl bg-forest-900/5 border border-forest-900/10 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-charcoal-600">Company</span>
                <span className="font-bold text-forest-950">Green Ray Solar Solutions</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-charcoal-600">Location Context</span>
                <span className="font-bold text-forest-950">Kerala Statewide Project</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-charcoal-600">Grid Integration</span>
                <span className="font-bold text-forest-950">KSEB Connected / Supported</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-charcoal-600">Support</span>
                <span className="font-bold text-forest-950">Lifetime AMC Included</span>
              </div>
            </div>

            <p className="text-sm text-charcoal-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-forest-900/10 flex items-center justify-between">
            <span className="text-xs text-charcoal-600 font-medium">
              Image {currentIndex + 1} of {allProjects.length}
            </span>
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={() => onNavigate(prevProject)}
                className="px-3 py-1.5 text-xs font-bold bg-forest-900 text-cream-100 rounded-lg"
              >
                Prev
              </button>
              <button
                onClick={() => onNavigate(nextProject)}
                className="px-3 py-1.5 text-xs font-bold bg-forest-900 text-cream-100 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
