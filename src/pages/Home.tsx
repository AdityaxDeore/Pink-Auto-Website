import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import Counter from '../components/ui/Counter';
import {
  ShieldCheckIcon, CheckCircleIcon, SparklesIcon, WalletIcon,
  MapPinIcon, BriefcaseIcon, GraduationCapIcon, UserIcon,
  HeartIcon, CalendarIcon, UsersIcon, AwardIcon,
  SmartphoneIcon, WhatsAppIcon, PhoneIcon,
} from '../components/ui/Icons';

const features = [
  { Icon: ShieldCheckIcon, title: 'Women-First Safety', desc: 'Verified women drivers, GPS tracking, and emergency support for every ride.', marathi: 'महिलांची सुरक्षा आमचं प्राधान्य' },
  { Icon: CheckCircleIcon, title: 'Verified Drivers', desc: 'Every driver undergoes thorough background verification and training.', marathi: 'प्रत्येक चालक सत्यापित' },
  { Icon: SparklesIcon, title: 'Clean & Comfortable', desc: 'Well-maintained pink auto-rickshaws with clean interiors and comfortable seating.', marathi: 'स्वच्छ आणि आरामदायी प्रवास' },
  { Icon: WalletIcon, title: 'Fair Pricing', desc: 'Transparent metered fares with no surge pricing. Monthly packages available.', marathi: 'योग्य दर, कोणताही अतिरिक्त खर्च नाही' },
];

const services = [
  { Icon: MapPinIcon, title: 'Daily Rides', desc: 'Regular commute within Kolhapur city', image: '/images/daily-rides.jpg' },
  { Icon: BriefcaseIcon, title: 'Office Commute', desc: 'Reliable pickup and drop for professionals', image: '/images/office-commute.jpg' },
  { Icon: GraduationCapIcon, title: 'School & College', desc: 'Safe transport for students', image: '/images/college-student.png' },
  { Icon: UserIcon, title: "Women's Special", desc: 'Dedicated rides with women drivers', image: '/images/woman-driver.png' },
  { Icon: HeartIcon, title: 'Senior Citizen', desc: 'Assisted transport for elderly', image: '/images/senior-citizen.png' },
  { Icon: CalendarIcon, title: 'Event Transport', desc: 'Reliable rides for events & functions', image: '/images/mahalaxmi-temple.png' },
];

