
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { EnhancedFacultySection } from '@/components/faculty/EnhancedFacultySection';

const Faculty = () => {
  return (
    <>
      <Helmet>
        <title>Faculty | BSDT</title>
        <meta name="description" content="Meet the faculty at Bangalore School of Design & Technology - experienced professionals who bring real-world expertise to design education." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <EnhancedFacultySection />
      </main>
      
      <Footer />
    </>
  );
};

export default Faculty;
