import { Link } from 'react-router-dom';
import {
  MapPinIcon, PhoneIcon, MailIcon, ClockIcon,
  FacebookIcon, InstagramIcon, XTwitterIcon, YouTubeIcon,
} from '../ui/Icons';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Safety', path: '/safety' },
  { label: 'Gallery', path: '/gallery' },
];

const serviceLinks = [
  { label: 'Daily Rides', path: '/services' },
  { label: 'Office Commute', path: '/services' },
  { label: 'School Pickup', path: '/services' },
  { label: "Women's Special", path: '/services' },
  { label: 'Monthly Packages', path: '/services' },
];

const contactInfo = [
  { Icon: MapPinIcon, text: 'Mahalaxmi Mandir Road, Kolhapur, Maharashtra 416012' },
  { Icon: PhoneIcon, text: '+91 98765 43210' },
  { Icon: MailIcon, text: 'hello@pinkauto.in' },
  { Icon: ClockIcon, text: 'Mon-Sun: 6:00 AM - 11:00 PM' },
];

const socialLinks = [
  { Icon: FacebookIcon, href: 'https://facebook.com/pinkauto', label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://instagram.com/pinkauto', label: 'Instagram' },
  { Icon: XTwitterIcon, href: 'https://x.com/pinkauto', label: 'X' },
  { Icon: YouTubeIcon, href: 'https://youtube.com/pinkauto', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/logo.png" alt="Pink Auto" style={{ height: 40, width: 'auto' }} />
              <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.375rem', color: 'white' }}>Pink Auto</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 320 }}>
              Kolhapur's trusted pink auto-rickshaw service providing safe, comfortable, and reliable transportation for women, students, senior citizens, and families.
            </p>
            <p style={{ fontFamily: 'var(--font-marathi)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
              "सुरक्षित प्रवास, आमची जबाबदारी"
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)', transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {quickLinks.map((link) => (
                <li key={link.path + link.label}><Link to={link.path}>{link.label}</Link></li>
              ))}
              <li><Link to="/driver-registration">Become a Driver</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {serviceLinks.map((link) => (
                <li key={link.label}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contactInfo.map((item) => (
                <li key={item.text} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ flexShrink: 0, marginTop: '0.125rem' }}><item.Icon size={16} color="rgba(255,255,255,0.4)" /></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pink Auto. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}