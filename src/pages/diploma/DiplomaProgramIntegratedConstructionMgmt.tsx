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
        <title>Post Graduate Diploma in Integrated Construction Management | BSD Design School</title>
        <meta
          name="description"
          content="A 16-month (12+4) Post Graduate Diploma in Integrated Construction Management covering building services, BIM workflows (Revit, Navisworks), construction planning, site execution, BOQ preparation, and project lifecycle management."
        />
        <meta name="keywords" content="PGD in ICM, integrated construction management, BIM, Revit, Navisworks, MEP coordination, construction management, BOQ, project management, BSD Design School" />
        <link rel="canonical" href="/academics/post-graduate-diploma-integrated-construction-management" />
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
