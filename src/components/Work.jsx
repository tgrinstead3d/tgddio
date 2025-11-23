import { ArrowRight } from 'lucide-react';
import React from 'react';

const Work = ({ theme, onOpenCaseStudy }) => {
  return (
    <section id="work" className={`py-16 md:py-24 ${theme.cardBgAlt} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className={`${theme.accentText} font-bold tracking-widest uppercase mb-4 text-sm`}>Selected Work</h2>
            <h3 className={`text-3xl md:text-4xl font-bold ${theme.text}`}>
              Digital Excellence <br /> In Action.
            </h3>
          </div>
          <p className={`${theme.textMuted} max-w-md text-lg`}>
            We don't just talk about results. We build them. Here are a few of our recent partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Smalls and Petite",
              category: "E-Commerce / Local Business",
              desc: "A boutique local vendor creating custom yard sign decorations. We built a digital presence to showcase their unique, personalized creations.",
              image: "/smalls_and_petite.jpg",
              link: "https://smallsandpetite.netlify.app"
            },
            {
              title: "Plank's Cafe & Pizzeria",
              category: "Conceptual Redesign / Case Study",
              desc: "A responsive, mobile-first redesign for a historic German Village staple.",
              image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
              link: "/planks_redesign.html",
              hasCaseStudy: true
            },
            /* 
            // Keeping for later use
            {
              title: "Brad's Welding",
              category: "Local Business / Services",
              desc: "A local mobile welding shop bringing years of expertise to the community.",
              image: "/brads_welding.webp",
              link: "https://www.bradsweldingohio.com"
            },
            */
            {
              title: "LaserPro Studio",
              category: "Conceptual Redesign / Case Study",
              desc: "The Director's Cut: Industrial dark mode aesthetic for a precision fabrication studio.",
              image: "/laser.png",
              link: "/bradswelding_redesign.html",
              hasCaseStudy: true
            },
            {
              title: "SNS Mobile Detailing",
              category: "Mobile Automotive Detailing",
              desc: "Local mobile auto detailer dedicated to their community and taking pride in every detail.",
              image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2070",
              link: "/sns_redesign.html",
              hasCaseStudy: true
            }
          ].map((project, idx) => (
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
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm font-bold transition-all"
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
  );
};

export default Work;
