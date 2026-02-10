
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { HeroSection } from "@/components/program/bca/HeroSection";
import { ProgramOverviewSection } from "@/components/program/bca/ProgramOverviewSection";

import { StudentLearningSection } from "@/components/program/StudentLearningSection";
import { SkillEnhancingElectivesSection } from "@/components/program/SkillEnhancingElectivesSection";

const ProgramBCA = () => {
  return (
    <>
      <Helmet>
        <title>BCA with UI/UX | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Computer Applications with specialization in UI/UX Design at Bangalore School of Design & Technology. Develop technical and creative skills for modern tech industry roles." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <StudentLearningSection />
      <SkillEnhancingElectivesSection programKey="bca-uiux" />
      <StudentWorksGallery
        title="BCA Student Projects"
        description="Explore the innovative projects created by our BCA students, showcasing their expertise in UI/UX design, AI/ML applications, and web development."
        category="uiux"
      />
      
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramBCA;
