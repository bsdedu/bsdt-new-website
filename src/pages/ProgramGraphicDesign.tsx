
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
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
      <StudentLearningSection />
      <SkillEnhancingElectivesSection programKey="bva-graphic-design" />
      <StudentWorksGallery 
        title="Graphic Design Student Projects"
        description="Explore the creative works of our Graphic Design students, showcasing their expertise in branding, digital design, and print media."
        category="branding"
      />
      
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramGraphicDesign;
