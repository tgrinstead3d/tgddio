import { ArrowRight, CheckCircle2, ExternalLink, X } from 'lucide-react';
import React from 'react';

const PlanksCaseStudyModal = ({ isOpen, onClose, theme }) => {
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
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
            alt="Plank's Cafe & Pizzeria" 
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-slate-800 text-slate-200 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-8 left-8 z-20">
            <div className="inline-block px-3 py-1 bg-amber-500/20 backdrop-blur-md rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30">
              Conceptual Redesign
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Plank's Cafe & Pizzeria</h2>
            <p className="text-slate-300 text-lg">Historic Warmth meets Modern Cleanliness.</p>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          
          {/* Executive Summary */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h3 className={`text-2xl font-bold ${theme.text}`}>Executive Summary</h3>
              <p className={`${theme.textMuted} leading-relaxed`}>
                Plank's Cafe is a historic staple of German Village/South Side Columbus, operating since 1939. While the physical location is a beloved local landmark, the current digital presence is failing to capture revenue. The existing website relies on a broken template with visible placeholder text, creates friction for mobile users trying to view the menu, and lacks the "soul" of the physical establishment.
              </p>
            </div>
            <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
              <h4 className={`font-bold ${theme.text} mb-4 uppercase tracking-widest text-sm`}>Success Metrics</h4>
              <ul className="space-y-3">
                {['Eliminate "broken template" artifacts', 'Reduce "time-to-menu" to 1 click', 'Improve accessibility to 90+'].map((metric, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${theme.textMuted} text-sm`}>
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Problem & Strategy */}
          <div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-6`}>Strategic Direction</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.accentText}`}>The Problem</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  <strong>Brand Disconnect:</strong> The current site feels like a generic template that contradicts the authentic, historic nature of the venue.<br/>
                  <strong>Technical Failure:</strong> Search indexing displays broken placeholder text.<br/>
                  <strong>Mobile Friction:</strong> The menu is difficult to read on mobile devices (PDFs/images).
                </p>
              </div>
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.secondaryText}`}>"The One-Thumb Standard"</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  The redesign prioritizes Utility and Nostalgia. The site must function perfectly for a user holding their phone in one hand while maintaining the warm, inviting aesthetic of a 1939 cafe. Features include a smart HTML-based menu, dynamic "Open/Closed" logic, and a Click-to-Call FAB.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Identity */}
          <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
             <h3 className={`text-xl font-bold ${theme.text} mb-4`}>Visual Identity</h3>
             <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <div className="h-12 w-full bg-[#8B2E2E] rounded-lg mb-2 shadow-sm"></div>
                    <p className={`text-sm font-bold ${theme.text}`}>Deep Brick Red</p>
                    <p className={`text-xs ${theme.textMuted}`}>Primary</p>
                </div>
                <div>
                    <div className="h-12 w-full bg-[#FAF7F0] rounded-lg mb-2 shadow-sm border border-gray-200"></div>
                    <p className={`text-sm font-bold ${theme.text}`}>Warm Cream</p>
                    <p className={`text-xs ${theme.textMuted}`}>Secondary</p>
                </div>
                <div>
                    <div className="h-12 w-full bg-[#D4AF37] rounded-lg mb-2 shadow-sm"></div>
                    <p className={`text-sm font-bold ${theme.text}`}>Gold / Amber</p>
                    <p className={`text-xs ${theme.textMuted}`}>Accent</p>
                </div>
             </div>
          </div>

          {/* CTA */}
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border ${theme.border} flex flex-col md:flex-row items-center justify-between gap-6`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Experience the Redesign</h3>
              <p className="text-slate-400">View the interactive prototype.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/planks_redesign.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
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

export default PlanksCaseStudyModal;
