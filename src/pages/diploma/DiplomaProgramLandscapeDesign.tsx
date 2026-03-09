
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/LandscapeDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/LandscapeDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/LandscapeDesign/ProgramFeatures';


import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { CertificationPathwaySection } from '@/components/diploma/shared/CertificationPathwaySection';
import { StudentWorkGallerySection } from '@/components/diploma/shared/StudentWorkGallerySection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramLandscapeDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Landscape Design | BSD Design School</title>
        <meta 
          name="description" 
          content="A comprehensive professional diploma program in landscape design that equips students with the skills to create sustainable, functional, and aesthetically pleasing outdoor environments." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <HybridLearningSection />
        <CertificationPathwaySection />
        <BatchScheduleSection />
        <ProgramFeatures />
        
        
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramLandscapeDesign;
