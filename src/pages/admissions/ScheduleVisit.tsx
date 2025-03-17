
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';

const ScheduleVisit = () => {
  return (
    <>
      <Helmet>
        <title>Schedule a Campus Visit | BSDT</title>
        <meta name="description" content="Schedule a campus visit at Bangalore School of Design & Technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-8">Schedule a Campus Visit</h1>
            <div className="prose prose-lg max-w-none">
              <p>This page will allow prospective students to schedule a visit to the BSDT campus.</p>
            </div>
          </div>
        </RevealSection>
      </main>
      
      <Footer />
    </>
  );
};

export default ScheduleVisit;
