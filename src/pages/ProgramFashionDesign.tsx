import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/program/fashion-design/HeroSection';
import { ProgramOverviewSection } from '@/components/program/fashion-design/ProgramOverviewSection';

import { FashionStudioSection } from '@/components/program/fashion-design/FashionStudioSection';
import { StudentWorksGallery } from '@/components/program/StudentWorksGallery';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';
import { StudentLearningSection } from '@/components/program/StudentLearningSection';
import { SkillEnhancingElectivesSection } from '@/components/program/SkillEnhancingElectivesSection';

const ProgramFashionDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>B.Sc Fashion Design Program | BSD Design School</title>
        <meta 
          name="description" 
          content="Transform your creative vision into a successful fashion career with our comprehensive B.Sc Fashion Design program. Master garment construction, textile design, fashion illustration, and industry trends at BSD Design School." 
        />
        <meta name="keywords" content="fashion design, B.Sc fashion design, fashion degree, fashion school, garment construction, textile design, fashion illustration, fashion career, BSD Design School" />
        <link rel="canonical" href="/academics/bsc-fashion-design" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <StudentLearningSection />
        
        <SkillEnhancingElectivesSection programKey="bsc-fashion-design" />
        <FashionStudioSection />
        <StudentWorksGallery 
          title="Fashion Design Student Projects"
          description="Explore the creative works and fashion collections designed by our talented students"
          category="fashion-design"
        />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default ProgramFashionDesign;