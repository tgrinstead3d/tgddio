import { ArrowRight, CheckCircle2, ExternalLink, X } from 'lucide-react';
import React from 'react';

const BradsWeldingCaseStudyModal = ({ isOpen, onClose, theme }) => {
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
            src="/brads_welding.webp" 
            alt="Brad's Welding - Mobile Welding Services" 
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-slate-800 text-slate-200 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-8 left-8 z-20">
            <div className="inline-block px-3 py-1 bg-orange-500/20 backdrop-blur-md rounded-full text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
              Local Business / Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Brad's Welding</h2>
            <p className="text-slate-300 text-lg">Expert Mobile Welding Services.</p>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          
          {/* Executive Summary */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h3 className={`text-2xl font-bold ${theme.text}`}>Forging a Digital Presence</h3>
              <p className={`${theme.textMuted} leading-relaxed`}>
                Brad's Welding is a trusted local mobile welding service known for quality craftsmanship and reliability. The goal was to translate this reputation into a professional digital presence that accurately reflects the expertise and hands-on nature of the business.
              </p>
              <p className={`${theme.textMuted} leading-relaxed`}>
                We built a site that highlights the range of services offered, from structural repairs to custom fabrication, while making it incredibly easy for potential clients to get in touch and request quotes.
              </p>
            </div>
            <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
              <h4 className={`font-bold ${theme.text} mb-4 uppercase tracking-widest text-sm`}>Project Info</h4>
              <ul className="space-y-3">
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">ROLE</span>
                  <span>Design & Development</span>
                </li>
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">TIMELINE</span>
                  <span>3 Weeks</span>
                </li>
                <li className={`flex flex-col gap-1 ${theme.textMuted} text-sm`}>
                  <span className="text-cyan-500 font-bold text-xs">STACK</span>
                  <span>React, Tailwind CSS</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Challenge & Solution */}
          <div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-6`}>The Challenge & Solution</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.accentText}`}>The Problem</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  Many local tradespeople rely solely on word-of-mouth or social media. Brad needed a central hub that could showcase his portfolio of work, detail his specific services, and provide a professional touchpoint for commercial and residential clients alike.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${theme.secondaryText}`}>The Solution</h4>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  We designed a robust, industrial-themed website that emphasizes strength and precision. High-quality imagery of completed projects takes center stage, building trust with visitors. Clear calls-to-action ensure that contacting Brad is seamless on any device.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className={`p-6 rounded-xl ${theme.cardBgAlt} border ${theme.border}`}>
            <h3 className={`text-xl font-bold ${theme.text} mb-6`}>Key Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="mb-3">
                   <CheckCircle2 className="text-cyan-500" size={24} />
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>Service Showcase</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  Detailed breakdown of welding capabilities and specializations.
                </p>
              </div>
              <div>
                <div className="mb-3">
                  <CheckCircle2 className="text-cyan-500" size={24} />
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>Project Gallery</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  Visual portfolio demonstrating the quality and variety of work.
                </p>
              </div>
              <div>
                <div className="mb-3">
                  <CheckCircle2 className="text-cyan-500" size={24} />
                </div>
                <h4 className={`font-bold ${theme.text} text-sm mb-2`}>Mobile Optimization</h4>
                <p className={`text-xs ${theme.textMuted}`}>
                  Fully responsive design for clients searching on the go.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border ${theme.border} flex flex-col md:flex-row items-center justify-between gap-6`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Visit the Live Site</h3>
              <p className="text-slate-400">See the digital craftsmanship in action.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.bradsweldingohio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Visit Website
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BradsWeldingCaseStudyModal;
