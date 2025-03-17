
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
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-8">Our Faculty</h1>
            <div className="prose prose-lg max-w-none mb-12">
              <p>Our distinguished faculty members bring a wealth of industry experience and academic excellence to BSDT. They are passionate about nurturing the next generation of design and technology professionals through mentorship, guidance, and practical training.</p>
            </div>
          </div>
        </RevealSection>
        
        <EnhancedFacultySection />
      </main>
      
      <Footer />
    </>
  );
};

export default Faculty;
