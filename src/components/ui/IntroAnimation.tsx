import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show welcome for 2s then fade out
    const t1 = setTimeout(() => setVisible(false), 2000);
    // Call onComplete after fade
    const t2 = setTimeout(() => onComplete(), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
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
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: 300, height: 300, borderRadius: '50%',
            background: 'rgba(233,30,99,0.07)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-8%', left: '-5%',
            width: 240, height: 240, borderRadius: '50%',
            background: 'rgba(233,30,99,0.05)',
          }} />

          {/* Welcome text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ textAlign: 'center', zIndex: 1 }}
          >
            <div style={{
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#E91E63',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              marginBottom: '0.75rem',
            }}>
              सुरक्षित प्रवास, आमची जबाबदारी
            </div>
            <div style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              fontFamily: "'Playfair Display', serif",
              color: '#1A1A1A',
              lineHeight: 1.15,
            }}>
              Welcome to{' '}
              <span style={{ color: '#E91E63', fontStyle: 'italic' }}>Pink Auto</span>
            </div>
            <div style={{
              marginTop: '1.25rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
            }}>
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                  style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: '#E91E63',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
