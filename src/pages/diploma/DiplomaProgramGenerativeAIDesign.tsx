import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/GenerativeAIDesign/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/GenerativeAIDesign/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/GenerativeAIDesign/ProgramFeatures';
import { ScheduleSection } from '@/components/diploma/GenerativeAIDesign/ScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { GenerativeAIPhotosSection } from '@/components/diploma/GenerativeAIDesign/GenerativeAIPhotosSection';

import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramGenerativeAIDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Generative AI for Design Practice | BSD Design School</title>
        <meta
          name="description"
          content="A focused professional diploma in Generative AI for Design Practice at BSD Design School, Bangalore."
        />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <GenerativeAIPhotosSection />
        <ScheduleSection />
        <HybridLearningSection />
        <ProgramFeatures />

        <EnquiryFormSection />
      </main>

      <Footer />
    </>
  );
};

export default DiplomaProgramGenerativeAIDesign;
