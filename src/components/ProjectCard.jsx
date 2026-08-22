import React from 'react';
import ImageSlot from './ImageSlot';
import { Maximize2, Tag } from 'lucide-react';

export default function ProjectCard({ project, onOpenLightbox }) {
  const { title, category, src, alt, description } = project;

  return (
    <div
      onClick={() => onOpenLightbox(project)}
      className="editorial-card group cursor-pointer bg-cream-50 rounded-2xl overflow-hidden border border-forest-900/10 flex flex-col"
    >
      {/* Real Project Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-950/10">
        <ImageSlot
          src={src}
          alt={alt}
          aspectRatio="aspect-[4/3]"
          className="w-full h-full"
          imageClassName="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          zoomOnHover={false}
        />
        
        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-forest-950/80 backdrop-blur-md text-gold-400 border border-gold-400/20 shadow-sm">
            {category}
          </span>
        </div>

        {/* Expand Trigger Icon */}
        <div className="absolute bottom-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-forest-950/80 backdrop-blur-md text-cream-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 className="w-4 h-4 text-gold-400" />
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-forest-800/80 block mb-1">
            Real Installation
          </span>
          <h4 className="text-base sm:text-lg font-bold text-forest-950 font-display tracking-tight group-hover:text-forest-800 transition-colors">
            {title}
          </h4>
          <p className="text-xs text-charcoal-700 mt-2 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="pt-4 mt-3 border-t border-forest-900/5 flex items-center justify-between text-xs text-forest-900 font-bold">
          <span className="group-hover:text-gold-600 transition-colors">View Installation</span>
          <span className="text-gold-500 font-bold">→</span>
        </div>
      </div>
    </div>
  );
}
