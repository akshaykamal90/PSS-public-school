import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Building2, ArrowRight } from 'lucide-react';

/* ─── Animated Counter Hook ─── */
function useCountUp(
  end: number,
  duration: number = 2000,
  startCounting: boolean = false
): number {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startCounting) return;

    // easeOutExpo for a satisfying deceleration
    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setValue(Math.round(easedProgress * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, startCounting]);

  return value;
}

/* ─── Single Stat Card Component ─── */
interface StatCardProps {
  endValue: number;
  suffix?: string;
  label: string;
  sublabel: string;
  isVisible: boolean;
  duration?: number;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  endValue,
  suffix = '',
  label,
  sublabel,
  isVisible,
  duration = 2000,
  delay = 0,
}) => {
  const [shouldCount, setShouldCount] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setShouldCount(true);
      setCardVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  const count = useCountUp(endValue, duration, shouldCount);

  return (
    <div
      className={`bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm transition-all duration-700 ${
        cardVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      }`}
    >
      <span className="block font-serif font-black text-2xl sm:text-3xl lg:text-[34px] text-slate-900 leading-tight tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="block text-[11px] sm:text-xs font-extrabold tracking-[0.12em] uppercase text-slate-700 mt-1">
        {label}
      </span>
      <span className="block text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">
        {sublabel}
      </span>
    </div>
  );
};

/* ─── Main Section ─── */
interface InstitutionSectionProps {
  onViewCertifications?: () => void;
}

export const InstitutionSection: React.FC<InstitutionSectionProps> = ({
  onViewCertifications,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25,
    });
    observer.observe(node);

    return () => observer.disconnect();
  }, [handleIntersection]);

  const stats: StatCardProps[] = [
    {
      endValue: 930472,
      label: 'CBSE AFFILIATION',
      sublabel: 'School Code: 75440',
      isVisible,
      duration: 2200,
      delay: 0,
    },
    {
      endValue: 40,
      suffix: '+',
      label: 'YEARS OF LEGACY',
      sublabel: 'Founded in 1985',
      isVisible,
      duration: 1800,
      delay: 150,
    },
    {
      endValue: 100,
      suffix: '%',
      label: 'BOARD PASS RATE',
      sublabel: 'Secondary & Sr. Secondary',
      isVisible,
      duration: 1800,
      delay: 300,
    },
    {
      endValue: 3,
      suffix: '-Acre',
      label: 'LUSH GREEN CAMPUS',
      sublabel: 'Cherthala, Kerala',
      isVisible,
      duration: 1200,
      delay: 450,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 bg-[#f6f9fc] overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Building Image */}
          <div
            className={`lg:col-span-5 flex items-center justify-center lg:justify-start relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative w-full max-w-[520px] lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-200 relative group">
                <img
                  src="/assets/images/school-building.jpg"
                  alt="PSS Public School 4-Storey Campus Building in Cherthala"
                  className="w-full h-[440px] sm:h-[540px] lg:h-[640px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Campus Badge Overlay */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2b5c] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-slate-900 leading-tight">
                      4-Storey Campus
                    </span>
                    <span className="block text-xs text-slate-500 font-medium">
                      Vayalar Village • Cherthala
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institution Info + Stats */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow Label */}
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] uppercase text-[#b45309]">
                ABOUT OUR INSTITUTION
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className={`font-serif font-black text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-slate-900 leading-[1.12] tracking-tight transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Four Decades of Academic{' '}
              <br className="hidden sm:block" />
              Integrity in Cherthala.
            </h2>

            {/* Description Paragraph */}
            <p
              className={`text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-normal transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Panickaveettil Sir Sebastian Public School was established in 1985
              to provide world-class, value-based CBSE education to the youth of
              Cherthala and surrounding coastal regions. Spread across a peaceful
              3-acre expanse in Vayalar, the campus provides modern science
              laboratories, smart classrooms, and extensive sports facilities.
            </p>

            {/* Stats Grid with counting animation */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-xl">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            {/* Certifications Link */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={onViewCertifications}
                className="inline-flex items-center gap-2 text-[#0f2b5c] hover:text-[#b45309] text-sm font-bold tracking-wide transition-colors duration-300 group cursor-pointer"
              >
                <span className="underline underline-offset-4 decoration-[#0f2b5c]/30 group-hover:decoration-[#b45309]/50">
                  View Institutional Registration & CBSE Certifications
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
