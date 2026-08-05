import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import {
  ShieldCheckIcon, CheckCircleIcon, SparklesIcon, WalletIcon,
  MapPinIcon, BriefcaseIcon, GraduationCapIcon, UserIcon,
  HeartIcon, CalendarIcon,
} from '../components/ui/Icons';
import { getImage } from '../utils/images';
import heroImage from '../assets/images/hero.png';
import imgDaily from '../assets/images/Videoshot_20260728_124328.jpg';
import imgOffice from '../assets/images/office _new.png';
import imgSchool from '../assets/images/School_new.png';
import imgWomen from '../assets/images/women_only.jpg';
import imgSenior from '../assets/images/Videoshot_20260728_124537.jpg';
import imgEvent from '../assets/images/event.jpg';

const features = [
  { Icon: ShieldCheckIcon, title: 'Women-First Safety', desc: 'Verified women drivers, GPS tracking, and emergency support for every ride.', marathi: 'महिलांची सुरक्षा आमचं प्राधान्य' },
  { Icon: CheckCircleIcon, title: 'Verified Drivers', desc: 'Every driver undergoes thorough background verification and training.', marathi: 'प्रत्येक चालक सत्यापित' },
  { Icon: SparklesIcon, title: 'Clean & Comfortable', desc: 'Well-maintained pink auto-rickshaws with clean interiors and comfortable seating.', marathi: 'स्वच्छ आणि आरामदायी प्रवास' },
  { Icon: WalletIcon, title: 'Fair Pricing', desc: 'We provide an estimate fare range for your route. The final fare is negotiable with the driver, ensuring flexibility and fairness.', marathi: 'अंदाजे भाडे सांगतो, चालकाशी बोलून ठरवा' },
];

