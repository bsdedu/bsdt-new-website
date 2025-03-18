
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { HeroSection } from "@/components/program/diploma-interior-design/HeroSection";
import { ProgramOverviewSection } from "@/components/program/diploma-interior-design/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/diploma-interior-design/CustomFacultySection";
import { StudioSection } from "@/components/program/diploma-interior-design/StudioSection";

const ProgramDiplomaInteriorDesign = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Interior Design | BSDT</title>
        <meta name="description" content="Pursue a Professional Diploma in Interior Design at Bangalore School of Design & Technology. Available in both online and offline modes, learn to create functional, aesthetic interior spaces with industry-recognized certification." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <StudentWorksGallery 
        title="Interior Design Student Projects"
        description="Explore the creative works of our Interior Design diploma students, showcasing their skills in residential, commercial, and conceptual design."
        category="residential"
      />
      <CustomFacultySection />
      <StudioSection />
      <EnquiryFormSection programSpecific={true} />
      
      <Footer />
    </>
  );
};

export default ProgramDiplomaInteriorDesign;
