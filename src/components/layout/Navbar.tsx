import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from '../ui/Icons';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Safety', path: '/safety' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Drivers', path: '/driver-registration' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img src="/logo.png" alt="Pink Auto" />
            <span>Pink Auto</span>
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="https://wa.me/919876543210?text=Hello%20Pink%20Auto!" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <WhatsAppIcon size={14} /> WhatsApp
            </a>
          </div>

          <button
            className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            style={{ zIndex: 10000, position: 'relative' }}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation — Full Screen Dark Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
              >
                <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + navItems.length * 0.04 }}
              style={{ marginTop: '1.5rem', width: '100%', maxWidth: 320 }}
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                Book on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}