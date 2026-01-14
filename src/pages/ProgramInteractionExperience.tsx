
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { HeroSection } from "@/components/program/interaction-experience/HeroSection";
import { ProgramOverviewSection } from "@/components/program/interaction-experience/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/interaction-experience/CustomFacultySection";
import { StudioSection } from "@/components/program/interaction-experience/StudioSection";
import { StudentLearningSection } from "@/components/program/StudentLearningSection";

const ProgramInteractionExperience = () => {
  return (
    <>
      <Helmet>
        <title>B.Des Interaction & Experience Design | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Design in Interaction & Experience Design at Bangalore School of Design & Technology. Master UI/UX, design thinking, and create intuitive digital experiences." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <StudentLearningSection />
      <StudentWorksGallery
        title="Interaction & Experience Design Student Projects"
        description="Explore the innovative works of our Interaction & Experience Design students, showcasing their skills in UX research, UI design, and interactive prototyping."
        category="ux"
      />
      <CustomFacultySection />
      <StudioSection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramInteractionExperience;
