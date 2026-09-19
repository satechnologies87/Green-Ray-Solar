import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, MapPin, Zap, CheckCircle2, RotateCcw } from 'lucide-react';

export default function ProjectVideoCard({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasError(false);
      }).catch((err) => {
        console.warn("Video playback error or file not found:", err);
        setHasError(true);
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const handleRestart = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => {
      setIsPlaying(true);
    });
  };

  return (
    <div className="bg-cream-50 rounded-3xl overflow-hidden border border-forest-900/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col max-w-md mx-auto w-full group">
      
      {/* 9:16 Vertical Video Viewport */}
      <div 
        className="relative aspect-[9/16] w-full bg-forest-950 overflow-hidden cursor-pointer select-none" 
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={video.videoSrc}
          poster={video.posterSrc}
          playsInline
          loop
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />

        {/* Ambient Dark Gradient for readability */}
        <div className={`absolute inset-0 bg-gradient-to-b from-forest-950/70 via-transparent to-forest-950/90 transition-opacity duration-300 ${isPlaying ? 'opacity-40 hover:opacity-90' : 'opacity-90'}`} />

        {/* Top Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-950/85 backdrop-blur-md text-gold-400 text-xs font-bold border border-gold-400/30 shadow-md">
            <Film className="w-3.5 h-3.5 text-gold-400" />
            <span>9:16 Reel</span>
          </span>

          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-forest-900/90 backdrop-blur-md text-cream-50 text-xs font-semibold shadow-md border border-forest-800">
            <Zap className="w-3.5 h-3.5 text-gold-400" />
            <span>{video.capacity}</span>
          </span>
        </div>

        {/* Central Play Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-gold-500 text-forest-950 flex items-center justify-center shadow-2xl border-4 border-cream-50/30 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 fill-current translate-x-0.5 text-forest-950" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-cream-100 bg-forest-950/80 px-3 py-1 rounded-full backdrop-blur-sm">
              Tap to Watch Reel
            </span>
          </div>
        )}

        {/* Bottom Floating Info & Controls Toolbar */}
        <div className="absolute bottom-4 left-4 right-4 z-10 space-y-3">
          
          {/* Quick Details Overlay */}
          <div className="space-y-1 text-cream-50 pointer-events-none">
            <div className="flex items-center gap-1.5 text-[11px] text-gold-400 font-bold uppercase tracking-wider">
              <MapPin className="w-3 h-3" />
              <span>{video.location}</span>
            </div>
            <h4 className="text-base font-bold font-display leading-snug drop-shadow-md text-cream-50">
              {video.title}
            </h4>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-cream-50/15 text-cream-50">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="px-3 py-1.5 rounded-xl bg-cream-50/15 hover:bg-gold-500 hover:text-forest-950 transition-colors cursor-pointer border-none text-cream-50 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-xl bg-cream-50/15 hover:bg-gold-500 hover:text-forest-950 transition-colors cursor-pointer border-none text-cream-50 backdrop-blur-md"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {isPlaying && (
                <button
                  onClick={handleRestart}
                  className="p-2 rounded-xl bg-cream-50/15 hover:bg-gold-500 hover:text-forest-950 transition-colors cursor-pointer border-none text-cream-50 backdrop-blur-md"
                  aria-label="Restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleFullscreen}
                className="p-2 rounded-xl bg-cream-50/15 hover:bg-gold-500 hover:text-forest-950 transition-colors cursor-pointer border-none text-cream-50 backdrop-blur-md"
                aria-label="Fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Fallback Info when file is missing */}
        {hasError && (
          <div className="absolute inset-x-4 top-20 p-3 rounded-2xl bg-forest-950/95 backdrop-blur-md border border-gold-500/40 text-cream-100 text-xs text-center z-20 pointer-events-none shadow-xl">
            <p className="text-gold-400 font-bold mb-1">📁 Video Slot Ready (9:16)</p>
            <p className="text-[11px] text-cream-200 leading-snug">
              Place your portrait video at:
            </p>
            <code className="text-gold-300 text-[10px] block mt-1 font-mono bg-forest-900/80 p-1 rounded border border-forest-800 break-all">
              {video.videoSrc}
            </code>
          </div>
        )}
      </div>

      {/* Description Below Card */}
      <div className="p-5 flex flex-col justify-between flex-grow space-y-3 bg-cream-50 border-t border-forest-900/10">
        <p className="text-xs text-charcoal-700 leading-relaxed">
          {video.description}
        </p>

        <div className="pt-2 border-t border-forest-900/10 flex items-center justify-between text-xs text-forest-900 font-semibold">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold-500" />
            <span>Residential Solar Project</span>
          </span>
          <span className="text-charcoal-500 text-[11px] font-mono">9:16 HD</span>
        </div>
      </div>

    </div>
  );
}