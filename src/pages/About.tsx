import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import { ShieldIcon, ZapIcon, UsersIcon, StarIcon, LeafIcon, TargetIcon, EyeIcon, MessageCircleIcon } from '../components/ui/Icons';
import videoShotImage from '../assets/images/Videoshot_20260728_124328.jpg';


const values = [
  { Icon: ShieldIcon, title: 'Safety First', desc: 'Every decision we make prioritizes the safety of our riders and drivers.' },
  { Icon: ZapIcon, title: 'Women Empowerment', desc: "Creating employment opportunities for women drivers and ensuring women's safety." },
  { Icon: UsersIcon, title: 'Community Trust', desc: 'Building lasting relationships with our families through reliable service.' },
  { Icon: StarIcon, title: 'Excellence', desc: 'Delivering premium quality service that exceeds expectations.' },
  { Icon: LeafIcon, title: 'Sustainability', desc: 'Contributing to cleaner, safer urban mobility for our city.' },
  { Icon: TargetIcon, title: 'Transparency', desc: 'Fair pricing, honest service, and open communication with our community.' },
];

export default function About() {
  return (
    <>
      {/* ── Introduction ── */}
      <section className="section" style={{ paddingTop: 'clamp(5rem, 10vh, 7rem)', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            <FadeIn direction="left">
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-accent)', fontSize: '1.125rem' }}>About Pink Auto</span>
                <h2 className="text-display-lg" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Who We <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Are</span></h2>
                <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.5rem', lineHeight: 1.6, fontWeight: 500 }}>
                  More Than Just a Ride Service
                </p>
                <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                  Pink Auto was founded with a single purpose: to provide a safe, reliable, and comfortable commuting experience. We champion women driver empowerment, creating dignified employment opportunities while we shield and empower our passengers — building a transport ecosystem rooted entirely in trust.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div style={{ borderRadius: 'var(--radius-3xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(26,26,26,0.05)' }}>
                <img src={videoShotImage} alt="Pink Auto Experience" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} className="aspect-[4/5]" />
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
                  To make the city the safest place for women commuters by providing a reliable, comfortable, and professionally managed auto-rickshaw service that sets the standard for women-centric transportation across Maharashtra — and to champion women's empowerment by creating dignified, financially independent employment opportunities for women drivers.
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
                  To empower women through safe transportation, create meaningful employment for women drivers, and build a community-driven mobility service that every family can trust.
                </p>
                <p className="text-marathi" style={{ marginTop: '1rem', color: 'var(--color-gray-500)' }}>"सुरक्षा, सक्षमीकरण आणि विश्वास"</p>
              </div>
            </FadeIn>
          </div>
        </div>
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
          <div className="grid-3 mobile-carousel">
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
          <div className="grid-2 items-center gap-10 md:gap-16">
            <FadeIn direction="left">
              <div>
                <span className="eyebrow">Women Empowerment</span>
                <h2 className="text-h2" style={{ marginTop: '1rem' }}>Empowering Women Through <span className="gradient-text">Employment</span></h2>
                <p style={{ marginTop: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Pink Auto is more than a transportation service — it's a platform for women's economic independence.
                </p>
                <ul style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                  {[
                    'Professional driving training and certification',
                    'Steady income and financial independence',
                    'Flexible working hours',
                    'Insurance and safety equipment',
                    'Community support and mentorship',
                    'Recognition and dignity in their profession',
                    'Financial assistance through loans for pink auto purchase',
                    'Access to CSR funds and grants for vehicle procurement',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--color-black)', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <p className="text-marathi" style={{ marginTop: '1.25rem', color: 'var(--color-gray-500)' }}>"महिला सक्षमीकरण – स्वावलंबनाच्या दिशेने"</p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div style={{ borderRadius: 'var(--radius-3xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/images/chatgpt-07-41-19.png" alt="Women Empowerment" style={{ width: '100%', objectFit: 'cover', objectPosition: 'center bottom' }} className="h-72 md:h-[450px]" />
              </div>
            </FadeIn>
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
              <h3 className="text-h3" style={{ marginBottom: '1.25rem' }}>A Message from the Team / Organisation</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: 600, margin: '0 auto', fontStyle: 'italic' }}>
                "When I started Pink Auto, I had one goal — to ensure that no woman ever feels unsafe while commuting. Every pink auto-rickshaw you see on our streets is a promise of safety, dignity, and empowerment."
              </p>
              <p className="text-marathi" style={{ marginTop: '1.25rem', color: 'var(--color-gray-500)', fontSize: '1rem' }}>"कोल्हापूरला सुरक्षित बनवणं हे आमचं स्वप्न आहे"</p>
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ fontWeight: 600, fontSize: '1rem' }}>Pink Auto Team</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Pink Auto Organisation</div>
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
