import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';

const categories = ['All', 'Vehicles', 'Drivers', 'Customers', 'Events'];

const galleryImages = [
  { src: '/images/hero-pink-auto.png', category: 'Vehicles', title: 'Pink Auto Fleet' },
  { src: '/images/woman-driver.png', category: 'Drivers', title: 'Our Proud Driver' },
  { src: '/images/family-riding.png', category: 'Customers', title: 'Safe Family Ride' },
  { src: '/images/college-student.png', category: 'Customers', title: 'College Student Commute' },
  { src: '/images/mahalaxmi-temple.png', category: 'Vehicles', title: 'Pink Auto at Mahalaxmi Temple' },
  { src: '/images/senior-citizen.png', category: 'Customers', title: 'Assisted Senior Citizen Ride' },
  // Adding some placeholders for layout completeness based on actual file paths if available or repeating
  { src: '/images/daily-rides.jpg', category: 'Vehicles', title: 'Daily Rides' },
  { src: '/images/office-commute.jpg', category: 'Customers', title: 'Office Commute' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Our Gallery"
        title="Glimpses of the Pink Auto Experience"
        subtitle="Explore our modern fleet, proud drivers, happy customers, and community events in Kolhapur."
        marathi="पिंक ऑटो कुटुंबाची क्षणचित्रे"
      />

      <section className="section">
        <div className="container">
          
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
                      style={{
                        width: '100%',
                        display: 'block',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
