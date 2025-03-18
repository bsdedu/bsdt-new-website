
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/UIUXDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/UIUXDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/UIUXDesign/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/UIUXDesign/IndustryFaculty';
import { AdmissionsInfo } from '@/components/diploma/UIUXDesign/AdmissionsInfo';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramUIUX: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in UI/UX Design | BSD Design School</title>
        <meta 
          name="description" 
          content="Master the art of UI/UX design with our professional diploma program focused on user-centered design, interaction design, and digital experiences." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <ProgramFeatures />
        <IndustryFaculty />
        <AdmissionsInfo />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramUIUX;
