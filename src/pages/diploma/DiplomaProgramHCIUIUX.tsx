
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/HCIUIUX/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/HCIUIUX/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/HCIUIUX/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/HCIUIUX/IndustryFaculty';

import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramHCIUIUX: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in HCI for UI/UX | BSD Design School</title>
        <meta 
          name="description" 
          content="A specialized professional diploma program in Human-Computer Interaction for UI/UX design that equips students with skills in creating intuitive, user-centered digital experiences." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <HybridLearningSection />
        <BatchScheduleSection />
        <ProgramFeatures />
        <IndustryFaculty />
        
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramHCIUIUX;
