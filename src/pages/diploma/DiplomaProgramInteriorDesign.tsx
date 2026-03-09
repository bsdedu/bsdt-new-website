
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/InteriorDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/InteriorDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/InteriorDesign/ProgramFeatures';

import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { CertificationPathwaySection } from '@/components/diploma/shared/CertificationPathwaySection';
import { StudentWorkGallerySection } from '@/components/diploma/shared/StudentWorkGallerySection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramInteriorDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Interior Design | BSD Design School</title>
        <meta 
          name="description" 
          content="A comprehensive professional diploma program in interior design that equips students with space planning, material selection, and visualization skills for creating functional and aesthetic spaces." 
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

export default DiplomaProgramInteriorDesign;
