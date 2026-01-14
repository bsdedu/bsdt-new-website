
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { HeroSection } from "@/components/program/bsc-cs/HeroSection";
import { ProgramOverviewSection } from "@/components/program/bsc-cs/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/bsc-cs/CustomFacultySection";

const ProgramBScCS = () => {
  return (
    <>
      <Helmet>
        <title>BCA with Data Analytics & Cyber Security | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Computer Applications (BCA) with specialization in Data Analytics & Cyber Security at Bangalore School of Design & Technology. Master application development, data analysis, and cybersecurity for emerging tech careers." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <CustomFacultySection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramBScCS;
