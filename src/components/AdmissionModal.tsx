import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    grade: 'Kindergarten (LKG / UKG)',
    parentName: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = `PSS-24-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      grade: 'Kindergarten (LKG / UKG)',
      parentName: '',
      phone: '',
      email: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.18)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="px-7 sm:px-10 pt-8 sm:pt-10 pb-8 sm:pb-10">
          {submitted ? (
            /* ─── Success State ─── */
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Enquiry Successfully Received
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">
                  Thank You, {formData.parentName || 'Parent'}!
                </h4>
                <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                  We have registered your admission inquiry. Our counselor will contact you within 24 working hours.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 max-w-xs mx-auto text-left space-y-2.5 border border-slate-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">Reference</span>
                  <span className="font-mono font-bold text-[#0f2b5c]">{applicationId}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">Campus</span>
                  <span className="font-medium text-slate-700">0478 282 2610</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-2 px-8 py-3 bg-[#0f2b5c] hover:bg-[#071a38] text-white font-semibold text-sm rounded-full transition-colors shadow-sm cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            /* ─── Form State ─── */
            <>
              {/* Header */}
              <div className="mb-7 sm:mb-8 pr-10">
                <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.18em] uppercase text-[#b45309]">
                  DIRECT ADMISSIONS DESK
                </span>
                <h3 className="font-serif font-black text-2xl sm:text-[28px] text-slate-900 leading-tight mt-1.5 tracking-tight">
                  Schedule a Campus Visit
                </h3>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                  Leave your details and our admission counselor will contact you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Parent / Guardian Full Name */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    Parent / Guardian Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Thomas Mathew"
                    className="w-full px-5 py-3.5 text-sm sm:text-base bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#0f2b5c] focus:ring-0 transition-colors placeholder:text-slate-300"
                  />
                </div>

                {/* Mobile Contact + Grade Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2">
                      Mobile Contact
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98470 00000"
                      className="w-full px-5 py-3.5 text-sm sm:text-base bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#0f2b5c] focus:ring-0 transition-colors placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2">
                      Grade of Admission
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-5 py-3.5 text-sm sm:text-base bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#0f2b5c] focus:ring-0 transition-colors text-slate-700 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                      }}
                    >
                      <option value="Kindergarten (LKG / UKG)">Kindergarten (LKG / UKG)</option>
                      <option value="Primary School (Grades 1 - 5)">Primary School (Grades 1 – 5)</option>
                      <option value="Middle School (Grades 6 - 8)">Middle School (Grades 6 – 8)</option>
                      <option value="Secondary (Grades 9 - 10)">Secondary (Grades 9 – 10)</option>
                      <option value="Sr. Secondary - Science">Sr. Secondary – Science</option>
                      <option value="Sr. Secondary - Commerce">Sr. Secondary – Commerce</option>
                    </select>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-5 py-3.5 text-sm sm:text-base bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#0f2b5c] focus:ring-0 transition-colors placeholder:text-slate-300"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#0f2b5c] hover:bg-[#071a38] text-white text-sm sm:text-base font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group mt-1"
                >
                  <span>Submit Application Enquiry</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
