import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { SmartphoneIcon } from './Icons';

export default function DownloadAppSection() {
  return (
    <section className="section" style={{ background: 'var(--color-primary)', color: 'var(--color-on-dark)', overflow: 'hidden' }}>
      <div className="container relative">
        {/* Decorative background circle */}
        <div style={{
          position: 'absolute', top: '50%', right: '10%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225,44,108,0.15) 0%, rgba(225,44,108,0) 70%)',
          transform: 'translateY(-50%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <FadeIn direction="left">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <SmartphoneIcon size={24} color="var(--color-accent)" />
                <span className="eyebrow" style={{ color: 'var(--color-mute)' }}>Coming Soon</span>
              </div>
              <h2 className="text-display-md" style={{ color: 'var(--color-on-dark)' }}>
                Your Safety, Now in <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Your Pocket</span>
              </h2>
              <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: 'var(--color-mute)', lineHeight: 1.7, maxWidth: 480 }}>
                We're building a dedicated mobile app to make booking and tracking your Pink Auto rides even easier and safer. 
                Get real-time tracking, one-tap SOS, and seamless payments.
              </p>
              
              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ 
                  display: 'flex', alignItems: 'center', gap: '1rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '1rem 1.5rem', 
                  borderRadius: 'var(--radius-xl)' 
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Join the Waitlist</div>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    style={{
                      background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)',
                      color: 'white', padding: '0.25rem 0', outline: 'none', width: '180px'
                    }}
                  />
                  <button className="btn btn-sm btn-primary" style={{ padding: '0.5rem 1rem' }}>Notify Me</button>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: '280px', height: '580px',
                  background: '#111',
                  borderRadius: '40px',
                  border: '8px solid #222',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 2px #333',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Simulated App Screen */}
                <div style={{ background: 'var(--color-accent)', padding: '2rem 1.5rem', height: '30%', color: 'white' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>9:41</div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <div style={{ width: 12, height: 12, background: 'white', borderRadius: '50%' }} />
                      <div style={{ width: 12, height: 12, background: 'white', borderRadius: '50%' }} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Where to?</h3>
                </div>
                <div style={{ background: 'white', height: '70%', padding: '1.5rem', borderRadius: '24px 24px 0 0', marginTop: '-24px' }}>
                  <div style={{ width: '100%', height: '48px', background: '#f0f0f0', borderRadius: '12px', marginBottom: '1rem' }} />
                  <div style={{ width: '100%', height: '80px', background: '#f9f9f9', borderRadius: '12px', marginBottom: '1rem' }} />
                  <div style={{ width: '100%', height: '80px', background: '#f9f9f9', borderRadius: '12px' }} />
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
