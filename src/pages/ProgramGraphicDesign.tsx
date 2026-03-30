
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";

import { HeroSection } from "@/components/program/graphic-design/HeroSection";
import { ProgramOverviewSection } from "@/components/program/graphic-design/ProgramOverviewSection";

import { StudentLearningSection } from "@/components/program/StudentLearningSection";
import { SkillEnhancingElectivesSection } from "@/components/program/SkillEnhancingElectivesSection";

const ProgramGraphicDesign = () => {
  return (
    <>
      <Helmet>
        <title>BVA Graphic & Communication Design | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Visual Arts in Graphic & Communication Design at Bangalore School of Design & Technology. Learn visual storytelling, branding, and digital design from industry experts." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      
      <SkillEnhancingElectivesSection programKey="bva-graphic-design" />
      
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramGraphicDesign;
