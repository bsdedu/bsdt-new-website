
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';

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
            <div className="prose prose-lg max-w-none">
              <p>This page will showcase the faculty members at BSDT.</p>
            </div>
          </div>
        </RevealSection>
      </main>
      
      <Footer />
    </>
  );
};

export default Faculty;
