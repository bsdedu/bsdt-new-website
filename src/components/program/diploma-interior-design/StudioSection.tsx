
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const StudioSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="bsdOrange" className="mb-4">FLEXIBLE LEARNING</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-6">
                Online & Offline Learning Options
              </h2>
              <p className="text-foreground/70 mb-6">
                Choose how you want to learn. Our diploma program is available both in-person at our state-of-the-art campus facilities and through our comprehensive online learning platform.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-bsd-orange/10 p-2 rounded-lg mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Campus Experience</h3>
                    <p className="text-foreground/70">Access to design studios, material libraries, and hands-on workshops with direct faculty interaction.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-bsd-orange/10 p-2 rounded-lg mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Online Learning</h3>
                    <p className="text-foreground/70">Flexible schedule with live webinars, on-demand video lessons, and virtual design critiques from anywhere.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-bsd-orange/10 p-2 rounded-lg mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Industry Projects</h3>
                    <p className="text-foreground/70">Both learning modes include real client projects and industry collaborations to build your portfolio.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png" 
                  alt="Interior Design Studio" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold text-bsd-orange">1 Year</p>
                <p className="text-sm text-foreground/70">Full-time or part-time options</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
