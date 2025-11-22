import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Facebook,
  Instagram,
  Layers,
  LineChart,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  ShieldCheck,
  Sun,
  TrendingUp,
  Twitter,
  Users,
  X
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import HeroBackground from './HeroBackground';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Handle scroll effects for navbar styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Prevent body scroll when manifesto is open
  useEffect(() => {
    if (isManifestoOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isMobileMenuOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isManifestoOpen, isMobileMenuOpen]);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  // Theme classes mapping - Dark Mode Only
  const theme = {
    bg: 'bg-slate-950',
    text: 'text-slate-100',
    textMuted: 'text-slate-400',
    // Nav specific themes
    navIslandBg: 'bg-slate-900/80',
    navBorder: 'border-slate-700/50',

    cardBg: 'bg-slate-950',
    cardBgAlt: 'bg-slate-900',
    border: 'border-slate-800',
    borderStrong: 'border-slate-700',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-600',
    secondaryText: 'text-fuchsia-400',
    shadow: 'shadow-slate-900/50',
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-500`}>

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
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold">TG</span>
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-lg font-bold tracking-tighter whitespace-nowrap">TG Design & Development</span>
              </div>
            </button>
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
            <Twitter className="text-slate-400 hover:text-cyan-500 transition-colors" />
            <Linkedin className="text-slate-400 hover:text-cyan-500 transition-colors" />
            <Mail className="text-slate-400 hover:text-cyan-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
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
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2 group"
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
                    <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>Unshakeable Foundation</h3>
                    <p className={theme.textMuted}>We don't just design; we fortify your market position.</p>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                  <div className="flex justify-between w-full px-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${theme.secondaryText}`}>5+</div>
                      <div className="text-xs text-slate-500 uppercase">Years</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${theme.accentText}`}>100%</div>
                      <div className="text-xs text-slate-500 uppercase">Commitment</div>
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

      {/* Philosophy Section */}
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
                  <item.icon className="text-slate-500 group-hover:text-cyan-400 transition-colors mb-4" size={32} />
                  <h4 className={`text-xl font-bold ${theme.text} mb-3`}>{item.title}</h4>
                  <p className={`${theme.textMuted} text-sm leading-relaxed`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Work Section */}
      <section id="work" className={`py-16 md:py-24 ${theme.cardBgAlt} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className={`${theme.accentText} font-bold tracking-widest uppercase mb-4 text-sm`}>Selected Work</h2>
              <h3 className={`text-3xl md:text-4xl font-bold ${theme.text}`}>
                Digital Excellence <br /> In Action.
              </h3>
            </div>
            <p className={`${theme.textMuted} max-w-md text-lg`}>
              We don't just talk about results. We build them. Here are a few of our recent partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Smalls and Petite",
                category: "E-Commerce / Local Business",
                desc: "A boutique local vendor creating custom yard sign decorations. We built a digital presence to showcase their unique, personalized creations.",
                image: "/smalls_and_petite.jpg",
                link: "https://www.smallsandpetite.com"
              },
              {
                title: "Brad's Welding",
                category: "Local Business / Services",
                desc: "A local mobile welding shop bringing years of expertise to the community.",
                image: "/brads_welding.webp",
                link: "https://www.bradsweldingohio.com"
              },
              {
                title: "Brad's Laserpro Studio",
                category: "Customization Service",
                desc: "A laser etching and customization service.",
                image: "/laserpro_studio.jpeg",
                link: "https://www.laserprostudio.com"
              },
              {
                title: "SNS Mobile Detailing",
                category: "Mobile Automotive Detailing",
                desc: "Mobile automotive detailing business taking great pride in their work and community.",
                image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2070",
                link: "#"
              }
            ].map((project, idx) => (
              <a 
                key={idx} 
                href={project.link}
                target={project.link === '#' ? '_self' : '_blank'}
                rel={project.link === '#' ? '' : 'noopener noreferrer'}
                onClick={(e) => project.link === '#' && e.preventDefault()}
                className={`group relative rounded-2xl overflow-hidden shadow-lg ${project.link === '#' ? 'cursor-default' : 'cursor-pointer'} block`}
              >
                {/* Project Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
                </div>

                {/* Abstract Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>

                {project.link === '#' ? (
                  <div className="relative h-96 p-8 flex items-center justify-center">
                    <div className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest border-4 border-white/20 p-6 rounded-xl backdrop-blur-sm">
                      Coming Soon
                    </div>
                  </div>
                ) : (
                  <div className="relative h-96 p-8 flex flex-col justify-end">
                    <div className={`transform transition-all duration-500 translate-y-4 group-hover:translate-y-0`}>
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
                        {project.category}
                      </div>
                      <h4 className="text-3xl font-bold text-white mb-3">{project.title}</h4>
                      <p className="text-white/90 text-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                        {project.desc}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-white font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 delay-200">
                        Visit Site <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-6 transition-colors duration-500">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800 rounded-3xl p-8 md:p-16 border text-center relative overflow-hidden shadow-2xl">

          {/* Abstract Architecture Background for texture */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Abstract Architecture"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.03] mix-blend-multiply pointer-events-none invert"
          />
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsManifestoOpen(false)}
          ></div>
          <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto ${theme.cardBg} rounded-2xl shadow-2xl p-8 md:p-12 border ${theme.border} animate-fade-in`}>
            <button
              onClick={() => setIsManifestoOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              <X size={24} className={theme.textMuted} />
            </button>

            <h2 className={`text-3xl font-bold ${theme.text} mb-8`}>Small Business deserves a big voice.</h2>

            <div className={`space-y-6 ${theme.textMuted} leading-relaxed text-lg`}>
              <p>
                We believe the internet is the great equalizer. It is the one place where a local shop should be able to stand toe-to-toe with a global giant. But somewhere along the way, the web lost its soul. It became a sea of sameness—cookie-cutter templates and big-corporate bloat.
              </p>
              <p className={`font-bold ${theme.text}`}>
                We are here to bring the personality back.
              </p>
              <p>
                We know that running a small business is lonely work. You have enough on your plate without stressing over code, pixels, and mobile responsiveness. We believe you shouldn't have to struggle with "easy" DIY builders that promise the world but deliver generic results.
              </p>
              <p>
                Our mission is simple: To take the weight off your shoulders. We build digital identities that don't just look "professional"—they look like you. We help you dress for the job you want, giving you the scale and polish of a major player without losing the heart of a small business.
              </p>
              <p className={`text-xl font-bold ${theme.accentText}`}>
                You focus on your dream. We’ll make sure the world sees it.
              </p>
            </div>
          </div>
        </div>
      )}

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Footer */}
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
    </div>
  );
};

export default App;