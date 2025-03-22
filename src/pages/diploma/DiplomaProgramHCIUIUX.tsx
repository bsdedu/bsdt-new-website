
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/HCIUIUX/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/HCIUIUX/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/HCIUIUX/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/HCIUIUX/IndustryFaculty';
import { AdmissionsInfo } from '@/components/diploma/HCIUIUX/AdmissionsInfo';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramHCIUIUX: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Diploma in HCI for UI/UX | BSD Design School</title>
        <meta 
          name="description" 
          content="A specialized diploma program in Human-Computer Interaction for UI/UX design that equips students with skills in creating intuitive, user-centered digital experiences." 
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

export default DiplomaProgramHCIUIUX;
