import { useState } from 'react';
import FadeIn from '../components/ui/FadeIn';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, InstagramIcon, XTwitterIcon } from '../components/ui/Icons';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <>
      <section className="section page-header-section">
        <div className="container">
          <div className="grid-2 gap-10 md:gap-16">
            
            {/* ── Contact Info ── */}
            <FadeIn direction="left">
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Contact Us</span>
                <h2 className="text-h2" style={{ marginTop: '1rem', marginBottom: '1rem' }}>We're Here to Help</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                  Have a question about our services, want to book a ride, or partner with us? Reach out today.
                </p>
                <p className="text-marathi" style={{ color: 'var(--color-accent)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                  "तुमच्या सेवेसाठी सदैव तत्पर"
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1.25rem' }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 'var(--radius-sm)', background: 'var(--color-gray-100)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-black)', flexShrink: 0,
                    }}>
                      <MapPinIcon size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Office Address</h4>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        Pink Auto Headquarters,<br />
                        Mahalaxmi Mandir Road, Near Rankala,<br />
                        Maharashtra 416012
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.25rem' }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 'var(--radius-sm)', background: 'var(--color-gray-100)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-black)', flexShrink: 0,
                    }}>
                      <PhoneIcon size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Phone & WhatsApp</h4>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        Booking & Support: +91 98765 43210<br />
                        Business Enquiries: +91 98765 43211
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.25rem' }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 'var(--radius-sm)', background: 'var(--color-gray-100)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-black)', flexShrink: 0,
                    }}>
                      <MailIcon size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Email Us</h4>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        hello@pinkauto.in<br />
                        support@pinkauto.in
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1.25rem' }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 'var(--radius-sm)', background: 'var(--color-gray-100)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-black)', flexShrink: 0,
                    }}>
                      <ClockIcon size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Business Hours</h4>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        Office: Monday - Saturday, 9:00 AM to 6:00 PM<br />
                        Ride Service: 24/7 (Pre-booking required for late night)
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '3rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Follow Us</h4>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" className="btn btn-ghost btn-sm" style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem' }}>
                      <FacebookIcon size={18} /> Facebook
                    </a>
                    <a href="#" className="btn btn-ghost btn-sm" style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem' }}>
                      <InstagramIcon size={18} /> Instagram
                    </a>
                    <a href="#" className="btn btn-ghost btn-sm" style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem' }}>
                      <XTwitterIcon size={18} /> X
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Contact Form ── */}
            <FadeIn direction="right">
              <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
                <h3 className="text-h3" style={{ marginBottom: '2rem' }}>Send an Inquiry</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-input" placeholder="Your name" required />
                  </div>
                  
                  <div className="grid-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-input" placeholder="Your phone number" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-input" placeholder="Your email (optional)" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Inquiry Type</label>
                    <select className="form-select" required>
                      <option value="">Select an option</option>
                      <option value="booking">Ride Booking / Monthly Package</option>
                      <option value="corporate">Corporate Tie-up</option>
                      <option value="complaint">Feedback / Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" placeholder="How can we help you?" required></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginTop: '1rem' }}
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  >
                    {formStatus === 'idle' && 'Send Message'}
                    {formStatus === 'submitting' && 'Sending...'}
                    {formStatus === 'success' && '✓ Message Sent!'}
                  </button>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section style={{ height: '400px', width: '100%', background: '#eee' }}>
        <iframe 
          title="Pink Auto Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5791931551694!2d74.2235943!3d16.6974051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sMahalaxmi%20Temple%20Kolhapur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
