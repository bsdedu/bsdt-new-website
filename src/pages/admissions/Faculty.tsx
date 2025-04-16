
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { EnhancedFacultySection } from '@/components/faculty/EnhancedFacultySection';
import { Badge } from '@/components/ui/badge';

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
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">OUR EDUCATORS</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray mb-6">Expert Faculty Team</h1>
              <p className="text-lg text-foreground/70">
                Our distinguished faculty members bring a wealth of industry experience and academic excellence to BSDT. They are passionate about nurturing the next generation of design and technology professionals through mentorship, guidance, and practical training.
              </p>
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
