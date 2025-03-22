
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';

export const BeyondCurriculumHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pb-20 bg-bsd-light-gray overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bsd-orange/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-bsd-gray/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <RevealSection>
            <div className="space-y-6">
              <Badge variant="bsdOrange" className="mb-2">EXPERIENTIAL LEARNING</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray leading-tight">
                We Go Beyond Curriculum
              </h1>
              <p className="text-lg text-foreground/80">
                At BSDT, we dedicate one full day each week to activities beyond traditional academics. Our approach prioritizes skill development over pure academic performance, giving our graduates a significant edge in the professional world.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <AnimatedButton asChild>
                  <a href="#enquiry-form" className="hover:no-underline">Schedule a Visit</a>
                </AnimatedButton>
                <AnimatedButton variant="outline" asChild>
                  <a href="#beyond-activities" className="hover:no-underline">Explore Activities</a>
                </AnimatedButton>
              </div>
            </div>
          </RevealSection>

          <RevealSection direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <img 
                src="/lovable-uploads/95442d0d-92a2-407b-8bf3-691152ab5174.png" 
                alt="Students engaged in beyond curriculum activities" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium text-lg">Developing industry-ready skills through experiential learning opportunities</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
