
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';

const FAQs = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | BSDT</title>
        <meta name="description" content="Frequently asked questions about Bangalore School of Design & Technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-8">Frequently Asked Questions</h1>
            <div className="prose prose-lg max-w-none">
              <p>This page will answer frequently asked questions about BSDT and its programs.</p>
            </div>
          </div>
        </RevealSection>
      </main>
      
      <Footer />
    </>
  );
};

export default FAQs;
