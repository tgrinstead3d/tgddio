import React, { useEffect, useState } from 'react';
import BookingModal from './components/BookingModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LaserProCaseStudyModal from './components/LaserProCaseStudyModal';
import ManifestoModal from './components/ManifestoModal';
import Navbar from './components/Navbar';
import Philosophy from './components/Philosophy';
import PlanksCaseStudyModal from './components/PlanksCaseStudyModal';
import Services from './components/Services';
import SmallsAndPetiteCaseStudyModal from './components/SmallsAndPetiteCaseStudyModal';
import SNSCaseStudyModal from './components/SNSCaseStudyModal';
import Work from './components/Work';
import { theme } from './theme';
import { supabase } from './lib/supabase';

const App = () => {
  console.log('Supabase client:', supabase);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSNSModalOpen, setIsSNSModalOpen] = useState(false);
  const [isSmallsModalOpen, setIsSmallsModalOpen] = useState(false);
  const [isPlanksModalOpen, setIsPlanksModalOpen] = useState(false);
  const [isLaserProModalOpen, setIsLaserProModalOpen] = useState(false);

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

  // Prevent body scroll when manifesto is open
  useEffect(() => {
    if (isManifestoOpen || isSNSModalOpen || isPlanksModalOpen || isLaserProModalOpen || isSmallsModalOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isMobileMenuOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isManifestoOpen, isMobileMenuOpen, isSNSModalOpen, isPlanksModalOpen, isLaserProModalOpen, isSmallsModalOpen]);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-500`}>
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsBookingOpen={setIsBookingOpen}
        navLinks={navLinks}
        theme={theme}
      />

      <Hero
        setIsBookingOpen={setIsBookingOpen}
        theme={theme}
      />

      <Philosophy
        setIsManifestoOpen={setIsManifestoOpen}
        theme={theme}
      />

      <Services theme={theme} />

      <Work
        theme={theme}
        onOpenCaseStudy={(project) => {
          if (project.title === "SNS Mobile Detailing") {
            setIsSNSModalOpen(true);
          } else if (project.title === "Plank's Cafe & Pizzeria") {
            setIsPlanksModalOpen(true);
          } else if (project.title === "LaserPro Studio") {
            setIsLaserProModalOpen(true);
          } else if (project.title === "Smalls and Petite") {
            setIsSmallsModalOpen(true);
          }
        }}
      />

      <Contact
        setIsBookingOpen={setIsBookingOpen}
        theme={theme}
      />

      <ManifestoModal
        isOpen={isManifestoOpen}
        onClose={() => setIsManifestoOpen(false)}
        theme={theme}
      />

      <SNSCaseStudyModal
        isOpen={isSNSModalOpen}
        onClose={() => setIsSNSModalOpen(false)}
        theme={theme}
      />

      <SmallsAndPetiteCaseStudyModal
        isOpen={isSmallsModalOpen}
        onClose={() => setIsSmallsModalOpen(false)}
        theme={theme}
      />

      <PlanksCaseStudyModal
        isOpen={isPlanksModalOpen}
        onClose={() => setIsPlanksModalOpen(false)}
        theme={theme}
      />

      <LaserProCaseStudyModal
        isOpen={isLaserProModalOpen}
        onClose={() => setIsLaserProModalOpen(false)}
        theme={theme}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <Footer theme={theme} />
    </div>
  );
};

export default App;