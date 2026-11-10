import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeNav: string;
  onNavigate: (page: string) => void;
  onOpenSearch?: () => void;
  onOpenRibbonModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeNav,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep navbar visible if mobile drawer is currently open
      if (mobileMenuOpen) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Always show navbar near the top of the page
      if (currentScrollY <= 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down -> hide navbar by moving upwards
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up -> reveal navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', isHome: true },
    { label: 'About Us', isHome: false },
    { label: 'Academics', isHome: false },
    { label: 'Admissions', isHome: false },
    { label: 'Campus Life', isHome: false },
    { label: 'Events', isHome: false },
    { label: 'Contact', isHome: false },
  ];

  const valuesList = [
    'EDUCATION',
    'DISCIPLINE',
    'VALUES',
    'CHARACTER',
    'EXCELLENCE',
  ];

  const handleItemClick = (label: string, isHome: boolean) => {
    setMobileMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate(label);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 py-2 sm:py-2.5 px-2.5 sm:px-4 lg:px-6 pointer-events-none transition-transform duration-300 ease-in-out ${
        visible 
          ? 'translate-y-0' 
          : '-translate-y-28 lg:-translate-y-[380px]'
      }`}
    >
      <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-2 sm:gap-3 lg:gap-4 relative">
        
        {/* Floating Dark Capsule Pill Bar - Order: Logo -> Home-Contact -> Admission Enquiry -> Banner (z-30 so it sits in front of mobile banner) */}
        <div className="w-full bg-[#0f2b5c] text-white rounded-full px-2.5 sm:px-3 lg:px-3.5 py-1.5 sm:py-2 shadow-[0_8px_30px_rgba(0,0,0,0.22)] border border-[#1a3d6e] flex items-center justify-between gap-2 sm:gap-3 lg:gap-3.5 transition-all pointer-events-auto relative z-30">
          
          {/* 1. LOGO: Circular White Crest + School Title */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0 select-none pl-0.5"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-xs shrink-0 transition-transform group-hover:scale-105">
              <img 
                src="/assets/images/pss_logo.jpg" 
                alt="PSS Public School Crest" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex flex-col justify-center pr-1">
              <span className="font-serif font-black text-white tracking-tight text-xs sm:text-sm lg:text-[14.5px] xl:text-[16px] leading-tight group-hover:text-amber-300 transition-colors whitespace-nowrap">
                PSS PUBLIC SCHOOL
              </span>
              <span className="hidden 2xl:inline-block text-[8px] tracking-[0.2em] uppercase font-bold text-slate-400 whitespace-nowrap">
                PANICKAVEETTIL SIR SEBASTIAN
              </span>
            </div>
          </div>

          {/* 2. HOME - CONTACT NAVIGATION LINKS (Responsive density for preview & full screens) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 2xl:space-x-2.5 shrink min-w-0">
            {navItems.map((item) => {
              const isActive = item.isHome && activeNav === 'Home';
              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.label, item.isHome)}
                  className={`text-[11px] lg:text-xs xl:text-[13px] 2xl:text-sm font-semibold tracking-wide transition-all px-2 lg:px-2.5 xl:px-3 py-1 lg:py-1.5 rounded-full cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'bg-white/20 text-white font-bold shadow-xs' 
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* 3. ADMISSION ENQUIRY: Positioned after navigation links */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => onNavigate('Admission Enquiry')}
              className="bg-white hover:bg-slate-100 text-slate-950 font-black text-[11px] sm:text-xs xl:text-[13px] px-2.5 sm:px-4 xl:px-5 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1 sm:gap-1.5 group/btn"
            >
              <span><span className="hidden sm:inline">Admission </span>Enquiry</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-700 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-1.5 text-slate-300 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* 4. BANNER: Responsive and perfectly scaled, hanging in front (z-50) at the right end */}
          <div className="hidden lg:block relative w-[94px] lg:w-[98px] xl:w-[108px] 2xl:w-[118px] h-10 shrink-0">
            <div className="absolute -top-3.5 right-0 w-full h-[315px] lg:h-[320px] xl:h-[335px] 2xl:h-[345px] z-50 select-none drop-shadow-[0_16px_32px_rgba(11,37,69,0.55)] transition-transform duration-300 hover:translate-y-1">
              {/* SVG Banner Shape with Gold Border and Swallowtail Inverted V Notch */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                viewBox="0 0 100 335" 
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="bannerBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0b2d64" />
                    <stop offset="55%" stopColor="#12438c" />
                    <stop offset="100%" stopColor="#071c40" />
                  </linearGradient>
                  <linearGradient id="bannerGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="45%" stopColor="#facc15" />
                    <stop offset="75%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#ca8a04" />
                  </linearGradient>
                </defs>
                {/* Outer Gold Border and Ribbon Shape with Swallowtail Cut */}
                <path 
                  d="M 1.5 0 L 98.5 0 L 98.5 333 L 50 310 L 1.5 333 Z" 
                  fill="url(#bannerBg)" 
                  stroke="url(#bannerGold)" 
                  strokeWidth="2.5" 
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Banner Content Layout - Proportional and perfectly centered */}
              <div className="relative z-10 w-full h-full flex flex-col items-center pt-3 lg:pt-3.5 xl:pt-4 px-1.5 sm:px-2">
                {/* Top Social Icons */}
                <div className="flex items-center justify-center gap-1.5 lg:gap-2 xl:gap-2.5 text-white/95 w-full">
                  <button 
                    onClick={() => onNavigate('Facebook Page')} 
                    aria-label="Facebook"
                    title="Facebook"
                    className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 rounded-full flex items-center justify-center hover:bg-white/15 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => onNavigate('Instagram')} 
                    aria-label="Instagram"
                    title="Instagram"
                    className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 rounded-full flex items-center justify-center hover:bg-white/15 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => onNavigate('YouTube Channel')} 
                    aria-label="YouTube"
                    title="YouTube"
                    className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 rounded-full flex items-center justify-center hover:bg-white/15 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </button>
                </div>

                {/* Subtle Decorative Gold Divider */}
                <div className="w-7 sm:w-8 h-px bg-amber-400/40 my-2 lg:my-2.5" />

                {/* School Values Stack - Clearly formatted and spaced */}
                <div className="flex flex-col items-center justify-center flex-1 space-y-3 lg:space-y-3.5 xl:space-y-4 pb-6 text-center select-none">
                  {valuesList.map((val) => (
                    <span 
                      key={val} 
                      className="text-[10px] lg:text-[10.5px] xl:text-[11.5px] 2xl:text-[12.5px] font-bold tracking-[0.16em] xl:tracking-[0.18em] uppercase text-white/95 hover:text-amber-200 transition-colors cursor-default drop-shadow-xs"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-[1720px] mx-auto bg-[#0f2b5c] text-white rounded-3xl border border-[#1a3d6e] p-4 shadow-2xl animate-fade-in pointer-events-auto">
          {/* Mobile School Values Banner */}
          <div className="mb-3.5 p-3 bg-gradient-to-r from-[#082046] to-[#0f3b7a] rounded-2xl text-white border border-blue-600/40">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block mb-1.5">
              PSS Core Pillars
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {valuesList.map((val) => (
                <div key={val} className="flex items-center gap-1.5 text-[11px] text-blue-100 font-semibold bg-blue-950/60 px-2 py-1 rounded-lg border border-blue-600/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = item.isHome && activeNav === 'Home';
              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.label, item.isHome)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-white font-bold'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {!item.isHome && (
                    <span className="text-[10px] text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-3 border-t border-[#1a3d6e] flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Follow PSS School:</span>
            <div className="flex items-center gap-2.5">
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('Facebook Page'); }} 
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-[#0f2b5c] flex items-center justify-center transition-colors text-xs font-bold cursor-pointer"
              >
                f
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('Instagram'); }} 
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-[#0f2b5c] flex items-center justify-center transition-colors text-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('YouTube Channel'); }} 
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-[#0f2b5c] flex items-center justify-center transition-colors text-xs cursor-pointer"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
