import React from 'react';
import './LandingPage.css';
import { LandingHeader } from './components/LandingHeader';
import { HeroSection } from './components/HeroSection';
import { TrustedBySection } from './components/TrustedBySection';
import { AboutSection } from './components/AboutSection';
import { LiveConsultationsSection } from './components/LiveConsultationsSection';
import { HaroldSection } from './components/HaroldSection';
import { CTASection } from './components/CTASection';
import { LandingFooter } from './components/LandingFooter';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <LandingHeader />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <LiveConsultationsSection />
      <HaroldSection />
      <CTASection />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;

