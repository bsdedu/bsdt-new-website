
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { HeroSection } from "@/components/program/bca/HeroSection";
import { ProgramOverviewSection } from "@/components/program/bca/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/bca/CustomFacultySection";
import { StudioSection } from "@/components/program/bca/StudioSection";

const ProgramBCA = () => {
  return (
    <>
      <Helmet>
        <title>BCA in UI/UX & AI/ML | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Computer Applications with specialization in UI/UX Design or AI/ML at Bangalore School of Design & Technology. Develop technical and creative skills for modern tech industry roles." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <StudentWorksGallery />
      <CustomFacultySection />
      <StudioSection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramBCA;
