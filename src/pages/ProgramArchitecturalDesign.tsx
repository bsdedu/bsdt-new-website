
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { EnquiryFormSection } from "../components/home/EnquiryFormSection";
import { StudentWorksGallery } from "../components/program/StudentWorksGallery";
import { HeroSection } from "../components/program/architectural-design/HeroSection";
import { ProgramOverviewSection } from "../components/program/architectural-design/ProgramOverviewSection";
import { CustomFacultySection } from "../components/program/architectural-design/CustomFacultySection";
import { StudioSection } from "../components/program/architectural-design/StudioSection";

const ProgramArchitecturalDesign = () => {
  return (
    <>
      <Helmet>
        <title>B.Des Architectural Design | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Design in Architectural Design at Bangalore School of Design & Technology. Learn sustainable design, construction technology, and architectural innovation." />
        <meta name="keywords" content="architectural design course, B.Des architecture, sustainable design, construction technology, BSDT" />
        <meta property="og:title" content="B.Des Architectural Design | BSDT" />
        <meta property="og:description" content="Pursue a Bachelor of Design in Architectural Design at Bangalore School of Design & Technology. Learn sustainable design, construction technology, and architectural innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsdt.ac.in/academics/b-des-architectural-design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B.Des Architectural Design | BSDT" />
        <meta name="twitter:description" content="Pursue a Bachelor of Design in Architectural Design at Bangalore School of Design & Technology. Learn sustainable design, construction technology, and architectural innovation." />
        <link rel="canonical" href="https://bsdt.ac.in/academics/b-des-architectural-design" />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <StudentWorksGallery 
        title="Architectural Design Student Projects"
        description="Explore the innovative architectural works of our students, showcasing their skills in sustainable design, space planning, and construction technology."
        category="architecture"
      />
      <CustomFacultySection />
      <StudioSection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramArchitecturalDesign;
