import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import BradsWeldingCaseStudyModal from './BradsWeldingCaseStudyModal';
import IronwoodCaseStudyModal from './IronwoodCaseStudyModal';
import LaserProCaseStudyModal from './LaserProCaseStudyModal';
import PlanksCaseStudyModal from './PlanksCaseStudyModal';
import SmallsAndPetiteCaseStudyModal from './SmallsAndPetiteCaseStudyModal';
import SNSCaseStudyModal from './SNSCaseStudyModal';

const AllWork = ({ theme }) => {
  const [isSNSModalOpen, setIsSNSModalOpen] = useState(false);
  const [isSmallsModalOpen, setIsSmallsModalOpen] = useState(false);
  const [isPlanksModalOpen, setIsPlanksModalOpen] = useState(false);
  const [isLaserProModalOpen, setIsLaserProModalOpen] = useState(false);
  const [isBradsModalOpen, setIsBradsModalOpen] = useState(false);
  const [isIronwoodModalOpen, setIsIronwoodModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isSNSModalOpen || isPlanksModalOpen || isLaserProModalOpen || isSmallsModalOpen || isBradsModalOpen || isIronwoodModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSNSModalOpen, isPlanksModalOpen, isLaserProModalOpen, isSmallsModalOpen, isBradsModalOpen, isIronwoodModalOpen]);

  const onOpenCaseStudy = (project) => {
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
  };

  return (
    <>
      <section className={`pt-32 pb-16 md:pt-40 md:pb-24 ${theme.bg} transition-colors duration-500 min-h-screen`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className={`${theme.accentText} font-bold tracking-widest uppercase mb-4 text-sm`}>All Projects</h2>
              <h3 className={`text-3xl md:text-4xl font-bold ${theme.text}`}>
                A Complete Collection <br /> of Work.
              </h3>
            </div>
            <p className={`${theme.textMuted} max-w-md text-lg`}>
              From conceptual redesigns to live production sites, here is everything we've been working on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`group relative rounded-2xl overflow-hidden shadow-lg block`}
              >
                {/* Project Image - Clickable */}
                {project.hasCaseStudy ? (
                  <button 
                    onClick={() => onOpenCaseStudy(project)}
                    className="absolute inset-0 cursor-pointer z-10 w-full h-full text-left"
                    aria-label={`View Case Study for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
                  </button>
                ) : (
                  <a 
                    href={project.link}
                    target={project.link === '#' ? '_self' : '_blank'}
                    rel={project.link === '#' ? '' : 'noopener noreferrer'}
                    onClick={(e) => project.link === '#' && e.preventDefault()}
                    className="absolute inset-0 cursor-pointer z-10"
                    aria-label={`Visit ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
                  </a>
                )}

                {/* Abstract Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none z-10"></div>

                {project.link === '#' ? (
                  <div className="relative h-96 p-8 flex items-center justify-center z-20 pointer-events-none">
                    <div className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest border-4 border-white/20 p-6 rounded-xl backdrop-blur-sm">
                      Coming Soon
                    </div>
                  </div>
                ) : (
                  <div className="relative h-96 p-8 flex flex-col justify-end z-20 pointer-events-none">
                    <div className={`transform transition-all duration-500 translate-y-4 group-hover:translate-y-0`}>
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
                        {project.category}
                      </div>
                      <h4 className="text-3xl font-bold text-white mb-3">{project.title}</h4>
                      <p className="text-white/90 text-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                        {project.desc}
                      </p>

                      <div className="mt-6 flex items-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 delay-200 pointer-events-auto">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white font-bold hover:text-cyan-400 transition-colors"
                        >
                          Visit Site <ArrowRight size={18} />
                        </a>
                        {project.hasCaseStudy && (
                          <button
                            onClick={() => onOpenCaseStudy(project)}
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm font-bold transition-all cursor-pointer"
                          >
                            View Case Study
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default AllWork;
