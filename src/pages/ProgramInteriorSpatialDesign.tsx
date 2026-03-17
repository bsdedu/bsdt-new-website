import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";

import { HeroSection } from "@/components/program/interior-spatial/HeroSection";
import { ProgramOverviewSection } from "@/components/program/interior-spatial/ProgramOverviewSection";

import { BVAInteriorStudentLearningSection } from "@/components/program/interior-spatial/BVAInteriorStudentLearningSection";
import { SkillEnhancingElectivesSection } from "@/components/program/SkillEnhancingElectivesSection";
const ProgramInteriorSpatialDesign = () => {
  return (
    <>
      <Helmet>
        <title>BVA Interior & Spatial Design | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Visual Arts in Interior & Spatial Design at Bangalore School of Design & Technology. Master spatial design, human-space relationships, and sustainable interior solutions." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <BVAInteriorStudentLearningSection />
      <SkillEnhancingElectivesSection programKey="bva-interior-spatial-design" />
      
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramInteriorSpatialDesign;