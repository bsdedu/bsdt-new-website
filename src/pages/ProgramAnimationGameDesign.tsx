
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";

import { HeroSection } from "@/components/program/animation-game/HeroSection";
import { ProgramOverviewSection } from "@/components/program/animation-game/ProgramOverviewSection";
import { AnimationStudentLearningSection } from "@/components/program/animation-game/AnimationStudentLearningSection";
import { SkillEnhancingElectivesSection } from "@/components/program/SkillEnhancingElectivesSection";

const ProgramAnimationGameDesign = () => {
  return (
    <>
      <Helmet>
        <title>BVA Animation & Game Art | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Visual Arts in Animation & Game Art at Bangalore School of Design & Technology. Master 2D/3D animation, game development, and interactive storytelling." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      <AnimationStudentLearningSection />
      <SkillEnhancingElectivesSection programKey="bva-animation-game-design" />
      <StudentWorksGallery
        title="Animation & Game Art Student Projects"
        description="Explore the creative works of our Animation & Game Art students, showcasing their skills in 2D/3D animation, game development, and character design."
        category="animation"
      />
      
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramAnimationGameDesign;
