
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { HeroSection } from "@/components/program/bsc-cs/HeroSection";
import { ProgramOverviewSection } from "@/components/program/bsc-cs/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/bsc-cs/CustomFacultySection";
import { StudioSection } from "@/components/program/bsc-cs/StudioSection";

const ProgramBScCS = () => {
  return (
    <>
      <Helmet>
        <title>B.Sc Computer Science with Data Analytics & Cyber Security | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Science in Computer Science with specialization in Data Analytics or Cyber Security at Bangalore School of Design & Technology. Master programming, data analysis, and cybersecurity concepts for tomorrow's tech challenges." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <CustomFacultySection />
      <StudioSection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramBScCS;
