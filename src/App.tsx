/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { NewsEventsSection } from './components/NewsEventsSection.tsx';
import { InstitutionSection } from './components/InstitutionSection.tsx';
import { PrincipalMessageSection } from './components/PrincipalMessageSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ComingSoonModal } from './components/ComingSoonModal.tsx';
import { AdmissionModal } from './components/AdmissionModal.tsx';
import { NoticeboardModal } from './components/NoticeboardModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';

export default function App() {
  const [activeNav] = useState('Home');
  const [comingSoonModalOpen, setComingSoonModalOpen] = useState(false);
  const [comingSoonPageTitle, setComingSoonPageTitle] = useState('');
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [noticeboardModalOpen, setNoticeboardModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page.toLowerCase().includes('admission enquiry') || page === 'Admissions') {
      setAdmissionModalOpen(true);
      return;
    }

    setComingSoonPageTitle(page);
    setComingSoonModalOpen(true);
  };

  const handleOpenEvent = (eventTitle: string) => {
    setComingSoonPageTitle(`Event Details: ${eventTitle}`);
    setComingSoonModalOpen(true);
  };

  const handleScrollToAbout = () => {
    const el = document.getElementById('about-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#0f2b5c] selection:text-white relative">
      {/* Top Navigation */}
      <Navbar
        activeNav={activeNav}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreFeature={(feature) => handleNavigate(feature)}
          onScrollToAbout={handleScrollToAbout}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />

        {/* About Section */}
        <AboutSection
          onKnowMore={() => handleNavigate('About Our School & History')}
        />

        {/* News & Events Section */}
        <NewsEventsSection
          onOpenEvent={handleOpenEvent}
          onViewAllEvents={() => handleNavigate('School Events Calendar 2024-25')}
          onOpenLiveUpdates={() => setNoticeboardModalOpen(true)}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />

        {/* Institution Section (Building + Stats) */}
        <InstitutionSection
          onViewCertifications={() => handleNavigate('CBSE Certifications & Registration')}
        />

        {/* Principal's Message Section */}
        <PrincipalMessageSection
          onExploreSchool={() => handleNavigate('About Our School & History')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals & Overlays */}
      <ComingSoonModal
        isOpen={comingSoonModalOpen}
        pageTitle={comingSoonPageTitle}
        onClose={() => setComingSoonModalOpen(false)}
        onOpenAdmission={() => setAdmissionModalOpen(true)}
      />

      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
      />

      <NoticeboardModal
        isOpen={noticeboardModalOpen}
        onClose={() => setNoticeboardModalOpen(false)}
        onSelectNotice={(title) => {
          setNoticeboardModalOpen(false);
          setComingSoonPageTitle(`Circular: ${title}`);
          setComingSoonModalOpen(true);
        }}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectResult={(title) => {
          setComingSoonPageTitle(title);
          setComingSoonModalOpen(true);
        }}
      />
    </div>
  );
}
