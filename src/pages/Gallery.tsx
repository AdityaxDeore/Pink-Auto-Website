import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';

import { allImages } from '../utils/images';

const categories = ['All', 'Gallery'];

const galleryImages = allImages.map((src, i) => ({
  src,
  category: 'Gallery',
  title: `Pink Auto Snapshot ${i + 1}`,
}));

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

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
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.src + i}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="masonry-item"
                  onClick={() => setLightboxImage(img.src)}
                  style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: 'var(--radius-xl)' }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)' }}>
                    <img
                      src={img.src}
                      alt={img.title}
                      style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-xl)' }}
                    />
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
                      <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>{img.title}</h4>
                      <span className="badge" style={{ background: 'rgba(233,30,99,0.8)', color: 'white', borderColor: 'transparent', fontSize: '0.7rem' }}>
                        {img.category}
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
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightboxImage(null)}
          >
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Fullscreen"
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
