import { ArrowRight } from 'lucide-react';
import React from 'react';

const Work = ({ theme }) => {
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
              link: "https://www.smallsandpetite.com"
            },
            {
              title: "Brad's Welding",
              category: "Local Business / Services",
              desc: "A local mobile welding shop bringing years of expertise to the community.",
              image: "/brads_welding.webp",
              link: "https://www.bradsweldingohio.com"
            },
            {
              title: "Brad's Laserpro Studio",
              category: "Customization Service",
              desc: "A laser etching and customization service.",
              image: "/laserpro_studio.jpeg",
              link: "https://www.laserprostudio.com"
            },
            {
              title: "SNS Mobile Detailing",
              category: "Mobile Automotive Detailing",
              desc: "Mobile automotive detailing business taking great pride in their work and community.",
              image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2070",
              link: "#"
            }
          ].map((project, idx) => (
            <a 
              key={idx} 
              href={project.link}
              target={project.link === '#' ? '_self' : '_blank'}
              rel={project.link === '#' ? '' : 'noopener noreferrer'}
              onClick={(e) => project.link === '#' && e.preventDefault()}
              className={`group relative rounded-2xl overflow-hidden shadow-lg ${project.link === '#' ? 'cursor-default' : 'cursor-pointer'} block`}
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
              </div>

              {/* Abstract Pattern Overlay */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>

              {project.link === '#' ? (
                <div className="relative h-96 p-8 flex items-center justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest border-4 border-white/20 p-6 rounded-xl backdrop-blur-sm">
                    Coming Soon
                  </div>
                </div>
              ) : (
                <div className="relative h-96 p-8 flex flex-col justify-end">
                  <div className={`transform transition-all duration-500 translate-y-4 group-hover:translate-y-0`}>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
                      {project.category}
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-3">{project.title}</h4>
                    <p className="text-white/90 text-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                      {project.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-white font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 delay-200">
                      Visit Site <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
