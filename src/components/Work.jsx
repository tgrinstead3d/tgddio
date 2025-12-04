import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Work = ({ theme, onOpenCaseStudy }) => {
  // Filter only featured projects for the homepage
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="work" className={`py-16 md:py-24 ${theme.cardBgAlt} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, idx) => (
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

        <div className="flex justify-center">
          <Link 
            to="/work"
            className={`px-8 py-4 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 rounded-xl transition-all duration-300 text-lg font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 group`}
          >
            View More Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
