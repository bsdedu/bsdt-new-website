
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/GraphicUIUX/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/GraphicUIUX/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/GraphicUIUX/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/GraphicUIUX/IndustryFaculty';
import { AdmissionsInfo } from '@/components/diploma/GraphicUIUX/AdmissionsInfo';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramGraphicUIUX: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Visual Communication + UI/UX | BSD Design School</title>
        <meta 
          name="description" 
          content="A comprehensive professional diploma program that combines visual communication fundamentals with user interface and experience design principles for digital platforms." 
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

export default DiplomaProgramGraphicUIUX;
