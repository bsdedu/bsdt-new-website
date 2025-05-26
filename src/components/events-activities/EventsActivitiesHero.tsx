
import React from 'react';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';

export const EventsActivitiesHero: React.FC = () => {
  return (
    <section className="relative bg-white text-bsd-gray pt-20 md:pt-28 pb-16 md:pb-20">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Events & Activities at BSD
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
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
              className="border-bsd-gray text-bsd-gray hover:bg-bsd-gray/10"
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
