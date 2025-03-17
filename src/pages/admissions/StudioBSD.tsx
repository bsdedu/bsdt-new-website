
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';

const StudioBSD = () => {
  return (
    <>
      <Helmet>
        <title>Studio BSD | BSDT</title>
        <meta name="description" content="Explore Studio BSD at Bangalore School of Design & Technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-8">Studio BSD</h1>
            <div className="prose prose-lg max-w-none">
              <p>This page will showcase Studio BSD and its work.</p>
            </div>
          </div>
        </RevealSection>
      </main>
      
      <Footer />
    </>
  );
};

export default StudioBSD;
