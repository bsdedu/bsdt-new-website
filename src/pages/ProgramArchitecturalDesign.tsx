
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { FacultySection } from "@/components/program/FacultySection";
import { HeroSection } from "@/components/program/architectural-design/HeroSection";
import { ProgramOverviewSection } from "@/components/program/architectural-design/ProgramOverviewSection";
import { StatsSection } from "@/components/program/architectural-design/StatsSection";

const ProgramArchitecturalDesign = () => {
  return (
    <>
      <Helmet>
        <title>B.Des Architectural Construction Design | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Design in Architectural Construction Design at Bangalore School of Design & Technology. Learn architectural visualization, construction technology, and sustainable design practices." />
      </Helmet>

      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <ProgramOverviewSection />
        <StudentWorksGallery />
        <FacultySection />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default ProgramArchitecturalDesign;
