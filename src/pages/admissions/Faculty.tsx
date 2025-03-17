
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { FacultySection } from '@/components/program/FacultySection';

const Faculty = () => {
  return (
    <>
      <Helmet>
        <title>Faculty | BSDT</title>
        <meta name="description" content="Meet the faculty at Bangalore School of Design & Technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-8">Faculty</h1>
            <div className="prose prose-lg max-w-none mb-12">
              <p>Our distinguished faculty members bring a wealth of industry experience and academic excellence to BSDT. They are passionate about nurturing the next generation of design professionals through mentorship, guidance, and practical training.</p>
            </div>
          </div>
        </RevealSection>
        
        <FacultySection />
      </main>
      
      <Footer />
    </>
  );
};

export default Faculty;
