
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';

const BeyondCurriculum = () => {
  return (
    <>
      <Helmet>
        <title>We Go Beyond Curriculum | BSDT</title>
        <meta name="description" content="Discover how BSDT goes beyond the standard curriculum." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-8">We Go Beyond Curriculum</h1>
            <div className="prose prose-lg max-w-none">
              <p>This page will highlight how BSDT goes beyond the standard curriculum in its programs.</p>
            </div>
          </div>
        </RevealSection>
      </main>
      
      <Footer />
    </>
  );
};

export default BeyondCurriculum;
