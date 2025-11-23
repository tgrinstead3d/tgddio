import { ArrowRight, Award, Layers, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Philosophy = ({ setIsManifestoOpen, theme }) => {
  return (
    <section id="philosophy" className={`py-16 md:py-24 ${theme.cardBgAlt} relative transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <h2 className={`${theme.accentText} font-bold tracking-widest uppercase mb-4 text-sm`}>Our Philosophy</h2>
            <h3 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6`}>
              More Than A Consultant. <br /> A Strategic Partner.
            </h3>
            <p className={`${theme.textMuted} mb-6 leading-relaxed`}>
              True confidence comes from knowing someone has your back. We build you up by creating systems and designs that work as hard as you do.
            </p>
            <button
              onClick={() => setIsManifestoOpen(true)}
              className={`${theme.secondaryText} hover:opacity-80 font-bold inline-flex items-center gap-2 transition-colors text-left`}
            >
              Read our manifesto <ArrowRight size={16} />
            </button>
          </div>
          <div className="col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Partnership First",
                desc: "We integrate with your team, understanding your culture to amplify your authentic voice."
              },
              {
                icon: TrendingUp,
                title: "Scalable Confidence",
                desc: "Designs that grow with you. We build robust foundations meant for expansion."
              },
              {
                icon: Layers,
                title: "Depth of Strategy",
                desc: "Surface level isn't enough. We dig deep into market psychology and brand archetypes."
              },
              {
                icon: Award,
                title: "Premium Execution",
                desc: "Like the craftsmanship of old, every pixel is placed with intent and precision."
              },
            ].map((item, idx) => (
              <div key={idx} className={`${theme.cardBg} p-8 rounded-xl border ${theme.border} hover:border-cyan-500/30 transition-all group shadow-sm`}>
                <item.icon className="text-slate-400 group-hover:text-cyan-400 transition-colors mb-4" size={32} />
                <h4 className={`text-xl font-bold ${theme.text} mb-3`}>{item.title}</h4>
                <p className={`${theme.textMuted} text-sm leading-relaxed`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
