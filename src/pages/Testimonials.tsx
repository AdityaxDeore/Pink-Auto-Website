import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';

const testimonials = [
  {
    name: 'Sneha Patil',
    role: 'Working Professional',
    text: 'Pink Auto has been a lifesaver for my daily commute. I feel completely safe traveling alone even late in the evening. The drivers are extremely professional and polite.',
    rating: 5,
    type: 'Daily Commuter'
  },
  {
    name: 'Priya Deshmukh',
    role: 'College Student',
    text: 'As a college student, Pink Auto gives me and my parents peace of mind. The service is reliable, affordable, and the drivers are always on time.',
    rating: 5,
    type: 'Student'
  },
  {
    name: 'Meera Kulkarni',
    role: 'Mother of Two',
    text: "I trust Pink Auto completely for my children's school pickup. The verified drivers and GPS tracking give me confidence that my kids are in safe hands.",
    rating: 5,
    type: 'Parent'
  },
  {
    name: 'Shalini Sharma',
    role: 'Senior Citizen',
    text: 'The drivers are so patient and helpful. They always assist me in getting in and out of the auto. It feels like traveling with family.',
    rating: 5,
    type: 'Senior Citizen'
  },
  {
    name: 'TechCorp India',
    role: 'Corporate Partner',
    text: 'We partnered with Pink Auto for our female employees\' late-night drops. The service has been exceptional with zero safety incidents in the past year.',
    rating: 5,
    type: 'Corporate'
  },
  {
    name: 'Aarti Joshi',
    role: 'Event Organizer',
    text: "Booked 10 Pink Autos for a women's conference in Kolhapur. The coordination was flawless and the guests loved the pink branding!",
    rating: 4,
    type: 'Event Booking'
  }
];

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Stories of Trust & Safety"
        subtitle="Don't just take our word for it. Hear what the women and families of Kolhapur have to say about their Pink Auto experience."
        marathi="तुमचा विश्वास, आमची ताकद"
      />

      <section className="section">
        <div className="container">
          
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="testimonial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-xl)', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} style={{ color: j < t.rating ? '#FFC107' : '#E2E8F0', fontSize: '1.125rem' }}>★</span>
                      ))}
                    </div>
                    <span className="badge" style={{ fontSize: '0.65rem' }}>{t.type}</span>
                  </div>
                  
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic', flexGrow: 1 }}>
                    "{t.text}"
                  </p>
                  
                  <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.25rem' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'var(--color-black)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontWeight: 700, fontSize: '1.125rem',
                    }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1rem' }}>{t.name}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── Call to action for reviews ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <div style={{
              background: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(2rem, 5vw, 4rem)',
              maxWidth: 800,
              margin: '0 auto',
              border: '1px solid var(--color-gray-200)'
            }}>
              <h2 className="text-h2">Had a Safe Journey?</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                Your feedback helps us improve and gives confidence to other women in Kolhapur to travel safely.
              </p>
              <a href="https://wa.me/919876543210?text=I%20want%20to%20share%20my%20feedback!" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Share Your Feedback
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
