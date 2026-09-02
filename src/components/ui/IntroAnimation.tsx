import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 1200; // Fast 1.2s load for crisp professionalism

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      
      // Smooth ease-out sine progress curve
      const easedProgress = Math.min(100, Math.round(100 * Math.sin((pct / 100) * (Math.PI / 2))));
      setProgress(easedProgress);

      if (pct < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Hold briefly at 100% then start fade out
        const holdTimer = setTimeout(() => {
          setVisible(false);
          const completeTimer = setTimeout(() => {
            onComplete();
          }, 500);
          return () => clearTimeout(completeTimer);
        }, 180);
        return () => clearTimeout(holdTimer);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'linear-gradient(135deg, #FFF0F5 0%, #FCE4EC 40%, #F8BBD0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            zIndex: 99999,
            overflow: 'hidden',
          }}
        >
          {/* Ambient background glow elements */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: 380,
              height: 380,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(233,30,99,0.12) 0%, rgba(233,30,99,0) 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-10%',
              left: '-5%',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(233,30,99,0.1) 0%, rgba(233,30,99,0) 70%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Main Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              textAlign: 'center',
              zIndex: 1,
              padding: '0 1.5rem',
              maxWidth: 480,
              width: '100%',
            }}
          >
            {/* Logo Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}
            >
              <img
                src="/logo.png"
                alt="Gatigo Logo"
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 10px 28px rgba(233, 30, 99, 0.28)',
                  border: '3px solid #FFF',
                }}
              />
            </motion.div>

            {/* Marathi Tagline */}
            <div
              style={{
                fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#E91E63',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                marginBottom: '0.6rem',
              }}
            >
              सुरक्षित प्रवास, आमची जबाबदारी
            </div>

            {/* Brand Title */}
            <div
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
                fontWeight: 800,
                fontFamily: "'Playfair Display', serif",
                color: '#1A1A1A',
                lineHeight: 1.15,
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
              }}
            >
              Welcome to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E91E63 0%, #D81B60 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                }}
              >
                Gatigo
              </span>
            </div>

            {/* Sleek Professional Progress Bar Section */}
            <div style={{ width: '100%', maxWidth: 320, margin: '0 auto' }}>
              {/* Progress Labels */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  fontSize: '0.825rem',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                }}
              >
                <span style={{ color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {progress < 100 ? 'Loading Experience...' : 'Ready'}
                </span>
                <span
                  style={{
                    color: '#E91E63',
                    fontVariantNumeric: 'tabular-nums',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                  }}
                >
                  {progress}%
                </span>
              </div>

              {/* Progress Track */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '7px',
                  borderRadius: '999px',
                  background: 'rgba(233, 30, 99, 0.12)',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                }}
              >
                {/* Progress Bar Fill */}
                <div
                  style={{
                    height: '100%',
                    width: `${progress}%`,
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #E91E63 0%, #FF4081 50%, #E91E63 100%)',
                    boxShadow: '0 0 10px rgba(233, 30, 99, 0.5)',
                    transition: 'width 30ms ease-out',
                    position: 'relative',
                  }}
                >
                  {/* Tip highlight glow */}
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      bottom: 0,
                      width: '12px',
                      borderRadius: '50%',
                      background: '#FFF',
                      boxShadow: '0 0 8px #FFF, 0 0 12px #E91E63',
                      opacity: progress > 5 ? 0.9 : 0,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
