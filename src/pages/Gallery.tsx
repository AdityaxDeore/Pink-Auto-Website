import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

import { allImages } from '../utils/images';

// Material folder photos/videos (copied to public/gallery/ and public/videos/)
const materialVideos = [
  { src: '/gallery/wa-video-1.mp4', type: 'video', category: 'Videos', title: 'Pink Auto in Action' },
  { src: '/videos/driving.mp4', type: 'video', category: 'Videos', title: 'Pink Auto Driving' },
];

// Include all images, not just GIFs
const staticImages = allImages
  .filter(src => !src.includes('hero.png')) // Exclude some specific UI assets if needed
  .map((src, i) => {
    let title = `Pink Auto Snapshot ${i + 1}`;
    if (src.includes('event')) title = 'Event Transport';
    if (src.includes('women_only')) title = 'Safe for Women';
    if (src.includes('school')) title = 'School Rides';
    if (src.includes('office')) title = 'Office Commute';
    
    return {
      src,
      type: 'photo' as const,
      category: src.endsWith('.gif') ? 'Animated' : 'Photos',
      title,
    }
  });

const allGalleryItems = [...staticImages, ...materialVideos];

const categories = ['All', 'Photos', 'Animated', 'Videos'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? allGalleryItems
    : allGalleryItems.filter(item => item.category === activeCategory);

  const handlePrevious = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
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
      {/* ── Hero Video Banner ── */}
      <section className="relative w-full h-[40vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <video
          src="/gallery/wa-video-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="eyebrow text-rose-300 mb-4" style={{ color: 'var(--color-accent)' }}>Our Story</span>
            <h1 className="text-display-lg text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              The Pink Auto <span className="italic text-rose-300" style={{ color: 'var(--color-accent)' }}>Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our modern fleet, proud drivers, happy customers, and community events through our visual diary.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-[var(--color-canvas)]">
        <div className="container">
          {/* ── Filter Buttons ── */}
          <FadeIn>
            <div className="flex justify-center flex-wrap gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-[var(--color-ink)] text-[var(--color-canvas)] shadow-md' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* ── Masonry Grid ── */}
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => {
                return (
                  <motion.div
                    key={item.src + i}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="masonry-item group cursor-pointer bg-slate-100"
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
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Play icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-500">
                        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/90 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <Play className="text-white w-6 h-6 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: item.src.endsWith('.gif') ? 'contrast(1.1)' : 'none' }}
                    />
                  )}
                    
                    {/* Hover Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="inline-block px-3 py-1 bg-[var(--color-accent)] text-white text-xs font-bold tracking-wider uppercase rounded-full mb-3">
                          {item.category}
                        </span>
                        <h3 className="text-white text-xl md:text-2xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                          {item.title}
                        </h3>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No media found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Dedicated Videos Section (Only shown if 'All' or 'Videos' is active) ── */}
      {(activeCategory === 'All' || activeCategory === 'Videos') && (
        <section className="section bg-slate-900 border-t border-slate-800">
          <div className="container">
            <div className="text-center mb-16">
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Featured Media</span>
              <h2 className="text-display-md text-white mt-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Watch Pink Auto in <span className="italic" style={{ color: 'var(--color-accent)' }}>Action</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {materialVideos.map((video, idx) => (
                <div key={idx} className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl group cursor-pointer"
                  onClick={() => setLightboxIndex(allGalleryItems.findIndex(i => i.src === video.src))}
                >
                  <video
                    src={video.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                      <Play className="text-white w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white text-xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Enhanced Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/60 to-transparent">
              <div className="text-white/70 text-sm font-medium tracking-widest uppercase">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
              <button 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors"
                onClick={() => setLightboxIndex(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Arrows */}
            {filteredItems.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all z-10"
                  onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all z-10"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Main Content Area */}
            <div className="relative w-full max-w-6xl max-h-[80vh] flex items-center justify-center px-12 md:px-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {filteredItems[lightboxIndex].type === 'video' ? (
                    <video
                      src={filteredItems[lightboxIndex].src}
                      controls
                      autoPlay
                      className="max-w-full max-h-[75vh] rounded-lg shadow-2xl bg-black"
                    />
                  ) : (
                    <img
                      src={filteredItems[lightboxIndex].src}
                      alt={filteredItems[lightboxIndex].title}
                      className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                    />
                  )}
                  
                  {/* Caption */}
                  <div className="mt-6 text-center">
                    <h3 className="text-white text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {filteredItems[lightboxIndex].title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30 text-xs font-bold tracking-wider uppercase rounded-full">
                      {filteredItems[lightboxIndex].category}
                    </span>
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
