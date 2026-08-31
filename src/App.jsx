import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import EnergyAuditModal from './components/EnergyAuditModal';
import ProjectLightbox from './components/ProjectLightbox';
import OnamBanner from './components/OnamBanner';

import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PhotosPage from './pages/PhotosPage';

import { REAL_PROJECTS } from './config/images';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOnamBannerVisible, setIsOnamBannerVisible] = useState(() => {
    return sessionStorage.getItem('onamBannerDismissed') !== 'true';
  });

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseOnamBanner = () => {
    setIsOnamBannerVisible(false);
    sessionStorage.setItem('onamBannerDismissed', 'true');
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen bg-cream-100 text-charcoal-900 flex flex-col selection:bg-gold-400 selection:text-forest-950 font-sans transition-all duration-300 ${isOnamBannerVisible ? 'pt-24 sm:pt-16' : ''}`}>
      
      {/* Onam Greeting Banner */}
      {isOnamBannerVisible && (
        <OnamBanner onClose={handleCloseOnamBanner} />
      )}

      {/* Top Fixed Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenAuditModal={handleOpenAuditModal}
        isOnamBannerVisible={isOnamBannerVisible}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenAuditModal={handleOpenAuditModal}
            onSelectProject={handleSelectProject}
          />
        )}

        {activePage === 'solutions' && (
          <SolutionsPage
            setActivePage={setActivePage}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={setActivePage}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onSelectProject={handleSelectProject}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}

        {activePage === 'photos' && (
          <PhotosPage />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}

        {activePage === 'faq' && (
          <FAQPage
            setActivePage={setActivePage}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenAuditModal={handleOpenAuditModal}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <FloatingActions />

      {/* Free Energy Audit Interactive Modal */}
      <EnergyAuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
      />

      {/* Real Project Image Fullscreen Lightbox */}
      <ProjectLightbox
        project={selectedProject}
        allProjects={REAL_PROJECTS}
        onClose={handleCloseLightbox}
        onNavigate={setSelectedProject}
      />

    </div>
  );
}
