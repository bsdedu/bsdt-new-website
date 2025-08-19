import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/MasterInteriorDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/MasterInteriorDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/MasterInteriorDesign/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/MasterInteriorDesign/IndustryFaculty';
import { AdmissionsInfo } from '@/components/diploma/MasterInteriorDesign/AdmissionsInfo';
import { StudentLearningSection } from '@/components/program/StudentLearningSection';
import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramMasterInteriorDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Master Diploma in Interior Design | BSD Design School</title>
        <meta 
          name="description" 
          content="An advanced master-level diploma program in interior design that provides comprehensive expertise in space planning, project management, design leadership, and advanced visualization skills for creating innovative interior spaces." 
        />
        <meta name="keywords" content="master diploma interior design, advanced interior design, space planning, project management, design leadership, visualization, interior architecture, BSD Design School" />
        <link rel="canonical" href="/academics/master-diploma-in-interior-design" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <StudentLearningSection />
        <BatchScheduleSection />
        <ProgramFeatures />
        <IndustryFaculty />
        <AdmissionsInfo />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramMasterInteriorDesign;