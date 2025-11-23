import { ArrowRight, CheckCircle2, ExternalLink, X } from 'lucide-react';
import React from 'react';

const LaserProCaseStudyModal = ({ isOpen, onClose, theme }) => {
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
            src="/laser0.png" 
            alt="LaserPro Studio - Laser Cutting Metal" 
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
              The Director's Cut
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">LaserPro Studio</h2>
            <p className="text-slate-300 text-lg">Industrial Art House. Precision Fabrication.</p>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          
          {/* Executive Summary */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h3 className={`text-2xl font-bold ${theme.text}`}>The Director's Cut</h3>
              <p className={`${theme.textMuted} leading-relaxed`}>
                Every project has constraints. For the initial launch, the client required an extremely lean, budget-conscious build to test the market. However, as a designer, I saw a deeper opportunity to position the brand not just as a service, but as an <strong>Industrial Art House</strong>.
              </p>
              <p className={`${theme.textMuted} leading-relaxed`}>
                This case study presents the "Director's Cut"—an unconstrained conceptual redesign that demonstrates the full potential of the brand identity, utilizing advanced interaction design and a darker, more premium aesthetic.
              </p>
            </div>
            <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
              <h4 className={`font-bold ${theme.text} mb-4 uppercase tracking-widest text-sm`}>Project Info</h4>
              <ul className="space-y-3">
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">ROLE</span>
                  <span>Lead Designer & Developer</span>
                </li>
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">TIMELINE</span>
                  <span>4 Weeks</span>
                </li>
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">STACK</span>
                  <span>HTML5, Tailwind CSS, Vanilla JS</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Challenge & Solution */}
          <div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-6`}>The Challenge: The "Hobbyist" Trap</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.accentText}`}>The Problem</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  In the custom engraving market, perception is everything. Many competitors look like "Etsy crafters" working out of a garage. Potential B2B clients (awards, signage) need to feel confident that the studio can handle bulk orders and industrial materials—not just wood and plastic.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.secondaryText}`}>The Solution</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  To differentiate from the "crafty" competition, I developed a design language rooted in <strong>Cyberpunk Industrialism</strong>—deep charcoal backgrounds, Cyber Cyan accents mimicking CO2 laser beams, and brutalist typography suggesting "Architecture" and "Engineering."
                </p>
              </div>
            </div>
          </div>

          {/* Design Decisions */}
          <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
            <h3 className={`text-xl font-bold ${theme.text} mb-6`}>Key Design Decisions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="mb-3">
                  <div className="h-2 w-full bg-gradient-to-r from-[#0B0C10] to-[#00F0FF] rounded"></div>
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>The "Laser" Aesthetic</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  Deep charcoal background (#0B0C10) to simulate low-light laser workshop environment
                </p>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-center h-8">
                  <div className="w-16 h-[2px] bg-cyan-500 animate-pulse shadow-[0_0_10px_#00F0FF]"></div>
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>Motion as Narrative</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  CSS-only "Scanner" animations reinforcing precision cutting concept
                </p>
              </div>
              <div>
                <div className="mb-3">
                  <p className="font-mono text-sm text-white">LASERPRO</p>
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>Typography</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  Space Grotesk + JetBrains Mono suggesting architecture and engineering
                </p>
              </div>
            </div>
          </div>

          {/* The Results */}
          <div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-4`}>The Results</h3>
            <p className={`${theme.textMuted} leading-relaxed mb-6`}>
              This dual-approach strategy provided value on two fronts: the client received a budget-friendly, functional site that started generating leads immediately, while the "Director's Cut" serves as a North Star for the business—a pre-validated design system ready to implement as LaserPro Studio grows.
            </p>
          </div>

          {/* CTA */}
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border ${theme.border} flex flex-col md:flex-row items-center justify-between gap-6`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Experience Both Versions</h3>
              <p className="text-slate-400">Compare the production site with the director's cut.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.laserprostudio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-6 py-4 border ${theme.border} hover:bg-slate-800 text-slate-300 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2`}
              >
                Production Site
              </a>
              <a 
                href="/bradswelding_redesign.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Director's Cut
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LaserProCaseStudyModal;
