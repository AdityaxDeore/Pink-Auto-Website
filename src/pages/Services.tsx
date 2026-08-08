import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import { MapPinIcon, BriefcaseIcon, GraduationCapIcon, UserIcon, HeartIcon, CalendarIcon, WalletIcon } from '../components/ui/Icons';
import imgDaily from '../assets/images/Videoshot_20260728_124537.jpg';
import imgOffice from '../assets/images/office.png';
import imgSchool from '../assets/images/School_new.png';
import imgWomen from '../assets/images/women_only.jpg';
import imgSenior from '../assets/images/granny.png';
import imgEvent from '../assets/images/event.jpg';
import imgPackages from '../assets/images/IMG_20260728_122118.jpg';

const services = [
  { Icon: MapPinIcon, title: 'Daily Rides', desc: 'Comfortable daily commute within the city. Get from point A to point B safely and reliably.', benefits: ['Metered fare', 'Quick pickup', 'Multiple payment options', 'Clean vehicles'], image: imgDaily, marathi: 'दैनंदिन प्रवासासाठी' },
  { Icon: BriefcaseIcon, title: 'Office Commute', desc: 'Reliable pickup and drop service for working professionals. Never be late to work again.', benefits: ['Fixed schedule', 'Monthly packages', 'Professional drivers', 'Punctual service'], image: imgOffice, marathi: 'ऑफिसला जाण्यासाठी' },
  { Icon: GraduationCapIcon, title: 'School & College Pickup and Drops', desc: 'Safe and dependable transport for school and college students with verified drivers and parent peace of mind.', benefits: ['Verified drivers', 'GPS tracking', 'Parent notifications', 'Student discounts'], image: imgSchool, marathi: 'शाळा आणि कॉलेजसाठी सुरक्षित वाहतूक' },
  { Icon: UserIcon, title: "Women's Special Rides", desc: 'Dedicated rides with women drivers for women passengers. Extra safety features included.', benefits: ['Women drivers available', 'SOS button', 'Ride sharing with family', 'Safe late-night rides'], image: imgWomen, marathi: 'महिलांसाठी विशेष सेवा' },
  { Icon: HeartIcon, title: 'Senior Citizen Transport', desc: 'Gentle, assisted transport for senior citizens with patient and caring drivers.', benefits: ['Door-to-door service', 'Assisted boarding', 'Medical trip priority', 'Special care'], image: imgSenior, marathi: 'ज्येष्ठ नागरिकांसाठी' },
  { Icon: WalletIcon, title: 'Monthly Packages', desc: 'Save more with our monthly subscription packages. Fixed routes, fixed pricing, unlimited peace of mind.', benefits: ['Up to 20% savings', 'Priority booking', 'Dedicated driver', 'Flexible cancellation'], image: imgPackages, marathi: 'मासिक पॅकेजेस उपलब्ध' },
  { Icon: CalendarIcon, title: 'Event Transport', desc: 'Bulk auto-rickshaw booking for events, functions, and community programs.', benefits: ['Bulk booking', 'Event coordination', 'Custom branding', 'Reliable fleet'], image: imgEvent, marathi: 'कार्यक्रमांसाठी वाहतूक' },
];

export default function Services() {
  return (
    <>
      <section className="section page-header-section">
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Our Services</span>
            <h2 className="text-h2" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Premium Transportation Services for <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Everyone</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '0.75rem', maxWidth: '800px' }}>
              From daily commutes to special events, Pink Auto offers reliable and safe auto-rickshaw services tailored to your needs.
            </p>
            <p className="text-marathi" style={{ color: 'var(--color-accent)', fontSize: '1.1rem' }}>
              "प्रत्येक गरजेसाठी विश्वासार्ह सेवा"
            </p>
          </div>
          <div className="mobile-carousel md:!flex md:!flex-col md:!gap-12">
            {services.map((s, i) => (
              <FadeIn key={i} delay={0.05} className="min-w-[85vw] md:min-w-0 shrink-0 snap-center">
                <div className="card grid grid-cols-1 md:grid-cols-2 overflow-hidden h-full">
                  <div className={`h-60 sm:h-72 md:h-full md:min-h-[300px] overflow-hidden order-first ${i % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
                    <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <s.Icon size={24} color="var(--color-black)" />
                      </div>
                      <h3 className="text-h3">{s.title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {s.benefits.map((b, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--color-black)', fontWeight: 700 }}>✓</span> {b}
                        </div>
                      ))}
                    </div>
                    <p className="text-marathi" style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem', marginBottom: '1rem' }}>"{s.marathi}"</p>
                    <div>
                      <a href="https://wa.me/919876543210?text=Hello%20Pink%20Auto!" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Book This Service</a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section--sm" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <FadeIn>
            <span className="eyebrow">Flexible Pricing</span>
            <h2 className="text-h2" style={{ marginTop: '1rem' }}>Estimate-Based &amp; <span style={{ fontStyle: 'italic' }}>Negotiable Pricing</span></h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 600, margin: '1rem auto 0' }}>
              We provide an estimate fare range for your route. The final fare is open for negotiation with the driver, ensuring flexibility and fairness for every ride.
            </p>
            <p className="text-marathi" style={{ marginTop: '0.75rem', color: 'var(--color-gray-500)' }}>"अंदाजे भाडे सांगतो, चालकाशी बोलून ठरवा"</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Get Pricing on WhatsApp</a>
              <Link to="/contact" className="btn btn-secondary">Contact for Packages</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
