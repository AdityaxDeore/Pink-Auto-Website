import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';

import { allImages } from '../utils/images';

// Material folder photos/videos (copied to public/gallery/)
const materialPhotos = [
  { src: '/gallery/wa-image-1.jpeg', type: 'photo', category: 'Photos', title: 'Pink Auto Fleet' },
  { src: '/gallery/wa-image-3.jpeg', type: 'photo', category: 'Photos', title: 'Pink Auto Team' },
];

const materialVideos = [
  { src: '/gallery/wa-video-1.mp4', type: 'video', category: 'Videos', title: 'Pink Auto in Action' },
  { src: '/videos/driving.mp4', type: 'video', category: 'Videos', title: 'Pink Auto Driving' },
];

const duplicates = [
  'office.jpg',
  'school.jpg',
  'Videoshot_20260728_124428.jpg',
  'Videoshot_20260728_124435.jpg',
  'Videoshot_20260728_124522.jpg',
  'Videoshot_20260728_124541.jpg'
];

// Real photos from assets (exclude large GIFs and replaced duplicates)
const staticImages = allImages
  .filter(src => !src.endsWith('.gif') && !duplicates.some(dup => src.includes(dup)))
  .map((src, i) => ({
    src,
    type: 'photo' as const,
    category: 'Photos',
    title: `Pink Auto Snapshot ${i + 1}`,
  }))
  .filter(img => ![
    'Pink Auto Snapshot 4',
    'Pink Auto Snapshot 5',
    'Pink Auto Snapshot 6',
    'Pink Auto Snapshot 10',
    'Pink Auto Snapshot 11',
    'Pink Auto Snapshot 13'
  ].includes(img.title));

const allGalleryItems = [...materialPhotos, ...staticImages, ...materialVideos];

const categories = ['All', 'Photos', 'Videos'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<{ src: string; type: string } | null>(null);

  const filteredItems = activeCategory === 'All'
    ? allGalleryItems
    : allGalleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <section className="section page-header-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Our Gallery</span>
            <h2 className="text-h2" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Glimpses of the <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Pink Auto Experience</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Explore our modern fleet, proud drivers, happy customers, and community events.
            </p>
            <p className="text-marathi" style={{ color: 'var(--color-accent)', fontSize: '1.1rem' }}>
              "पिंक ऑटो कुटुंबाची क्षणचित्रे"
            </p>
          </div>

          {/* ── Filter Buttons ── */}
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
                  style={{
                    borderRadius: 'var(--radius-full)',
                    border: activeCategory === cat ? 'none' : '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* ── Masonry Grid ── */}
          <div className="masonry-grid">
            <AnimatePresence>
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.src + i}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="masonry-item"
                  onClick={() => setLightboxItem({ src: item.src, type: item.type })}
                  style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: 'var(--radius-xl)' }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)' }}>
                    {item.type === 'video' ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          playsInline
                          style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-xl)', aspectRatio: '16/9', objectFit: 'cover' }}
                        />
                        {/* Play icon overlay */}
                        <div style={{
                          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(0,0,0,0.25)',
                        }}>
                          <div style={{
                            width: 48, height: 48, borderRadius: '50%',
                            background: 'rgba(233,30,99,0.9)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <span style={{ color: 'white', fontSize: '1.2rem', marginLeft: 3 }}>▶</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-xl)' }}
                      />
                    )}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1.5rem',
                      background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
                      color: 'white',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                    >
                      <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <span className="badge" style={{ background: 'rgba(233,30,99,0.8)', color: 'white', borderColor: 'transparent', fontSize: '0.7rem' }}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightboxItem(null)}
          >
            <button className="lightbox-close" onClick={() => setLightboxItem(null)}>×</button>
            {lightboxItem.type === 'video' ? (
              <motion.video
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={lightboxItem.src}
                controls
                autoPlay
                className="lightbox-image"
                style={{ maxHeight: '85vh', maxWidth: '90vw', borderRadius: 'var(--radius-xl)' }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={lightboxItem.src}
                alt="Fullscreen"
                className="lightbox-image"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
