import React, { useEffect, useRef } from 'react'; // Updated import
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BeyondCurriculumHero } from '@/components/beyond-curriculum/BeyondCurriculumHero';
import { BeyondCurriculumOverview } from '@/components/beyond-curriculum/BeyondCurriculumOverview';
import { DesignStudioSection } from '@/components/beyond-curriculum/DesignStudioSection';
import { WorkshopsSection } from '@/components/beyond-curriculum/WorkshopsSection';
import { GuestLecturesSection } from '@/components/beyond-curriculum/GuestLecturesSection';
import { OffCampusSection } from '@/components/beyond-curriculum/OffCampusSection';
import { SiteVisitsSection } from '@/components/beyond-curriculum/SiteVisitsSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const BeyondCurriculum = () => {
  const siteVisitsRef = useRef<HTMLDivElement>(null); // Ref for SiteVisitsSection

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const fromRedirect = searchParams.get("from");

    if (
      (fromRedirect === "design-studio-2" || 
       fromRedirect === "workshops" || 
       fromRedirect === "guest-lectures" || 
       fromRedirect === "off-campus-learning" || 
       fromRedirect === "site-visits") && // Added "site-visits" condition
      siteVisitsRef.current
    ) {
      siteVisitsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to SiteVisitsSection
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>We Go Beyond Curriculum | Bangalore School of Design & Technology</title>
        <meta name="description" content="Discover how BSDT goes beyond the standard curriculum by dedicating one day per week to skills development through design studios, workshops, guest lectures, off-campus learning, and site visits." />
      </Helmet>
      
      <Navbar />
      
      <main id="beyond-activities">
        <BeyondCurriculumHero />
        <BeyondCurriculumOverview />
        <DesignStudioSection />
        <div>
          <WorkshopsSection />
        </div>
        <GuestLecturesSection />
        <OffCampusSection />
        <div ref={siteVisitsRef}>
          <SiteVisitsSection /> {/* Attach the ref here */}
        </div>
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default BeyondCurriculum;
