import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/AIServiceDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/AIServiceDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/AIServiceDesign/ProgramFeatures';
import { IndustryFaculty } from '@/components/diploma/AIServiceDesign/IndustryFaculty';
import { AdmissionsInfo } from '@/components/diploma/AIServiceDesign/AdmissionsInfo';
import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramAIServiceDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in AI & Integrated Service Design | BSD Design School</title>
        <meta 
          name="description" 
          content="A comprehensive professional diploma program in AI-powered service design that equips students with skills to create intelligent, user-centered service experiences using artificial intelligence and design thinking." 
        />
        <meta name="keywords" content="AI service design, artificial intelligence, service design, UX design, machine learning, design thinking, digital transformation, professional diploma" />
        <link rel="canonical" href="/academics/professional-diploma-ai-service-design" />
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

export default DiplomaProgramAIServiceDesign;