const services = [
  { Icon: MapPinIcon, title: 'Daily Rides', desc: 'Regular commute within the city', image: imgDaily },
  { Icon: BriefcaseIcon, title: 'Office Commute', desc: 'Reliable pickup and drop for professionals', image: imgOffice },
  { Icon: GraduationCapIcon, title: 'School & College', desc: 'Safe transport for students', image: imgSchool },
  { Icon: UserIcon, title: "Women's Special", desc: 'Dedicated rides with women drivers', image: imgWomen },
  { Icon: HeartIcon, title: 'Senior Citizen', desc: 'Assisted transport for elderly', image: imgSenior },
  { Icon: CalendarIcon, title: 'Event Transport', desc: 'Reliable rides for events & functions', image: imgEvent },
];

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <div className="editorial-grid">
        <div className="editorial-line" />
        <div className="editorial-line" />
        <div className="editorial-line" />
        <div className="editorial-line" />
      </div>

      {/* ── Hero Section ── */}
      <section className="section" style={{ background: 'transparent', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0', position: 'relative' }}>
        {/* Right Edge-to-Edge Image (Desktop) */}
        <motion.div 
          className="absolute right-0 bottom-0 hidden lg:block w-[40vw] z-0"
          style={{ top: '80px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={heroImage} alt="Pink Auto" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        <div className="container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-16">
            <div className="hero-content lg:col-span-7 lg:col-start-1" style={{ padding: '8rem 0 4rem 0' }}>
              <div className="flex items-center gap-4 mb-6">
                <div style={{ height: '1px', width: '40px', background: 'var(--color-accent)' }} />
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Pink Auto</span>
              </div>
              <motion.h1 className="text-display" style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
                Safe & Reliable Rides for <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Everyone</span>
              </motion.h1>

              <motion.p className="text-body-lg" style={{ color: 'var(--text-secondary)', marginTop: '2rem', maxWidth: 480 }}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}>
                Your trusted pink auto-rickshaw service providing safe, comfortable, and reliable transportation for women, students, senior citizens, and families.
              </motion.p>

              <motion.p className="text-marathi" style={{ color: 'var(--color-accent)', marginTop: '0.75rem', fontSize: '1.1rem' }}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}>
                "सुरक्षित प्रवास, आमची जबाबदारी"
              </motion.p>

              <motion.div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '3.5rem' }}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <a href="#" className="btn btn-primary">
                  Download App
                </a>
                <Link to="/driver-registration" className="btn btn-secondary" style={{ background: 'var(--color-black)', color: 'white', borderColor: 'var(--color-black)' }}>
                  Become a Driver
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </motion.div>
            </div>
            {/* Mobile Image (Hidden on Desktop) */}
            <motion.div className="lg:hidden w-full h-[50vh] mb-8"
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img src={heroImage} alt="Pink Auto" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Editorial Divider ── */}
      <div className="container">
        <div style={{ width: '100%', height: '1px', background: 'rgba(26,26,26,0.1)' }} />
      </div>

      {/* ── About Preview ── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-16">
            <FadeIn direction="left" className="lg:col-span-5 lg:col-start-1 group">
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-3xl)' }}>
                <video
                  src="/videos/driving.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  className="h-80 md:h-[400px] transition-all duration-[2000ms] group-hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" className="lg:col-span-5 lg:col-start-7">
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>01. Our Heritage</span>
                <h2 className="text-h2" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                  Empowering <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Women</span> Through Safe Transport
                </h2>
                <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.125rem', lineHeight: 1.8 }}>
                  Pink Auto was born from a simple yet powerful vision — to provide women, students, senior citizens, and families with a transportation service they can trust completely.
                </p>
                <p className="text-marathi" style={{ color: 'var(--color-accent)', marginBottom: '3rem' }}>
                  "महिला सक्षमीकरण – सुरक्षित वाहतुकीद्वारे"
                </p>
                <Link to="/about" className="btn btn-secondary">Read Our Story</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section" style={{ background: 'var(--color-canvas-soft)' }}>
        <div className="container">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 mb-16">
              <div className="lg:col-span-6 lg:col-start-2">
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Our Features</span>
                <h2 className="text-display-md" style={{ marginTop: '1rem' }}>Why You Trust <span style={{ fontStyle: 'italic' }}>Pink Auto</span>?</h2>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ padding: '2.5rem 2rem', height: '100%' }}>
                  <div style={{ marginBottom: '2rem', color: 'var(--color-accent)' }}>
                    <f.Icon size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 400, fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.desc}</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-12 mb-16">
              <div className="lg:col-span-6 lg:col-start-2">
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Our Services</span>
                <h2 className="text-display-md" style={{ marginTop: '1rem' }}>Premium Services for <span style={{ fontStyle: 'italic' }}>Every Need</span></h2>
                <p className="text-marathi" style={{ marginTop: '0.5rem', color: 'var(--color-accent)' }}>"प्रत्येक गरजेसाठी सेवा उपलब्ध"</p>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card group" style={{ height: '100%', padding: '0', borderRadius: 'var(--radius-2xl)', border: 'none', background: 'white' }}>
                  <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0' }}>
                    <img src={s.image} alt={s.title} style={{ width: '100%', height: '280px', objectFit: 'cover' }} className="transition-all duration-[2000ms] group-hover:scale-105" />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ color: 'var(--color-accent)' }}><s.Icon size={20} /></span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 400, fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link to="/services" className="btn btn-secondary">View All Offerings</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Safety Preview ── */}
      <section className="section" style={{ background: 'var(--color-ink)', color: 'var(--color-canvas)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-16">
            <FadeIn direction="left" className="lg:col-span-5 lg:col-start-2">
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Safety First</span>
                <h2 className="text-display-md" style={{ color: 'var(--color-canvas)', marginTop: '1.5rem' }}>Your Safety Is Our <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Top Priority</span></h2>
                <p style={{ color: 'rgba(249, 248, 246, 0.7)', marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Every Pink Auto ride comes with multiple layers of safety including verified drivers, GPS tracking, emergency assistance, and 24/7 customer support.
                </p>
                <p className="text-marathi" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem', fontSize: '1rem' }}>"तुमची सुरक्षा, आमची जबाबदारी"</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '3rem' }}>
                  {['GPS Enabled Vehicles', 'Background Verified Drivers', 'Emergency SOS Protocol', '24/7 Dedicated Support'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(249, 248, 246, 0.9)' }}>
                      <div style={{ width: '4px', height: '4px', background: 'var(--color-accent)' }} />
                      <span style={{ fontSize: '1rem', letterSpacing: '0.02em' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '3.5rem' }}>
                  <Link to="/safety" className="btn" style={{ background: 'var(--color-canvas)', color: 'var(--color-ink)' }}>Review Safety Protocol</Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="lg:col-span-5 lg:col-start-8 group">
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-3xl)' }}>
                <img src={getImage(5)} alt="Safe Pink Auto Driver" style={{ width: '100%', objectFit: 'cover' }} className="h-96 md:h-[600px] transition-all duration-[2000ms] group-hover:scale-105" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section className="section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <FadeIn>
            <div style={{ background: 'var(--color-canvas-soft)', border: '1px solid rgba(26,26,26,0.1)', padding: 'clamp(4rem, 8vw, 8rem)', textAlign: 'center' }}>
              <h2 className="text-display-lg" style={{ color: 'var(--color-ink)' }}>Ready for a <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Safe Ride?</span></h2>
              <p style={{ marginTop: '2rem', fontSize: '1.125rem', color: 'var(--color-body)', maxWidth: 500, margin: '2rem auto 0' }}>
                Book your Pink Auto now via WhatsApp or give us a call. We're here for you.
              </p>
              <p className="text-marathi" style={{ marginTop: '0.75rem', color: 'var(--color-body)' }}>"आजच तुमची सुरक्षित सवारी बुक करा"</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Reserve on WhatsApp</a>
                <a href="tel:+919876543210" className="btn btn-secondary">Call Concierge</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}