import { CheckCircle2, Code2, LineChart, Palette } from 'lucide-react';
import React from 'react';

const Services = ({ theme }) => {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-6`}>Forge Your Legacy</h2>
        <p className={`${theme.textMuted} max-w-2xl mx-auto`}>
          Comprehensive digital services designed to arm your business with the tools it needs to conquer the market.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Service Card 1: Brand Identity (Standard) */}
        <div className={`group relative ${theme.cardBgAlt} rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 shadow-lg`}>
          <div className="absolute top-0 left-0 w-full h-2 bg-cyan-500"></div>
          <div className="p-8 pt-12">
            <h3 className={`text-2xl font-bold ${theme.text} mb-4 group-hover:${theme.accentText} transition-colors`}>Brand Identity</h3>
            <ul className="space-y-3 mb-8">
              {['Logo & Visual Systems', 'Brand Voice Development', 'Style Guides', 'Collateral Design'].map(i => (
                <li key={i} className={`flex items-center gap-3 ${theme.textMuted} text-sm`}>
                  <CheckCircle2 size={16} className="text-cyan-600" /> {i}
                </li>
              ))}
            </ul>
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
              <Palette className={`text-slate-500 group-hover:${theme.accentText}`} />
            </div>
          </div>
        </div>

        {/* Service Card 2: Web Development (Popular & Centered) */}
        <div className={`group relative ${theme.cardBg} rounded-2xl overflow-hidden transform md:-translate-y-4 shadow-2xl border ${theme.borderStrong} transition-transform duration-300 hover:-translate-y-2 md:hover:-translate-y-6`}>
          <div className="absolute top-0 left-0 w-full h-2 bg-fuchsia-400"></div>
          <div className="p-8 pt-12">
            <div className="absolute top-4 right-4 px-3 py-1 bg-fuchsia-500/20 text-fuchsia-600 text-xs font-bold rounded-full">POPULAR</div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-4 group-hover:${theme.secondaryText} transition-colors`}>Web Development</h3>
            <ul className="space-y-3 mb-8">
              {['Custom Vue/Nuxt', 'Headless CMS', 'E-commerce Solutions', 'Performance Tuning'].map(i => (
                <li key={i} className={`flex items-center gap-3 ${theme.textMuted} text-sm`}>
                  <CheckCircle2 size={16} className="text-fuchsia-500" /> {i}
                </li>
              ))}
            </ul>
            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-fuchsia-500/10 transition-colors">
              <Code2 className={`text-slate-400 group-hover:${theme.secondaryText}`} />
            </div>
          </div>
        </div>

        {/* Service Card 3: Digital Strategy (Standard) */}
        <div className={`group relative ${theme.cardBgAlt} rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 shadow-lg`}>
          <div className="absolute top-0 left-0 w-full h-2 bg-cyan-700"></div>
          <div className="p-8 pt-12">
            <h3 className={`text-2xl font-bold ${theme.text} mb-4 group-hover:${theme.accentText} transition-colors`}>Digital Strategy</h3>
            <ul className="space-y-3 mb-8">
              {['Market Positioning', 'User Experience (UX) Audit', 'Growth Roadmaps', 'Conversion Optimization'].map(i => (
                <li key={i} className={`flex items-center gap-3 ${theme.textMuted} text-sm`}>
                  <CheckCircle2 size={16} className="text-cyan-600" /> {i}
                </li>
              ))}
            </ul>
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
              <LineChart className={`text-slate-500 group-hover:${theme.accentText}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
