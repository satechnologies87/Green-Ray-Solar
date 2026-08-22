import React, { useState } from 'react';
import { Sun, Filter, ArrowRight, ShieldCheck } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { REAL_PROJECTS, COMPANY_INFO } from '../config/images';

export default function ProjectsPage({ onSelectProject, onOpenAuditModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'ongrid', label: 'On-Grid' },
    { id: 'rooftop', label: 'Rooftop Structures' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter((p) => p.categoryKey === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-cream-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-forest-950 text-cream-50 py-16 lg:py-20 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-extrabold uppercase tracking-widest">
              <Sun className="w-3.5 h-3.5 text-gold-400" />
              <span>Real Kerala Installations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-cream-50 leading-tight">
              Solar systems we've built.
            </h1>
            <p className="text-base sm:text-lg text-cream-200/80 leading-relaxed">
              Explore Green Ray's growing portfolio of verified solar installations for homes, villas, and commercial enterprises across Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-forest-900/10">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={'px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ' + (
                  isSelected
                    ? 'bg-forest-900 text-cream-50 shadow-sm border border-forest-900'
                    : 'bg-cream-50 text-charcoal-800 border border-forest-900/10 hover:border-forest-900/30'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenLightbox={onSelectProject}
            />
          ))}
        </div>

        {/* Callout Card */}
        <div className="mt-16 bg-forest-900 rounded-3xl p-8 sm:p-12 text-cream-50 flex flex-col md:flex-row items-center justify-between gap-8 border border-forest-800 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-display text-cream-50">
              Want your rooftop featured in our clean energy portfolio?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/80">
              Book a Free Energy Audit today and find out how much clean power your roof can generate.
            </p>
          </div>
          <button
            onClick={onOpenAuditModal}
            className="btn-primary text-sm font-bold shrink-0"
          >
            <span>Request Site Survey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
