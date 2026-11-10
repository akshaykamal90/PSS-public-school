import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    'About Us',
    'Academics',
    'Admissions',
    'Campus Life',
    'Events',
    'Facilities',
    'Contact',
  ];

  const resourceLinks = [
    'Circulars',
    'Academic Calendar',
    'Student Portal',
    'Mandatory Disclosure',
    'Gallery',
    'Careers',
  ];

  return (
    <footer className="w-full bg-[#fbfcfb] border-t border-slate-200/80 pt-16 pb-10 text-slate-700">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Social (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-12 h-14 sm:w-14 sm:h-16 flex items-center justify-center shrink-0">
                <img
                  src="/assets/images/pss_logo.jpg"
                  alt="PSS Emblem"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif font-black text-slate-900 tracking-tight text-lg sm:text-xl leading-tight group-hover:text-[#0f2b5c] transition-colors">
                  PSS PUBLIC SCHOOL
                </span>
                <p className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-bold text-slate-600">
                  PANICKAVEETTIL SIR SEBASTIAN
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Nurturing young minds with knowledge, values and a vision for a better tomorrow.
            </p>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => onNavigate('Facebook Page')}
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0f2b5c] hover:bg-[#0f2b5c] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>

              <a
                href="https://www.instagram.com/psss.vayalar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0f2b5c] hover:bg-[#0f2b5c] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <button
                onClick={() => onNavigate('YouTube Channel')}
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0f2b5c] hover:bg-[#0f2b5c] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link)}
                    className="text-slate-600 hover:text-[#0f2b5c] transition-colors cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {resourceLinks.map((res) => (
                <li key={res}>
                  <button
                    onClick={() => onNavigate(res)}
                    className="text-slate-600 hover:text-[#0f2b5c] transition-colors cursor-pointer"
                  >
                    {res}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wider uppercase">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0f2b5c] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Vayalar East P.O., Cherthala<br />
                  Alappuzha, Kerala – 688536
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0f2b5c] shrink-0" />
                <a
                  href="tel:04782822610"
                  className="hover:text-[#0f2b5c] transition-colors font-medium"
                >
                  0478 282 2610
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0f2b5c] shrink-0" />
                <a
                  href="mailto:psspublicschool@gmail.com"
                  className="hover:text-[#0f2b5c] transition-colors truncate font-medium"
                >
                  psspublicschool@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © 2024 PSS Public School. All rights reserved.
          </div>

          <div className="flex items-center space-x-3.5">
            <button
              onClick={() => onNavigate('Privacy Policy')}
              className="hover:text-[#0f2b5c] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => onNavigate('Terms of Use')}
              className="hover:text-[#0f2b5c] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => onNavigate('Sitemap')}
              className="hover:text-[#0f2b5c] transition-colors cursor-pointer"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
