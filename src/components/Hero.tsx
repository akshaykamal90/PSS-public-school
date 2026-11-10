import { ArrowRight, GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreFeature: (featureName: string) => void;
  onScrollToAbout: () => void;
  onOpenAdmission?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreFeature,
  onScrollToAbout,
  onOpenAdmission,
}) => {
  const cards = [
    {
      id: 'academic',
      title: 'ACADEMIC EXCELLENCE',
      description: 'CBSE curriculum with a strong focus on knowledge, analytical thinking and intellectual excellence.',
      icon: (
        <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      id: 'campus',
      title: 'OUR CAMPUS',
      description: 'A safe, serene green campus with modern laboratories, digital smart boards and sports grounds.',
      icon: (
        <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16"/>
          <path d="M18 22V8l-6-4-6 4v14"/>
          <path d="M12 4v4"/>
          <path d="M10 12h4"/>
          <path d="M10 16h4"/>
        </svg>
      ),
    },
    {
      id: 'growth',
      title: 'ALL-ROUND DEVELOPMENT',
      description: 'Nurturing arts, athletic prowess, leadership, public speaking and moral life skills for life.',
      icon: (
        <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7fb] flex flex-col pt-16 sm:pt-20">
      {/* Background Campus Photo & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/school-hero.jpg" 
          alt="PSS Public School Campus Aerial" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Soft white gradient overlay on left for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-[45%] to-transparent sm:via-white/75 sm:via-[40%] sm:to-[70%] lg:via-[35%] lg:to-[65%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Area - Enhanced Spacing & Scale */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-6 flex-1 flex flex-col justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Sizable Typography & Slogan */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 lg:space-y-6 max-w-3xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.24em] uppercase text-[#b45309]">
                A LEGACY OF LEARNING
              </span>
            </div>

            {/* Main Headline - Fluid scaling for all viewports */}
            <h1 className="font-serif font-black text-3xl xs:text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] text-[#0f2b5c] leading-[1.05] tracking-tight drop-shadow-xs">
              PSS PUBLIC <br />
              SCHOOL
            </h1>

            {/* Sub-heading */}
            <p className="text-xs sm:text-base lg:text-[17px] font-bold tracking-[0.2em] sm:tracking-[0.26em] uppercase text-slate-800">
              PANICKAVEETTIL SIR SEBASTIAN
            </p>

            {/* Accent Line & Slogan */}
            <div className="pt-1 flex items-start gap-3 sm:gap-3.5 max-w-2xl">
              <div className="w-6 sm:w-8 h-1 sm:h-1.5 bg-[#d97706] rounded-full mt-1.5 sm:mt-2 shrink-0" />
              <p className="text-sm sm:text-lg lg:text-xl font-semibold text-slate-800 leading-snug">
                Nurturing young minds with knowledge, values and a vision for a better tomorrow.
              </p>
            </div>

            {/* Extended Educational Philosophy Paragraph */}
            <div className="pl-0 sm:pl-6 lg:pl-11 max-w-2xl pt-1">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-semibold">
                At PSS Public School, we believe education is more than academic success. It is about nurturing curiosity, building character and empowering every child to discover their potential. Through a balanced blend of knowledge, values, creativity and real-world experiences, we prepare our students to face the future with confidence.
              </p>
            </div>

            {/* Interactive Call-To-Action Pathway Buttons */}
            <div className="pl-0 sm:pl-6 lg:pl-11 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onScrollToAbout}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#0f2b5c] hover:bg-[#071a38] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              >
                <span>Know More About PSS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {onOpenAdmission && (
                <button
                  onClick={onOpenAdmission}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white hover:bg-blue-50/60 text-[#0f2b5c] border-2 border-blue-900/20 hover:border-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-xl shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                >
                  <span>Admission Enquiry</span>
                </button>
              )}
            </div>

            {/* Mobile / Tablet Core Pillars Ribbon Strip (Navy & Gold Heraldic Ribbon) */}
            <div className="lg:hidden pl-0 sm:pl-6 pt-2 max-w-2xl">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#061d3f] via-[#0d3b75] to-[#061d3f] p-3 sm:p-3.5 border-2 border-amber-400/50 shadow-[0_10px_28px_rgba(11,37,69,0.25)] select-none">
                <div className="flex items-center justify-between pb-1.5 border-b border-amber-400/25 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#facc15] animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                      Core Pillars of PSS
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-blue-200/90 tracking-widest uppercase">
                    Affiliation: 930869
                  </span>
                </div>
                
                {/* 5 Core Pillars in Gold-bordered Pills */}
                <div className="flex items-center justify-between gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  {['EDUCATION', 'DISCIPLINE', 'VALUES', 'CHARACTER', 'EXCELLENCE'].map((val, idx) => (
                    <div key={val} className="flex items-center shrink-0">
                      <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-extrabold tracking-wider text-white px-2 py-1 rounded-md bg-white/10 border border-amber-400/30 whitespace-nowrap shadow-xs">
                        {val}
                      </span>
                      {idx < 4 && <span className="mx-1 text-amber-400/70 text-[10px] font-bold">✦</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile / Tablet 4-Card Academic Accolade Grid (Visible on screens < 1024px) */}
            <div className="lg:hidden pl-0 sm:pl-6 pt-1 grid grid-cols-2 gap-2.5 sm:gap-3 max-w-2xl">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center font-bold shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#0f2b5c]" />
                </div>
                <div className="min-w-0">
                  <span className="block font-serif font-black text-slate-900 text-xs sm:text-sm leading-tight truncate">CBSE Affiliation</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-blue-700 bg-blue-100/80 px-1.5 py-0.5 rounded uppercase tracking-wider block truncate w-fit">Senior Secondary</span>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
                <div className="min-w-0">
                  <span className="block font-black text-xs sm:text-sm text-[#0f2b5c] leading-tight truncate">40+ Years Legacy</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider block truncate">Since 1985</span>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center font-bold shrink-0">
                  <Sparkles className="w-4 h-4 text-[#0f2b5c]" />
                </div>
                <div className="min-w-0">
                  <span className="block font-serif font-black text-slate-900 text-xs sm:text-sm leading-tight truncate">100% Board Pass</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-blue-700 uppercase tracking-wider block truncate">Consistent Honors</span>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold shrink-0">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                </div>
                <div className="min-w-0">
                  <span className="block font-black text-xs sm:text-sm text-[#0f2b5c] leading-tight truncate">Smart Campus</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider block truncate">Labs &amp; Sports</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Accolade Cards Filling Space Alongside Hanging Banner */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end space-y-4 pt-16 lg:pt-24 pr-24 xl:pr-32">
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_12px_36px_rgba(11,37,69,0.12)] border border-slate-100 max-w-xs transition-transform hover:-translate-y-1 select-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0f2b5c] flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5 text-[#0f2b5c]" />
                </div>
                <div>
                  <span className="block font-serif font-black text-slate-900 text-base leading-tight">CBSE Affiliation</span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider">Senior Secondary Level</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Science, Commerce &amp; Humanities streams with modern smart labs and experienced faculty.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(11,37,69,0.1)] border border-slate-100 flex items-center gap-3.5 max-w-xs w-full transition-transform hover:-translate-y-1 select-none">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center font-bold shrink-0">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <span className="block font-black text-base text-[#0f2b5c] leading-tight">40+ Years of Legacy</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nurturing Leaders Since 1985</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom: Floating 3 Feature Cards & Scroll to Explore */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-5 pt-2 sm:pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onExploreFeature(card.title)}
              className="group bg-white/95 backdrop-blur-md p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-[0_4px_16px_-2px_rgba(11,37,69,0.1),0_2px_8px_rgba(0,0,0,0.05)] sm:shadow-[0_10px_30px_-5px_rgba(11,37,69,0.14),0_6px_16px_rgba(0,0,0,0.08)] border border-white/80 hover:border-amber-300 hover:shadow-[0_20px_40px_-5px_rgba(11,37,69,0.22),0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex items-center gap-3 sm:gap-4 lg:gap-5 hover:-translate-y-1 sm:hover:-translate-y-1.5"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-amber-100/90 transition-all shadow-xs">
                {card.icon}
              </div>
              <div className="space-y-0.5 sm:space-y-1 min-w-0">
                <h3 className="text-xs sm:text-sm lg:text-base font-bold tracking-wide uppercase text-slate-900 group-hover:text-[#0f2b5c] transition-colors truncate">
                  {card.title}
                </h3>
                <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-600 leading-snug sm:leading-relaxed font-normal line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Explore Indicator - Compact on mobile */}
        <div className="flex flex-col items-center justify-center pt-2 sm:pt-4 pb-1">
          <button
            onClick={onScrollToAbout}
            className="group flex flex-col items-center gap-1 sm:gap-1.5 px-3.5 py-1 sm:px-5 sm:py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_28px_rgba(11,37,69,0.18)] border border-white/80 hover:border-amber-300 text-slate-700 hover:text-[#0f2b5c] transition-all duration-300 focus:outline-none cursor-pointer hover:-translate-y-0.5"
          >
            <div className="w-3.5 h-5 sm:w-4 sm:h-6 rounded-full border border-slate-600 sm:border-2 group-hover:border-[#0f2b5c] flex items-start justify-center p-0.5 sm:p-1 transition-colors shadow-xs">
              <span className="w-0.5 h-1 sm:w-1 sm:h-1.5 bg-slate-600 group-hover:bg-[#0f2b5c] rounded-full animate-bounce" />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 sm:w-4 h-0.5 bg-slate-300 group-hover:bg-amber-400 transition-colors" />
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.22em] uppercase text-slate-700 group-hover:text-[#0f2b5c] transition-colors">
                SCROLL TO EXPLORE
              </span>
              <span className="w-2.5 sm:w-4 h-0.5 bg-slate-300 group-hover:bg-amber-400 transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
