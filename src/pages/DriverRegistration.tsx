import { motion } from 'framer-motion';
import { DownloadButtons } from '../components/ui/download-buttons';
import FadeIn from '../components/ui/FadeIn';

const benefits = [
  {
    icon: '💰',
    title: 'Better Earnings',
    desc: 'Keep 100% of your metered fare. Zero commission on street pickups. Earn more every ride.',
  },
  {
    icon: '⏰',
    title: 'Flexible Hours',
    desc: 'Work on your own schedule. Balance work, family, and personal time — no fixed shifts.',
  },
  {
    icon: '🛡️',
    title: 'Safety Support',
    desc: 'Emergency SOS button, GPS tracking, and continuous 24/7 operational support on every ride.',
  },
  {
    icon: '🏥',
    title: 'Health Insurance',
    desc: 'Accidental and health insurance coverage for you and your family members.',
  },
  {
    icon: '🎓',
    title: 'Free Training',
    desc: 'Professional training in self-defense, customer service, and vehicle maintenance — all free.',
  },
  {
    icon: '🏆',
    title: 'Rewards & Bonuses',
    desc: 'Earn rewards, priority assignments, and performance bonuses as you complete more rides.',
  },
];

const requirements = [
  'Valid driving license (LMV / Auto-Rickshaw)',
  'Aadhaar card (KYC verification)',
  'Police clearance certificate',
  'Own or leased auto-rickshaw',
  'Minimum 1 year driving experience',
  'Smartphone with internet connection',
];

const steps = [
  { num: '01', title: 'Download the App', desc: 'Get the GatiGo Partner app from App Store or Google Play and sign up.' },
  { num: '02', title: 'Document Check', desc: 'Submit your license, Aadhaar, and other documents for quick verification.' },
  { num: '03', title: 'Training', desc: 'Attend a free one-day orientation and safety training session.' },
  { num: '04', title: 'Start Earning', desc: 'You\'re live! Start getting passenger requests and earn every day.' },
];

export default function DriverRegistration() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section
        style={{
          background: 'var(--color-ink)',
          padding: 'clamp(6rem, 12vw, 10rem) 0 clamp(4rem, 8vw, 7rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative element */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 65%)',
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Join Our Fleet</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 500,
                color: 'var(--color-canvas)',
                marginTop: '1.5rem',
                lineHeight: 1.1,
                maxWidth: 700,
              }}
            >
              Drive with <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>GatiGo</em>.<br />
              Empower Your Community.
            </h1>
            <p style={{ color: 'rgba(249,248,246,0.65)', fontSize: '1.15rem', marginTop: '1.75rem', maxWidth: 560, lineHeight: 1.8 }}>
              Be part of Kolhapur's most trusted women-first auto service. Earn better, work freely, and make a difference in your community.
            </p>
            <p className="text-marathi" style={{ color: 'var(--color-accent)', opacity: 0.8, marginTop: '1rem' }}>
              "महिला सक्षमीकरण – एक प्रवास एका वेळी"
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '3rem' }}>
              <DownloadButtons />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="section" style={{ background: 'var(--color-canvas-soft)' }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Why GatiGo?</span>
              <h2 className="text-display-md mt-3">
                Benefits of Joining <span style={{ fontStyle: 'italic' }}>Our Fleet</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                  style={{ padding: '2.25rem', height: '100%', background: 'white', border: '1px solid rgba(26,26,26,0.06)' }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1 }}>{b.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 500, fontFamily: 'var(--font-heading)', marginBottom: '0.875rem' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{b.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section" style={{ background: 'var(--color-canvas)' }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Process</span>
              <h2 className="text-display-md mt-3">
                How to <span style={{ fontStyle: 'italic' }}>Get Started</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: 480, margin: '1rem auto 0', lineHeight: 1.7 }}>
                Joining GatiGo takes just a few simple steps. No complicated forms — just reach out!
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      opacity: 0.12,
                      lineHeight: 1,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ── */}
      <section className="section" style={{ background: 'var(--color-canvas-soft)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
            <FadeIn direction="left" className="lg:col-span-5 lg:col-start-2">
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Eligibility</span>
              <h2 className="text-h2" style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
                What You <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Need</span> to Join
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                We keep our requirements simple and transparent. If you meet these basics, you're ready to drive with GatiGo!
              </p>
              <a
                href="#download"
                className="btn btn-primary"
              >
                Download the App
              </a>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-4 lg:col-start-8">
              <div
                className="card"
                style={{ padding: '2.5rem', background: 'white', border: '1px solid rgba(26,26,26,0.08)' }}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.75rem', fontFamily: 'var(--font-heading)' }}>
                  Required Documents &amp; Qualifications
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {requirements.map((req, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0, marginTop: '0.05rem' }}>✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: 'var(--color-ink)', padding: 'clamp(5rem, 10vw, 8rem) 0' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Ready?</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-canvas)', marginTop: '1.25rem', lineHeight: 1.15 }}>
                Join GatiGo Today &amp; <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Start Earning</em>
              </h2>
              <p style={{ color: 'rgba(249,248,246,0.6)', marginTop: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Download the GatiGo Partner App to complete your registration, submit documents, and start accepting rides today.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '3rem' }}>
                <DownloadButtons />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
