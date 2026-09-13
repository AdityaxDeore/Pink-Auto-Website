import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import { MapPinIcon, BriefcaseIcon, GraduationCapIcon, UserIcon, HeartIcon, CalendarIcon, WalletIcon } from '../components/ui/Icons';
import imgDaily from '../assets/images/dalily rides.png';
import imgOffice from '../assets/images/office.png';
import imgSchool from '../assets/images/School_new.png';
import imgWomen from '../assets/images/women_only.jpg';
import imgSenior from '../assets/images/granny.png';
import imgEvent from '../assets/images/events 2.png';
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
            <h1 className="text-h2" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Premium Transportation Services for <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Everyone</span></h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '0.75rem', maxWidth: '800px' }}>
              From daily commutes to special events, GatiGo offers reliable and safe auto-rickshaw services tailored to your needs.
            </p>
            <p className="text-marathi" style={{ color: 'var(--color-accent)', fontSize: '1.1rem' }}>
              "प्रत्येक गरजेसाठी विश्वासार्ह सेवा"
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card group flex flex-col h-full" style={{ padding: '0', borderRadius: 'var(--radius-2xl)', border: 'none', background: 'white' }}>
                  <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0', position: 'relative' }}>
                    <img src={s.image} alt={s.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} className="transition-all duration-[2000ms] group-hover:scale-105" />
                  </div>
                  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ color: 'var(--color-accent)' }}><s.Icon size={20} /></span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{s.desc}</p>
                    
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem', marginBottom: '1.25rem' }}>
                        {s.benefits.map((b, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span> {b}
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-marathi" style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>"{s.marathi}"</p>
                    <div style={{ marginTop: 'auto' }}>
                      <a href="#download" className="btn btn-primary btn-sm w-full" style={{ textAlign: 'center', display: 'block' }}>Download App to Book</a>
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
              <a href="#download" className="btn btn-primary">Download the App</a>
              <Link to="/contact" className="btn btn-secondary">Contact for Packages</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
