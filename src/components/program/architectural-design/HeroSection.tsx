
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Badge } from "@/components/ui/badge";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/84bf2665-5492-457f-8295-f739efb5d307.png')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <div>
              <Badge variant="bsdOrange" className="mb-4">4-YEAR FULL-TIME PROGRAM</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bsd-gray mb-6 leading-tight">
                B.Des in <span className="text-bsd-orange">Architectural Construction Design</span>
              </h1>
              <p className="text-lg text-foreground/70 mb-8 max-w-xl">
                Transform spaces through innovative architectural design. Develop skills in architectural visualization, construction technology, and sustainable design practices for creating functional and aesthetically pleasing environments.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <AnimatedButton href="/admissions/application-process" variant="default">
                  Apply Now
                </AnimatedButton>
                <AnimatedButton href="/admissions/schedule-visit" variant="outline">
                  Schedule a Visit
                </AnimatedButton>
              </div>
              
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-bsd-orange">4</h3>
                  <p className="text-sm text-foreground/70">Year Program</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-bsd-orange">60</h3>
                  <p className="text-sm text-foreground/70">Students Per Batch</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-bsd-orange">95%</h3>
                  <p className="text-sm text-foreground/70">Placement Rate</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-bsd-orange">20+</h3>
                  <p className="text-sm text-foreground/70">Industry Partners</p>
                </div>
              </div>
            </div>
          </RevealSection>
          
          <RevealSection delay={200}>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/public/lovable-uploads/97b89cbf-3490-4189-ab5a-1029c18072ef.png" 
                  alt="Architectural Design Student Working" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-bsd-orange/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bsd-gray">Industry-Oriented</h3>
                    <p className="text-sm text-foreground/70">Curriculum designed with input from leading architectural firms</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-bsd-orange/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bsd-gray">Modern Studios</h3>
                    <p className="text-sm text-foreground/70">State-of-the-art design labs and model-making facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
