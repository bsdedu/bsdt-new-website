
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { HeroSection } from "@/components/program/interior-design/HeroSection";
import { ProgramOverviewSection } from "@/components/program/interior-design/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/interior-design/CustomFacultySection";
import { StudentLearningSection } from "@/components/program/StudentLearningSection";

const ProgramInteriorDesign = () => {
  return (
    <>
      <Helmet>
        <title>BVA Interior Spatial Design | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Visual Arts in Interior Spatial Design at Bangalore School of Design & Technology. Learn to create functional, aesthetic interior spaces for residential and commercial settings." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <StudentLearningSection />
      <StudentWorksGallery 
        title="Interior Spatial Design Student Projects"
        description="Explore the creative works of our Interior Spatial Design students, showcasing their skills in residential, commercial, and conceptual design."
        category="residential"
      />
      
      <CustomFacultySection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramInteriorDesign;
