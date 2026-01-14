import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/program/product-design/HeroSection';
import { ProgramOverviewSection } from '@/components/program/product-design/ProgramOverviewSection';
import { CustomFacultySection } from '@/components/program/interior-spatial/CustomFacultySection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const ProgramProductDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>BVA Product Design Program | BSD Design School</title>
        <meta 
          name="description" 
          content="Shape the future of everyday objects through innovative product design. Master user-centered design, prototyping, and sustainable manufacturing at BSD Design School." 
        />
        <meta name="keywords" content="product design, BVA product design, industrial design, product development, design thinking, prototyping, user experience, BSD Design School" />
        <link rel="canonical" href="/academics/bva-product-design" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <CustomFacultySection />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default ProgramProductDesign;