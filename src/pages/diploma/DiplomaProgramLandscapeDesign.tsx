
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/LandscapeDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/LandscapeDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/LandscapeDesign/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/LandscapeDesign/IndustryFaculty';
import { AdmissionsInfo } from '@/components/diploma/LandscapeDesign/AdmissionsInfo';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramLandscapeDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Post Graduate Diploma in Landscape Design | BSD Design School</title>
        <meta 
          name="description" 
          content="A comprehensive post graduate diploma program in landscape design that equips students with the skills to create sustainable, functional, and aesthetically pleasing outdoor environments." 
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

export default DiplomaProgramLandscapeDesign;
