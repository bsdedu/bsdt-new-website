
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StudentExperienceHero } from '@/components/student-experience/StudentExperienceHero';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';
import { GallerySection } from '@/components/home/GallerySection';
import { AboutSection } from '@/components/home/AboutSection';

const StudentExperience: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Experience | BSD Design School</title>
        <meta 
          name="description" 
          content="Discover the exceptional student experience at BSD Design School. Learn why we're shaping creative leaders for tomorrow and hear from our students." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <StudentExperienceHero />
        <GallerySection />
        <AboutSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default StudentExperience;
