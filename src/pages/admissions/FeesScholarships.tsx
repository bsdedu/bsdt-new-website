
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { FeesTable } from '@/components/admissions/fees/FeesTable';
import { AdditionalFeesInfo } from '@/components/admissions/fees/AdditionalFeesInfo';
import { ScholarshipInfo } from '@/components/admissions/fees/ScholarshipInfo';
import { Separator } from '@/components/ui/separator';

const FeesScholarships = () => {
  return (
    <>
      <Helmet>
        <title>Fees & Scholarships | BSDT</title>
        <meta name="description" content="Detailed information about program fees, payment schedules, and scholarship opportunities at Bangalore School of Design & Technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center mt-8 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-4">Fees & Scholarships</h1>
              <p className="text-lg text-foreground/70">
                Comprehensive details on program fees, payment structures, and scholarship opportunities 
                for the academic year 2025-2026.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <FeesTable />
          </RevealSection>
          
          <Separator className="my-12" />
          
          <RevealSection delay={200}>
            <AdditionalFeesInfo />
          </RevealSection>
          
          <Separator className="my-12" />
          
          <RevealSection delay={300}>
            <ScholarshipInfo />
          </RevealSection>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default FeesScholarships;
