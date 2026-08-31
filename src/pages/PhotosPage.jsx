import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Flower2, Star } from 'lucide-react';

const PHOTO_ALBUMS = [
  {
    id: 'onam-2026',
    title: 'Onam 2026',
    subtitle: 'Celebrating the harvest festival with the Green Ray family',
    year: '2026',
    badge: 'Festival',
    badgeColor: 'bg-gold-500 text-forest-950',
    photos: [
      {
        src: '/images/greenray/onam-2026-group-1.png',
        caption: 'Green Ray team in full festive spirit with a beautiful pookalam',
        alt: 'Green Ray Solar team celebrating Onam 2026 - Group photo with pookalam'
      },
      {
        src: '/images/greenray/onam-2026-group-2.png',
        caption: 'Leadership team gathered around the vibrant floral rangoli',
        alt: 'Green Ray leadership team at Onam 2026 celebration'
      },
      {
        src: '/images/greenray/onam-2026-group-3.png',
        caption: 'The full Green Ray family united for Onam festivities',
        alt: 'Full Green Ray Solar team at Onam 2026'
      },
      {
        src: '/images/greenray/onam-2026-group-4.png',
        caption: 'Our wonderful team members dressed in traditional Kerala attire',
        alt: 'Green Ray team members in traditional Kerala dress during Onam'
      },
      {
        src: '/images/greenray/onam-2026-group-5.png',
        caption: 'Colleagues sharing the joy of the season together',
        alt: 'Green Ray colleagues celebrating Onam 2026'
      }
    ]
  }
];

export default function PhotosPage() {
  const [lightbox, setLightbox] = useState(null); // { albumId, photoIndex }

  const openLightbox = (albumId, photoIndex) => {
    setLightbox({ albumId, photoIndex });
  };

  const closeLightbox = () => setLightbox(null);

  const navigateLightbox = (dir) => {
    if (!lightbox) return;
    const album = PHOTO_ALBUMS.find(a => a.id === lightbox.albumId);
    if (!album) return;
    const total = album.photos.length;
    const next = (lightbox.photoIndex + dir + total) % total;
    setLightbox({ ...lightbox, photoIndex: next });
  };

  const activeLightboxPhoto = lightbox
    ? PHOTO_ALBUMS.find(a => a.id === lightbox.albumId)?.photos[lightbox.photoIndex]
    : null;

  const activeLightboxAlbum = lightbox
    ? PHOTO_ALBUMS.find(a => a.id === lightbox.albumId)
    : null;

  return (
    <div className="flex flex-col min-h-screen bg-cream-100 pt-24 pb-20">

      {/* ── Header Banner ───────────────────────────────────────── */}
      <section className="bg-forest-950 text-cream-50 py-16 lg:py-20 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-extrabold uppercase tracking-widest">
              <Camera className="w-3.5 h-3.5" />
              <span>Company Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-cream-50 leading-tight">
              Our moments,<br />
              <span className="text-gold-400">our memories.</span>
            </h1>
            <p className="text-base sm:text-lg text-cream-200/80 leading-relaxed max-w-xl">
              Celebrations, milestones, and everyday togetherness — the stories that make Green Ray Solar Solutions more than just a company.
            </p>
          </div>
        </div>
      </section>

      {/* ── Albums ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {PHOTO_ALBUMS.map((album) => (
          <section key={album.id}>

            {/* Album Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Flower2 className="w-4 h-4 text-gold-500" />
                  <span className={`text-xs font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${album.badgeColor}`}>
                    {album.badge}
                  </span>
                  <span className="text-xs text-charcoal-600 font-semibold">{album.year}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-forest-950 tracking-tight">
                  {album.title}
                </h2>
                <p className="text-sm text-charcoal-600 leading-relaxed max-w-xl">
                  {album.subtitle}
                </p>
              </div>
              <div className="shrink-0 text-xs text-charcoal-400 font-semibold">
                {album.photos.length} photos
              </div>
            </div>

            {/* Gallery — Row 1: Feature photo full width */}
            <div className="mb-4">
              {album.photos.slice(0, 1).map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(album.id, 0)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer bg-forest-950 shadow-sm hover:shadow-xl transition-all duration-300 editorial-card"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <p className="text-cream-50 text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.caption}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-forest-950/60 backdrop-blur-sm text-cream-50 text-[10px] font-bold border border-cream-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    1 / {album.photos.length}
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery — Row 2: Remaining photos in 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {album.photos.slice(1).map((photo, idx) => (
                <div
                  key={idx + 1}
                  onClick={() => openLightbox(album.id, idx + 1)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer bg-forest-950 shadow-sm hover:shadow-xl transition-all duration-300 editorial-card"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-cream-50 text-xs font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.caption}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-forest-950/60 backdrop-blur-sm text-cream-50 text-[10px] font-bold border border-cream-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {idx + 2} / {album.photos.length}
                  </div>
                </div>
              ))}
            </div>

          </section>
        ))}
      </div>



      {/* ── Lightbox ─────────────────────────────────────────────── */}
      {lightbox && activeLightboxPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-forest-950/97 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream-50/10 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition-colors cursor-pointer border-none z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          {activeLightboxAlbum && activeLightboxAlbum.photos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream-50/10 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition-colors cursor-pointer border-none z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream-50/10 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition-colors cursor-pointer border-none z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-6xl flex flex-col items-center gap-4 px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeLightboxPhoto.src}
              alt={activeLightboxPhoto.alt}
              className="max-h-[88vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
            />
            <div className="text-center space-y-1">
              <p className="text-cream-50 text-sm font-semibold">
                {activeLightboxPhoto.caption}
              </p>
              <p className="text-cream-400/60 text-xs">
                {activeLightboxAlbum?.title} &mdash; {lightbox.photoIndex + 1} / {activeLightboxAlbum?.photos.length}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}