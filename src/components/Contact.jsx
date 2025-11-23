import { Mail } from 'lucide-react';
import React from 'react';

const Contact = ({ setIsBookingOpen, theme }) => {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 transition-colors duration-500">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800 rounded-3xl p-8 md:p-16 border text-center relative overflow-hidden shadow-2xl">

        {/* Abstract Architecture Background for texture */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Abstract Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03] mix-blend-multiply pointer-events-none invert"
        />
        <div className="relative z-10">
          <h2 className={`text-3xl md:text-5xl font-bold ${theme.text} mb-6`}>Ready to Build Something Powerful?</h2>
          <p className={`${theme.textMuted} text-lg mb-10 max-w-2xl mx-auto`}>
            You bring the vision. We bring the strategy and design to make it unshakeable. Let's partner up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail size={20} />
              Start a Project
            </button>
            <a 
              href="https://meetings-na2.hubspot.com/tyler-grinstead"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 bg-slate-800 hover:bg-slate-700 ${theme.text} rounded font-bold text-lg transition-all flex items-center justify-center gap-2`}
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
