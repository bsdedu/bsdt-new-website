
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';

const ApplicationProcess = () => {
  return (
    <>
      <Helmet>
        <title>Application Process | BSDT</title>
        <meta name="description" content="Learn about the application process at Bangalore School of Design & Technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-8">Application Process</h1>
            <div className="prose prose-lg max-w-none">
              <p>This page will contain detailed information about the application process at BSDT.</p>
            </div>
          </div>
        </RevealSection>
      </main>
      
      <Footer />
    </>
  );
};

export default ApplicationProcess;
