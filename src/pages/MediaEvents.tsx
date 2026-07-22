import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    date: 'March 8, 2024',
    title: 'Pink Auto Launches 50 New Vehicles on Women\'s Day',
    source: 'Kolhapur Times',
    desc: 'In a major boost to women\'s safe mobility, Pink Auto expanded its fleet with 50 new auto-rickshaws driven entirely by women.',
    image: '/images/hero-pink-auto.png'
  },
  {
    date: 'January 15, 2024',
    title: 'Awarded Best Mobility Startup in Maharashtra',
    source: 'State Innovation Summit',
    desc: 'Recognized for outstanding contribution to urban mobility and women empowerment at the annual startup summit.',
    image: '/images/woman-driver.png'
  },
  {
    date: 'November 20, 2023',
    title: 'Partnership with Local Colleges for Safe Student Transport',
    source: 'Education Today',
    desc: 'Signed MOU with 5 major colleges in Kolhapur to provide dedicated, subsidized safe transport for female students.',
    image: '/images/college-student.png'
  }
];

export default function MediaEvents() {
  return (
    <>
      <PageHero
        eyebrow="Media & Events"
        title="Making Headlines for the Right Reasons"
        subtitle="Follow our journey in the news, community events, and milestones as we revolutionize safe transportation in Kolhapur."
        marathi="आमची प्रगती, समाजाची प्रगती"
      />

      <section className="section">
        <div className="container">
          
          <div style={{ display: 'grid', gap: '3rem' }}>
            {newsItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  overflow: 'hidden',
                  ...((window.innerWidth > 768) && { gridTemplateColumns: '350px 1fr' })
                }}>
                  <div style={{ height: '100%', minHeight: 250, overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span className="badge">{item.source}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.date}</span>
                    </div>
                    <h3 className="text-h3" style={{ marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {item.desc}
                    </p>
                    <div>
                      <Link to="/contact" className="btn btn-ghost btn-sm">Read Full Story →</Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
        </div>
      </section>

      {/* ── Community Events Banner ── */}
      <section className="section" style={{ background: 'var(--bg-dark)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <span className="eyebrow" style={{ color: '#FF80AB' }}>Community</span>
            <h2 className="text-h2" style={{ color: 'white', marginTop: '1rem' }}>Upcoming Events</h2>
            <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: 600, margin: '1rem auto 3rem' }}>
              We regularly organize safety workshops, driver training programs, and community meetups.
            </p>
            
            <div className="card-glass-dark" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', maxWidth: 800, margin: '0 auto', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ color: '#FF80AB', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>NEXT EVENT</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>Women's Self-Defense Workshop</h3>
                  <div style={{ display: 'flex', gap: '1.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    <span>📅 August 15, 2024</span>
                    <span>📍 Rankala Lake Park</span>
                  </div>
                </div>
                <button className="btn btn-primary">Register Free</button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
