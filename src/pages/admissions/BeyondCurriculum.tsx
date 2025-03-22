
import React from 'react';
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
        <WorkshopsSection />
        <GuestLecturesSection />
        <OffCampusSection />
        <SiteVisitsSection />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default BeyondCurriculum;
