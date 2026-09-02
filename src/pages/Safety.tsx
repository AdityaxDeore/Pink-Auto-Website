import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import Counter from '../components/ui/Counter';
import { getImage } from '../utils/images';
import { SearchIcon, MapPinIcon, AlertCircleIcon, HeadphonesIcon, ShieldIcon, UserIcon, CheckCircleIcon } from '../components/ui/Icons';

const safetyFeatures = [
  { Icon: SearchIcon, title: 'Verified Drivers', desc: 'Every driver undergoes rigorous background verification including police verification, address verification, and reference checks.', details: ['Police verification', 'Address proof verified', 'Character reference check', 'Driving license verification'] },
  { Icon: MapPinIcon, title: 'GPS Enabled Vehicles', desc: 'All Gatigo rickshaws are equipped with GPS tracking devices, enabling real-time location monitoring.', details: ['Real-time tracking', 'Route monitoring', 'Speed alerts', 'Live location sharing'] },
  { Icon: AlertCircleIcon, title: 'Emergency Assistance', desc: 'One-tap SOS button connects riders directly to our emergency response team and local authorities.', details: ['SOS button', 'Direct police connect', 'Emergency contacts alert', 'Rapid response team'] },
  { Icon: HeadphonesIcon, title: '24/7 Customer Support', desc: 'Round-the-clock customer support via phone, WhatsApp, and in-app chat for any queries or emergencies.', details: ['Phone support', 'WhatsApp support', 'Quick response time', 'Multilingual support'] },
  { Icon: ShieldIcon, title: 'Safety Policies', desc: 'Comprehensive safety policies covering ride-sharing protocols, vehicle maintenance, driver conduct, and passenger protection.', details: ['Zero-tolerance policy', 'Regular vehicle checks', 'Driver code of conduct', 'Feedback mechanism'] },
  { Icon: UserIcon, title: 'Women First Commitment', desc: 'Dedicated women drivers available for women passengers. Special safety measures for late-night and solo rides.', details: ['Women driver option', 'Safe late-night rides', 'Family ride sharing', 'Women-only hours'] },
];

const safeJourneySteps = [
  { step: '01', title: 'Book Your Ride', desc: 'Open the Gatigo app and request a ride with just a few taps.' },
  { step: '02', title: 'Driver Assignment', desc: 'A verified driver is assigned. You receive driver details and vehicle number.' },
  { step: '03', title: 'Tracked Ride', desc: 'Your ride is GPS-tracked from pickup to drop-off for complete safety.' },
  { step: '04', title: 'Safe Arrival', desc: 'Arrive safely at your destination. Rate your ride and share feedback.' },
];

export default function Safety() {
  return (
    <>
      <section className="section page-header-section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Safety & Trust</span>
            <h2 className="text-h2" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Your Safety is Our <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Top Priority</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Multiple layers of safety measures ensure every Gatigo ride is secure, comfortable, and trustworthy.
            </p>
            <p className="text-marathi" style={{ color: 'var(--color-accent)', fontSize: '1.1rem' }}>
              "तुमची सुरक्षा हीच आमची सर्वोच्च प्राथमिकता"
            </p>
          </div>
        </div>
      </section>

      <section className="section--sm" style={{ background: 'white', paddingTop: 0 }}>
        <div className="container"><div className="grid-4">
          <Counter end={100} suffix="%" label="Safety Record" />
          <Counter end={50} suffix="+" label="Verified Drivers" />
          <Counter end={0} label="Safety Incidents" />
          <Counter end={24} suffix="/7" label="Support Available" />
        </div></div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Safety Features</span>
              <h2 className="text-h2" style={{ marginTop: '1rem' }}>Multi-Layered <span className="gradient-text">Safety System</span></h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 600, margin: '1rem auto 0' }}>
                We've built a comprehensive safety infrastructure to ensure every ride is secure.
              </p>
            </div>
          </FadeIn>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {safetyFeatures.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card safety-feature-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', height: '100%' }}>
                  <div className="safety-feature-header">
                    <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <f.Icon size={24} color="var(--color-black)" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>{f.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>{f.desc}</p>
                      <div className="safety-details-grid">
                        {f.details.map((d, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--color-black)', fontWeight: 700, fontSize: '0.75rem' }}>●</span> {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Safe Journey</span>
              <h2 className="text-h2" style={{ color: 'var(--color-accent)', marginTop: '1.25rem' }}>Your Safe Journey <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Process</span></h2>
              <p className="text-marathi" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', fontSize: '1rem' }}>"सुरक्षित प्रवासाची प्रक्रिया"</p>
            </div>
          </FadeIn>
          <div className="grid-4">
            {safeJourneySteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ textAlign: 'center', padding: '2rem', borderRadius: 'var(--radius-xl)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', height: '100%' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-sm)', background: 'var(--color-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--font-primary)', margin: '0 auto 1.25rem' }}>{step.step}</div>
                  <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{step.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2 items-center gap-10 md:gap-16">
            <FadeIn direction="left">
              <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src={getImage(13)} alt="Verified Driver" style={{ width: '100%', objectFit: 'cover' }} className="h-72 md:h-[450px]" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <span className="eyebrow">Driver Verification</span>
                <h2 className="text-h2" style={{ marginTop: '1rem' }}>Rigorous <span className="gradient-text">Verification Process</span></h2>
                <p style={{ marginTop: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Every Gatigo driver goes through a multi-step verification process before being approved.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { title: 'Identity Verification', desc: 'Aadhaar, PAN, and driving license verification' },
                    { title: 'Police Background Check', desc: 'Complete police verification and criminal record check' },
                    { title: 'Driving Assessment', desc: 'Professional driving skills evaluation and road test' },
                    { title: 'Safety Training', desc: 'Mandatory safety and customer service training program' },
                    { title: 'Vehicle Inspection', desc: 'Thorough vehicle fitness and safety equipment check' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.125rem' }}>
                        <CheckCircleIcon size={16} color="var(--color-black)" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2 className="text-h2">Feel Safe with Every Ride</h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 500, margin: '1rem auto 0' }}>Book your next safe ride with Gatigo today.</p>
            <p className="text-marathi" style={{ marginTop: '0.5rem', color: 'var(--color-gray-500)' }}>"प्रत्येक प्रवासात सुरक्षा"</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
