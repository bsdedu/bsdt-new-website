
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';

export const StudioHero: React.FC = () => {
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
              <Badge variant="bsdOrange" className="mb-2">THE CREATIVE POWERHOUSE</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray leading-tight">
                Studio BSD: Where Education Meets Professional Experience
              </h1>
              <p className="text-lg text-foreground/80">
                A professional design studio nestled within our campus that offers students hands-on industry experience, mentorship from professionals, and opportunities to work on real-world projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <AnimatedButton asChild>
                  <a href="#enquiry-form" className="hover:no-underline">Schedule a Visit</a>
                </AnimatedButton>
                <AnimatedButton variant="outline" asChild>
                  <a href="#studio-projects" className="hover:no-underline">View Projects</a>
                </AnimatedButton>
              </div>
            </div>
          </RevealSection>

          <RevealSection direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <img 
                src="/lovable-uploads/60503a43-efdf-4b52-b5eb-9820520a9f2c.png" 
                alt="Studio BSD Workspace" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium text-lg">A professional-grade studio environment that prepares students for industry success</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
