
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/HCIUIUX/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/HCIUIUX/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/HCIUIUX/ProgramFeatures';
import { ScheduleSection } from '@/components/diploma/HCIUIUX/ScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { DiplomaPhotosSection } from '@/components/diploma/shared/DiplomaPhotosSection';

import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramHCIUIUX: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in HCI for UI/UX | BSD Design School</title>
        <meta 
          name="description" 
          content="A focused 6-month Saturday-only professional diploma in Human-Computer Interaction for UI/UX design at our Bangalore campus." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <DiplomaPhotosSection />
        <ScheduleSection />
        <HybridLearningSection />
        <ProgramFeatures />
        
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramHCIUIUX;
