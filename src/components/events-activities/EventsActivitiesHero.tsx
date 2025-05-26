
import React from 'react';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';

export const EventsActivitiesHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-bsd-gray to-bsd-gray/90 text-white py-20">
      <div className="absolute inset-0 opacity-30 bg-[url(/lovable-uploads/7ac4f67b-92cc-42db-832a-c85d36f5b39c.png)] bg-cover bg-center mix-blend-multiply"></div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Events & Activities at BSD
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Immerse yourself in a vibrant campus life filled with creative workshops, 
            design competitions, industry talks, and cultural events that shape your artistic journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              href="https://apply.bsd.edu.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
            >
              Apply Now
            </AnimatedButton>
            <AnimatedButton 
              href="#upcoming-events" 
              variant="outline" 
              className="bg-white/10 text-white border-white hover:bg-white/20"
              hoverEffect="scale"
            >
              View Upcoming Events
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};
