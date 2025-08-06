import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FutureSchoolHero } from '@/components/future-school/FutureSchoolHero';
import { FutureSchoolPrograms } from '@/components/future-school/FutureSchoolPrograms';
import { WhyUpskillingSection } from '@/components/future-school/WhyUpskillingSection';
import { FutureSchoolVision } from '@/components/future-school/FutureSchoolVision';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const FutureSchool: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Futr School - Master the Futr of Design & Tech | BSD Design School</title>
        <meta 
          name="description" 
          content="Join India's fastest-growing design & technology bootcamp. Learn from industry experts, build real projects, and land your dream job with our live interactive online programs." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <FutureSchoolHero />
        <FutureSchoolVision />
        <WhyUpskillingSection />
        <FutureSchoolPrograms />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default FutureSchool;