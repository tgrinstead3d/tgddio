import { ArrowRight, CheckCircle2, ExternalLink, X } from 'lucide-react';
import React from 'react';

const SmallsAndPetiteCaseStudyModal = ({ isOpen, onClose, theme }) => {
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
            src="/smalls_and_petite.jpg" 
            alt="Smalls and Petite - Custom Yard Signs" 
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-slate-800 text-slate-200 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-8 left-8 z-20">
            <div className="inline-block px-3 py-1 bg-yellow-500/20 backdrop-blur-md rounded-full text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4 border border-yellow-500/30">
              Pending Approval
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Smalls and Petite</h2>
            <p className="text-slate-300 text-lg">Boutique E-Commerce Redesign</p>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          
          {/* Executive Summary */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h3 className={`text-2xl font-bold ${theme.text}`}>A Fresh Start</h3>
              <p className={`${theme.textMuted} leading-relaxed`}>
                Smalls and Petite is a boutique local vendor specializing in custom yard sign decorations. They are currently in the process of moving from one hosting service to another. We are using this migration as a strategic opportunity to completely streamline and renew the design of their digital presence.
              </p>
              <p className={`${theme.textMuted} leading-relaxed`}>
                The goal is to elevate the brand from a standard local business to a **premium, boutique** aesthetic that reflects the quality and personalization of their products, while remaining welcoming to all customers.
              </p>
            </div>
            <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
              <h4 className={`font-bold ${theme.text} mb-4 uppercase tracking-widest text-sm`}>Project Info</h4>
              <ul className="space-y-3">
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">STATUS</span>
                  <span>In Review / Pending Approval</span>
                </li>
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">FOCUS</span>
                  <span>Rebranding & Migration</span>
                </li>
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">AESTHETIC</span>
                  <span>Premium / Boutique</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Challenge & Solution */}
          <div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-6`}>The Challenge: Streamlining the Move</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.accentText}`}>The Problem</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  The client's previous platform was functional but lacked the visual polish needed to stand out. The migration process presented a risk of losing brand continuity, but also a massive opportunity to shed legacy design debt.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.secondaryText}`}>The Solution</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  We are implementing a design that feels **refined and trustworthy**—clean, sophisticated, and professional. The new site uses a very specific, curated color scheme requested by the client to evoke a sense of warmth and exclusivity, moving away from generic templates.
                </p>
              </div>
            </div>
          </div>

          {/* Design Decisions */}
          <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
            <h3 className={`text-xl font-bold ${theme.text} mb-6`}>Key Design Decisions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="h-12 flex items-center mb-3">
                   <div className="h-2 w-full bg-gradient-to-r from-slate-200 to-slate-400 rounded"></div>
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>Elevated Typography</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  Moving away from standard sans-serifs to more elegant, boutique-friendly typefaces.
                </p>
              </div>
              <div>
                <div className="h-12 flex items-center mb-3">
                   <div className="w-8 h-8 rounded-full bg-rose-100 border-2 border-rose-300"></div>
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>Curated Palette</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  A specific color scheme tailored to the client's vision of a refined feel.
                </p>
              </div>
              <div>
                <div className="h-12 flex items-center mb-3">
                  <p className="font-mono text-sm text-white">SIMPLICITY</p>
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>Streamlined UX</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  Reducing friction in the ordering process to make custom requests feel effortless.
                </p>
              </div>
            </div>
          </div>

          {/* The Results */}
          <div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-4`}>Current Status</h3>
            <p className={`${theme.textMuted} leading-relaxed mb-6`}>
              The redesign is currently in the final review stage. The client is reviewing the new aesthetic and functionality to ensure it perfectly aligns with their vision before we go officially live. This case study serves as a preview of the transformation in progress.
            </p>
          </div>

          {/* CTA */}
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border ${theme.border} flex flex-col md:flex-row items-center justify-between gap-6`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-slate-400">The new site will launch following client approval.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://smallsandpetite.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-4 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2`}
              >
                View Concept Site <ExternalLink size={20} />
              </a>
              <button 
                disabled
                className={`px-6 py-4 border ${theme.border} bg-slate-800/50 text-slate-500 rounded-xl font-bold text-lg cursor-not-allowed flex items-center justify-center gap-2`}
              >
                Live Site (Pending)
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmallsAndPetiteCaseStudyModal;
