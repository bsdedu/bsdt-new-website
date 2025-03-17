
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { HeroSection } from "@/components/program/animation-game/HeroSection";
import { ProgramOverviewSection } from "@/components/program/animation-game/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/animation-game/CustomFacultySection";
import { StudioSection } from "@/components/program/animation-game/StudioSection";

const ProgramAnimationGameDesign = () => {
  return (
    <>
      <Helmet>
        <title>BVA Animation & Game Design | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Visual Arts in Animation & Game Design at Bangalore School of Design & Technology. Master 2D/3D animation, game development, and interactive storytelling." />
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

export default ProgramAnimationGameDesign;
