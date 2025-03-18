
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-bsd-light-gray overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bsd-light-gray"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <RevealSection>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <Badge variant="bsdOrange" className="mb-4">BACHELOR OF DESIGN</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bsd-gray mb-6">
                Interior & Spatial Design
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8">
                Learn to create functional, aesthetic interior spaces for residential and commercial settings with a keen understanding of spatial relationships, materials, and sustainable practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <AnimatedButton href="/admissions/application-process" variant="default">
                  Apply Now
                </AnimatedButton>
                <AnimatedButton href="/admissions/schedule-visit" variant="outline">
                  Schedule a Visit
                </AnimatedButton>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img
                src="/lovable-uploads/0d8d1a0c-c39b-4ddf-baa2-5736fc824c3d.png"
                alt="Interior Design Studio"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-sm font-semibold text-bsd-gray">4 Year Full-Time Program</p>
                <p className="text-sm text-foreground/70">Bangalore Campus</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
