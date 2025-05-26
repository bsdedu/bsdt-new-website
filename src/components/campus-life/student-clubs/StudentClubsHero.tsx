
import React from 'react';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';

export const StudentClubsHero: React.FC = () => {
  return (
    <section className="relative bg-white text-bsd-gray pt-20 md:pt-28 pb-16 md:pb-20">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Student Clubs at BSD
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Explore our vibrant community of student-led clubs that provide opportunities for growth, 
            leadership, and creative expression beyond the classroom.
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
              href="#clubs-list" 
              variant="outline" 
              className="border-bsd-gray text-bsd-gray hover:bg-bsd-gray/10"
              hoverEffect="scale"
            >
              Explore Clubs
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};
