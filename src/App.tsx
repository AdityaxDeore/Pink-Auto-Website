import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import ScrollProgress from './components/layout/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Safety from './pages/Safety';
import Gallery from './pages/Gallery';
import DriverRegistration from './pages/DriverRegistration';
import Testimonials from './pages/Testimonials';
import MediaEvents from './pages/MediaEvents';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { useLocation } from 'react-router-dom';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #FFF7FA, #F3E8FF)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
        zIndex: 99999,
      }}>
        <div style={{
          width: 60,
          height: 60,
          border: '3px solid #FCE4EC',
          borderTopColor: '#E91E63',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: '1.5rem',
          color: '#E91E63',
        }}>Pink Auto</span>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/driver-registration" element={<DriverRegistration />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/media-events" element={<MediaEvents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}
