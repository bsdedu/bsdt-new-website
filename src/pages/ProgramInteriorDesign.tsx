
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { ProjectCategoryTabs } from "@/components/program/interior-design/ProjectCategoryTabs";
import { HeroSection } from "@/components/program/interior-design/HeroSection";
import { ProgramOverviewSection } from "@/components/program/interior-design/ProgramOverviewSection";
import { CustomFacultySection } from "@/components/program/interior-design/CustomFacultySection";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";

const ProgramInteriorDesign = () => {
  return (
    <>
      <Helmet>
        <title>B.Sc Interior Design | BSDT</title>
        <meta name="description" content="Pursue a Bachelor of Science in Interior Design at Bangalore School of Design & Technology. Learn to create functional, aesthetic interior spaces for residential and commercial settings." />
      </Helmet>

      <Navbar />

      <HeroSection />
      <ProgramOverviewSection />
      
      <section className="py-16 bg-bsd-light-gray">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">STUDENT WORK</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Interior Design Student Projects
              </h2>
              <p className="mt-4 text-foreground/70">
                Explore the creative works of our Interior Design students, showcasing their skills in residential, commercial, and conceptual design.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <ProjectCategoryTabs />
          </RevealSection>
        </div>
      </section>
      
      <CustomFacultySection />
      <EnquiryFormSection />
      
      <Footer />
    </>
  );
};

export default ProgramInteriorDesign;
