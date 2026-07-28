import FadeIn from '../components/ui/FadeIn';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    date: 'March 8, 2024',
    title: 'Pink Auto Launches 50 New Vehicles on Women\'s Day',
    source: 'Local Times',
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
    desc: 'Signed MOU with 5 major colleges to provide dedicated, subsidized safe transport for female students.',
    image: '/images/college-student.png'
  }
];

export default function MediaEvents() {
  return (
    <>
      <section className="section page-header-section">
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Media & Events</span>
            <h2 className="text-h2" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Making Headlines for the <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Right Reasons</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Follow our journey in the news, community events, and milestones as we revolutionize safe transportation.
            </p>
            <p className="text-marathi" style={{ color: 'var(--color-accent)', fontSize: '1.1rem' }}>
              "आमची प्रगती, समाजाची प्रगती"
            </p>
          </div>
          
          <div style={{ display: 'grid', gap: '3rem' }}>
            {newsItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="promo-card-illustrated grid grid-cols-1 md:grid-cols-[350px_1fr] overflow-hidden" style={{ padding: 0 }}>
                  <div style={{ height: '100%', minHeight: 250, overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span className="badge">{item.source}</span>
                      <span className="text-body-sm-strong" style={{ color: 'var(--color-mute)' }}>{item.date}</span>
                    </div>
                    <h3 className="text-display-md" style={{ marginBottom: '16px' }}>{item.title}</h3>
                    <p className="text-body-md" style={{ color: 'var(--color-body)', marginBottom: '24px' }}>
                      {item.desc}
                    </p>
                    <div>
                      <Link to="/contact" className="btn btn-subtle">Read Full Story →</Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
        </div>
      </section>

      {/* ── Community Events Banner ── */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'var(--color-on-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <span className="eyebrow" style={{ color: 'var(--color-mute)' }}>COMMUNITY</span>
            <h2 className="text-display-xl" style={{ color: 'var(--color-on-dark)', marginTop: '16px' }}>Upcoming Events</h2>
            <p className="text-body-lg" style={{ marginTop: '16px', color: 'var(--color-mute)', maxWidth: 600, margin: '16px auto 48px' }}>
              We regularly organize safety workshops, driver training programs, and community meetups.
            </p>
            
            <div className="promo-card-on-dark" style={{ border: '1px solid var(--color-black-elevated)', maxWidth: 800, margin: '0 auto', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div className="text-body-sm-strong" style={{ color: 'var(--color-mute)', marginBottom: '8px' }}>NEXT EVENT</div>
                  <h3 className="text-display-md" style={{ color: 'var(--color-on-dark)', marginBottom: '8px' }}>Women's Self-Defense Workshop</h3>
                  <div className="text-body-md" style={{ display: 'flex', gap: '24px', color: 'var(--color-mute)' }}>
                    <span>August 15, 2024</span>
                    <span>Rankala Lake Park</span>
                  </div>
                </div>
                <button className="btn btn-secondary">Register Free</button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
