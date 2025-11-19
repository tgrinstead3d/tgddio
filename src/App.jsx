import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Layers,
  Award,
  CheckCircle2,
  Mail,
  Linkedin,
  Twitter,
  Sun,
  Moon,
  Code2,
  Palette,
  LineChart,
  Facebook,
  Instagram
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // Default to Light mode
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);

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

  // Theme classes mapping
  const theme = {
    bg: isDark ? 'bg-stone-950' : 'bg-stone-50',
    text: isDark ? 'text-stone-100' : 'text-stone-900',
    textMuted: isDark ? 'text-stone-400' : 'text-stone-600',
    // Nav specific themes
    navIslandBg: isDark ? 'bg-stone-900/80' : 'bg-white/80',
    navBorder: isDark ? 'border-stone-700/50' : 'border-white/50',

    cardBg: isDark ? 'bg-stone-950' : 'bg-white',
    cardBgAlt: isDark ? 'bg-stone-900' : 'bg-stone-100',
    border: isDark ? 'border-stone-800' : 'border-stone-200',
    borderStrong: isDark ? 'border-stone-700' : 'border-stone-300',
    accentText: isDark ? 'text-teal-400' : 'text-teal-600',
    accentBg: isDark ? 'bg-teal-600' : 'bg-teal-600',
    secondaryText: isDark ? 'text-amber-400' : 'text-amber-600',
    shadow: isDark ? 'shadow-stone-900/50' : 'shadow-stone-200/50',
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-teal-500 selection:text-white transition-colors duration-500`}>

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
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-stone-900 font-bold">TG</span>
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-lg font-bold tracking-tighter whitespace-nowrap">TG Design & Development</span>
              </div>
            </button>
          </div>

          {/* Desktop Nav - Centered Links */}
          <div className="hidden lg:flex items-center justify-center gap-1 bg-stone-100/5 rounded-full px-2 py-1 border border-transparent">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300
                  hover:bg-stone-500/10
                  ${isDark ? 'text-stone-300 hover:text-teal-400' : 'text-stone-600 hover:text-teal-700'}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions (Theme + CTA) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-colors border
                ${isDark ? 'bg-stone-800 border-stone-700 hover:bg-stone-700' : 'bg-white border-stone-200 hover:bg-stone-50'}
              `}
              title="Toggle Theme"
            >
              {isDark ? <Moon size={18} className="text-teal-400" /> : <Sun size={18} className="text-amber-500" />}
            </button>

            <button className={`px-5 py-2.5 border ${isDark ? 'border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20' : 'bg-stone-900 text-white hover:bg-stone-800'} rounded-xl transition-all duration-300 text-sm font-bold uppercase tracking-wider shadow-lg cursor-pointer`}>
              Book Now
            </button>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="lg:hidden flex items-center gap-3 z-50">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-colors border
                ${isDark ? 'bg-stone-800 border-stone-700' : 'bg-stone-100 border-stone-200'}
              `}
            >
              {isDark ? <Moon size={18} className="text-teal-400" /> : <Sun size={18} className="text-amber-500" />}
            </button>

            <button
              className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-colors
                ${isMobileMenuOpen ? 'bg-stone-100 text-stone-900' : (isDark ? 'bg-stone-800 text-stone-100' : 'bg-stone-900 text-white')}
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
          ${isDark ? 'bg-stone-950/95' : 'bg-white/95'} 
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
                  ${isDark ? 'text-stone-100 hover:text-teal-400' : 'text-stone-900 hover:text-teal-600'}
                `}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="w-16 h-1 bg-stone-200 rounded-full my-4"></div>

          <button className="w-full py-4 bg-teal-600 text-white text-xl font-bold rounded-2xl hover:bg-teal-500 shadow-xl shadow-teal-500/20 transition-all">
            Book Consultation
          </button>

          <div className="flex gap-8 mt-4">
            <Twitter className="text-stone-400 hover:text-teal-500 transition-colors" />
            <Linkedin className="text-stone-400 hover:text-teal-500 transition-colors" />
            <Mail className="text-stone-400 hover:text-teal-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none">
          <div className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] ${isDark ? 'bg-teal-900/20' : 'bg-teal-200/40'} rounded-full blur-[120px]`}></div>
          <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] ${isDark ? 'bg-amber-900/20' : 'bg-amber-200/40'} rounded-full blur-[100px]`}></div>
          <div className={`absolute top-[40%] left-[20%] w-[300px] h-[300px] ${isDark ? 'bg-stone-800/30' : 'bg-stone-300/30'} rounded-full blur-[80px]`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${isDark ? 'bg-stone-900 border-stone-700' : 'bg-white border-stone-200 shadow-sm'} ${theme.secondaryText} text-xs font-bold tracking-widest uppercase animate-fade-in`}>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Digital Brand Consultant
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${theme.text}`}>
              Build a Brand That <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-teal-400 to-teal-200' : 'from-teal-600 to-teal-400'}`}>
                Commands Respect.
              </span>
            </h1>
            <p className={`text-xl ${theme.textMuted} max-w-xl leading-relaxed`}>
              Confidence isn't just a feeling; it's a strategy. We partner with visionaries to forge digital identities that stand the test of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] flex items-center justify-center gap-2 group">
                Start Your Transformation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className={`px-8 py-4 border ${theme.borderStrong} hover:${theme.border} ${isDark ? 'hover:bg-stone-900' : 'hover:bg-stone-100'} ${theme.textMuted} rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2`}>
                View Our Work
              </button>
            </div>
          </div>

          {/* Abstract Visual Representation */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-96 h-[500px]">
              {/* Decorative Cards Stack */}
              <div className={`absolute top-0 left-8 w-full h-full border ${theme.border} ${isDark ? 'bg-stone-900/50' : 'bg-stone-100/50'} rounded-2xl transform rotate-6 transition-transform duration-500 hover:rotate-3`}></div>
              <div className={`absolute top-4 left-4 w-full h-full border ${theme.borderStrong} ${isDark ? 'bg-stone-900/80' : 'bg-stone-100/80'} rounded-2xl transform rotate-3 transition-transform duration-500 hover:rotate-1`}></div>

              {/* Main Visual Card */}
              <div className={`absolute top-8 left-0 w-full h-full ${isDark ? 'bg-stone-900' : 'bg-white'} border ${theme.borderStrong} rounded-2xl shadow-2xl overflow-hidden flex flex-col relative`}>
                <div className={`absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${isDark ? 'from-amber-200 via-stone-900 to-stone-900' : 'from-amber-400 via-white to-white'}`}></div>

                <div className="p-8 flex-1 flex flex-col justify-center items-center text-center space-y-6 z-10">
                  <div className={`w-20 h-20 ${isDark ? 'bg-stone-800' : 'bg-stone-100'} rounded-full flex items-center justify-center border ${isDark ? 'border-amber-500/30' : 'border-amber-500/20'} shadow-[0_0_30px_rgba(251,191,36,0.1)]`}>
                    <ShieldCheck size={40} className={theme.accentText} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>Unshakeable Foundation</h3>
                    <p className={theme.textMuted}>We don't just design; we fortify your market position.</p>
                  </div>
                  <div className={`w-full h-px bg-gradient-to-r from-transparent ${isDark ? 'via-stone-700' : 'via-stone-200'} to-transparent`}></div>
                  <div className="flex justify-between w-full px-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${theme.secondaryText}`}>5+</div>
                      <div className="text-xs text-stone-500 uppercase">Years</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${theme.accentText}`}>100%</div>
                      <div className="text-xs text-stone-500 uppercase">Commitment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-600 hidden lg:block">
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
                <div key={idx} className={`${theme.cardBg} p-8 rounded-xl border ${theme.border} ${isDark ? 'hover:border-teal-500/30' : 'hover:border-teal-500/50'} transition-all group shadow-sm`}>
                  <item.icon className={`text-stone-500 ${isDark ? 'group-hover:text-teal-400' : 'group-hover:text-teal-600'} transition-colors mb-4`} size={32} />
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
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${isDark ? 'from-stone-900 via-teal-900 to-stone-900' : 'from-stone-100 via-teal-200 to-stone-100'}`}></div>

        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-6`}>Forge Your Legacy</h2>
          <p className={`${theme.textMuted} max-w-2xl mx-auto`}>
            Comprehensive digital services designed to arm your business with the tools it needs to conquer the market.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Service Card 1: Brand Identity (Standard) */}
          <div className={`group relative ${theme.cardBgAlt} rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 shadow-lg`}>
            <div className="absolute top-0 left-0 w-full h-2 bg-teal-500"></div>
            <div className="p-8 pt-12">
              <h3 className={`text-2xl font-bold ${theme.text} mb-4 group-hover:${theme.accentText} transition-colors`}>Brand Identity</h3>
              <ul className="space-y-3 mb-8">
                {['Logo & Visual Systems', 'Brand Voice Development', 'Style Guides', 'Collateral Design'].map(i => (
                  <li key={i} className={`flex items-center gap-3 ${theme.textMuted} text-sm`}>
                    <CheckCircle2 size={16} className={isDark ? 'text-teal-600' : 'text-teal-500'} /> {i}
                  </li>
                ))}
              </ul>
              <div className={`w-12 h-12 ${isDark ? 'bg-stone-800' : 'bg-white'} rounded-full flex items-center justify-center group-hover:bg-teal-500/10 transition-colors`}>
                <Palette className={`text-stone-500 group-hover:${theme.accentText}`} />
              </div>
            </div>
          </div>

          {/* Service Card 2: Web Development (Popular & Centered) */}
          <div className={`group relative ${theme.cardBg} rounded-2xl overflow-hidden transform md:-translate-y-4 shadow-2xl border ${theme.borderStrong} transition-transform duration-300 hover:-translate-y-2 md:hover:-translate-y-6`}>
            <div className="absolute top-0 left-0 w-full h-2 bg-amber-400"></div>
            <div className="p-8 pt-12">
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/20 text-amber-600 text-xs font-bold rounded-full">POPULAR</div>
              <h3 className={`text-2xl font-bold ${theme.text} mb-4 group-hover:${theme.secondaryText} transition-colors`}>Web Development</h3>
              <ul className="space-y-3 mb-8">
                {['Custom Vue/Nuxt', 'Headless CMS', 'E-commerce Solutions', 'Performance Tuning'].map(i => (
                  <li key={i} className={`flex items-center gap-3 ${theme.textMuted} text-sm`}>
                    <CheckCircle2 size={16} className="text-amber-500" /> {i}
                  </li>
                ))}
              </ul>
              <div className={`w-12 h-12 ${isDark ? 'bg-stone-700' : 'bg-stone-100'} rounded-full flex items-center justify-center group-hover:bg-amber-500/10 transition-colors`}>
                <Code2 className={`text-stone-400 group-hover:${theme.secondaryText}`} />
              </div>
            </div>
          </div>

          {/* Service Card 3: Digital Strategy (Standard) */}
          <div className={`group relative ${theme.cardBgAlt} rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 shadow-lg`}>
            <div className="absolute top-0 left-0 w-full h-2 bg-teal-700"></div>
            <div className="p-8 pt-12">
              <h3 className={`text-2xl font-bold ${theme.text} mb-4 group-hover:${theme.accentText} transition-colors`}>Digital Strategy</h3>
              <ul className="space-y-3 mb-8">
                {['Market Positioning', 'User Experience (UX) Audit', 'Growth Roadmaps', 'Conversion Optimization'].map(i => (
                  <li key={i} className={`flex items-center gap-3 ${theme.textMuted} text-sm`}>
                    <CheckCircle2 size={16} className={isDark ? 'text-teal-600' : 'text-teal-500'} /> {i}
                  </li>
                ))}
              </ul>
              <div className={`w-12 h-12 ${isDark ? 'bg-stone-800' : 'bg-white'} rounded-full flex items-center justify-center group-hover:bg-teal-500/10 transition-colors`}>
                <LineChart className={`text-stone-500 group-hover:${theme.accentText}`} />
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
                title: "Nexus Financial",
                category: "FinTech Platform",
                desc: "Complete digital transformation for a next-gen wealth management platform. Focused on trust, speed, and user clarity.",
                image: "/nexus_financial.png"
              },
              {
                title: "Vanguard Estates",
                category: "Real Estate",
                desc: "Luxury property showcase with immersive 3D tours and high-performance lead generation funnels.",
                image: "/vanguard_estates.png"
              },
              {
                title: "Lumina Health",
                category: "Healthcare App",
                desc: "Patient-first interface design that simplifies complex medical data into actionable insights.",
                image: "/lumina_health.png"
              },
              {
                title: "Apex Logistics",
                category: "SaaS Dashboard",
                desc: "Mission-critical fleet management system handling real-time data visualization for global operations.",
                image: "/apex_logistics.png"
              }
            ].map((project, idx) => (
              <div key={idx} className={`group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer`}>
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
                      View Case Study <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className={`px-8 py-4 border ${theme.borderStrong} hover:${theme.border} ${isDark ? 'hover:bg-stone-800' : 'hover:bg-stone-200'} ${theme.text} rounded-xl font-bold text-lg transition-all inline-flex items-center gap-2`}>
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-6 transition-colors duration-500">
        <div className={`max-w-5xl mx-auto bg-gradient-to-br ${isDark ? 'from-stone-900 to-stone-950 border-stone-800' : 'from-stone-100 to-white border-stone-200'} rounded-3xl p-8 md:p-16 border text-center relative overflow-hidden shadow-2xl`}>

          {/* Abstract Architecture Background for texture */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Abstract Architecture"
            className={`absolute inset-0 w-full h-full object-cover opacity-[0.03] mix-blend-multiply pointer-events-none ${isDark ? 'invert' : ''}`}
          />

          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <h2 className={`text-3xl md:text-5xl font-bold ${theme.text} mb-6`}>Ready to Build Something Powerful?</h2>
            <p className={`${theme.textMuted} text-lg mb-10 max-w-2xl mx-auto`}>
              You bring the vision. We bring the strategy and design to make it unshakeable. Let's partner up.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:tyler@tgdesign.io" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Mail size={20} />
                Start a Project
              </a>
              <button className={`px-8 py-4 ${isDark ? 'bg-stone-800 hover:bg-stone-700' : 'bg-stone-200 hover:bg-stone-300'} ${theme.text} rounded font-bold text-lg transition-all flex items-center justify-center gap-2`}>
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Manifesto Modal */}
      {isManifestoOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsManifestoOpen(false)}
          ></div>
          <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto ${theme.cardBg} rounded-2xl shadow-2xl p-8 md:p-12 border ${theme.border} animate-fade-in`}>
            <button
              onClick={() => setIsManifestoOpen(false)}
              className={`absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 ${isDark ? 'hover:bg-stone-800' : ''} transition-colors`}
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

      {/* Footer */}
      <footer className={`${isDark ? 'bg-stone-950 border-stone-900' : 'bg-stone-100 border-stone-200'} border-t py-12 px-6 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto mb-12 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center text-xs font-bold text-stone-900">TG</div>
              <span className={`font-bold text-xl ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>TG Design & Development</span>
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

        <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t ${isDark ? 'border-stone-900' : 'border-stone-200'}`}>
          <div className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} TG Design & Development, LLC. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/tylergrinsteaddesign" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-teal-600 transition-colors"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/txgrinstead/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-teal-600 transition-colors"><Instagram size={20} /></a>
            <a href="mailto:tyler@tgdesign.io" className="text-stone-500 hover:text-teal-600 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;