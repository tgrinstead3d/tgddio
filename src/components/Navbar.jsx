import { Linkedin, Mail, Menu, Twitter, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, setIsBookingOpen, navLinks, theme }) => {
  return (
    <>
      {/* MODERN FLOATING NAVBAR 
        - Fixed positioning but with padding from top to create "Island" effect
        - Max width constraint to keep it contained
      */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
        <nav
          className={`
            pointer-events-auto
            w-full max-w-7xl 
            rounded-2xl 
            backdrop-blur-xl 
            border ${theme.navBorder}
            shadow-2xl shadow-black/5
            transition-all duration-500 ease-out
            flex justify-between items-center
            px-4 py-3 md:px-6 md:py-3
            ${isScrolled ? `${theme.navIslandBg} scale-[0.99]` : `${theme.navIslandBg} scale-100`}
          `}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3 z-50 relative shrink-0">
            {/* Text Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold">TG</span>
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-lg font-bold tracking-tighter whitespace-nowrap">TG Design & Development</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Centered Links */}
          <div className="hidden lg:flex items-center justify-center gap-1 bg-slate-100/5 rounded-full px-2 py-1 border border-transparent">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300
                  hover:bg-slate-500/10
                  text-slate-300 hover:text-cyan-400
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions (CTA) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className={`px-5 py-2.5 border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 hover:bg-fuchsia-500/20 rounded-xl transition-all duration-300 text-sm font-bold uppercase tracking-wider shadow-lg cursor-pointer`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="lg:hidden flex items-center gap-3 z-50">
            <button
              className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-colors
                ${isMobileMenuOpen ? 'bg-slate-100 text-slate-900' : 'bg-slate-800 text-slate-100'}
              `}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* FULL SCREEN MOBILE MENU OVERLAY 
        - Modern, immersive overlay instead of a slide-down
        - Blurred background
      */}
      <div
        className={`
          fixed inset-0 z-[45] 
          bg-slate-950/95
          backdrop-blur-2xl 
          transition-all duration-500 ease-in-out
          flex flex-col justify-center items-center
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-center gap-8 p-6 w-full max-w-md text-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                  text-3xl md:text-4xl font-bold tracking-tight transition-all duration-300
                  hover:scale-110
                  text-slate-100 hover:text-cyan-400
                `}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="w-16 h-1 bg-slate-200 rounded-full my-4"></div>

          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsBookingOpen(true);
            }}
            className="w-full py-4 bg-cyan-600 text-white text-xl font-bold rounded-2xl hover:bg-cyan-500 shadow-xl shadow-cyan-500/20 transition-all"
          >
            Book Consultation
          </button>

          <div className="flex gap-8 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="text-slate-400 hover:text-cyan-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="text-slate-400 hover:text-cyan-500 transition-colors" />
            </a>
            <a href="mailto:tyler@tgdesign.io" aria-label="Email">
              <Mail className="text-slate-400 hover:text-cyan-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
