import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/MasterInteriorDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/MasterInteriorDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/MasterInteriorDesign/ProgramFeatures';
import { MasterInteriorPhotosSection } from '@/components/diploma/MasterInteriorDesign/MasterInteriorPhotosSection';
import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { CertificationPathwaySection } from '@/components/diploma/shared/CertificationPathwaySection';

import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramMasterInteriorDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Post Graduate Diploma in Residential Architecture and Design | BSD Design School</title>
        <meta 
          name="description" 
          content="An advanced 20-month (16+4) master-level diploma program in residential design (3 days a week) that provides comprehensive expertise in space planning, construction detailing, building systems, and project management for creating innovative residential environments and housing solutions." 
        />
        <meta name="keywords" content="master diploma residential design, advanced residential design, space planning, construction detailing, building systems, project management, residential architecture, housing design, BSD Design School" />
        <link rel="canonical" href="/academics/master-diploma-in-interior-design" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <MasterInteriorPhotosSection />
        <HybridLearningSection />
        <CertificationPathwaySection academicMonths={20} semesterCount={4} />
        <BatchScheduleSection totalDuration="20 months (4 semesters + internship & portfolio)" />
        <ProgramFeatures />
        
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramMasterInteriorDesign;