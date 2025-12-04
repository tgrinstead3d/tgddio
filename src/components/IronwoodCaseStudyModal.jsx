import { ArrowRight, Check, ExternalLink, X } from 'lucide-react';
import React, { useEffect } from 'react';

const IronwoodCaseStudyModal = ({ isOpen, onClose, theme }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md border border-white/10 group"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          
          {/* Hero Section */}
          <div className="relative h-[60vh] min-h-[500px] w-full">
            <div className="absolute inset-0">
              <img 
                src="/iw_brand.png" 
                alt="Ironwood Brand Identity" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="inline-block px-4 py-1.5 bg-[#C05726] rounded-full text-white text-sm font-bold tracking-wider mb-6 shadow-lg shadow-[#C05726]/20">
                  BRAND IDENTITY & WEB DESIGN
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ironwood Groundskeeping
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Forging a premium identity for a landscape maintenance company rooted in reliability and craftsmanship.
                </p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-12 gap-0">
            
            {/* Sidebar Info */}
            <div className="md:col-span-4 p-8 md:p-12 bg-[#222] border-r border-white/5">
              <div className="space-y-10">
                <div>
                  <h3 className="text-[#C05726] font-bold tracking-widest uppercase text-sm mb-4">Client</h3>
                  <p className="text-white text-lg font-medium">Ironwood Groundskeeping</p>
                </div>
                
                <div>
                  <h3 className="text-[#C05726] font-bold tracking-widest uppercase text-sm mb-4">Services</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C05726]" />
                      Brand Strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C05726]" />
                      Visual Identity System
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C05726]" />
                      UI/UX Design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C05726]" />
                      Asset Creation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#C05726] font-bold tracking-widest uppercase text-sm mb-4">Timeline</h3>
                  <p className="text-gray-300">4 Weeks</p>
                </div>

                <a 
                  href="/ironwood.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C05726] hover:bg-[#a3461e] text-white rounded-lg font-bold transition-all w-full justify-center group"
                >
                  View Live Site <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-8 p-8 md:p-12 bg-[#1a1a1a]">
              
              {/* Challenge & Solution */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#C05726] rounded-full"></span>
                  The Challenge
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-12">
                  Ironwood entered a saturated market polarized between unreliable budget options and impersonal corporate giants. They needed a brand that would immediately communicate trust, permanence, and craftsmanship to justify a premium price point. The goal was to avoid the generic "lime green" aesthetic common in the industry and instead evoke a sense of heritage and industrial reliability.
                </p>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#C05726] rounded-full"></span>
                  The Solution
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We developed a "Vintage Industrial" visual identity system centered around a deep "Iron Green" and "Rust Orange" palette. The logo combines organic growth rings with a structural hex-nut shape, bridging the gap between nature and trade skill.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The digital experience reflects this with a "blueprint" style instant quote calculator and a transparent client portal, reinforcing the core value of reliability.
                </p>
              </div>

              {/* Visual Showcase */}
              <div className="space-y-12">
                
                {/* Logo Showcase */}
                <div className="bg-[#F0EAD6] p-12 rounded-xl flex items-center justify-center">
                  <img 
                    src="/iw_logo.png" 
                    alt="Ironwood Logo Design" 
                    className="max-w-full h-auto drop-shadow-xl"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
                      <img 
                        src="/iw_wrap.png" 
                        alt="Vehicle Wrap Design" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider">Fleet Branding</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
                      <img 
                        src="/iw_uniform.png" 
                        alt="Uniform Design" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider">Uniform System</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-[#222] rounded-xl p-8 border border-white/5">
                  <h4 className="text-xl font-bold text-white mb-6">Key Brand Elements</h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#2F4538] flex items-center justify-center shrink-0">
                        <Check size={20} className="text-[#F0EAD6]" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-1">Iron Green</h5>
                        <p className="text-gray-400 text-sm">A deep, forest tone that anchors the brand in nature and stability.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#C05726] flex items-center justify-center shrink-0">
                        <Check size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-1">Rust Orange</h5>
                        <p className="text-gray-400 text-sm">High-visibility accent color inspired by industrial safety and autumn foliage.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#3E4E50] flex items-center justify-center shrink-0">
                        <Check size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-1">Slate Gray</h5>
                        <p className="text-gray-400 text-sm">Cool, technical neutral for UI elements and information hierarchy.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F0EAD6] flex items-center justify-center shrink-0">
                        <Check size={20} className="text-[#2F4538]" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-1">Canvas</h5>
                        <p className="text-gray-400 text-sm">Warm off-white background that reduces eye strain and adds vintage character.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IronwoodCaseStudyModal;
