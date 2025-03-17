
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { HeroSection } from "@/components/program/graphic-design/HeroSection";
import { ProgramOverviewSection } from "@/components/program/graphic-design/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/graphic-design/CustomFacultySection";
import { StudioSection } from "@/components/program/graphic-design/StudioSection";
import { AIEmpoweredSection } from "@/components/program/graphic-design/AIEmpoweredSection";

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
      <AIEmpoweredSection />
      <StudentWorksGallery />
      <CustomFacultySection />
      <StudioSection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramGraphicDesign;
