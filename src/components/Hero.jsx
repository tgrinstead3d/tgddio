import { ArrowRight, ShieldCheck } from 'lucide-react';
import React from 'react';
import HeroBackground from './HeroBackground';

const Hero = ({ setIsBookingOpen, theme }) => {
  return (
    <header className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden">
      {/* Background Elements */}
      <HeroBackground />
      <div className="absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-slate-800/30 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border-slate-700 ${theme.secondaryText} text-xs font-bold tracking-widest uppercase animate-fade-in`}>
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
            Digital Brand Consultant
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${theme.text}`}>
            Build a Brand That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              Commands Respect.
            </span>
          </h1>
          <p className={`text-xl ${theme.textMuted} max-w-xl leading-relaxed`}>
            Confidence isn't just a feeling; it's a strategy. We partner with visionaries to forge digital identities that stand the test of time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Start Your Transformation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <a href="#work" className={`px-8 py-4 border ${theme.borderStrong} hover:${theme.border} hover:bg-slate-900 ${theme.textMuted} rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2`}>
              View Our Work
            </a>
          </div>
        </div>

        {/* Abstract Visual Representation */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-96 h-[500px]">
            {/* Decorative Cards Stack */}
            <div className={`absolute top-0 left-8 w-full h-full border ${theme.border} bg-slate-900/50 rounded-2xl transform rotate-6 transition-transform duration-500 hover:rotate-3`}></div>
            <div className={`absolute top-4 left-4 w-full h-full border ${theme.borderStrong} bg-slate-900/80 rounded-2xl transform rotate-3 transition-transform duration-500 hover:rotate-1`}></div>

            {/* Main Visual Card */}
            <div className={`absolute top-8 left-0 w-full h-full bg-slate-900 border ${theme.borderStrong} rounded-2xl shadow-2xl overflow-hidden flex flex-col relative`}>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-200 via-slate-900 to-slate-900"></div>

              <div className="p-8 flex-1 flex flex-col justify-center items-center text-center space-y-6 z-10">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center border border-fuchsia-500/30 shadow-[0_0_30px_rgba(232,121,249,0.1)]">
                  <ShieldCheck size={40} className={theme.accentText} />
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${theme.text} mb-2`}>Unshakeable Foundation</h2>
                  <p className={theme.textMuted}>We don't just design; we fortify your market position.</p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                <div className="flex justify-between w-full px-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${theme.secondaryText}`}>5+</div>
                    <div className="text-xs text-slate-400 uppercase">Years</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${theme.accentText}`}>100%</div>
                    <div className="text-xs text-slate-400 uppercase">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600 hidden lg:block">
        <ArrowRight className="rotate-90" size={24} />
      </div>
    </header>
  );
};

export default Hero;
