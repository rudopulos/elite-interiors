import React, { useRef, useCallback, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { loadGoogleAnalytics } from "@/lib/analytics";
import Navbar from "@/components/Navbar";

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ContactSection from "@/components/sections/ContactSection";
import TermsAndConditionsPage from "@/pages/TermsAndConditionsPage";
import PoliticaDeConfidentialitate from "@/pages/PoliticaDeConfidentialitate";
import DesprePage from "@/pages/DesprePage";
import ProjectPage from "@/pages/ProjectPage";
import ClinicaKilostopPage from "@/pages/ClinicaKilostopPage";
import PortofoliuPage from "@/pages/PortofoliuPage";
import ModernFarmhousePage from "@/pages/ModernFarmhousePage";
import ServiciiPage from "@/pages/ServiciiPage";
import WarmHeavenPage from "@/pages/WarmHeavenPage";
import RefinedHarmonyPage from "@/pages/RefinedHarmonyPage";

const MainPageLayout = () => {
  const contactRef = useRef(null);
  const location = useLocation();

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.hash === '#contact') {
      const timer = setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Navbar onContactClick={handleContactClick} />
      <HeroSection onContactClick={handleContactClick} />
      <ServicesSection />
      <ValuesSection />
      <ContactSection ref={contactRef} />
    </>
  );
};

export default function App() {
  const location = useLocation(); // React Router's useLocation hook

  const handleConsent = useCallback(() => {
    console.log("Cookie consent given. Loading GA.");
    loadGoogleAnalytics();
  }, []);
  
  // Scroll to top on route change
  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#23272B]">
      <Toaster />
      <CookieConsentBanner onConsent={handleConsent} />
      
      <Routes>
        <Route path="/" element={<MainPageLayout />} />
        <Route path="/termeni-si-conditii" element={<TermsAndConditionsPage />} />
        <Route path="/politica-de-confidentialitate" element={<PoliticaDeConfidentialitate />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="/servicii" element={<ServiciiPage />} />
        <Route path="/portofoliu" element={<PortofoliuPage />} />
        <Route path="/proiecte/apartament-baneasa" element={<ProjectPage />} />
        <Route path="/proiecte/clinica-kilostop" element={<ClinicaKilostopPage />} />
        <Route path="/proiecte/modern-farmhouse" element={<ModernFarmhousePage />} />
        <Route path="/proiecte/warm-heaven" element={<WarmHeavenPage />} />
        <Route path="/proiecte/refined-harmony" element={<RefinedHarmonyPage />} />
      </Routes>
    </div>
  );
}