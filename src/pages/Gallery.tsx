import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

// All gallery items — real photos from Material folder + WhatsApp images + videos
const galleryItems = [
  // Material folder real photos
  { src: '/gallery/img-5792.jpg', type: 'photo' as const, title: 'GatiGo Fleet' },
  { src: '/gallery/img-5798.jpg', type: 'photo' as const, title: 'GatiGo on the Road' },
  { src: '/gallery/img-5801.jpg', type: 'photo' as const, title: 'GatiGo Ready' },
  { src: '/gallery/img-5803.jpg', type: 'photo' as const, title: 'Safe Ride' },
  { src: '/gallery/img-5806.jpg', type: 'photo' as const, title: 'Women First' },
  { src: '/gallery/img-5815.jpg', type: 'photo' as const, title: 'Community Rides' },
  { src: '/gallery/img-5816.jpg', type: 'photo' as const, title: 'GatiGo Experience' },
  // WhatsApp images
  { src: '/gallery/wa-image-1.jpeg', type: 'photo' as const, title: 'Happy Passengers' },
  { src: '/gallery/wa-image-2.jpeg', type: 'photo' as const, title: 'Ride in Style' },
  { src: '/gallery/wa-image-3.jpeg', type: 'photo' as const, title: 'Safe Travel' },
  // Videos
  { src: '/gallery/wa-video-1.mp4', type: 'video' as const, title: 'GatiGo in Action' },
  { src: '/videos/driving.mp4', type: 'video' as const, title: 'Smooth Ride' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [lightboxIndex]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrevious, handleNext]);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: '45vh', background: '#0f0f0f' }}>
        <video
          src="/gallery/wa-video-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="eyebrow block tracking-widest uppercase text-sm mb-4" style={{ color: 'var(--color-accent)' }}>
              Our Visual Story
            </span>
            <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, lineHeight: 1.1 }}>
              The GatiGo{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Experience</em>
            </h1>
            <p className="text-white/70 text-lg font-light leading-relaxed max-w-xl mx-auto mt-4">
              Our fleet, our drivers, our passengers — moments that define safe &amp; dignified travel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="section" style={{ background: 'var(--color-canvas)' }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Gallery</span>
              <h2 className="text-display-md mt-3">
                Moments from the <span style={{ fontStyle: 'italic' }}>Road</span>
              </h2>
            </div>
          </FadeIn>

          {/* CSS Columns Masonry Grid */}
          <div
            style={{
              columns: 'clamp(220px, 28vw, 360px)',
              columnGap: '1rem',
            }}
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group cursor-pointer"
                style={{
                  breakInside: 'avoid',
                  marginBottom: '1rem',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#1a1a1a',
                }}
                onClick={() => setLightboxIndex(i)}
              >
                {item.type === 'video' ? (
                  <>
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                      style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.7s ease' }}
                      className="group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: 'rgba(0,0,0,0.3)', transition: 'background 0.3s' }}
                    >
                      <div
                        style={{
                          width: 56, height: 56,
                          borderRadius: '50%',
                          background: 'var(--color-accent)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                          transition: 'transform 0.3s',
                        }}
                        className="group-hover:scale-110"
                      >
                        <Play className="text-white w-5 h-5 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.7s ease' }}
                    className="group-hover:scale-105"
                  />
                )}

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'var(--color-accent)',
                      color: 'white',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      marginBottom: '6px',
                      width: 'fit-content',
                    }}
                  >
                    {item.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                  <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(12px)' }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar */}
            <div
              className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-10"
              style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)' }}
            >
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {lightboxIndex + 1} / {galleryItems.length}
              </span>
              <button
                style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                onClick={() => setLightboxIndex(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prev / Next */}
            {galleryItems.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10"
                  style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                  onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10"
                  style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}

            {/* Content */}
            <div
              className="relative w-full flex items-center justify-center px-16 md:px-28"
              style={{ maxWidth: '1200px', maxHeight: '80vh' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.96, x: 16 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: -16 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {galleryItems[lightboxIndex].type === 'video' ? (
                    <video
                      src={galleryItems[lightboxIndex].src}
                      controls
                      autoPlay
                      style={{ maxWidth: '100%', maxHeight: '72vh', borderRadius: '12px', boxShadow: '0 32px 80px rgba(0,0,0,0.8)' }}
                    />
                  ) : (
                    <img
                      src={galleryItems[lightboxIndex].src}
                      alt={galleryItems[lightboxIndex].title}
                      style={{ maxWidth: '100%', maxHeight: '72vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 32px 80px rgba(0,0,0,0.8)' }}
                    />
                  )}
                  <div className="mt-5 text-center">
                    <h3 style={{ color: 'white', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 400 }}>
                      {galleryItems[lightboxIndex].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
