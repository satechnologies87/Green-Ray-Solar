import React from 'react';
import ImageSlot from './ImageSlot';
import { ArrowRight, Award } from 'lucide-react';

export default function FounderCard({ founder, onSelect, expanded = false }) {
  const { name, role, bio, src, initials, hasRealPhoto, alt } = founder;

  return (
    <div className="editorial-card bg-cream-50 rounded-2xl overflow-hidden border border-forest-900/10 flex flex-col h-full group">
      {/* 60-70% Height Portrait Image or Editorial Placeholder */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-forest-950/10">
        {hasRealPhoto && src ? (
          <ImageSlot
            src={src}
            alt={alt}
            aspectRatio="aspect-[3/4]"
            className="w-full h-full"
            imageClassName="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
            zoomOnHover={false}
          />
        ) : (
          <div 
            className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
            style={{ background: 'linear-gradient(155deg, #184c3c 0%, #0d2822 100%)' }}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-cream-100/10 border border-gold-500/30 flex items-center justify-center mb-4 shadow-sm group-hover:border-gold-400/60 transition-colors">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-cream-100 font-display">
                {initials}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold">
              Leadership Profile
            </span>
          </div>
        )}

        <div className="absolute top-3.5 right-3.5">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest-950/75 backdrop-blur-md text-cream-100 border border-cream-100/10">
            {hasRealPhoto ? 'Real Photo' : 'Founding Team'}
          </span>
        </div>
      </div>

      {/* Content Block */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-forest-950 font-display tracking-tight group-hover:text-forest-800 transition-colors">
            {name}
          </h3>
          <p className="text-xs uppercase font-extrabold tracking-widest text-gold-600 mt-1 mb-3">
            {role}
          </p>
          <p className="text-xs text-charcoal-700 leading-relaxed">
            {bio}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-forest-900/5 flex items-center justify-between text-xs text-forest-900 font-bold group-hover:text-gold-600 transition-colors">
          <span>Green Ray Leadership</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
        </div>
      </div>
    </div>
  );
}
