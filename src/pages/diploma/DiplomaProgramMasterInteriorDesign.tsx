import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/MasterInteriorDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/MasterInteriorDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/MasterInteriorDesign/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/MasterInteriorDesign/IndustryFaculty';

import { StudentLearningSection } from '@/components/program/StudentLearningSection';
import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramMasterInteriorDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Master Diploma in Advanced Residential Design | BSD Design School</title>
        <meta 
          name="description" 
          content="An advanced 12-month master-level diploma program in residential design that provides comprehensive expertise in space planning, construction detailing, building systems, and project management for creating innovative residential environments and housing solutions." 
        />
        <meta name="keywords" content="master diploma residential design, advanced residential design, space planning, construction detailing, building systems, project management, residential architecture, housing design, BSD Design School" />
        <link rel="canonical" href="/academics/master-diploma-in-interior-design" />
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

export default DiplomaProgramMasterInteriorDesign;