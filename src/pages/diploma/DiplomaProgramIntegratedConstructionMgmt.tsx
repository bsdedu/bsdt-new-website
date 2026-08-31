import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/IntegratedConstructionMgmt/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/IntegratedConstructionMgmt/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/IntegratedConstructionMgmt/ProgramFeatures';
import { MasterInteriorPhotosSection } from '@/components/diploma/MasterInteriorDesign/MasterInteriorPhotosSection';
import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { CertificationPathwaySection } from '@/components/diploma/shared/CertificationPathwaySection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramIntegratedConstructionMgmt: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Interior Construction & Project Management | BSD</title>
        <meta
          name="description"
          content="A 16-month (12+4) Professional Diploma in Interior Construction & Project Management covering construction technology, drawing interpretation, BOQ, costing, procurement, scheduling, site execution, quality and safety."
        />
        <meta name="keywords" content="PD in ICPM, interior construction, interior project management, BOQ, estimation, costing, site execution, turnkey interiors, BSD Design School" />
        <link rel="canonical" href="/academics/professional-diploma-interior-construction-project-management" />
      </Helmet>


      <Navbar />

      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <MasterInteriorPhotosSection />
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

export default DiplomaProgramIntegratedConstructionMgmt;
