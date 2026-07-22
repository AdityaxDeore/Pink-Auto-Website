import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';
import Counter from '../components/ui/Counter';
import { ShieldIcon, ZapIcon, UsersIcon, StarIcon, LeafIcon, TargetIcon, EyeIcon, MessageCircleIcon } from '../components/ui/Icons';

const timeline = [
  { year: '2023', title: 'The Idea', desc: 'Recognized the need for safe transportation for women in Kolhapur.' },
  { year: '2023', title: 'Research & Planning', desc: 'Conducted surveys, spoke with women commuters, and designed the service model.' },
  { year: '2024', title: 'First Fleet', desc: 'Launched with 10 pink auto-rickshaws and trained verified drivers.' },
  { year: '2024', title: 'Growing Trust', desc: 'Reached 2000+ rides and expanded to 30+ drivers across Kolhapur.' },
  { year: '2025', title: 'Community Recognition', desc: 'Received support from local government and NGOs for women empowerment.' },
  { year: '2025', title: 'Scaling Up', desc: 'Expanding fleet, launching mobile app, and adding more service areas.' },
];

const values = [
  { Icon: ShieldIcon, title: 'Safety First', desc: 'Every decision we make prioritizes the safety of our riders and drivers.' },
  { Icon: ZapIcon, title: 'Women Empowerment', desc: "Creating employment opportunities for women drivers and ensuring women's safety." },
  { Icon: UsersIcon, title: 'Community Trust', desc: 'Building lasting relationships with Kolhapur families through reliable service.' },
  { Icon: StarIcon, title: 'Excellence', desc: 'Delivering premium quality service that exceeds expectations.' },
  { Icon: LeafIcon, title: 'Sustainability', desc: 'Contributing to cleaner, safer urban mobility for our city.' },
  { Icon: TargetIcon, title: 'Transparency', desc: 'Fair pricing, honest service, and open communication with our community.' },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Pink Auto" title="Our Story of Empowerment & Safety"
        subtitle="From a vision of safer streets to Kolhapur's most trusted auto-rickshaw service — this is our journey."
        marathi="कोल्हापूरच्या महिलांसाठी सुरक्षित प्रवासाची कहाणी" />

      {/* ── Introduction ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <FadeIn direction="left">
              <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/images/hero-pink-auto.png" alt="Pink Auto Fleet" style={{ width: '100%', height: 450, objectFit: 'cover' }} />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <span className="eyebrow">Who We Are</span>
                <h2 className="text-h2" style={{ marginTop: '1rem' }}>More Than Just a <span className="gradient-text">Ride Service</span></h2>
                <p style={{ marginTop: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Pink Auto is Kolhapur's pioneering women-centric auto-rickshaw service. We are not just a transportation company — we are a movement for women's safety, empowerment, and dignity in everyday commuting.
                </p>
                <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Every pink auto-rickshaw on the streets of Kolhapur represents our commitment to creating a safer, more inclusive transportation ecosystem for women, students, senior citizens, and families.
                </p>
                <p className="text-marathi" style={{ marginTop: '1rem', color: 'var(--color-gray-500)', fontSize: '1.1rem' }}>"फक्त प्रवास नाही, हा विश्वासाचा प्रवास आहे"</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem' }}>
            <FadeIn delay={0}>
              <div className="card" style={{ padding: '3rem', height: '100%' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <EyeIcon size={24} color="var(--color-black)" />
                </div>
                <h3 className="text-h3" style={{ marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  To make Kolhapur the safest city for women commuters by providing a reliable, comfortable, and professionally managed auto-rickshaw service that sets the standard for women-centric transportation across Maharashtra.
                </p>
                <p className="text-marathi" style={{ marginTop: '1rem', color: 'var(--color-gray-500)' }}>"कोल्हापूरला महिलांसाठी सर्वात सुरक्षित शहर बनवणे"</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="card" style={{ padding: '3rem', height: '100%' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <TargetIcon size={24} color="var(--color-black)" />
                </div>
                <h3 className="text-h3" style={{ marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  To empower women through safe transportation, create meaningful employment for women drivers, and build a community-driven mobility service that every family in Kolhapur can trust.
                </p>
                <p className="text-marathi" style={{ marginTop: '1rem', color: 'var(--color-gray-500)' }}>"सुरक्षा, सक्षमीकरण आणि विश्वास"</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section--sm" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container"><div className="grid-4">
          <Counter end={5000} suffix="+" label="Rides Completed" />
          <Counter end={50} suffix="+" label="Verified Drivers" />
          <Counter end={15} suffix="+" label="Service Areas" />
          <Counter end={100} suffix="%" label="Safety Record" />
        </div></div>
      </section>

      {/* ── Values ── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Values</span>
              <h2 className="text-h2" style={{ marginTop: '1rem' }}>What Drives <span className="gradient-text">Us Forward</span></h2>
            </div>
          </FadeIn>
          <div className="grid-3">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card" style={{ padding: '2rem', textAlign: 'center', height: '100%' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <v.Icon size={24} color="var(--color-black)" />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Women Empowerment ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <FadeIn direction="left">
              <div>
                <span className="eyebrow">Women Empowerment</span>
                <h2 className="text-h2" style={{ marginTop: '1rem' }}>Empowering Women Through <span className="gradient-text">Employment</span></h2>
                <p style={{ marginTop: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Pink Auto is more than a transportation service — it's a platform for women's economic independence.
                </p>
                <ul style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                  {['Professional driving training and certification', 'Steady income and financial independence', 'Flexible working hours', 'Insurance and safety equipment', 'Community support and mentorship', 'Recognition and dignity in their profession'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--color-black)', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <p className="text-marathi" style={{ marginTop: '1.25rem', color: 'var(--color-gray-500)' }}>"महिला सक्षमीकरण – स्वावलंबनाच्या दिशेने"</p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/images/woman-driver.png" alt="Women Empowerment" style={{ width: '100%', height: 450, objectFit: 'cover' }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section">
        <div className="container container-narrow">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Journey</span>
              <h2 className="text-h2" style={{ marginTop: '1rem' }}>The <span className="gradient-text">Pink Auto</span> Journey</h2>
            </div>
          </FadeIn>
          <div className="timeline">
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <div className="timeline-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="badge" style={{ fontSize: '0.7rem' }}>{item.year}</span>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{item.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Message ── */}
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container container-narrow">
          <FadeIn>
            <div style={{ background: 'white', borderRadius: 'var(--radius-2xl)', padding: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center', border: '1px solid var(--color-gray-200)' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <MessageCircleIcon size={28} color="var(--color-black)" />
              </div>
              <h3 className="text-h3" style={{ marginBottom: '1.25rem' }}>A Message from the Founder</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: 600, margin: '0 auto', fontStyle: 'italic' }}>
                "When I started Pink Auto, I had one goal — to ensure that no woman in Kolhapur ever feels unsafe while commuting. Every pink auto-rickshaw you see on our streets is a promise of safety, dignity, and empowerment."
              </p>
              <p className="text-marathi" style={{ marginTop: '1.25rem', color: 'var(--color-gray-500)', fontSize: '1rem' }}>"कोल्हापूरला सुरक्षित बनवणं हे आमचं स्वप्न आहे"</p>
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ fontWeight: 600, fontSize: '1rem' }}>Pink Auto Team</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Founder & CEO</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2 className="text-h2">Want to be part of our mission?</h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Join us as a driver or support our women empowerment initiative.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <Link to="/driver-registration" className="btn btn-primary">Become a Driver</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
