import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllWork from './components/AllWork';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { theme } from './theme';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Handle scroll effects for navbar styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Philosophy', href: '/#philosophy' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-500`}>
        <Navbar 
          isScrolled={isScrolled}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setIsBookingOpen={setIsBookingOpen}
          navLinks={navLinks}
          theme={theme}
        />

        <Routes>
          <Route path="/" element={<Home theme={theme} setIsBookingOpen={setIsBookingOpen} />} />
          <Route path="/work" element={<AllWork theme={theme} />} />
        </Routes>

        <BookingModal 
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)} 
        />

        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
};

export default App;