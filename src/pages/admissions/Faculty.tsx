
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { EnhancedFacultySection } from '@/components/faculty/EnhancedFacultySection';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
        
        <RevealSection delay={100}>
          <div className="container mx-auto px-6 mb-16">
            <div className="bg-bsd-light-gray/50 rounded-xl p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="department-info">
                  <AccordionTrigger className="text-xl font-semibold text-bsd-gray">Faculty Departments</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="font-bold text-bsd-orange">Design</h3>
                        <p className="mt-2 text-sm text-foreground/70">Expert faculty in various design disciplines including graphic design, UI/UX, interior design, and animation.</p>
                      </div>
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="font-bold text-bsd-orange">Technology</h3>
                        <p className="mt-2 text-sm text-foreground/70">Specialists in computer science, data analytics, cybersecurity and software development.</p>
                      </div>
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="font-bold text-bsd-orange">International Faculty</h3>
                        <p className="mt-2 text-sm text-foreground/70">Distinguished educators from around the world who bring global perspectives and expertise.</p>
                      </div>
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="font-bold text-bsd-orange">Guest Faculty</h3>
                        <p className="mt-2 text-sm text-foreground/70">Industry professionals who visit as guest lecturers, workshop conductors, and mentors.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
