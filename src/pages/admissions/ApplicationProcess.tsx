
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { AdmissionTimeline } from '@/components/admissions/AdmissionTimeline';
import { EligibilityCriteria } from '@/components/admissions/EligibilityCriteria';
import { ApplicationSteps } from '@/components/admissions/ApplicationSteps';
import { SelectionProcess } from '@/components/admissions/SelectionProcess';
import { ExplorePrograms } from '@/components/admissions/ExplorePrograms';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileTextIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationProcess = () => {
  return (
    <>
      <Helmet>
        <title>Application Process | BSDT</title>
        <meta name="description" content="Learn about the application and admission process at Bangalore School of Design & Technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="bsdOrange" className="mb-4">ADMISSIONS 2024</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-4">Application Process</h1>
              <p className="text-lg text-foreground/70">
                Your step-by-step guide to joining Bangalore School of Design & Technology's innovative programs.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-bsd-orange/20 to-transparent"></div>
            </div>
            
            <EligibilityCriteria />
            
            <div className="my-16">
              <RevealSection delay={100}>
                <h2 className="text-3xl font-bold text-bsd-gray mb-8 text-center">Application Process</h2>
                <ApplicationSteps />
              </RevealSection>
            </div>
            
            <div className="my-16">
              <RevealSection delay={200}>
                <h2 className="text-3xl font-bold text-bsd-gray mb-8 text-center">Admission Timeline</h2>
                <AdmissionTimeline />
              </RevealSection>
            </div>
            
            <div className="my-16">
              <RevealSection delay={300}>
                <h2 className="text-3xl font-bold text-bsd-gray mb-8 text-center">Selection Process</h2>
                <SelectionProcess />
              </RevealSection>
            </div>
            
            <div className="my-16">
              <RevealSection delay={400}>
                <div className="bg-bsd-light-gray rounded-2xl p-8 border border-border/20">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-bsd-gray mb-3">Ready to Begin Your Journey?</h3>
                      <p className="text-foreground/70 mb-4">Start your application process today and take the first step toward your creative future.</p>
                      <div className="flex flex-wrap gap-4">
                        <a href="https://www.apply.bsd.edu.in/" target="_blank" rel="noopener noreferrer">
                          <Button size="lg" className="bg-bsd-orange text-white hover:bg-bsd-orange/90">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                        <Link to="/admissions/fees-scholarships">
                          <Button size="lg" variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                            View Fees & Scholarships
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex-none">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                        <FileTextIcon className="h-12 w-12 text-bsd-orange" />
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
            
            <div className="my-16">
              <RevealSection delay={500}>
                <h2 className="text-3xl font-bold text-bsd-gray mb-8 text-center">Explore Our Programs</h2>
                <ExplorePrograms />
              </RevealSection>
            </div>
          </div>
        </RevealSection>
      </main>
      
      <Footer />
    </>
  );
};

export default ApplicationProcess;