const testimonials = [
  { name: 'Sneha Patil', role: 'Working Professional', text: 'Pink Auto has been a lifesaver for my daily commute. I feel completely safe traveling alone even late in the evening. The drivers are extremely professional.', rating: 5 },
  { name: 'Priya Deshmukh', role: 'College Student', text: 'As a college student, Pink Auto gives me and my parents peace of mind. The service is reliable, affordable, and the drivers are always courteous.', rating: 5 },
  { name: 'Meera Kulkarni', role: 'Mother of Two', text: "I trust Pink Auto completely for my children's school pickup. The verified drivers and GPS tracking give me confidence that my kids are safe.", rating: 5 },
];

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="hero" style={{ background: '#1A0A12' }}>
        <div className="hero-bg">
          <img src="/images/hero-pink-auto.png" alt="Pink Auto Kolhapur" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <motion.h1 className="text-display" style={{ color: 'white' }}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              Kolhapur's Trusted <span className="gradient-text">Pink Auto</span> Service
            </motion.h1>

            <motion.p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1.25rem', maxWidth: 560 }}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
              Safe, Comfortable & Reliable Auto Service for Women, Students, Senior Citizens and Families.
            </motion.p>

            <motion.p className="text-marathi" style={{ color: 'rgba(255,255,255,0.55)', marginTop: '0.75rem', fontSize: '1.15rem' }}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
              "कोल्हापूरची भरवशाची पिंक ऑटो सेवा"
            </motion.p>
            <motion.div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
              <a href="https://wa.me/919876543210?text=Hello%20Pink%20Auto!" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon size={16} /> Book on WhatsApp
              </a>
              <a href="tel:+919876543210" className="btn" style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)', color: 'white' }}>
                <PhoneIcon size={16} /> Call Now
              </a>
              <Link to="/driver-registration" className="btn" style={{ background: 'transparent', color: 'rgba(255,255,255,0.8)' }}>
                Become a Driver →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section style={{ background: 'white', padding: '2.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(2rem, 5vw, 3.5rem)', flexWrap: 'wrap' }}>
            {[
              { Icon: UsersIcon, text: 'Trusted by Local Families' },
              { Icon: UserIcon, text: 'Women-First Transportation' },
              { Icon: ShieldCheckIcon, text: 'Safe & Verified Rides' },
              { Icon: AwardIcon, text: 'Professional Drivers' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', whiteSpace: 'nowrap' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <item.Icon size={18} color="var(--color-black)" />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section--sm" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-4">
            <Counter end={5000} suffix="+" label="Happy Rides" />
            <Counter end={50} suffix="+" label="Verified Drivers" />
            <Counter end={4} suffix=".8" label="Customer Rating" prefix="" />
            <Counter end={15} suffix="+" label="Areas Covered" />
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <FadeIn direction="left">
              <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/images/hero-pink-auto.png" alt="About Pink Auto" style={{ width: '100%', height: 400, objectFit: 'cover' }} />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <span className="eyebrow">About Us</span>
                <h2 className="text-h2" style={{ marginTop: '1rem' }}>
                  Empowering Women Through <span className="gradient-text">Safe Transportation</span>
                </h2>
                <p className="text-body-lg" style={{ marginTop: '1.25rem', color: 'var(--text-secondary)' }}>
                  Pink Auto was born from a simple yet powerful vision — to provide women, students, senior citizens, and families in Kolhapur with a transportation service they can trust completely.
                </p>
                <p className="text-marathi" style={{ marginTop: '1rem', color: 'var(--color-gray-500)' }}>
                  "महिला सक्षमीकरण – सुरक्षित वाहतुकीद्वारे"
                </p>
                <Link to="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn Our Story →</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="text-h2" style={{ marginTop: '1rem' }}>Why Kolhapur Trusts <span className="gradient-text">Pink Auto</span></h2>
              <p className="text-marathi" style={{ marginTop: '0.5rem', color: 'var(--color-gray-500)' }}>"विश्वासार्ह सेवा, प्रत्येक प्रवासात"</p>
            </div>
          </FadeIn>
          <div className="grid-4">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ padding: '2rem', textAlign: 'center', height: '100%' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <f.Icon size={28} color="var(--color-black)" />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
                  <p className="text-marathi" style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>{f.marathi}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Our Services</span>
              <h2 className="text-h2" style={{ marginTop: '1rem' }}>Premium Services for <span className="gradient-text">Every Need</span></h2>
              <p className="text-marathi" style={{ marginTop: '0.5rem', color: 'var(--color-gray-500)' }}>"प्रत्येक गरजेसाठी सेवा उपलब्ध"</p>
            </div>
          </FadeIn>
          <div className="grid-3">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card" style={{ height: '100%' }}>
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <s.Icon size={20} color="var(--color-black)" />
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{s.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/services" className="btn btn-primary">View All Services →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Safety Preview ── */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <FadeIn direction="left">
              <div>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Safety First</span>
                <h2 className="text-h2" style={{ color: 'white', marginTop: '1.25rem' }}>Your Safety Is Our <span className="gradient-text">Top Priority</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.25rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  Every Pink Auto ride comes with multiple layers of safety including verified drivers, GPS tracking, emergency assistance, and 24/7 customer support.
                </p>
                <p className="text-marathi" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem', fontSize: '1rem' }}>"तुमची सुरक्षा, आमची जबाबदारी"</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                  {['GPS Enabled Vehicles', 'Background Verified Drivers', 'Emergency SOS Button', '24/7 Customer Support'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <CheckCircleIcon size={14} color="white" />
                      </div>
                      <span style={{ fontSize: '0.95rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/safety" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn About Safety →</Link>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <img src="/images/woman-driver.png" alt="Safe Pink Auto Driver" style={{ width: '100%', height: 450, objectFit: 'cover' }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Testimonials Preview ── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Testimonials</span>
              <h2 className="text-h2" style={{ marginTop: '1rem' }}>What Our Riders <span className="gradient-text">Say</span></h2>
            </div>
          </FadeIn>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="testimonial-card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} style={{ color: '#FFC107', fontSize: '1.125rem' }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic' }}>"{t.text}"</p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--color-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/testimonials" className="btn btn-secondary">Read More Reviews →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">Gallery</span>
              <h2 className="text-h2" style={{ marginTop: '1rem' }}>Pink Auto <span className="gradient-text">In Action</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '250px 250px', gap: '1rem' }}>
            {[
              { src: '/images/hero-pink-auto.png' }, { src: '/images/woman-driver.png' },
              { src: '/images/family-riding.png' }, { src: '/images/college-student.png' },
              { src: '/images/mahalaxmi-temple.png' },
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '100%', ...(i === 0 ? { gridRow: '1 / 3' } : {}) }}>
                  <img src={img.src} alt="Pink Auto Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/gallery" className="btn btn-secondary">View Full Gallery →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── App Coming Soon ── */}
      <section className="section app-section">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <FadeIn>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                <SmartphoneIcon size={14} /> Coming Soon
              </span>
              <h2 className="text-h2" style={{ color: 'white', marginTop: '1.25rem' }}>Mobile App <span className="gradient-text">Coming Soon</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Book rides, track your auto in real-time, make payments, and more — all from your smartphone.
              </p>
              <p className="text-marathi" style={{ color: 'rgba(255,255,255,0.4)', marginTop: '0.75rem', fontSize: '1rem' }}>"मोबाईल ॲपवर लवकरच उपलब्ध"</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                <button className="btn" disabled style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.12)', cursor: 'not-allowed', gap: '0.75rem' }}>
                  <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  App Store
                </button>
                <button className="btn" disabled style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.12)', cursor: 'not-allowed', gap: '0.75rem' }}>
                  <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.832l2.688 1.554a1 1 0 0 1 0 1.742l-2.69 1.556-2.535-2.535 2.537-2.317zM5.864 2.658L16.8 9.483l-2.302 2.302-8.634-8.634v-.493z"/></svg>
                  Play Store
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ background: 'var(--color-gray-100)', borderRadius: 'var(--radius-2xl)', padding: 'clamp(3rem, 6vw, 5rem)', textAlign: 'center', color: 'var(--color-gray-900)' }}>
              <h2 className="text-h2" style={{ color: 'var(--color-gray-900)' }}>Ready for a Safe Ride?</h2>
              <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: 'var(--color-gray-700)', maxWidth: 500, margin: '1rem auto 0' }}>
                Book your Pink Auto now via WhatsApp or give us a call. We're here for you.
              </p>
              <p className="text-marathi" style={{ marginTop: '0.5rem', color: 'var(--color-gray-500)' }}>"आजच तुमची सुरक्षित सवारी बुक करा"</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book on WhatsApp</a>
                <a href="tel:+919876543210" className="btn btn-secondary">Call Now</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}