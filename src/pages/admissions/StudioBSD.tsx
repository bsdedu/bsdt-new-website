
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { StudioHero } from '@/components/studio/StudioHero';
import { StudioOverview } from '@/components/studio/StudioOverview';
import { StudioFacilities } from '@/components/studio/StudioFacilities';
import { StudioProjects } from '@/components/studio/StudioProjects';
import { StudioTestimonials } from '@/components/studio/StudioTestimonials';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const StudioBSD = () => {
  return (
    <>
      <Helmet>
        <title>Studio BSD | Bangalore School of Design & Technology</title>
        <meta name="description" content="Explore Studio BSD - a state-of-the-art professional design studio nestled inside our campus that provides students with real-world industry experience and professional growth opportunities." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <StudioHero />
        <StudioOverview />
        <StudioFacilities />
        <StudioProjects />
        <StudioTestimonials />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default StudioBSD;
