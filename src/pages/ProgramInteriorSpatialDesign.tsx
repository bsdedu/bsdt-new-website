import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { HeroSection } from "@/components/program/interior-spatial/HeroSection";
import { ProgramOverviewSection } from "@/components/program/interior-spatial/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/interior-spatial/CustomFacultySection";
import { StudentLearningSection } from "@/components/program/StudentLearningSection";

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
      <StudentLearningSection />
      <StudentWorksGallery 
        title="Interior & Spatial Design Student Projects"
        description="Explore the innovative works of our Interior & Spatial Design students, showcasing their expertise in spatial planning, interior design, and sustainable solutions."
        category="residential"
      />
      <CustomFacultySection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramInteriorSpatialDesign;