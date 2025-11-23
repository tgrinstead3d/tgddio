import { ArrowRight, CheckCircle2, ExternalLink, X } from 'lucide-react';
import React from 'react';

const SNSCaseStudyModal = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto ${theme.cardBg} rounded-2xl shadow-2xl border ${theme.border} animate-fade-in flex flex-col`}>
        
        {/* Header Image Area */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
          <img 
            src="/sns_brand_new.png" 
            alt="SNS Mobile Detailing Brand Identity" 
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-slate-800 text-slate-200 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-8 left-8 z-20">
            <div className="inline-block px-3 py-1 bg-cyan-500/20 backdrop-blur-md rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/30">
              Mobile Automotive Detailing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">SNS Mobile Detailing</h2>
            <p className="text-slate-300 text-lg">Community Driven. Detail Oriented.</p>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          
          {/* The Brief */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h3 className={`text-2xl font-bold ${theme.text}`}>The Brief</h3>
              <p className={`${theme.textMuted} leading-relaxed`}>
                SNS Mobile Detailing isn't just about luxury cars; it's about bringing a premium, concierge-level service to the entire community. The goal was to elevate their digital presence to match the pride they take in their work, creating a "digital showroom" that feels distinct, high-end, and trustworthy, appealing to clients who value quality above all else.
              </p>
            </div>
            <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
              <h4 className={`font-bold ${theme.text} mb-4 uppercase tracking-widest text-sm`}>Project Goals</h4>
              <ul className="space-y-3">
                {['Premium Brand Identity', 'Cinematic Visuals', 'Editorial Layout', 'Concierge Branding'].map((goal, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${theme.textMuted} text-sm`}>
                    <CheckCircle2 size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Solution */}
          <div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-6`}>The Solution</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.accentText}`}>Visual Identity</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  We pivoted to a "Cinematic Luxury" aesthetic. By utilizing full-screen imagery, deep gradients, and glassmorphism effects, we created a site that feels less like a utility and more like a lifestyle brand. The typography was refined to mix modern sans-serifs with elegant editorial headings.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.secondaryText}`}>User Experience</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  The layout breaks the grid to create a more bespoke, magazine-like flow. We removed standard "software" tropes in favor of an immersive scrolling experience that guides the user through the brand's philosophy before presenting the service menu.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border ${theme.border} flex flex-col md:flex-row items-center justify-between gap-6`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">See the Transformation</h3>
              <p className="text-slate-400">Compare the redesign with the original site.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.snsmobiledetailing.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-6 py-4 border ${theme.border} hover:bg-slate-800 text-slate-300 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2`}
              >
                View Original
              </a>
              <a 
                href="/sns_redesign.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                View Redesign
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SNSCaseStudyModal;
