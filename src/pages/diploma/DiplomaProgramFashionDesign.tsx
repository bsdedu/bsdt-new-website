import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/FashionDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/FashionDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/FashionDesign/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/FashionDesign/IndustryFaculty';
import { AdmissionsInfo } from '@/components/diploma/FashionDesign/AdmissionsInfo';
import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramFashionDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Fashion Design | BSD Design School</title>
        <meta 
          name="description" 
          content="Master fashion design fundamentals with our comprehensive professional diploma program. Learn garment construction, fashion illustration, textile design, and industry trends in an accelerated 8-month format." 
        />
        <meta name="keywords" content="fashion design diploma, professional fashion design, fashion illustration, garment construction, textile design, fashion trends, fashion career, BSD Design School" />
        <link rel="canonical" href="/academics/professional-diploma-fashion-design" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
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

export default DiplomaProgramFashionDesign;