
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { CourseFacultySection } from '@/components/faculty/CourseFacultySection';

const Faculty = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | BSDT</title>
        <meta name="description" content="Meet the team at Bangalore School of Design & Technology - experienced professionals who bring real-world expertise to design education." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <CourseFacultySection />
      </main>
      
      <Footer />
    </>
  );
};

export default Faculty;
