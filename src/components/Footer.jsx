import { Facebook, Instagram, Mail } from 'lucide-react';
import React from 'react';

const Footer = ({ theme }) => {
  return (
    <footer className="bg-slate-950 border-slate-900 border-t py-12 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto mb-12 grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center text-xs font-bold text-slate-900">TG</div>
            <span className="font-bold text-xl text-slate-300">TG Design & Development</span>
          </div>
          <p className={`${theme.textMuted} max-w-sm`}>
            Forging digital identities that stand the test of time.
          </p>
        </div>

        <div>
          <h3 className={`font-bold uppercase tracking-widest text-sm mb-6 ${theme.accentText}`}>Our Beliefs</h3>
          <div className="space-y-4">
            <div>
              <h4 className={`font-bold ${theme.text} mb-1`}>The Internet is for everyone.</h4>
              <p className={`${theme.textMuted} text-sm`}>Small businesses deserve the same digital polish and presence as the Fortune 500.</p>
            </div>
            <div>
              <h4 className={`font-bold ${theme.text} mb-1`}>Authenticity wins.</h4>
              <p className={`${theme.textMuted} text-sm`}>People buy from people. Your website shouldn't look like a template; it should look like you.</p>
            </div>
            <div>
              <h4 className={`font-bold ${theme.text} mb-1`}>DIY isn't the answer.</h4>
              <p className={`${theme.textMuted} text-sm`}>You have a business to run. Stop wrestling with "drag-and-drop" tools that don't deliver. Let us handle the tech so you can handle the rest.</p>
            </div>
            <div>
              <h4 className={`font-bold ${theme.text} mb-1`}>We’re in your corner.</h4>
              <p className={`${theme.textMuted} text-sm`}>We exist to help the underdog fight, survive, and thrive in a world of big fish.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-900">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} TG Design & Development, LLC. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="https://www.facebook.com/tylergrinsteaddesign" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 transition-colors"><Facebook size={20} /></a>
          <a href="https://www.instagram.com/txgrinstead/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 transition-colors"><Instagram size={20} /></a>
          <a href="mailto:tyler@tgdesign.io" className="text-slate-500 hover:text-cyan-600 transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
