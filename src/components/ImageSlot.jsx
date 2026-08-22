import React, { useState } from 'react';
import { Sun, AlertCircle } from 'lucide-react';

/**
 * ImageSlot - Resilient, optimized image renderer
 * Features:
 * - Graceful fallback if image is missing or errors
 * - Prevents UI breaks
 * - Supports subtle zoom, cover mode, and custom aspect ratios
 * - Accessible alt tags
 */
export default function ImageSlot({
  src,
  alt = 'Green Ray Solar Solutions',
  caption,
  aspectRatio = 'aspect-video',
  className = '',
  imageClassName = '',
  zoomOnHover = true,
  priority = false,
  fallbackInitials = null,
  fallbackTitle = 'Green Ray Solar',
  overlay = false,
  children
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no src provided or error encountered, render graceful editorial placeholder
  if (!src || hasError) {
    return (
      <div 
        className={`relative overflow-hidden flex flex-col items-center justify-center bg-forest-900/10 border border-forest-900/10 rounded-2xl ${aspectRatio} ${className}`}
        style={{ background: 'linear-gradient(145deg, #123d32 0%, #0d2822 100%)' }}
      >
        {fallbackInitials ? (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream-100/10 border border-gold-500/30 flex items-center justify-center mb-3">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-cream-100 font-display">
                {fallbackInitials}
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-medium">Green Ray Leadership</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-cream-100/70">
            <div className="w-14 h-14 rounded-2xl bg-forest-800/80 border border-gold-500/20 flex items-center justify-center mb-3 shadow-inner">
              <Sun className="w-7 h-7 text-gold-400 animate-spin-slow" />
            </div>
            <p className="text-sm font-semibold text-cream-100 font-display">{fallbackTitle}</p>
            <p className="text-xs text-cream-100/50 mt-1 max-w-[200px]">Real Green Ray Asset</p>
          </div>
        )}
        {children}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${aspectRatio} ${className} group`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          zoomOnHover ? 'group-hover:scale-[1.03]' : ''
        } ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'} ${imageClassName}`}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent pointer-events-none" />
      )}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 p-3 bg-forest-950/80 backdrop-blur-sm text-cream-100 text-xs font-medium border-t border-forest-800/50">
          {caption}
        </div>
      )}
      {children}
    </div>
  );
}
