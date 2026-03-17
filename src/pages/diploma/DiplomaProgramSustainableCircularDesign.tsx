import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/SustainableCircularDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/SustainableCircularDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/SustainableCircularDesign/ProgramFeatures';


import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { CertificationPathwaySection } from '@/components/diploma/shared/CertificationPathwaySection';

import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramSustainableCircularDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Sustainable System & Circular Design | BSD Design School</title>
        <meta 
          name="description" 
          content="A comprehensive professional diploma program in sustainable design and circular economy principles that equips students with skills to create environmentally responsible design solutions for a greener future." 
        />
        <meta name="keywords" content="sustainable design, circular economy, environmental design, green building, life cycle assessment, biomimicry, eco-friendly design, professional diploma" />
        <link rel="canonical" href="/academics/professional-diploma-sustainable-circular-design" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <HybridLearningSection />
        <CertificationPathwaySection />
        <BatchScheduleSection />
        <ProgramFeatures />
        <StudentWorkGallerySection />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramSustainableCircularDesign;