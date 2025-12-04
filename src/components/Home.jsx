import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BradsWeldingCaseStudyModal from './BradsWeldingCaseStudyModal';
import Contact from './Contact';
import Hero from './Hero';
import IronwoodCaseStudyModal from './IronwoodCaseStudyModal';
import LaserProCaseStudyModal from './LaserProCaseStudyModal';
import ManifestoModal from './ManifestoModal';
import Philosophy from './Philosophy';
import PlanksCaseStudyModal from './PlanksCaseStudyModal';
import Services from './Services';
import SmallsAndPetiteCaseStudyModal from './SmallsAndPetiteCaseStudyModal';
import SNSCaseStudyModal from './SNSCaseStudyModal';
import Work from './Work';

const Home = ({ theme, setIsBookingOpen }) => {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [isSNSModalOpen, setIsSNSModalOpen] = useState(false);
  const [isSmallsModalOpen, setIsSmallsModalOpen] = useState(false);
  const [isPlanksModalOpen, setIsPlanksModalOpen] = useState(false);
  const [isLaserProModalOpen, setIsLaserProModalOpen] = useState(false);
  const [isBradsModalOpen, setIsBradsModalOpen] = useState(false);
  const [isIronwoodModalOpen, setIsIronwoodModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isManifestoOpen || isSNSModalOpen || isPlanksModalOpen || isLaserProModalOpen || isSmallsModalOpen || isBradsModalOpen || isIronwoodModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isManifestoOpen, isSNSModalOpen, isPlanksModalOpen, isLaserProModalOpen, isSmallsModalOpen, isBradsModalOpen, isIronwoodModalOpen]);

  return (
    <>
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
          } else if (project.title === "Brad's Welding") {
            setIsBradsModalOpen(true);
          } else if (project.title === "Ironwood Groundskeeping") {
            setIsIronwoodModalOpen(true);
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

      <BradsWeldingCaseStudyModal
        isOpen={isBradsModalOpen}
        onClose={() => setIsBradsModalOpen(false)}
        theme={theme}
      />

      <IronwoodCaseStudyModal
        isOpen={isIronwoodModalOpen}
        onClose={() => setIsIronwoodModalOpen(false)}
        theme={theme}
      />
    </>
  );
};

export default Home;
