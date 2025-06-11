
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/InteriorDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/InteriorDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/InteriorDesign/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/InteriorDesign/IndustryFaculty';
import { AdmissionsInfo } from '@/components/diploma/InteriorDesign/AdmissionsInfo';
import { StudentLearningSection } from '@/components/program/StudentLearningSection';
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
        <StudentLearningSection />
        <ProgramFeatures />
        <IndustryFaculty />
        <AdmissionsInfo />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramInteriorDesign;
